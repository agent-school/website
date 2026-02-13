import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "class"], // Enable dark mode with class strategy (for next-themes)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			teal: {
  				'50': '#f0fdfa',
  				'100': '#ccfbf1',
  				'200': '#99f6e4',
  				'300': '#5eead4',
  				'400': '#2dd4bf',
  				'500': '#14b8a6',
  				'600': '#0d9488',
  				'700': '#0f766e',
  				'800': '#115e59',
  				'900': '#134e4a',
  				'950': '#042f2e'
  			},
  			orange: {
  				'50': '#fff7ed',
  				'100': '#ffedd5',
  				'200': '#fed7aa',
  				'300': '#fdba74',
  				'400': '#fb923c',
  				'500': '#f97316',
  				'600': '#ea580c',
  				'700': '#c2410c',
  				'800': '#9a3412',
  				'900': '#7c2d12',
  				'950': '#431407'
  			},
  			slate: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a',
  				'950': '#020617'
  			},
  			success: {
  				'50': '#f0fdf4',
  				'500': '#22c55e',
  				'700': '#15803d'
  			},
  			error: {
  				'50': '#fef2f2',
  				'500': '#ef4444',
  				'700': '#b91c1c'
  			},
  			warning: {
  				'50': '#fefce8',
  				'500': '#eab308',
  				'700': '#a16207'
  			},
  			info: {
  				'50': '#eff6ff',
  				'500': '#3b82f6',
  				'700': '#1d4ed8'
  			},
  			navy: {
  				'50': '#EEF1F8',
  				'100': '#DCE3F2',
  				'200': '#B5C4E3',
  				'300': '#8AA2D0',
  				'400': '#5A7AB8',
  				'500': '#3A5C9E',
  				'600': '#2F4B83',
  				'700': '#253A6A',
  				'800': '#1B2951',
  				'900': '#0F1B33'
  			},
  			amber: {
  				'50': '#FFF9F2',
  				'100': '#FFF3E8',
  				'200': '#FFE4C7',
  				'300': '#FFD0A0',
  				'400': '#FFB876',
  				'500': '#FE9F4D',
  				'600': '#E88A38'
  			},
  			cream: {
  				'50': '#FAF9F7',
  				'100': '#F5F3EF',
  				'200': '#EBE7DF',
  				'300': '#E0DCD4'
  			},
  			charcoal: {
  				'100': '#F3F4F6',
  				'200': '#E5E7EB',
  				'300': '#D1D5DB',
  				'400': '#9CA3AF',
  				'500': '#6B7280',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#2D2D2D',
  				'900': '#1A1A1A'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			display: [
  				'var(--font-fraunces)',
  				'Georgia',
  				'serif'
  			],
  			body: [
  				'var(--font-dm-sans)',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-jetbrains)',
  				'Consolas',
  				'monospace'
  			]
  		},
  		fontSize: {
  			'display-xl': [
  				'4.5rem',
  				{
  					lineHeight: '1.05',
  					letterSpacing: '-0.02em',
  					fontWeight: '700'
  				}
  			],
  			'display-lg': [
  				'3.5rem',
  				{
  					lineHeight: '1.1',
  					letterSpacing: '-0.02em',
  					fontWeight: '700'
  				}
  			],
  			'display-md': [
  				'2.5rem',
  				{
  					lineHeight: '1.15',
  					letterSpacing: '-0.01em',
  					fontWeight: '600'
  				}
  			],
  			'display-sm': [
  				'2rem',
  				{
  					lineHeight: '1.2',
  					letterSpacing: '-0.01em',
  					fontWeight: '600'
  				}
  			],
  			'heading-lg': [
  				'1.5rem',
  				{
  					lineHeight: '1.3',
  					fontWeight: '600'
  				}
  			],
  			'heading-md': [
  				'1.25rem',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			'heading-sm': [
  				'1.125rem',
  				{
  					lineHeight: '1.4',
  					fontWeight: '600'
  				}
  			],
  			'body-lg': [
  				'1.125rem',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			'body-md': [
  				'1rem',
  				{
  					lineHeight: '1.7'
  				}
  			],
  			'body-sm': [
  				'0.875rem',
  				{
  					lineHeight: '1.6'
  				}
  			],
  			'caption': [
  				'0.75rem',
  				{
  					lineHeight: '1.5',
  					letterSpacing: '0.02em'
  				}
  			]
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem',
  			'30': '7.5rem',
  			'34': '8.5rem',
  			'38': '9.5rem'
  		},
  		borderRadius: {
  			'xl': '1rem',
  			'2xl': '1.25rem',
  			'3xl': '1.5rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'soft': '0 2px 20px rgba(23, 23, 23, 0.06)',
  			'medium': '0 4px 30px rgba(23, 23, 23, 0.1)',
  			'strong': '0 8px 40px rgba(23, 23, 23, 0.15)',
  			'inner-soft': 'inset 0 2px 4px rgba(23, 23, 23, 0.05)',
  			'glow-orange': '0 0 40px rgba(251, 146, 60, 0.25)',
  			'glow-orange-lg': '0 0 60px rgba(251, 146, 60, 0.3)',
  			'glow-orange-xl': '0 0 80px rgba(249, 115, 22, 0.35)'
  		},
  		animation: {
  			'float-slow': 'float 8s ease-in-out infinite',
  			'float-medium': 'float 6s ease-in-out infinite',
  			'float-fast': 'float 4s ease-in-out infinite',
  			'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
  			'draw-line': 'draw-line 1.5s ease-out forwards',
  			'shimmer': 'shimmer 2s linear infinite',
  			'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
  			'scan-line': 'scan-line 8s linear infinite'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'pulse-soft': {
  				'0%, 100%': {
  					opacity: '0.6'
  				},
  				'50%': {
  					opacity: '1'
  				}
  			},
  			'draw-line': {
  				'0%': {
  					strokeDashoffset: '100%'
  				},
  				'100%': {
  					strokeDashoffset: '0%'
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '-1000px 0'
  				},
  				'100%': {
  					backgroundPosition: '1000px 0'
  				}
  			},
  			'glow-pulse': {
  				'0%, 100%': {
  					opacity: '1',
  					filter: 'brightness(1)'
  				},
  				'50%': {
  					opacity: '0.8',
  					filter: 'brightness(1.2)'
  				}
  			},
  			'scan-line': {
  				'0%': {
  					transform: 'translateY(-100%)'
  				},
  				'100%': {
  					transform: 'translateY(100vh)'
  				}
  			}
  		},
  		backgroundImage: {
  			'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")"
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
