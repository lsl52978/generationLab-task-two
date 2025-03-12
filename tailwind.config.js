// tailwind.config.js
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // 自定义颜色
                'dark-gradient-start': '#1a1a1a',
                'dark-gradient-end': '#2d2d2d',
                'light-gray': '#CCCCCC',
                'lighter-gray': '#DDDDDD',
                'button-border': '#999999',
                'provider-button': '#F5B041',
                'text-gray': '#AAAAAA',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                // 定义自定义间距（如果需要）
            },
        },
    },
    plugins: [],
};
