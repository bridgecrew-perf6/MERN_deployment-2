import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams, useHistory} from 'react-router-dom';

const OnePet = () => {
    const[petInfo, setPetInfo] = useState({});

    const {_id} = useParams();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(res => {
            console.log(res.data.results);
            setPetInfo(res.data.results[0]);
        })
        .catch(err => console.log(err));
    }, [])

    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                console.log('this is the res ->', res);
                history.push('/')
            })
            .catch(err => console.log('this is the error ->', err))
    }

    return (
        <>
            <div className="d-flex justify-content-between mb-2">
                <div>
                    <h3>{petInfo.name}</h3>
                </div>
                <div>
                    <Link to='/' className="btn btn-info btn-outline-dark" style={{color: "white"}}>back to home</Link>
                    <button onClick={deletePet} className="btn btn-info btn-outline-dark" style={{color: "white"}}>Adopt {petInfo.name}</button>
                </div>
            </div>
            <div className="border border-dark d-flex">
                <div className="pl-1">
                    <h4>Pet Type:</h4>
                    <h4>Description:</h4>
                    <h4>Skills:</h4>
                </div>
                <div className="pl-5">
                    <h4>{petInfo.type}</h4>
                    <h4>{petInfo.description}</h4>
                    <h4>{petInfo.skill1}</h4>
                    <h4>{petInfo.skill2}</h4>
                    <h4>{petInfo.skill3}</h4>
                </div>
            </div>
        </>
    )

}

export default OnePet;