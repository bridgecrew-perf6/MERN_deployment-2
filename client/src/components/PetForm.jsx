import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import Form from './Form'

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
                <Form changeHandler={changeHandler} submitHandler={submitHandler} formInfo={formInfo} errors={errors} buttonValue="Add Pet">

                </Form>
            </div>
        
        </>
    )

}

export default PetForm;