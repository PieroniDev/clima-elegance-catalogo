
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
    				light: '#00497A'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))',
    				light: '#FFD100'
    			},
    			tertiary: {
    				DEFAULT: '#FFFFFF',
    				foreground: '#003049'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			},
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			satoshi: [
    				'Satoshi',
    				'sans-serif'
    			]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			},
    			'fade-in': {
    				'0%': {
    					opacity: '0',
    					transform: 'translateY(10px)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateY(0)'
    				}
    			},
    			'slide-in': {
    				'0%': {
    					transform: 'translateX(-20px)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateX(0)',
    					opacity: '1'
    				}
    			},
    			'slide-up': {
    				'0%': {
    					transform: 'translateY(20px)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			},
    			'scroll': {
    				to: {
    					transform: 'translate(calc(-50% - 0.5rem))'
    				}
    			},
    			'first': {
    				'0%': {
    					transform: 'rotate(0deg) translateX(0px)'
    				},
    				'33%': {
    					transform: 'rotate(120deg) translateX(50px)'
    				},
    				'66%': {
    					transform: 'rotate(240deg) translateX(-20px)'
    				},
    				'100%': {
    					transform: 'rotate(360deg) translateX(0px)'
    				}
    			},
    			'second': {
    				'0%': {
    					transform: 'rotate(0deg) translateX(0px) scale(1)'
    				},
    				'25%': {
    					transform: 'rotate(90deg) translateX(-30px) scale(1.1)'
    				},
    				'50%': {
    					transform: 'rotate(180deg) translateX(40px) scale(0.9)'
    				},
    				'75%': {
    					transform: 'rotate(270deg) translateX(-10px) scale(1.05)'
    				},
    				'100%': {
    					transform: 'rotate(360deg) translateX(0px) scale(1)'
    				}
    			},
    			'third': {
    				'0%': {
    					transform: 'rotate(0deg) translateY(0px)'
    				},
    				'40%': {
    					transform: 'rotate(144deg) translateY(-25px)'
    				},
    				'80%': {
    					transform: 'rotate(288deg) translateY(15px)'
    				},
    				'100%': {
    					transform: 'rotate(360deg) translateY(0px)'
    				}
    			},
    			'fourth': {
    				'0%': {
    					transform: 'rotate(0deg) translate(0px, 0px)'
    				},
    				'20%': {
    					transform: 'rotate(72deg) translate(20px, -15px)'
    				},
    				'40%': {
    					transform: 'rotate(144deg) translate(-10px, 25px)'
    				},
    				'60%': {
    					transform: 'rotate(216deg) translate(-25px, -10px)'
    				},
    				'80%': {
    					transform: 'rotate(288deg) translate(15px, 20px)'
    				},
    				'100%': {
    					transform: 'rotate(360deg) translate(0px, 0px)'
    				}
    			},
    			'fifth': {
    				'0%': {
    					transform: 'rotate(0deg) translateX(0px) translateY(0px)'
    				},
    				'30%': {
    					transform: 'rotate(108deg) translateX(-40px) translateY(20px)'
    				},
    				'60%': {
    					transform: 'rotate(216deg) translateX(30px) translateY(-30px)'
    				},
    				'100%': {
    					transform: 'rotate(360deg) translateX(0px) translateY(0px)'
    				}
    			},
    			'aurora': {
    				'0%': {
    					backgroundPosition: '50% 50%, 50% 50%'
    				},
    				'100%': {
    					backgroundPosition: '350% 50%, 350% 50%'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			'fade-in': 'fade-in 0.4s ease-out',
    			'slide-in': 'slide-in 0.5s ease-out',
    			'slide-up': 'slide-up 0.5s ease-out',
    			'scroll': 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
    			'first': 'first 8s linear infinite',
    			'second': 'second 10s linear infinite',
    			'third': 'third 12s linear infinite',
    			'fourth': 'fourth 9s linear infinite',
    			'fifth': 'fifth 11s linear infinite',
    			'aurora': 'aurora 60s linear infinite'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
