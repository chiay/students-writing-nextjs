import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
	fonts: {
		body: 'Commissioner',
	},
	components: {
		Link: {
			baseStyle: {
				color: 'red.700',
				_hover: {
					color: 'red.500',
					textDecoration: 'none',
				},
				_click: {
					outline: 'none',
				},
			},
		},
		Button: {
			baseStyle: {
				fontWeight: '500',
				color: 'red.700',
			},
		},
		Text: {
			baseStyle: {
				color: 'red.700',
			},
		},
	},
});

export default theme;
