import React from 'react'
import "./farmerData.css"
const FarmerData = ({data}) => {
  return (
    <div className='flexxrowdatafarm'>
        <p className="fname">{data?.name} </p>
        <p className="fvno">{data?.vehicleNo} </p>
        <p className="faddress">{data?.address} </p>
        <p className="fvariety">{data?.variety} </p>
        <p className="fdate">{data?.date} </p>

    </div>
  )
}

export default FarmerData