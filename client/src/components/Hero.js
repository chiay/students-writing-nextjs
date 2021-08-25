import React from 'react';
import { useHistory } from 'react-router-dom';
import publishArticleImg from '../images/undraw_publish_article.svg';
import {
	Grid,
	GridItem,
	Box,
	Image,
	Heading,
	Text,
	Flex,
	Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

export default function Hero() {
	const history = useHistory();
	const { currentUser } = useAuth();
	const MotionGrid = motion(Grid);

	function handleClick() {
		if (currentUser) {
			history.push('/prompts');
		} else {
			history.push('/signup');
		}
	}

	return (
		<MotionGrid
			templateColumns={{ lg: 'repeat(2, 1fr)' }}
			templateRows={{ sm: 'repeat(2, 1fr)' }}
			minW="100vw"
			minH={['20vh', '40vh', '60vh']}
			p="2rem"
			m="0"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<GridItem order={['2', '2', '2', '1']}>
				<Flex justify="center" align="center">
					<Box p="1rem" textAlign={['center', 'center', 'center', 'left']}>
						<Heading fontSize={['xl', '2xl', '3xl', '5xl']}>
							Welcome to Students Writing!
						</Heading>
						<Text fontSize={['sm', 'md', 'lg']} color="gray.400">
							Sentences, Paragraphs, Essays - All become easy with
							structure
						</Text>
						<Text fontSize={['sm', 'md', 'lg']} color="gray.400">
							Learn the structure, view the edits, master writing
						</Text>
						<Button
							onClick={handleClick}
							mt="1rem"
							rightIcon={<ArrowForwardIcon />}
						>
							Start here
						</Button>
					</Box>
				</Flex>
			</GridItem>
			<GridItem order={['1', '1', '1', '2']}>
				<Flex justify="center" align="center">
					<Image
						src={publishArticleImg}
						w={['200px', '250px', '300px']}
						h={['200px', '250px', '300px']}
					/>
				</Flex>
			</GridItem>
		</MotionGrid>
	);
}
