import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	//base: "https://github.com/Kovalchuk-Alexandr/Hutly.git", // Замените на реальное имя репозитория
	// Или используйте:
	//base: "./", // Универсальные относительные пути
	build: {
		outDir: "docs", // Папка для сборки
		assetsDir: "assets",
		rollupOptions: {
			output: {
				// Убираем хэши из имен файлов для более простых путей (опционально)
				assetFileNames: "assets/[name].[ext]",
				chunkFileNames: "assets/[name].js",
				entryFileNames: "assets/[name].js",
			},
		},
	},
});
