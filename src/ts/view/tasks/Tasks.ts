import {CubeTask} from "./CubeTask";
import {DrawingTask} from "./DrawingTask";
import type {Task} from "./Task";
import {WaveTask} from "./WaveTask";

export const tasks: Task[] = [new CubeTask("Cube"), new WaveTask("Wave"), new DrawingTask("Drawing")];
