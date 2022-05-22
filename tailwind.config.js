module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        keyframes: {
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-10px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'fade-out-down': {
                'from': {
                    opacity: '1',
                    transform: 'translateY(0px)'
                },
                'to': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
            },
            'fade-in-up': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            },
            'fade-out-up': {
                'from': {
                    opacity: '1',
                    transform: 'translateY(0px)'
                },
                'to': {
                    opacity: '0',
                    transform: 'translateY(10px)'
                },
            }
        },
        animation: {
            'fade-in-down': 'fade-in-down 1s ease-out',
            'fade-out-down': 'fade-out-down 1s ease-out',
            'fade-in-up': 'fade-in-up 1s ease-out',
            'fade-out-up': 'fade-out-up 1s ease-out'
        }
    },
},
  themes: [
    {
      mytheme: {
      
"primary": "#570DF8",
      
"secondary": "#F000B8",
      
"accent": "#37CDBE",
      
"neutral": "#3D4451",
      
"base-100": "#FFFFFF",
      
"info": "#3ABFF8",
      
"success": "#36D399",
      
"warning": "#FBBD23",
      
"error": "#F87272",
      },
    },
  ],

  plugins: [require("daisyui")],
}
