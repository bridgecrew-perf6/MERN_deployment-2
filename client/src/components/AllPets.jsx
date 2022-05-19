import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPets = (props) => {

    const [petList, setPetList] = useState([]);
    // const [adoptToggle, setAdoptToggle] = useState(false);

    const sortArray = (x, y) => {
        return x.type.localeCompare(y.type)
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                console.log ('this is the res ->', res);
                setPetList(res.data.results.sort(sortArray))
            })
            .catch(err => {
                console.log('error: ', err);
            })
    }, [])

    return (
        <>
        <div>
            <div className="d-flex justify-content-between mb-2">
                <h3>These pets are looking for a good home</h3>
                <Link to='/pets/new' className="btn btn-info btn-outline-dark" style={{color: "white"}}>add a pet to shelter</Link>
            </div>
            <div>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            petList.map((pet, idx) =>{
                                return (
                                    <tr key={idx}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>
                                            <div>
                                                <Link className="btn btn-dark btn-outline-info" style={{color: "white"}} to={`/pets/${pet._id}`}>details</Link>
                                                <Link className="btn btn-dark btn-outline-info" style={{color: "white"}} to={`/pets/edit/${pet._id}`}>edit</Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
        </div>
        </>
    )
}

export default AllPets;