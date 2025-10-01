import * as ReactDOM from "react-dom/client";
import {App} from "./App";

const rootElement = document.getElementById("playGround")!;
const root = ReactDOM.createRoot(rootElement);

root.render(<App rootElement={rootElement} />);
