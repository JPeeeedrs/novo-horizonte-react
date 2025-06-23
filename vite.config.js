import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	server: {
		port: 5173,
		cors: true, // Libera todos os CORS para teste
	},
	build: {
		outDir: "dist",
	},
	base: "/",
	// 👇 importante
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
