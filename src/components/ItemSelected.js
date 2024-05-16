import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Alert from 'react-bootstrap/Alert';


const ItemSelected = (props) => {
    const { dispatch, totalbudget,currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [action, setAction] = useState('');
    const [showAlert, setShowAlert] = useState(false)

    const submitEvent = () => {

        const item = {
            name: name,
            quantity: parseInt(quantity),
        };

        if (action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
            if (parseInt(quantity) <= totalbudget) {
                dispatch({
                    type: 'ADD_QUANTITY',
                    payload: item,
                });
            } else {
                window.alert('Not enough budget')
            }
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text form-label fw-bold p-2" htmlFor="inputGroupSelect01">Department </label>
                    </div>
                    <div className='mx-1 p-1'>
                        <select className="custom-select form-select py-2 w-auto" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            <option value="Marketing" name="Marketing"> Marketing</option>
                            <option value="Finance" name="Finance">Finance</option>
                            <option value="Sales" name="Sales">Sales</option>
                            <option value="Human Resource" name="Human Resource">Human Resource</option>
                            <option value="IT" name="IT">IT</option>
                        </select>
                    </div>
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text form-label fw-bold" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <div className='mx-1 p-1'>
                        <select className="custom-select form-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                        </select>
                    </div>
                    <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px' }}></span>
                    <div className='fs-4 fw-bold'>{currency}</div>
                    <div className='p-1'>
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            className='form-control'
                            value={quantity}
                            style={{ size: 20 }}
                            onChange={(event) => setQuantity(event.target.value)}>
                        </input>
                    </div>
                    <button className="btn btn-primary" onClick={submitEvent}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemSelected;