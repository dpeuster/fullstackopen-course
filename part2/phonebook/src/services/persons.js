import axios from 'axios';

const apiLink = "http://localhost:3001/persons";

const getAll = () => {
    const request = axios.get(apiLink);

    return request.then(response => response.data);
};

const create = (entry) => {
    const request = axios.post(apiLink, entry);

    return request.then(response => response.data);
};

export default { getAll, create };