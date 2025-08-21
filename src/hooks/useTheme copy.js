import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [currentTheme, setCurrentTheme] = useState('light');

    useEffect(() => {
        // Функция для обновления темы
        const updateTheme = () => {
            const theme = document.body.getAttribute('data-theme') || 'light';
            setCurrentTheme(theme);
        };

        // Обновляем тему при загрузке
        updateTheme();

        // Слушаем изменения в DOM для обновления темы
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    updateTheme();
                }
            });
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['data-theme']
        });

        return () => observer.disconnect();
    }, []);

    // Функция для получения цвета логотипа в зависимости от темы
    const getLogoFillColor = () => {
        switch (currentTheme) {
            case 'light':
                return '#050f27';
            case 'medium':
            case 'dark':
                return '#fff';
            default:
                return '#050f27';
        }
    };

    // Функция для получения дополнительных цветов в зависимости от темы
    const getThemeColors = () => {
        switch (currentTheme) {
            case 'light':
                return {
                    primary: '#050f27',
                    secondary: '#fff',
                    accent: '#f7f8f8'
                };
            case 'medium':
                return {
					primary: "#fff",
					secondary: "#050f27",
					accent: "#f7f8f8",
				};
            case 'dark':
                return {
                    primary: '#fff',
                    secondary: '#050f27',
                    accent: '#111b31'
                };
            default:
                return {
                    primary: '#050f27',
                    secondary: '#fff',
                    accent: '#f7f8f8'
                };
        }
    };

    return {
        currentTheme,
        getLogoFillColor,
        getThemeColors
    };
};

