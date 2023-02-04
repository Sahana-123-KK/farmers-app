import React from 'react'
import "./farmerData.css"
const FarmerData = ({data}) => {
  
  return (
    <div className='flexxrowdatafarm'>
        <p className="fname">{data?.name} </p>
        <p className="fvno">{data?.vno} </p>
        <p className="faddress">{data?.address} </p>
        <p className="fvariety">{data?.variety} </p>
        <p className="fdate"> 
        <span className="time"><i class="bi bi-calendar-event-fill"></i>{""+ new Date(data?.datetime).getDate() + "-" + (new Date(data?.datetime).getMonth()+1)+"-"+ new Date(data?.datetime).getFullYear()} </span>
        <span className="date"><i class="bi bi-clock-fill"></i> {new Date(data?.datetime).getHours()>12 ?( ""+ new Date(data?.datetime).getHours()-12 + ":" + (new Date(data?.datetime).getMinutes()) + "PM") : (""+ new Date(data?.datetime).getHours() + ":" + (new Date(data?.datetime).getMinutes()) + "AM" )} </span>
         </p>

    </div>
  )
}

export default FarmerData