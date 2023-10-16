import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Final() {
    const params = useParams();
    const { id } = params;

    const [userdata,SetUserData] = useState({});
    const {items} = userdata;

    useEffect(()=>{
        const fetch = async() =>{
            const data = await axios.get(`http://localhost:5000/api/user/final/${id}`);
            SetUserData(data.data[0]);
        }
        fetch();
    },[id])

    // console.log(userdata);

    return(
        <>
        <div className="container">
        <div className="card">
            <h1 className="mr-10">Name : {userdata.name}</h1>
            <h3 className="mr-10">ID : {userdata["nor-id"]}</h3>
            <p className="mr-10">address : {userdata.address}</p>
            <p className="mr-10">pincode : {userdata.pincode}</p>
            {items && items.map((item,index)=>{
                return(
                    <p key={index} className="mr-10">item {index+1} {item}</p>
                )
            })}
        </div>
        </div>
        </>
    )
}

export default Final