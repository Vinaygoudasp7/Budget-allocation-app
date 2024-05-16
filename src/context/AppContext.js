import React, { createContext, useReducer } from 'react';

// 5. The reducer - this is used to update the state, based on the action
export const AppReducer = (state, action) => {
    let new_expenses = [];
    switch (action.type) {
        case 'ADD_QUANTITY':
            let updatedqty = false;
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    if (state.spentamt < state.totalbudget) {
                        expense.quantity = expense.quantity + action.payload.quantity;
                        updatedqty = true;
                    }else{
                        window.alert('You cannot reduce the budget value lower than the spending')
                    }
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'REMOVE_QUANTITY':
            let removedqyt = false
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.quantity = Math.max(0, expense.quantity - action.payload.quantity);
                    removedqyt = true;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'RED_QUANTITY':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.quantity = expense.quantity - action.payload.quantity;
                }
                expense.quantity = expense.quantity < 0 ? 0 : expense.quantity;
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };
        case 'DELETE_ITEM':
            state.expenses.map((expense) => {
                if (expense.name === action.payload.name) {
                    expense.quantity = 0;
                }
                new_expenses.push(expense);
                return true;
            })
            state.expenses = new_expenses;
            action.type = "DONE";
            return {
                ...state,
            };

        case 'CHG_CURRENCY':
            action.type = "DONE";
            state.currency = action.payload;
            return {
                ...state
            }

        case 'UPDATE_TOTAL_BUDGET':
            return {
                ...state, totalbudget: action.payload
            }

        default:
            return state;
    }
};

// 1. Sets the initial state when the app loads
const initialState = {
    expenses: [
        { id: "Marketing", name: 'Marketing', quantity: 0, unitprice: 500 },
        { id: "Finance", name: 'Finance', quantity: 0, unitprice: 300 },
        { id: "Sales", name: 'Sales', quantity: 0, unitprice: 400 },
        { id: "Human Resource", name: 'Human Resource', quantity: 0, unitprice: 600 },
        { id: "IT", name: 'IT', quantity: 0, unitprice: 200 },
    ],
    Location: '₹',
    totalbudget: 0
};

// 2. Creates the context this is the thing our components import and use to get the state
export const AppContext = createContext();

// 3. Provider component - wraps the components we want to give access to the state
// Accepts the children, which are the nested(wrapped) components
export const AppProvider = (props) => {
    // 4. Sets up the app state. takes a reducer, and an initial state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const totalExpenses = state.expenses.reduce((total, item) => {
        return (total = total + (item.unitprice * item.quantity));
    }, 0);
    state.CartValue = totalExpenses;

    const totalspentamt = state.expenses.reduce((total, expense) => {
        return total + parseInt(expense.quantity)
    }, 0)
    state.spentamt = totalspentamt

    const totalremaningamt = state.totalbudget - totalspentamt
    state.remaningamt = totalremaningamt

    // set total budget
    const setTotalBudget = (total) => {
        dispatch({ type: "UPDATE_TOTAL_BUDGET", payload: total })
    }
    return (
        <AppContext.Provider
            value={{
                expenses: state.expenses,
                CartValue: state.CartValue,
                dispatch,
                currency: state.currency,
                totalbudget: state.totalbudget,
                totalspentamt: state.spentamt,
                totalremaningamt: state.remaningamt,
                setTotalBudget
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};