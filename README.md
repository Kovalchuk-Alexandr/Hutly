# Hutly. Верстаем главную сайта агентства недвижимости сразу в React с Cursor AI.

- Классический (HTML, CSS, JS). Каталог "static"
- BackEnd PHP. Каталог: "php"
- API. Каталог: "api"
- Frontend - React + API. Каталог:

## Заметки по установке

[Официальный сайт: `https://reactjs.org/`](https://reactjs.org/)

### Установка React

***Установка React***

   `npm create vite@latest`
   опции:
    -- React
    -- JavaScript

   или, полная запись:
   `npm create vite@latest blog -- --template react`, где:
    -- blog - каталог установки,
    -- react - фреймворк с шаблоном

***Переход в каталог с проектом***
  `cd Hutly`

***Установка модулей***
  `npm install`

***Запуск проекта***
   `npm run dev`

```bash
  ?  Local:   http://localhost:5173/
  ?  Network: use --host to expose
  ?  press h + enter to show help
```

***Роутер react-router-dom***
    `npm i react-router-dom`

## Структура директорий проекта

-   `/api` - Директория с API и бэкенд-логикой
-   `/public/data/covers` - Директория для загруженных файлов, изображений для блога
-   `/vite-react` - Директория с React-приложением на Vite
-   `/vite-react/dist` - Сборка react проекта

**Файлы из `/vite-react/dist` скопированы в корень домена**

-   `index.html` - Главная страница приложения
-   `style.css` - Основные стили приложения
-   `vite.svg` - Логотип Vite
-   `favicon.ico` - Иконка сайта
-   `/assets` - Статические ресурсы (изображения, шрифты и т.д.)

## Описание

Проект представляет собой веб-приложение с разделением на фронтенд (React + Vite) и бэкенд (PHP API). Основная логика API находится в директории `/api`, а статические файлы и ресурсы хранятся в соответствующих директориях.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
