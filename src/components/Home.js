import { useState } from 'react';
import axios from 'axios';

export default function Home(props) {
    const [profilename, setProfilename] = useState('');
    const [profiledetails, setProfiledetails] = useState('');
    const [errordetails, setErrordetails] = useState('');


    const handleSubmit2 = (event) => {
        event.preventDefault();
        setProfiledetails('');
        setErrordetails('');
          axios.get(`http://localhost:8080/api/1/profile/${profilename}`)
          .then((response) => handleGoodResponse(response))
          .catch(err => {
            setErrordetails(`Profile not found`);
        });
      };

      const handleGoodResponse = (response) => {
        const personDetail = response.data;
        setProfiledetails(`Age : ${personDetail.age}, Country: ${personDetail.country}`);
      }

    return(
        <div className="mt-2">
            <h1>
                <u>Profile details</u>
                <br></br>
            </h1>
        <form onSubmit={handleSubmit2}>
          <label>
            Enter profile name to search:
            <input
              type="text"
              value={profilename}
              onChange={(e) => setProfilename(e.target.value)}
            />
          </label><input type="submit" value="Search" />

          <br></br>
           <div>
            <h4 style={{ color: 'green' }}>{profiledetails}</h4>
           </div>
           <div>
            <h4 style={{ color: 'red' }}>{errordetails}</h4>
           </div>
           <br></br>
        </form>
        </div>
    )
}
