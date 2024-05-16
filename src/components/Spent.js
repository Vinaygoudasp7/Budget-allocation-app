import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Spent = () => {
    const { currency,expenses } = useContext(AppContext)
    const amt = expenses.reduce((total, expense) => {
        return total + parseInt(expense.quantity)
    }, 0)
    return (
        <div className='spenttheam'>
            <div className='m-1 fw-bolder fs-5'>
                <span className='text-light'>Spent so far: {currency} {amt}</span>
            </div>
        </div>
    )
}

export default Spent
