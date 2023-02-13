import React from 'react'
import "./filterDatacomp.css"
const FilterDatacomp = ({item}) => {
  return (
    <div className="flexxrowheadtabfil2">
          <span className="typesfil5">{item?.date}</span>
          <span className="typesfil5">{item?.name} </span>
          <span className="typesfil5">{item?.place} </span>
          <span className="typesfil5">{item?.variety} </span>
          <span className="typesfil5">{item?.count} </span>
          <span className="typesfil5">{item?.tons} </span>
          <span className="typesfil4">
            {/* <span className="flex1">Grade1</span> */}
            <span className="flex2">
              <span className="no">{item?.grade1?.count} </span>
              <span className="no">{item?.grade1?.tons} </span>
            </span>
          </span>
          <span className="typesfil4">
            {/* <span className="flex1">Grade2</span> */}
            <span className="flex2">
              <span className="no">{item?.grade2?.count} </span>
              <span className="no">{item?.grade2?.tons} </span>
            </span>
          </span>
          <span className="typesfil4">
            {/* <span className="flex1">Grade3</span> */}
            <span className="flex2">
              <span className="no">{item?.grade3?.count} </span>
              <span className="no">{item?.grade3?.tons} </span>
            </span>
          </span>
        </div>
  )
}

export default FilterDatacomp