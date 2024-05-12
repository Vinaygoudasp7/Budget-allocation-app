import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

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

    return (
        <div className='alert alert-primary'>
            {totalbudget}
            <span>Budget: {currency}<input type='number' value={newBudget} onChange={(e) => setNewBudget(e.target.value)} onKeyDown={handelKeyPress} /></span>
        </div>
    );
};

export default CartValue;