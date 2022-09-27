const sharedTypescale = {
	fontSize: 16,
	fontWeight: '400',
}

export const typescale = {
	body: {
		...sharedTypescale
	},
	h1: {
		...sharedTypescale,
		fontSize: 32,
		fontWeight: '600',
	},
	h2: {
		...sharedTypescale,
		fontWeight: '500',
		fontSize: 28,
	},
	h3: {
		...sharedTypescale,
		fontWeight: '500',
		fontSize: 24,
		letterSpacing: 0.01
	}
}