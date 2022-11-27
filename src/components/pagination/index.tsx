import React, { useState } from "react";
import './index.css'
import {IPagination} from '../../interface'

export const Pagination = ({  setlimit, ceilnumber }:IPagination) => {
    let numberofCell = new Array(ceilnumber).fill(0);
    let [offset, setOffset] = useState(0);

    return (
        < div className="d-flex align-item-center justify-content-center">
            <div>
                <button className="btn" onClick={()=>setOffset(offset+1)} disabled={offset==0}>-</button>
            </div>
            <div className="pagination" >
                <div className="pagination-container" style={{ left: `${offset*46}px` }} >
                    {
                        numberofCell.map((item, index) => (
                            <a  key={index} onClick={() => {
                                setlimit({start: index * 20, end: (index + 1) * 20 });
                            }}>{index + 1}</a>
                       
                        ))}
                </div>
                <div>


                </div>
            </div>
            <div>
                <button className="btn" onClick={() => setOffset(offset-1)} disabled={offset==-28}>+</button>
            </div>
        </div>
    )
}