
export interface ILimit {
    start: number,
    end: number
}

export interface ICoin {
    askPrice: String,
    askQty: string,
    bidPrice: string,
    bidQty: string,
    closeTime: number
    count: number,
    firstId: number,
    highPrice: string,
    lastId: number,
    lastPrice: string,
    lastQty: string,
    lowPrice: string,
    openPrice: string,
    openTime: number,
    prevClosePrice: string,
    priceChange: string,
    priceChangePercent: string,
    quoteVolume: string,
    symbol: string,
    volume: string,
    weightedAvgPrice: string
}
export interface Isearch {
    setSearch:React.Dispatch<React.SetStateAction<string>> ,
    setcounter:React.Dispatch<React.SetStateAction<number>>,
    counter:number
}
export interface IsingleCoin {
    volume: string,
    priceChangePercent: string,
    symbol: string,
    lastPrice: string,
    setHidden:React.Dispatch<React.SetStateAction<boolean>>
    
}
export  interface IPagination {
    ceilnumber:number,
    setlimit:React.Dispatch<React.SetStateAction<ILimit>>
}



