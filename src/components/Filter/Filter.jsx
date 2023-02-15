import React, { useEffect, useState } from "react";
import FilterDatacomp from "../FilterDatacomp/FilterDatacomp";
import "./filter.css";
import Calendar from "react-calendar";
// import datas from "../../../data";
import datas from "../../data";
const Filter = () => {
  const [start, setStart] = useState();
  const [finisth, setFinish] = useState();
  const [data, setData] = useState(datas);
  const [filter, setFilter] = useState(datas);

  const filterFnc = () => {
    setFilter(() => {
      return filter.filter((item, ind) => {
        return (
            // To Be Implemented --> Not yet completed.
          new Date(
            item?.date?.split("/")[1],
            item?.date?.split("/")[0],
            item?.date?.split("/")[2]
          )
           >= new Date(start).getTime()
        );
      });
    });
  };
  useEffect(() => {
    // filterFnc()
  }, [start, finisth]);
  return (
    <div className="flexxfil">
      <h4 className="headfil">PackHouse Data</h4>
      {/* <Calendar onChange={onChange} value={value} /> */}
      <div className="flexxrowdatesfil">
        <p>
          Date From &nbsp;{" "}
          <input
            onChange={(e) => {
              setStart(e.target.value);
            }}
            type="date"
            name=""
            id=""
          />
        </p>
        <p>
          Date To &nbsp;
          <input
            onChange={(e) => {
              setFinish(e.target.value);
            }}
            type="date"
            name=""
            id=""
          />
        </p>
      </div>

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
          filter?.length == 0
            ? "No Date To Display"
            : filter.map((item, ind) => {
                return <FilterDatacomp item={item} />;
              })

          // <FilterDatacomp />
        }
      </div>
    </div>
  );
};

export default Filter;
