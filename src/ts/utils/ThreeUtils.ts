import type {OrthographicCamera, PerspectiveCamera} from "three";
import {Raycaster, Vector2, Vector3} from "three";

interface IVec2 {
	x: number;
	y: number;
}

interface IVec3 extends IVec2 {
	z: number;
}

export class ThreeUtils {
	private static readonly tempV2 = new Vector2();
	private static readonly _raycaster = new Raycaster();
	private static readonly _plane = {
		q: new Vector3(0, 0, 0), // A point on the surface of the plane
		n: new Vector3(0, 0, 1), // The normal vector of the plane
	};

	/**
	 * return values are between -1 and 1
	 */
	public static domCoordinatesToNDC(x: number, y: number, domElement: HTMLElement) {
		return {
			x: (x / domElement.offsetWidth - 0.5) * 2,
			y: -(y / domElement.offsetHeight - 0.5) * 2 /** y values are flipped when we compare html coordinates with 3d coordinates */,
		};
	}

	public static domCoordinatesToWorldCoordinates(
		x: number,
		y: number,
		worldZ: number,
		domElement: HTMLElement,
		camera: OrthographicCamera | PerspectiveCamera,
	): IVec3 | null {
		const NDC = ThreeUtils.domCoordinatesToNDC(x, y, domElement);

		return ThreeUtils.NDCtoWorldCoordinates(NDC.x, NDC.y, worldZ, camera);
	}

	public static NDCtoWorldCoordinates(x: number, y: number, worldZ: number, camera: OrthographicCamera | PerspectiveCamera): IVec3 | null {
		/**
		 * See the intersectPlane function here: http://vargapeter.info/thesis.pdf
		 * */
		this.tempV2.set(x, y);
		ThreeUtils._raycaster.setFromCamera(this.tempV2, camera);
		const ray = ThreeUtils._raycaster.ray;

		const plane = ThreeUtils._plane;

		plane.q.setZ(worldZ);
		const t = plane.n.dot(plane.q.clone().sub(ray.origin)) / plane.n.dot(ray.direction);

		if (t < 0) {
			return null;
		}

		const hitPoint = ray.origin.add(ray.direction.multiplyScalar(t));

		return {
			x: hitPoint.x,
			y: hitPoint.y,
			z: worldZ,
		};
	}
}
