import type {Material} from "three";
import {BoxGeometry, Mesh, MeshPhongMaterial, Vector2} from "three";
import {Line2 as Line} from "three/examples/jsm/lines/Line2.js";
import {LineGeometry} from "three/examples/jsm/lines/LineGeometry.js";
import {LineMaterial} from "three/examples/jsm/lines/LineMaterial.js";
import {ColorUtils} from "../../utils/ColorUtils";
import {ThreeUtils} from "../../utils/ThreeUtils";
import {Task} from "./Task";

const domElementClassName = "drawingCursor";
const boxGeometry = new BoxGeometry(0.5, 0.5, 0.5);

interface IShapeObject {
	points: Vector2[];
	line: Line;
	box: Mesh;
}
export class DrawingTask extends Task {
	private readonly _shapeObjects: IShapeObject[] = [];
	private _isDrawing: boolean = false;
	private _isEnabled: boolean = false;
	private _shouldExtendLastLine: boolean = false;
	private _lastCursorPosition: Vector2 | null = null;

	private calculateMidPointOfLine(points: Vector2[]): Vector2 {
		if (points.length === 0) {
			return new Vector2(0, 0);
		}

		if (points.length % 2 === 1) {
			return points[(points.length - 1) / 2];
		} else {
			const midPoint1 = points[points.length / 2 - 1];
			const midPoint2 = points[points.length / 2];

			return new Vector2((midPoint1.x + midPoint2.x) / 2, (midPoint1.y + midPoint2.y) / 2);
		}
	}

	private readonly onPointerDown = (event: PointerEvent) => {
		if (!this._isDrawing) {
			this._isDrawing = true;

			const worldCoord = ThreeUtils.domCoordinatesToWorldCoordinates(
				event.clientX,
				event.clientY,
				0,
				this._sceneManager!.domElement,
				this._sceneManager!.camera,
			);
			const points = [new Vector2(worldCoord!.x, worldCoord!.y)];
			const geometry = new LineGeometry();
			geometry.setFromPoints(points);

			const newRandomColor = ColorUtils.getRandomColor();
			const material = new LineMaterial({color: newRandomColor});
			const line = new Line(geometry, material);

			this._sceneManager!.scene.add(line);

			const midPoint = this.calculateMidPointOfLine(points);
			const box = new Mesh(boxGeometry, new MeshPhongMaterial({color: newRandomColor}));
			box.position.setX(midPoint.x);
			box.position.setY(midPoint.y);

			const shapeObject: IShapeObject = {
				points,
				line,
				box: box,
			};

			this._sceneManager!.scene.add(box);

			this._shapeObjects.push(shapeObject);
			this._sceneManager!.needsRender = true;
		}
	};

	private readonly onPointerMove = (event: PointerEvent) => {
		if (this._isDrawing) {
			const worldCoord = ThreeUtils.domCoordinatesToWorldCoordinates(
				event.clientX,
				event.clientY,
				0,
				this._sceneManager!.domElement,
				this._sceneManager!.camera,
			);

			if (this._lastCursorPosition?.x !== worldCoord!.x || this._lastCursorPosition.y !== worldCoord!.y) {
				this._lastCursorPosition = new Vector2(worldCoord!.x, worldCoord!.y);
				this._shouldExtendLastLine = true;
			}
		}
	};

	private readonly onPointerUp = (event: PointerEvent) => {
		if (this._isDrawing) {
			this._isDrawing = false;
			this._lastCursorPosition = null;
			this._shouldExtendLastLine = false;
		}
	};

	private addEventListeners() {
		this._sceneManager!.domElement.addEventListener("pointerdown", this.onPointerDown);
		this._sceneManager!.domElement.addEventListener("pointermove", this.onPointerMove);
		this._sceneManager!.domElement.addEventListener("pointerup", this.onPointerUp);
	}

	private removeEventListeners() {
		this._sceneManager!.domElement.removeEventListener("pointerdown", this.onPointerDown);
		this._sceneManager!.domElement.removeEventListener("pointermove", this.onPointerMove);
		this._sceneManager!.domElement.removeEventListener("pointerup", this.onPointerUp);
	}

	public update(deltaTime: number): void {
		if (this._isDrawing && this._shouldExtendLastLine) {
			this._shouldExtendLastLine = false;
			const currentShapeObject = this._shapeObjects[this._shapeObjects.length - 1];
			if (currentShapeObject) {
				const points = currentShapeObject.points;
				points.push(this._lastCursorPosition!);

				const midPoint = this.calculateMidPointOfLine(points);
				currentShapeObject.box.position.setX(midPoint.x);
				currentShapeObject.box.position.setY(midPoint.y);

				currentShapeObject.line.geometry.dispose();
				currentShapeObject.line.geometry = new LineGeometry();
				currentShapeObject.line.geometry.setFromPoints(points);

				this._sceneManager!.needsRender = true;
			}
		}
	}

	public enable(): void {
		if (!this._isEnabled) {
			this._sceneManager?.domElement.classList.add(domElementClassName);
			this._isEnabled = true;
			this._sceneManager!.controls.deactivate();
			this.addEventListeners();
			this._sceneManager!.camera.position.set(0, 0, 10);
			this._sceneManager!.camera.lookAt(0, 0, 0);

			this._sceneManager!.needsRender = true;
		}
	}

	public disable(): void {
		if (this._isEnabled) {
			this._sceneManager?.domElement.classList.remove(domElementClassName);
			this.removeEventListeners();
			for (const shapeObject of this._shapeObjects) {
				this._sceneManager!.scene.remove(shapeObject.line);
				this._sceneManager!.scene.remove(shapeObject.box);
				shapeObject.line.geometry.dispose();
				(shapeObject.line.material as Material).dispose();
			}

			this._shapeObjects.length = 0;
			this._isEnabled = false;
		}
	}
}
