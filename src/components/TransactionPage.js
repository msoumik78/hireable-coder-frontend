import VerticalNavbar from './NavBar';
import Title from './Title';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Transactions from './Transactions';


export default function TransactionPage(props) {
    const {state} = useLocation();
    const { id, name } = state; 
    const [data, setData] = useState([]);

    return(
        <>
        <div class="row flex-nowrap">
            <div className="col-4">
                <VerticalNavbar customerId={id} customerName={name}/>
            </div>
            <div className="col-8">
                <div className="container">
                    <div className="row content">
                        <div className="col-sm-9">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>                                                        
                        <Title customerName={name}/>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">From Account</th>
                                <th scope="col">To Account</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
                                </tr>
                            </thead>                        
                        <Transactions customerId={id}/>
                        </table>
                        </div>

                    </div>
            </div>
        </div>
       </div>  
    </>              
    )    
}    