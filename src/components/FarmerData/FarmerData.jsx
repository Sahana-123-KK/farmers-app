import React from 'react'
import "./farmerData.css"
const FarmerData = ({data}) => {
  return (
    <div className='flexxrowdatafarm'>
        <p className="fname">{data?.name} </p>
        <p className="fvno">{data?.vehicleNo} </p>
        <p className="faddress">{data?.address} </p>
    </div>
  )
}

export default FarmerData