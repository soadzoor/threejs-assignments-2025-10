import {BoxGeometry, Mesh, MeshPhongMaterial} from "three";
import {Task} from "./Task";

export class CubeTask extends Task {
	private readonly _cube: Mesh = new Mesh(new BoxGeometry(2, 2, 2), new MeshPhongMaterial({color: 0xff0000}));

	public update(deltaTime: number): void {
		this._cube.rotation.x += (deltaTime / 1000) * Math.PI * 0.1;
		this._cube.rotation.y += (deltaTime / 1000) * Math.PI * 0.2;

		this._sceneManager!.needsRender = true;
	}

	public enable(): void {
		this._sceneManager!.controls.activate();
		this._sceneManager!.scene.add(this._cube);
	}

	public disable(): void {
		this._sceneManager!.scene.remove(this._cube);
	}
}
