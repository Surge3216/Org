import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../util/hooks';
import axios from 'axios';

export default function ChallengeForm() {

    const { onChange, onSubmit, values } = useForm(postChallenge, {
        title: '',
        description: '',
        dueDate: '',
        coverImg: ''
      });

      function challenge(){
        const challengeInfo = {
            title: values.title ,
            description: values.description ,
            dueDate: values.dueDate ,
            coverImg: values.coverImg,
            madeAt: new Date().toISOString()
        }
        axios.post("/api/challenge/", challengeInfo)
        .then(function(response){
          window.location.href = "/challenges"
        })
        .catch(err => {
          console.log(err);
      })
    }

      function postChallenge(){
        challenge()
    }

    return (
        <div className= "black p-5">
<div className="field">
  <label className="label">Challenge Name</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" 
          label="Challenge Name"
          placeholder="Challenge Name"
          name="title"
          type="text"
          value={values.title}
          onChange={onChange}
       />
  </div>
</div>

<div className="field">
  <label className="label">Due By:</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" 
          label="Due By:"
          placeholder="Due By:"
          name="dueDate"
          type="text"
          value={values.dueDate}
          onChange={onChange}/>

  </div>
</div>

<div className="field">
  <label className="label">Image url:</label>
  <div className="control has-icons-left has-icons-right">
    <input className="input" 
          label="Image url:"
          placeholder="Image url:"
          name="coverImg"
          type="text"
          value={values.coverImg}
          onChange={onChange}/>

  </div>
</div>

<div className="field">
  <label className="label">Challenge Description </label>
  <div className="control">
    <textarea className="textarea has-fixed-size" 
    label="Challenge Description"
    placeholder="Challenge Description"
    name="description"
    value={values.description}
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
    to="/challenges"
    className="button is-link is-light">Cancel</Link>
  </div>
</div>
        </div>
    )
}
