/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{svelte,ts}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(var(--m3-scheme-primary) / <alpha-value>)",
				"on-primary": "rgb(var(--m3-scheme-on-primary) / <alpha-value>)",
				"primary-container": "rgb(var(--m3-scheme-primary-container) / <alpha-value>)",
				"on-primary-container": "rgb(var(--m3-scheme-on-primary-container) / <alpha-value>)",
				secondary: "rgb(var(--m3-scheme-secondary) / <alpha-value>)",
				"on-secondary": "rgb(var(--m3-scheme-on-secondary) / <alpha-value>)",
				"secondary-container": "rgb(var(--m3-scheme-secondary-container) / <alpha-value>)",
				"on-secondary-container": "rgb(var(--m3-scheme-on-secondary-container) / <alpha-value>)",
				tertiary: "rgb(var(--m3-scheme-tertiary) / <alpha-value>)",
				"on-tertiary": "rgb(var(--m3-scheme-on-tertiary) / <alpha-value>)",
				"tertiary-container": "rgb(var(--m3-scheme-tertiary-container) / <alpha-value>)",
				"on-tertiary-container": "rgb(var(--m3-scheme-on-tertiary-container) / <alpha-value>)",
				error: "rgb(var(--m3-scheme-error) / <alpha-value>)",
				"on-error": "rgb(var(--m3-scheme-on-error) / <alpha-value>)",
				"error-container": "rgb(var(--m3-scheme-error-container) / <alpha-value>)",
				"on-error-container": "rgb(var(--m3-scheme-on-error-container) / <alpha-value>)",
				background: "rgb(var(--m3-scheme-background) / <alpha-value>)",
				"on-background": "rgb(var(--m3-scheme-on-background) / <alpha-value>)",
				surface: "rgb(var(--m3-scheme-surface) / <alpha-value>)",
				"on-surface": "rgb(var(--m3-scheme-on-surface) / <alpha-value>)",
				"surface-variant": "rgb(var(--m3-scheme-surface-variant) / <alpha-value>)",
				"on-surface-variant": "rgb(var(--m3-scheme-on-surface-variant) / <alpha-value>)",
				outline: "rgb(var(--m3-scheme-outline) / <alpha-value>)",
				"outline-variant": "rgb(var(--m3-scheme-outline-variant) / <alpha-value>)",
				shadow: "rgb(var(--m3-scheme-shadow) / <alpha-value>)",
				scrim: "rgb(var(--m3-scheme-scrim) / <alpha-value>)",
				"inverse-surface": "rgb(var(--m3-scheme-inverse-surface) / <alpha-value>)",
				"inverse-on-surface": "rgb(var(--m3-scheme-inverse-on-surface) / <alpha-value>)",
				"inverse-primary": "rgb(var(--m3-scheme-inverse-primary) / <alpha-value>)",
				"surface-bright": "rgb(var(--m3-scheme-surface-bright) / <alpha-value>)",
				"surface-container": "rgb(var(--m3-scheme-surface-container) / <alpha-value>)",
				"surface-container-high": "rgb(var(--m3-scheme-surface-container-high) / <alpha-value>)",
				"surface-container-highest":
					"rgb(var(--m3-scheme-surface-container-highest) / <alpha-value>)",
				"surface-container-low": "rgb(var(--m3-scheme-surface-container-low) / <alpha-value>)",
				"surface-container-lowest":
					"rgb(var(--m3-scheme-surface-container-lowest) / <alpha-value>)",
				"surface-dim": "rgb(var(--m3-scheme-surface-dim) / <alpha-value>)",
				"surface-tint": "rgb(var(--m3-scheme-surface-tint) / <alpha-value>)",
			},
			fontFamily: {
				roboto: "Roboto",
				"afacad-flux": "'Afacad Flux'",
				"jetbrains-mono": "'JetBrains Mono'",
			},
			transitionTimingFunction: {
				"emphasized-accel": "cubic-bezier(0.2, 0, 0, 1)",
			},
			backgroundImage: {
				radial: "radial-gradient(var(--tw-gradient-stops))",
			},
			keyframes: {
				sway: {
					"0%, 100%": { "background-position": "top left" },
					"50%": { "background-position": "bottom right" },
				},
				dialogIn: {
					"0%": {
						transform: "translateY(-3rem) scaleY(90%)",
						"clip-path": "inset(0 0 100% 0 round var(--m3-dialog-shape))",
					},
					"100%": {
						transform: "translateY(0) scaleY(100%)",
						"clip-path": "inset(0 0 0 0 round var(--m3-dialog-shape))",
					},
				},
			},
			animation: {
				sway: "sway 30s ease-in-out infinite",
				dialogIn: "dialogIn 0.5s cubic-bezier(0.05, 0.7, 0.1, 1)",
			},
			borderRadius: {
				none: 0,
				xs: "var(--m3-util-rounding-extra-small)",
				sm: "var(--m3-util-rounding-small)",
				md: "var(--m3-util-rounding-medium)",
				lg: "var(--m3-util-rounding-large)",
				xl: "var(--m3-util-rounding-extra-large)",
				full: "var(--m3-util-rounding-full)",
				"slider-track-out": "0.5rem",
				"slider-track-in": "0.125rem",
			},
		},
	},
	plugins: [],
	safelist: [
		"text-primary",
		"text-on-primary",
		"text-secondary",
		"text-on-secondary",
		"text-tertiary",
		"text-on-tertiary",
		"text-error",
		"text-on-error",
		"text-background",
		"text-on-background",
		"text-surface",
		"text-on-surface",
		"text-outline",
		"text-shadow",
		"text-scrim",
		"bg-primary",
		"bg-on-primary",
		"bg-secondary",
		"bg-on-secondary",
		"bg-tertiary",
		"bg-on-tertiary",
		"bg-error",
		"bg-on-error",
		"bg-background",
		"bg-on-background",
		"bg-surface",
		"bg-on-surface",
		"bg-outline",
		"bg-shadow",
		"bg-scrim",
	],
};
