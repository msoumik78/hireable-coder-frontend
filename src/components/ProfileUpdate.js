import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import VerticalNavbar from './NavBar';
import Title from './Title';
import Profile from './Profile';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';


export default function ProfileUpdate(props) {
    const {state} = useLocation();
    const { id, name } = state; 
    const [data, setData] = useState([]);
 

    useEffect(() => {
        axios
          .get(`http://localhost:8080/api/1/bank-customers/${id}`)
          .then((res) => {
            setData(res.data)
          })
      },  [])

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
                        <Profile userId={id} email={data.email} address={data.address} city={data.city} state={data.state} profession={data.profession}/>
                        </div>

                    </div>
            </div>
        </div>
       </div>  
    </>              
    )
}