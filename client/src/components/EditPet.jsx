import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom';
import Form from './Form'

const EditPet = (props) => {
    const [formInfo, setFormInfo] = useState({
        name: '',
        type: '',
        description: '',
        skill1: '',
        skill2: '',
        skill3: ''
    })

    const [errors, setErrors] = useState({});
    const {_id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(res => {
            console.log('this is the res ->', res);
            setFormInfo({
                ...formInfo,
                name: res.data.results[0].name,
                type: res.data.results[0].type,
                description: res.data.results[0].description,
                skill1: res.data.results[0].skill1,
                skill2: res.data.results[0].skill2,
                skill3: res.data.results[0].skill3

            })
        })
        .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
        console.log(formInfo)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${_id}`, formInfo)
            .then(res => {
                console.log('this is the updated res', res)
                // if there are validation errors, then save them inside state variable obj
                // res.data.error == presence of validation errors
                if(res.data.error){
                    // res.data.error.errors == actual validation errors
                    setErrors(res.data.error.errors);
                }
                else {
                    history.push(`/`)
                }
            })
            .catch(err => console.log(err, formInfo))
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <h3>Edit {formInfo.name}</h3>
                <Link to='/' className="btn btn-info btn-outline-dark" style={{color: "white"}}>back to home</Link>
            </div>
            <div className="mt-2 border border-dark">
                <Form formInfo={formInfo} changeHandler={changeHandler} submitHandler={submitHandler} errors={errors} buttonValue="Edit Pet">

                </Form>
            </div>
        </>
    )

}

export default EditPet;