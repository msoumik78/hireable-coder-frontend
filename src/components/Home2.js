import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useLocation } from 'react-router-dom';
import VerticalNavbar from './NavBar';
import Title from './Title';
import AccountSummary from './AccountsSummary';



export default function Home2(props) {
    const {state} = useLocation();
    const { id, name } = state; // Read values passed on state

    return(
        <>
        <div className="row flex-nowrap">
            <div className="col-4">
                <VerticalNavbar/>
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
                        <AccountSummary customerId={id} />
                        </div>

                    </div>
            </div>
        </div>
       </div>  
    </>              
    )
}