import type {SceneManager} from "../SceneManager";

export abstract class Task {
	public readonly name: string = "Task";

	constructor(name: string) {
		this.name = name;
	}

	protected _sceneManager: SceneManager | null = null;

	public init(sceneManager: SceneManager): void {
		this._sceneManager = sceneManager;
	};

	public abstract update(deltaTime: number, elapsedTime: number): void;
	public abstract enable(): void;
	public abstract disable(): void;
}
