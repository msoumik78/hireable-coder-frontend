import { useState } from 'react';
import axios from 'axios';

export default function Transfer(props) {
    const customerId = props.customerId;

    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');
    const [tranDate, setTranDate] = useState('');
    const [error, setError] = useState('');        
    const [success, setSuccess] = useState('');       

    const handleSubmit2 = (event) => {
        event.preventDefault();
        const userData = {
            "customerId": customerId,
            "fromAccount": fromAccount,
            "toAccount": toAccount,
            "amount" : amount,
            "transactionDate": tranDate    
          };
          axios.post("http://localhost:8085/api/1/transactions", userData)
          .then((response) => {
            setSuccess('Transfer success !!');
          })
          .catch((error) => {
            setError('Transfer failed !!');            
            console.log(error.message)
          });       
      };        


    return(
        <form onSubmit={handleSubmit2}>
        <div className="form-row">
            <div className="form-group col-md-6">
            <label for="inputEmail">From Account</label>
            <input type="text" className="form-control" name="fromAccount" onChange={(e) => setFromAccount(e.target.value)}/>
            </div>
        </div>
        <div className="form-group">
            <label for="inputAddress">To Account</label>
            <input type="text" className="form-control" name="toAccount" onChange={(e) => setToAccount(e.target.value)}/>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputCity">Amount</label>
                <input type="number" className="form-control" name="amount" onChange={(e) => setAmount(e.target.value)}/>
            </div>
        </div>
        <div>
            <h4 style={{ color: 'green' }}>{success}</h4>
        </div>                   
        <div>
            <h4 style={{ color: 'red' }}>{error}</h4>
        </div>                  
            <button type="submit" className="btn btn-primary">Transfer</button>
    </form>
    )
}    