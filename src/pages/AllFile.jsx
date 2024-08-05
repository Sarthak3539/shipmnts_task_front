import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllFile() {
  const url = "http://localhost:5000/getfiles";
  const [data, setData] = useState([]);
  const[p,setParent]=useState("66b052297da7903c806d0efe")

  const fetchInfo = (id) => {
    return axios
      .get(url, {
        params: {
          parent: p,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchInfo(p);
  }, []);


  const handleClick = (id) => {
    setParent(id)
    console.log("Clicked:", id);
    fetchInfo(p)
  };    
  return (
    <div className="App">
      <center>
        {data.map((dataObj, index) => {
          return (
            <div
              key={index}
              style={{
                width: "15em",
                backgroundColor: "#CD8FFD",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
              onClick={()=>handleClick(dataObj._id)}
            >
              <p style={{ fontSize: 20, color: "white" }}>{dataObj.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}
