import React, { useEffect, useState } from "react";

const StateWise = () => {

    const [data,setData]=useState([]);
    
    const getCovidData=async()=>{
    const res = await fetch(
        "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise"
      );
      const actualData=await res.json();
      console.log(actualData.data.statewise);
      setData(actualData.data.statewise);
    }

useEffect(()=>{
getCovidData();
},[])

return(
    <>
        <div className="container-fluid mt-5">
            <div className="main-heading">                
            <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA </span> COVID-19 DASHBOARD</h1>
            </div>         

            <div className="table-responsive">
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                            <td>ID.</td>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>    
                        </tr>
                    </thead>
                    <tbody>
                            {
                                data.map((curElement,index)=>{
                            return(
                                <tr key={index}>
                                <td>{index+1}</td>
                            <td>{curElement.state.toLocaleString()}</td>
                            <td>{curElement.confirmed.toLocaleString()}</td>
                            <td>{curElement.recovered.toLocaleString()}</td>
                            <td>{curElement.deaths.toLocaleString()}</td>
                            <td>{curElement.active.toLocaleString()}</td>
                            {/* <td>{curElement.lastupdatedtime}</td> */}
                            </tr>
                            )
                                })
                            }


                    </tbody>
                </table>

            </div>

        </div>
    </>
)
}

export default StateWise;