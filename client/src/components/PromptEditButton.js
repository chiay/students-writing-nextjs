import React from 'react';
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	useToast,
	useDisclosure,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { useAuth } from '../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { useQueryClient, useMutation } from 'react-query';
import PromptEntryForm from './PromptEntryForm';

export default function PromptEditButton({ prompt }) {
	const { id } = useParams();
	const { token } = useAuth();
	const queryClient = useQueryClient();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				leftIcon={<EditIcon />}
				onClick={onOpen}
				// isLoading={isLoading}
				loadingText="Editing"
			>
				Edit
			</Button>
			<Modal isOpen={isOpen} onClose={onClose} size="3xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Edit Prompt</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<PromptEntryForm id={id} prompt={prompt} />
					</ModalBody>
					<ModalFooter>
						<Button mx="0.5rem" colorScheme="orange">
							Close
						</Button>
						<Button mx="0.5rem">Submit</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
