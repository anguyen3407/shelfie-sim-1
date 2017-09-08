import axios from 'axios';

export function getShelf(id) {
    return axios.get(`/api/shelf/${id}`).then(res => {
        return res.data
    })
}