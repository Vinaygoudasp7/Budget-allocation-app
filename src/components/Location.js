import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext)

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }

    return (
        <div className='alert alert-secondary d-flex flex-row'>
            <div className='mx-2 fs-5 fw-bolder'>Curency: </div> {
                <select className='form-select' name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
                    <option value=''>select</option>
                    <option value="₹">₹ India</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="£">£ Pound</option>
                </select>
            }

        </div>
    )
};

export default Location;