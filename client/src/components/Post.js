import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import {
	filterStructure,
	getFullStructCheck,
	getTags,
} from '../utils/SentenceChecker/StructureChecker';
import CheckModal from './CheckModal';
import { Box, Container, Text, Button, HStack, Spacer } from '@chakra-ui/react';
import PostDeleteButton from './PostDeleteButton';
import PostContent from './PostContent';

export default function Post({ userPost, currentUser, id }) {
	const isOwner = currentUser
		? userPost.postedBy.email === currentUser.data.email
		: false;
	// const { register, handleSubmit } = useForm({
	// 	defaultValues: {
	// 		post: userPost.text,
	// 	},
	// });
	const [checkModalOpen, setCheckModalOpen] = useState(false);

	// const [editModalOpen, setEditModalOpen] = useState(false);
	const { token } = useAuth();

	const [checkResult, setCheckResult] = useState('');
	const [tags, setTags] = useState();

	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	};

	function handleCheckModalOpen() {
		setCheckModalOpen(true);
		check();
	}

	function handleCheckModalClose() {
		setCheckModalOpen(false);
	}

	function check() {
		const structures = filterStructure(userPost.text);
		const result = getFullStructCheck(userPost.text, structures);
		const [terms] = getTags(userPost.text, structures);

		setTags(terms.terms);

		setCheckResult(
			result
				? `Yay! You got it. Your sentence matches a structure.`
				: 'Oops! Something is wrong with your sentence.'
		);
	}

	// function handleEditModalClose() {
	// 	setEditModalOpen(false);
	// }

	// function handleEditModalOpen() {
	// 	setEditModalOpen(true);
	// }

	// async function editPost(data) {
	// 	const { post } = data;
	// 	try {
	// 		setError('');
	// 		await axios.patch();
	// 	} catch (err) {
	// 		console.log(err, 'Unable to edit answer.');
	// 		setError('Unable to edit your answer. Please try again later.');
	// 	}

	// 	handleEditModalClose();
	// 	window.location.replace(`/overview/${id}`);
	// }

	return (
		<Container
			minW="60vw"
			px="2rem"
			py="1rem"
			my="1rem"
			border="1px"
			borderColor="gray.300"
			borderRadius="1rem"
		>
			<PostContent userPost={userPost} />
			{isOwner && (
				<>
					<HStack spacing="1rem">
						<Spacer />
						<Button onClick={handleCheckModalOpen}>Check</Button>
						{/* <Button onClick={handleEditModalOpen}>
							Edit
						</Button> */}
						<PostDeleteButton pid={userPost._id} />
					</HStack>
					<Modal open={checkModalOpen}>
						<CheckModal
							checkResult={checkResult}
							tags={tags}
							handleCheckModalClose={handleCheckModalClose}
						/>
					</Modal>
					{/* <Modal open={editModalOpen}>
						<div className="modal__content flex flex-jc-c">
							<form
								className="flex flex-col"
								onSubmit={handleSubmit(editPost)}
							>
								<textarea
									name="post"
									className="panelInput"
									col="200"
									row="10"
									ref={register}
								/>
								<div className="flex flex-jc-c panelControl">
									<button type="button" onClick={handleEditModalClose}>
										Cancel
									</button>
									<button type="submit">Edit</button>
								</div>
							</form>
						</div>
					</Modal> */}
				</>
			)}
		</Container>
	);
}
