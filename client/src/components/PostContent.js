import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function PostContent({ userPost }) {
	return (
		<>
			<Box>
				<Text>
					Writer:{' '}
					{userPost.postedBy.alias
						? userPost.postedBy.alias
						: userPost.postedBy.email}
				</Text>
				<Text fontSize="sm" color="gray.400">
					Date: {new Date(userPost.updatedOn).toLocaleString()}
				</Text>
			</Box>
			<Text my="1rem">{userPost.text}</Text>
		</>
	);
}
