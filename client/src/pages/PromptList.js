import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import Prompt from '../components/Prompt';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Modal from '../components/Modal';
import PromptEntryForm from '../components/PromptEntryForm';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Spinner, IconButton, Center, Grid, GridItem } from '@chakra-ui/react';

export default function PromptList() {
	const [list, setList] = useState();
	const [loading, setLoading] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const { currentUser } = useAuth();

	useEffect(() => {
		setLoading(true);
		let cancel;

		const getList = async () => {
			try {
				const { data } = await axios.get('/api/prompt', {
					cancelToken: new axios.CancelToken((c) => (cancel = c)),
				});
				if (data) setList(data);
			} catch (err) {
				console.log('Unable to fetch data from server.');
			}
		};

		getList();
		setLoading(false);
		return () => cancel();
	}, []);

	function toggleModalOpen() {
		setModalOpen(!modalOpen);
	}

	return (
		<Layout>
			{loading && (
				<Center>
					<Spinner
						mt="2rem"
						thickness="3px"
						emptyColor="gray.200"
						color="yellow.400"
						size="md"
					/>
				</Center>
			)}

			{!loading && (
				<Center>
					<Grid minW="80vw" templateColumns="repeat(12, 1fr)">
						<GridItem colSpan="12" colStart="12">
							{currentUser?.data.role === 'admin' && (
								<IconButton
									aria-label="add new prompt"
									icon={<AddCircleOutlineIcon />}
									colorScheme="orange"
									onClick={toggleModalOpen}
								/>
							)}
						</GridItem>
						<GridItem colSpan="12" colStart="1">
							{list ? (
								list.map((prompt) => {
									return (
										<Link
											to={`/overview/${prompt._id}`}
											key={prompt._id}
										>
											<Prompt key={prompt._id} prompt={prompt} />
										</Link>
									);
								})
							) : (
								<Center>No content.</Center>
							)}
						</GridItem>
					</Grid>
				</Center>
			)}

			<Modal open={modalOpen}>
				<PromptEntryForm
					list={list}
					setList={setList}
					setModalOpen={toggleModalOpen}
				/>
			</Modal>
		</Layout>
	);
}
