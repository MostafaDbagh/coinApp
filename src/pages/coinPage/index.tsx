import React, { useState, useEffect } from "react";
import { getCoinsApi } from "../../api/apis";
import { SingleCoin } from '../../components/coin'
import { Search } from "../../components/search";
import { Pagination } from "../../components/pagination";
import { ModalCantainer } from "../../components/bidModal/modalContainer";
import {ICoin,ILimit} from '../../interface'
 const CoinPage = () => {
  let numberOfCoinEachPage = 20;
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [backup,setBackup]  = useState<ICoin[]>([]);
  const [search, setSearch] = useState<string>('');
  const [counter,setCounter] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [hidden,setHidden] = useState<boolean>(true);

  const [paginationCeilNumber, setPaginationCeilNumber] = useState<number>(0)
  const [limit, setLimit] = useState<ILimit>({
    start: 0,
    end: 20
  });


  const fetchCoins = async () => {
    try {
      setLoading(true)
      const data = await getCoinsApi();
      console.log(data)
      setCoins(data);
      setBackup(data)
      setPaginationCeilNumber(Math.ceil(data.length / numberOfCoinEachPage))
    } catch (e) {
      setError("there is an error happening")
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    if (!search.length) {
      fetchCoins();
    }
    const data = filterBySearchKey(search);
    setPaginationCeilNumber(Math.ceil(data.length/50) )
    setCoins(data);
    
  }, [search])


  const filterBySearchKey = (val: string):ICoin[] => {
    const searchLen = search.length;
    const filterdata =detectInputChange()
    ? coins.filter((coin: any) => coin?.symbol?.slice(0, searchLen) === val.toLocaleUpperCase())
    :backup.filter((coin: any) => coin?.symbol?.slice(0, searchLen) === val.toLocaleUpperCase());
    return filterdata;
  }
  const detectInputChange = ():boolean=>{
    const searchLen = search.length;
    return counter-searchLen === 1
  }

  return (
    <div className="m-5 position-relative">
      <Search setSearch={setSearch} setcounter={setCounter} counter={counter}/>
      {loading &&'loading....'}
      <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
      {coins?.slice(limit.start,limit.end).map((coin: any) => (
        <div className="m-2 rounded-2" key={coin.symbol}>
          <SingleCoin
            volume={coin?.volume}
            symbol={coin?.symbol}
            lastPrice={coin?.lastPrice}
            priceChangePercent={coin?.priceChangePercent}
            setHidden={setHidden}
          />
        </div>
      ))}
         </div>
         
         {coins.length > numberOfCoinEachPage && <Pagination setlimit={setLimit} limit={limit} ceilnumber={paginationCeilNumber} />}
         <ModalCantainer hidden={hidden} sethidden={setHidden}/>
     
    </div>
  )
}
export default CoinPage;