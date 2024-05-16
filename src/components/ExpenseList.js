import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses, dispatch } = useContext(AppContext);

    
    return (
        <table className='table table-bordered border fs-5 border-2 text-center w-75 m-auto border-black rounded table-hover'>
            <thead className="thead-light table-primary">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increased by 10</th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;