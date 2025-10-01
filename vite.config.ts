import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {},
		},
		devSourcemap: true,
	},
	optimizeDeps: {
		esbuildOptions: {
			target: "es2022",
		},
	},
	plugins: [
		tsconfigPaths({root: "./"}),
		react({
			babel: {
				parserOpts: {
					plugins: ["classProperties"],
				},
				plugins: [
					[
						"babel-plugin-styled-components",
						{
							displayName: true,
							fileName: false,
						},
					],
				],
			},
		}),
	],
});
