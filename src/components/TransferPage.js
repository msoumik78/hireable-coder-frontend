import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import VerticalNavbar from './NavBar';
import Title from './Title';
import { useLocation } from 'react-router-dom';
import Transfer from './Transfer';


export default function TransferPage(props) {
    const {state} = useLocation();
    const { id, name } = state; 

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
                        <Transfer customerId={id}/>
                        </div>

                    </div>
            </div>
        </div>
       </div>  
    </>              
    )
}