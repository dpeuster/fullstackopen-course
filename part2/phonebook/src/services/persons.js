import axios from 'axios';

const apiLink = "http://localhost:3001/persons";

const getAll = async () => {
    const request = axios.get(apiLink);

    const response = await request;
    
    return response.data;
};

const create = async (entry) => {
    const request = axios.post(apiLink, entry);

    const response = await request;
    return response.data;
};

const update = async (entry) => {
    const request = axios.put(`${apiLink}/${entry.id}`, entry);

    const response = await request;
    return response.data;
};

const remove = async (id) => {
    const request = axios.delete(`${apiLink}/${id}`);

    const response = await request;
    return response.data;
};

export default { getAll, create, remove, update };