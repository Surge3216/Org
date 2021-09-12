import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../util/hooks';
import { UserContext } from '../../context/auth'
import axios from 'axios';

export default function BioForm() {
    const {user} = useContext(UserContext)
    const { onChange, onSubmit, values } = useForm(updateBio, {
        city: '',
        aboutMe: '',
        state: '',
        age: ''
      });

      function postBio(){
          const bioInfo = {
              userId: user.userId,
              username: user.username,
              city: values.city ,
              aboutMe: values.aboutMe ,
              state: values.state ,
              age: values.age
          }
          axios.post( "/api/bio/", bioInfo)
          .then(function(response){
            console.log(response)
          })
          .catch(err => {
            console.log(err);
        })
      }

      function updateBio(){
          postBio()
      }
    return (
        <div className= "black">
<div className="field">
  <label className="label">Age</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" 
          label="Age"
          placeholder="Age"
          name="age"
          type="text"
          value={values.age}
          onChange={onChange}/>
  </div>
</div>

{/* <div className="field">
  <label className="label">Age</label>
  <div className="control">
    <div className="select"> */}

        {/* Build Function */}
      {/* <select>
      <option value="---">---</option>
        <option>18</option>
      </select>
    </div>
  </div>
</div> */}

<div className="field">
  <label className="label">City</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" 
          label="City"
          placeholder="City"
          name="city"
          type="text"
          value={values.city}
          onChange={onChange}/>
  </div>
</div>

<div className="field">
  <label className="label">State</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" 
          label="State"
          placeholder="State"
          name="state"
          type="text"
          value={values.state}
          onChange={onChange}/>
  </div>
</div>

{/* <div className="field">
  <label className="label">State</label>
  <div className="control">
    <div className="select">
      <select onSelect={onChange} name="state">
        <option eventKey="---">---</option>
        <option eventKey="Alabama">Alabama</option>
        <option eventKey="Alaska">Alaska</option>
        <option eventKey="Arizona">Arizona</option>
        <option eventKey="Arkansas">Arkansas</option>
        <option eventKey="California">California</option>
        <option eventKey="Colorado">Colorado</option>
        <option eventKey="Connecticut">Connecticut</option>
        <option eventKey="Delaware">Delaware</option>
        <option eventKey="District of Columbia">District of Columbia</option>
        <option eventKey="Florida">Florida</option>
        <option eventKey="Georgia">Georgia</option>
        <option eventKey="Guam">Guam</option>
        <option eventKey="Hawaii">Hawaii</option>
        <option eventKey="Idaho">Idaho</option>
        <option eventKey="Illinois">Illinois</option>
        <option eventKey="Indiana">Indiana</option>
        <option eventKey="Iowa">Iowa</option>
        <option eventKey="Kansas">Kansas</option>
        <option eventKey="Kentucky">Kentucky</option>
        <option eventKey="Louisiana">Louisiana</option>
        <option eventKey="Maine">Maine</option>
        <option eventKey="Maryland">Maryland</option>
        <option eventKey="Massachusetts">Massachusetts</option>
        <option eventKey="Michigan">Michigan</option>
        <option eventKey="Minnesota">Minnesota</option>
        <option eventKey="Mississippi">Mississippi</option>
        <option eventKey="Missouri">Missouri</option>
        <option eventKey="Montana">Montana</option>
        <option eventKey="Nebraska">Nebraska</option>
        <option eventKey="Nevada">Nevada</option>
        <option eventKey="New Hampshire">New Hampshire</option>
        <option eventKey="New Jersey">New Jersey</option>
        <option eventKey="New Mexico">New Mexico</option>
        <option eventKey="New York">New York</option>
        <option eventKey="North Carolina">North Carolina</option>
        <option eventKey="North Dakota">North Dakota</option>
        <option eventKey="Northern Marianas Islands">Northern Marianas Islands</option>
        <option eventKey="Ohio">Ohio</option>
        <option eventKey="Oklahoma">Oklahoma</option>
        <option eventKey="Oregon">Oregon</option>
        <option eventKey="Pennsylvania">Pennsylvania</option>
        <option eventKey="Puerto Rico">Puerto Rico</option>
        <option eventKey="Rhode Island">Rhode Island</option>
        <option eventKey="South Carolina">South Carolina</option>
        <option eventKey="South Dakota">South Dakota</option>
        <option eventKey="Tennessee">Tennessee</option>
        <option eventKey="Texas">Texas</option>
        <option eventKey="Utah">Utah</option>
        <option eventKey="Vermont">Vermont</option>
        <option eventKey="Virginia">Virginia</option>
        <option eventKey="Virgin Islands">Virgin Islands</option>
        <option eventKey="Washington">Washington</option>
        <option eventKey="West Virginia">West Virginia</option>
        <option eventKey="Wisconsin">Wisconsin</option>
        <option eventKey="Wyoming">Wyoming</option>
        
      </select>
    </div>
  </div>
</div> */}

<div className="field">
  <label className="label">Why will you Win?</label>
  <div className="control">
    <textarea className="textarea has-fixed-size" 
    label="Why will you Win?"
    placeholder="Why will you Win?"
    name="aboutMe"
    value={values.aboutMe}
    onChange={onChange}
    ></textarea>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <Link to="/" className="Link button is-link" onClick={onSubmit} >Submit</Link>
  </div>
  <div className="control">
    <Link 
    to="/"
    className="button is-link is-light">Cancel</Link>
  </div>
</div>
        </div>
    )
}
