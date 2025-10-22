import {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {SceneManager} from "./view/SceneManager";
import type {Task} from "./view/tasks/Task";
import {tasks} from "./view/tasks/Tasks";

interface IAppProps {
	readonly rootElement: HTMLElement;
}

export const App = (props: IAppProps) => {
	const {rootElement} = props;
	const sceneManager = useRef<SceneManager>(null);
	const [activeTask, setActiveTask] = useState<Task>(tasks[0]);

	useEffect(() => {
		sceneManager.current = new SceneManager(rootElement);
		sceneManager.current.init();
	}, [rootElement]);

	useEffect(() => {
		if (sceneManager.current) {
			const activeTaskIndex = tasks.indexOf(activeTask);
			sceneManager.current.switchToTask(activeTask);
			console.log(`Switched to task ${activeTaskIndex + 1}`);
		}
	}, [activeTask]);

	return (
		<TaskButtonContainer>
			<ButtonWrapper>
				{tasks.map((task, index: number) => (
					<button
						key={task.name}
						className={task === activeTask ? "active" : ""}
						onMouseDown={() => setActiveTask(task)}
						onTouchStart={() => setActiveTask(task)}
					>
						Task {index + 1}
					</button>
				))}
			</ButtonWrapper>
		</TaskButtonContainer>
	);
};

const ButtonWrapper = styled.div`
	display: flex;
	gap: 8px;

	button {
		cursor: pointer;
		background-color: #3a75ff;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		border: none;
		box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.25);
		&:hover {
			background-color: #335fcc;
		}

		&.active {
			background-color: #254a99;
		}
	}
`;

const TaskButtonContainer = styled.div`
	position: absolute;
	top: 16px;
	width: 100%;
	display: flex;
	justify-content: center;
`;
