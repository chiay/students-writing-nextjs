import axios from 'axios';
// TODO: New / Edit Prompt API endpoint controller

export async function createNewPrompt(newPrompt, token) {
	try {
		const { data } = await axios.post('/api/prompt/create', newPrompt, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		return data;
	} catch (err) {
		console.log(err, 'Unable to create prompt.');
	}
}

export async function fetchPrompts() {
	try {
		const { data } = await axios.get('/api/prompt');
		return data;
	} catch (err) {
		console.log(err, 'Unable to fetch data from server.');
	}
}

export async function fetchPromptById(id) {
	try {
		const { data } = await axios.get(`/api/prompt/${id}`);
		return data;
	} catch (err) {
		console.log(err, 'Unable to fetch data from server.');
	}
}

export async function editPromptById(id, updatedPrompt, token) {
	try {
		const { data } = await axios.patch(
			`/api/prompt/${id}/edit`,
			updatedPrompt,
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return data;
	} catch (err) {
		console.log(err, 'Unable to edit prompt.');
	}
}

export async function deletePromptById(id, token) {
	try {
		await axios.delete(`/api/prompt/${id}/delete`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
	} catch (err) {
		console.log(err, 'Unable to delete prompt.');
	}
}
