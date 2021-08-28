import axios from 'axios';
// TODO: New / Edit Post API endpoint controller

export async function submitPost(id, text, token) {
	try {
		const { data } = await axios.patch(
			`/api/prompt/${id}/post`,
			{ text },
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
		return data;
	} catch (err) {
		console.log(err, 'Unable to submit answer.');
	}
}

export async function deletePost(id, pid, token) {
	try {
		await axios.patch(
			`/api/prompt/${id}/delete/${pid}`,
			{},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			}
		);
	} catch (err) {
		console.log(err, 'Unable to delete post.');
	}
}
