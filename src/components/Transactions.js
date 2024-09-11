import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Transactions(props) {
    const [list, setList] = useState([]);
    const customerId = props.customerId;

    useEffect(() => {
        axios
          .get(`http://localhost:8085/api/1/transactions/${customerId}`)
          .then((res) => {
            setList(res.data)
          })
      },  [])
    return(
        <tbody>
            {list.map(item =>
                <tr>
                    <th scope="row">{item.fromAccount}</th>
                    <td>{item.toAccount}</td>
                    <td>{item.amount}</td>
                    <td>{item.transactionDate}</td>
                </tr>
            )}                
        </tbody>     
    )
}    