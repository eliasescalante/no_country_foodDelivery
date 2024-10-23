import axios from 'axios';

const URL = 'http://localhost:8080'

export const getRestaurants = async (data)=> {
   // console.log('comentario tarido => ', data)
    try {
        const req = await axios.get(`${URL}/api/restaurants`, data)
        return req.data
    } catch (error) {
        console.error(error)
    }
}


export const getRestaurantById = async (id)=>{
    if(id){
        const req = await axios.get(`${URL}/api/restaurants/${id}`)
        return req.data
    }
    console.log("falta el id")
    
}