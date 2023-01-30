import React from 'react'
import "./farmerData.css"
const FarmerData = ({data}) => {
  return (
    <div className='flexxrowdatafarm'>
        <p className="fname">{data?.name} </p>
        <p className="fvno">{data?.vno} </p>
        <p className="faddress">{data?.address} </p>
        <p className="fvariety">{data?.variety} </p>
        <p className="fdate">{data?.datetime} </p>

    </div>
  )
}

export default FarmerData