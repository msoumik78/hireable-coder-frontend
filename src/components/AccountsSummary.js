import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function AccountSummary(props) {
    const [list, setList] = useState([]);
    const customerId = props.customerId;

    useEffect(() => {
        axios
          .get(`http://localhost:8080/api/1/products/${customerId}`)
          .then((res) => {
            setList(res.data)
          })
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