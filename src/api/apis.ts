import axios  from "axios";




export const getCoinsApi :any = async ()=>{
    const res =  await axios.get('https://api2.binance.com/api/v3/ticker/24hr');
  return res.data;
}

