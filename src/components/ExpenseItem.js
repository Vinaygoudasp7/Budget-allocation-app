import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoMdClose } from "react-icons/io";


const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{Location}{parseInt(props.unitprice)}</td>
            <td>{Location}{parseInt(props.quantity) * parseInt(props.unitprice)}</td>
            <td>
                <button className='btn btn-outline-primary'>
                    <IoMdClose size='2em' color="black" onClick={handleDeleteItem}></IoMdClose>
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;