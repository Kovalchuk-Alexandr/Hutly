# Hutly. Верстаем главную сайта агентства недвижимости сразу в React с Cursor AI

- HTML, CSS, React. Компоненты.
- Три темы: "light", "medium", "dark"
- Переменные, rgb-переменные для разных тем
- Кастомный хук 'useTheme' для обработки смены темы и хранения базовых цветов тем
- Сохранение состояния темы в LocalStorage
- Frontend - React + API. Каталог:

## Заметки по установке

[Официальный сайт: `https://reactjs.org/`](https://reactjs.org/)

### Установка React

***Установка React***

   `npm create vite@latest`
   опции:

- React
- JavaScript

или, полная запись:
  `npm create vite@latest blog -- --template react`,
  где:

- blog - каталог установки,
- react - фреймворк с шаблоном

***Переход в каталог с проектом***
  `cd Hutly`

***Установка модулей***
  `npm install`

***Локальная разработка***
   `npm run dev`

***Build проекта в папку "/docs" (Сборка для продакшена)***
(при необходимости можно изменить папку в "vite.config.js")

   `npm run build`

```bash
  ?  Local:   http://localhost:5173/
  ?  Network: use --host to expose
  ?  press h + enter to show help
```

***Предварительный просмотр сборки***

`npm run preview`


```bash
  ?  Local:   http://localhost:4173/
```

***Проверка сборки локально***
`npx serve docs`

***Роутер react-router-dom***
    `npm i react-router-dom`

***Образец AI-promt:***

```text
Сверстай этот блок в виде отдельного компонента, назови его cta и размести  в components папке.
При необходимости используй переменные из @vars.css и навигацию из компонента @index.jsx.
  Ссылка на макет:
https://www.figma.com/design/3pybIGeX94GTmlQxXAi2a6/Real-estate-Landing-page-UI-Kit--Community---Copy-?node-id=1-734&t=HG7UUox0WIyk1QFv-4

```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
