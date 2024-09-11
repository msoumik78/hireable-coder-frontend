import { useState } from 'react';
import axios from 'axios';


export default function Profile(props) {
    const userId = props.userId;

    let [email, setEmail] = useState(props.email);
    let [address, setAddress] = useState(props.address);
    let [city, setCity] = useState(props.city);
    let [state, setState] = useState(props.state);
    let [profession, setProfession] = useState(props.profession);

    const [error, setError] = useState('');        
    const [success, setSuccess] = useState('');        

      const handleSubmit2 = (event) => {
        event.preventDefault();
        const userData = {
            "email": email || props.email,
            "address": address || props.address,
            "city": city || props.city,
            "profession": profession || props.profession,     
            "state" : state || props.state       
          };
          axios.put(`http://localhost:8080/api/1/bank-customers/${userId}`, userData)
          .then((response) => {
            setSuccess('Profile updated successfully');
            console.log(response.data)
          })
          .catch((error) => {
            setError('Error in profile update');            
            console.log(error.message)
          });       
      };        



    return(
            <form onSubmit={handleSubmit2}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input type="email" className="form-control" name="email" value={email || props.email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" name="address" value={address || props.address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" name="city" value={city || props.city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputCity">State</label>
                        <input type="text" className="form-control" name="state" value={state || props.state} onChange={(e) => setState(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputZip">Profession</label>
                        <input type="text" className="form-control" name="profession" value={profession  || props.profession} onChange={(e) => setProfession(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <h4 style={{ color: 'green' }}>{success}</h4>
                </div>                   
                <div>
                    <h4 style={{ color: 'red' }}>{error}</h4>
                </div>                  
                    <button type="submit" className="btn btn-primary">Update profile</button>
            </form>
    )
}    