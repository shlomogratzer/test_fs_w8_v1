import axios from 'axios';
import {Mission} from '../Types/Mission'

const BASE_URL = 'https://reactexambackend.onrender.com/missions/8374629'

export const getAllList = async () : Promise<Mission[]> => {
    try {
        const responece = await axios.get(BASE_URL)
        return responece.data
    } catch (error) {
        throw new Error('error')
    }
}
export const create = async (mission : Mission) : Promise<Mission[]> => {
    try {
        const responece = await axios.post(BASE_URL,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(mission)
        })
        return responece.data
    
    } catch (error) {
        throw new Error('error')
    }
}
export const update = async (id : string) : Promise<Mission[]> => {
    try {
        const responece = await axios.post(`${BASE_URL}/${id}`,{
            method: "POST"
        })
        return responece.data
    
    } catch (error) {
        throw new Error('error')
    }
}
export const del = async (id : string) : Promise<Mission[]> => {
    try {
        const responece = await axios.delete(`${BASE_URL}/${id}`,{
            method: "DELETE"
        })
        return responece.data
    
    } catch (error) {
        throw new Error('error')
    }
}
