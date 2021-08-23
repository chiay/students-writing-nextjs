import React from 'react';
import { Link } from 'react-router-dom';
import { HStack, Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function NavbarLinks() {
	const MotionBox = motion(Box);

	return (
		<HStack>
			<MotionBox whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
				<Link to="/" mx="1rem">
					<Text mx="1rem">Home</Text>
				</Link>
			</MotionBox>
			<MotionBox whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
				<Link to="/prompts" mx="1rem">
					<Text mx="1rem">Start Writing</Text>
				</Link>
			</MotionBox>
			<MotionBox whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}>
				<Link to="/about" mx="1rem">
					<Text mx="1rem">About</Text>
				</Link>
			</MotionBox>
		</HStack>
	);
}
