import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Remaining = () => {
    const { currency, expenses, totalbudget } = useContext(AppContext)
    console.log(expenses)
    const amt = expenses.reduce((total, expense) => {
        return total + parseInt(expense.quantity)
    }, 0)
    
    const totalremainingamt = parseInt(totalbudget) - amt

    return (
        <div className='remainingtheam'>
            <div className='m-1 fw-bolder fs-5'>
                <span className='text-light'>Remaning: {currency} {totalremainingamt}</span>
            </div>
        </div>
    )
}

export default Remaining
