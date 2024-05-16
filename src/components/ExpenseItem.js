import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from 'react-icons/fa'

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };

    const handelIncreseBy10 = (depname) => {
        dispatch({
            type: "ADD_QUANTITY",
            payload: {
                name: depname,
                quantity: 10
            }
        })
    }
    const handelDecreseBy10 = (depname) => {
        dispatch({
            type: "REMOVE_QUANTITY",
            payload: {
                name: depname,
                quantity: 10
            }
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.quantity}</td>
            <td><button className='btn btn-light' onClick={() => handelIncreseBy10(props.name)}><FaPlus color='green' /></button></td>
            <td><button className='btn btn-light' onClick={()=>handelDecreseBy10(props.name)}><FaMinus color='red' /></button></td>
            <td>
                <button className='btn btn-light fs-4 fw-bolder' >
                    <IoMdClose color="red" onClick={handleDeleteItem}></IoMdClose>
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;