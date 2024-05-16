import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'


const CartValue = () => {
    const { expenses, currency, totalbudget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(totalbudget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    const updateTotalBudget = () => {
        const action = {
            type: "UPDATE_TOTAL_BUDGET",
            payload: newBudget
        }

        dispatch(action)
    }

    const handelKeyPress = (e) => {
        if (e.key == "Enter") {
            updateTotalBudget()
        }
    }
    const handelnewBuget = (e) => {
        const value = e.target.value
        if (value <= 20000) {
            setNewBudget(value)
        } else {
            window.alert('you reached maximum of your budget')
        }
    }
    return (
        <div className='budgettheam'>
            <div className='m-1 fw-bolder fs-5'>
                <span className='text-light d-flex flex-row'><div className='mx-2'>Budget: </div> {currency}<input className='form-control pt-1 ms-1' min='0' type='number' value={newBudget} onChange={(e) => handelnewBuget(e)} onKeyDown={handelKeyPress} step='10' /></span>
            </div>
        </div>
    );
};

export default CartValue;