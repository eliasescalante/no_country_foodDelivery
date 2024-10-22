import axios from 'axios';

const URL = 'http://localhost:8080'

export const getFoods = async (data)=> {
   // console.log('comentario tarido => ', data)
    try {
        const req = await axios.get(`${URL}/api/foods`, data)
        return req.data
    } catch (error) {
        console.error(error)
    }
}