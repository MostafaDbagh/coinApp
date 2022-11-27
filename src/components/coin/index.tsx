import { IsingleCoin } from "../../interface"
export const SingleCoin = ({ volume, lastPrice, symbol, priceChangePercent,setHidden }: IsingleCoin) => {
    return (
        <div className="card p-2  bg-.bg-secondary shadow" style={{ width: '320px', height: '220px' }} >
            <h5 className="card-title"> Symbol: <small className="text-muted" style={{ fontSize: '20px' }} >{symbol}</small></h5>

            <div className=" p-2 ">
                <p className="m-0 p-1 text-info" style={{ fontSize: '16px' }}>volume: <span className="text-muted">{volume}</span></p>
                <p className="m-0  text-info" style={{ fontSize: '16px' }}> price Change Percent:<span className="text-muted">{priceChangePercent}</span></p>
                <p className="m-0 p-1 text-info" style={{ fontSize: '16px' }}>last Price:<span className="text-muted">{lastPrice}</span></p>
            </div>
            <div className="d-flex  ">
                <button className="btn btn-success my-2 mx-1 w-25 text-white" onClick={()=>setHidden(false)}>Buy</button>
                <button className="btn btn-danger my-2 w-25 text-white "onClick={()=>setHidden(false)}>sell</button>
            </div>
        </div>
    )
}