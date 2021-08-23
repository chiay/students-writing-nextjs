import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../images/logo.svg';

export default function NavbarLogo() {
	return (
		<HStack>
			<Image
				boxSize="2rem"
				src={logo}
				alt="logo"
				boxShadow="xl"
				rounded="md"
			/>
			<Link to="/">
				<Text>Students Writing</Text>
			</Link>
		</HStack>
	);
}
