const URL_BASE = 'http://localhost:3000';
const URL_API = '/api/users/';

export const getAllData = async () => {
	try {
		const response = await fetch(URL_BASE + URL_API);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getDataById = async id => {
	try {
		const response = await fetch(URL_BASE + URL_API + id);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const deleteData = async id => {
	try {
		const response = await fetch(URL_BASE + URL_API + id, {
			method: 'DELETE'
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
