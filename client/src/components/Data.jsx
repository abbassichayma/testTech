import React, { useEffect,useState } from 'react'
import axios from 'axios';



const Data = () => {

const[child,setChild]=useState([])
    useEffect(() => {
        const getData = async()=>{
          const res = await axios.get("http://localhost:5000/api/transactions")
          setChild(res.data)
          console.log('child',child.AllData);
        };
        getData()
        }, [])

       
  return (
    <div>
    {/* {child.AllData.map((el)=>
    <div>hhhh</div>
    )} */}
    </div>
  )
}

export default Data