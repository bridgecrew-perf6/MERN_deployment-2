import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const PetForm = (props) => {
    const [formInfo, setFormInfo] = useState({
        name: '',
        type: '',
        description: '',
        skill1: '',
        skill2: '',
        skill3: ''
    })

    // state variable in which to store validation errors
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
        // console.log(formInfo);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', formInfo)
        .then(res => {
            console.log('this is the res: ', res);

            if(res.data.error){
                // == actual individual validation errors
                setErrors(res.data.error.errors)
            }
            else{
                history.push('/')
            }
        })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <h3>Know a pet needing a home?</h3>
                <Link to='/' className="btn btn-info btn-outline-dark" style={{color: "white"}}>back to home</Link>
            </div>
            <div className="mt-2 border border-dark">
                <form className="d-flex justify-content-between" onSubmit={submitHandler} >
                    <div className="pl-2 pb-2">
                        <div>
                            <label htmlFor="name">Pet Name:</label><br />
                            <input type="text" name="name" onChange={changeHandler} /><br />
                        </div>
                        <p className="text-danger">{errors.name?.message}</p>
                        <div>
                            <label htmlFor="type">Pet Type:</label><br />
                            <input type="text" name="type" onChange={changeHandler} /><br />
                        </div>
                        <p className="text-danger">{errors.type?.message}</p>
                        <div>
                            <label htmlFor="description">Pet Description:</label><br />
                            <input type="text" name="description" onChange={changeHandler} /><br /><br />
                        </div>
                        <p className="text-danger">{errors.description?.message}</p>
                        <input type="submit" style={{color: "white"}} className="btn btn-dark btn-outline-info" value="Add Pet" />
                    </div>
                    <div className="pr-2 pb-3">
                        <p>Skills (optional):</p>
                        <label htmlFor="skill1">Skill 1:</label><br />
                        <input type="text" name="skill1" onChange={changeHandler} /><br />
                        <label htmlFor="skill2">Skill 2:</label><br />
                        <input type="text" name="skill2" onChange={changeHandler} /><br />
                        <label htmlFor="skill3">Skill 3:</label><br />
                        <input type="text" name="skill3" onChange={changeHandler} />
                    </div>
                </form>
            </div>
        
        </>
    )

}

export default PetForm;