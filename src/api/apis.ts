import axios  from "axios";



const {REACT_APP_API_URL}=process.env;

export const getCoinsApi = async ()=>{
    const res =  await axios.get(`${REACT_APP_API_URL}`);
  return res.data;
}

