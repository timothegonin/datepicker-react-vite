import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { defineConfig } from "vite";
export default defineConfig(function () { return ({
    plugins: [
        react(),
        dts({
            exclude: ["**/*.stories.ts", "**/*.test.ts"],
        }),
    ],
    build: {
        lib: {
            entry: './src/index.ts',
            name: "ui",
            fileName: function (format) { return "ui.".concat(format, ".js"); },
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            external: Object.keys(peerDependencies),
            output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } }
        }
    },
}); });
