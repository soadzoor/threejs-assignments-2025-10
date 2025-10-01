import {DoubleSide, FrontSide, Mesh, PlaneGeometry, Vector3} from "three";
import {Task} from "./Task";
import type {SceneManager} from "../SceneManager";
import {WaveMaterial} from "./WaveMaterial";

export class WaveTask extends Task {
	private readonly _plane = new Mesh(new PlaneGeometry(8, 8, 64, 64), new WaveMaterial(0x0099ee, DoubleSide));

	public override init(sceneManager: SceneManager): void {
		super.init(sceneManager);
		this._plane.material.uniforms.lightPosition = {value: new Vector3(1, 5, -1)};
		this._plane.lookAt(new Vector3(0, 1, 0));
	}

	public update(deltaTime: number, elapsedTime: number): void {
		this._plane.material.uniforms.time = {value: elapsedTime / 1000};
		this._plane.material.uniforms.viewPosition = {value: this._sceneManager!.camera.position};
		this._sceneManager!.needsRender = true;
	}

	public enable(): void {
		
		this._sceneManager!.scene.add(this._plane);
	}

	public disable(): void {
		this._sceneManager!.scene.remove(this._plane);
	}
}
