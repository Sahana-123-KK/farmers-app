import React, { useState } from "react";
import FilterDatacomp from "../FilterDatacomp/FilterDatacomp";
import "./filter.css";
import Calendar from "react-calendar";
// import datas from "../../../data";
import datas from "../../data";
const Filter = () => {
    const [value, onChange] = useState(new Date());
  const [data, setData] = useState(datas);
  return (
    <div className="flexxfil">
      <h4 className="headfil">PackHouse Data</h4>
      {/* <Calendar onChange={onChange} value={value} /> */}

      <div className="flexxcoltabfil">
        <div className="flexxrowheadtabfil">
          <span className="typesfil">Date</span>
          <span className="typesfil">Farmer Name</span>
          <span className="typesfil">Place</span>
          <span className="typesfil">Variety</span>
          <span className="typesfil">Nos</span>
          <span className="typesfil">Tons</span>
          <span className="typesfil2">
            <span className="flex1">Grade1</span>
            <span className="flex2">
              <span className="no">Mango</span>
              <span className="no">Weight</span>
            </span>
          </span>
          <span className="typesfil2">
            <span className="flex1">Grade2</span>
            <span className="flex2">
              <span className="no">Mango</span>
              <span className="no">Weight</span>
            </span>
          </span>
          <span className="typesfil2">
            <span className="flex1">Grade3</span>
            <span className="flex2">
              <span className="no">Mango</span>
              <span className="no">Weight</span>
            </span>
          </span>
        </div>
        {
          data?.length == 0
            ? "No Date To Display"
            : data.map((item, ind) => {
                return <FilterDatacomp item={item} />;
              })

          // <FilterDatacomp />
        }
      </div>
    </div>
  );
};

export default Filter;
