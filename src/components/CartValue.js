import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const { expenses, currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    const [totalbudget, setTotalBudget] = useState('')
    return (
        <div className='alert alert-primary'>
            <span>Budget: {currency}<input type='number' value={totalbudget} onChange={(e) => setTotalBudget(e.target.value)} /></span>
        </div>
    );
};

export default CartValue;