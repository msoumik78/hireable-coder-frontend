import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function AccountSummary(props) {
    const [list, setList] = useState([]);
    const customerId = props.customerId;
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("jwt-token");
        axios
          .get(`http://localhost:8080/api/1/products/${customerId}` , {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then((res) => {
            setList(res.data)
          })
          .catch((error) => {
            console.log(error.message)
            navigate('/login');
          });             
      },  [])

    return(
        <div className="row">
        <div className="col-sm-4">
            {list.map(item =>
                <>
                <div className="well border bg-info ">
                    <h3>{item.productName}</h3>
                    <h4>{item.productNumber}</h4> 
                    <h4>{item.productBalance}</h4>                                     
                </div>               
                <br/>
                <br/>                
                </>                
            )}
        </div>
    </div>
    )
    }    