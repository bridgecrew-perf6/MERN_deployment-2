import React from 'react';

const Form = (props) => {

    const {formInfo, submitHandler, changeHandler, errors} = props;

    return(
        <>
            <form className="d-flex justify-content-between" onSubmit={submitHandler} >
                    <div className="pl-2 pb-2">
                        <div>
                            <label htmlFor="name">Pet Name:</label><br />
                            <input type="text" name="name" value={formInfo.name} onChange={changeHandler} /><br />
                        </div>
                        <p className="text-danger">{errors.name?.message}</p>
                        <div>
                            <label htmlFor="type">Pet Type:</label><br />
                            <input type="text" name="type" value={formInfo.type} onChange={changeHandler} /><br />
                        </div>
                        <p className="text-danger">{errors.type?.message}</p>
                        <div>
                            <label htmlFor="description">Pet Description:</label><br />
                            <input type="text" name="description" value={formInfo.description} onChange={changeHandler} /><br /><br />
                        </div>
                        <p className="text-danger">{errors.description?.message}</p>
                        <input type="submit" style={{color: "white"}} className="btn btn-dark btn-outline-info" value={props.buttonValue} />
                    </div>
                    <div className="pr-2 pb-3">
                        <p>Skills (optional):</p>
                        <label htmlFor="skill1">Skill 1:</label><br />
                        <input type="text" name="skill1" value={formInfo.skill1} onChange={changeHandler} /><br />
                        <label htmlFor="skill2">Skill 2:</label><br />
                        <input type="text" name="skill2" value={formInfo.skill2} onChange={changeHandler} /><br />
                        <label htmlFor="skill3">Skill 3:</label><br />
                        <input type="text" name="skill3" value={formInfo.skill3} onChange={changeHandler} />
                    </div>
                </form>
        </>
    )
}

export default Form;