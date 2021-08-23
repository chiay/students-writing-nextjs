import React from 'react';
import { Box, Flex, Spacer, useMediaQuery } from '@chakra-ui/react';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import NavbarDropDown from './NavbarDropDown';

export default function Navbar() {
	const [isMobile] = useMediaQuery('(max-width:480px)');

	return (
		<Box
			p={['0.5rem', '1rem']}
			mx={['0.25rem', '0.5rem']}
			my="0.5rem"
			bgGradient="linear(to-l, red.400, yellow.300)"
			borderRadius="10px"
		>
			<Flex>
				<NavbarLogo />
				<Spacer />
				{!isMobile && <NavbarLinks />}
				<Spacer />
				<NavbarDropDown />
			</Flex>
		</Box>
	);
}
