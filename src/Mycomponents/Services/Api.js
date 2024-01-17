import axios from 'axios';
const baseUrl = 'http://localhost:3000'

export const addUsers= async(body) =>{
    let results = await axios.post(`${baseUrl}/register/registerUser`,body)
    // console.log(results?.data,"ress");
    return results?.data
 }