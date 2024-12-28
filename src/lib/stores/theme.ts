import { writable } from "svelte/store";

export const scheme = writable({
	lightScheme: {
		primary: 4278215580,
		onPrimary: 4294967295,
		primaryContainer: 4291749375,
		onPrimaryContainer: 4278209143,
		inversePrimary: 4288203775,
		secondary: 4283522685,
		onSecondary: 4294967295,
		secondaryContainer: 4292403967,
		onSecondaryContainer: 4281943652,
		tertiary: 4283980427,
		onTertiary: 4294967295,
		tertiaryContainer: 4292993279,
		onTertiaryContainer: 4282401393,
		error: 4290386458,
		onError: 4294967295,
		errorContainer: 4294957782,
		onErrorContainer: 4287823882,
		background: 4294441471,
		onBackground: 4279573540,
		surface: 4294441471,
		onSurface: 4279573540,
		surfaceVariant: 4292535281,
		onSurfaceVariant: 4282271826,
		inverseSurface: 4280955193,
		inverseOnSurface: 4293587452,
		outline: 4285429892,
		outlineVariant: 4290693076,
		shadow: 4278190080,
		scrim: 4278190080,
		surfaceDim: 4292140005,
		surfaceBright: 4294441471,
		surfaceContainerLowest: 4294967295,
		surfaceContainerLow: 4293784831,
		surfaceContainer: 4293390073,
		surfaceContainerHigh: 4293061107,
		surfaceContainerHighest: 4292666350,
		surfaceTint: 4278215580,
	},
	darkScheme: {
		primary: 4288203775,
		onPrimary: 4278203220,
		primaryContainer: 4278209143,
		onPrimaryContainer: 4291749375,
		inversePrimary: 4278215580,
		secondary: 4290365162,
		onSecondary: 4280496205,
		secondaryContainer: 4281943652,
		onSecondaryContainer: 4292403967,
		tertiary: 4290888442,
		onTertiary: 4280953945,
		tertiaryContainer: 4282401393,
		onTertiaryContainer: 4292993279,
		error: 4294948011,
		onError: 4285071365,
		errorContainer: 4287823882,
		onErrorContainer: 4294957782,
		background: 4279047195,
		onBackground: 4292666350,
		surface: 4279047195,
		onSurface: 4292666350,
		surfaceVariant: 4282271826,
		onSurfaceVariant: 4290693076,
		inverseSurface: 4292666350,
		inverseOnSurface: 4280955193,
		outline: 4287140510,
		outlineVariant: 4282271826,
		shadow: 4278190080,
		scrim: 4278190080,
		surfaceDim: 4279047195,
		surfaceBright: 4281547330,
		surfaceContainerLowest: 4278718230,
		surfaceContainerLow: 4279573540,
		surfaceContainer: 4279836712,
		surfaceContainerHigh: 4280560435,
		surfaceContainerHighest: 4281218366,
		surfaceTint: 4288203775,
	},
});
