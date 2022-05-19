import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom';

const EditPet = (props) => {
    const [petInfo, setPetInfo] = useState({
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
            setPetInfo({
                ...petInfo,
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
        setPetInfo({
            ...petInfo,
            [e.target.name] : e.target.value
        })
        console.log(petInfo)
    }

    const updatePet = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${_id}`, petInfo)
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
            .catch(err => console.log(err, petInfo))
    }

    return (
        <>
            <div className="d-flex justify-content-between">
                <h3>Edit {petInfo.name}</h3>
                <Link to='/' className="btn btn-info btn-outline-dark" style={{color: "white"}}>back to home</Link>
            </div>
            <div className="mt-2 border border-dark">
                <form className="d-flex justify-content-between" onSubmit={updatePet} >
                    <div className="pl-2 pb-2">
                        <div>
                            <label htmlFor="name">Pet Name:</label><br />
                            <input type="text" name="name" value={petInfo.name} onChange={changeHandler} /><br />
                        </div>
                        <p className="text-danger">{errors.name?.message}</p>
                        <div>
                            <label htmlFor="type">Pet Type:</label><br />
                            <input type="text" name="type" value={petInfo.type} onChange={changeHandler} /><br />
                        </div>
                        <p className="text-danger">{errors.type?.message}</p>
                        <div>
                            <label htmlFor="description">Pet Description:</label><br />
                            <input type="text" name="description" value={petInfo.description} onChange={changeHandler} /><br /><br />
                        </div>
                        <p className="text-danger">{errors.description?.message}</p>
                        <input type="submit" style={{color: "white"}} className="btn btn-dark btn-outline-info" value="Edit Pet" />
                    </div>
                    <div className="pr-2 pb-3">
                        <p>Skills (optional):</p>
                        <label htmlFor="skill1">Skill 1:</label><br />
                        <input type="text" name="skill1" value={petInfo.skill1} onChange={changeHandler} /><br />
                        <label htmlFor="skill2">Skill 2:</label><br />
                        <input type="text" name="skill2" value={petInfo.skill2} onChange={changeHandler} /><br />
                        <label htmlFor="skill3">Skill 3:</label><br />
                        <input type="text" name="skill3" value={petInfo.skill3} onChange={changeHandler} />
                    </div>
                </form>
            </div>
        </>
    )

}

export default EditPet;