import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        
        if(newBudget > 20000) {
            alert("The value cannot exceed £20000");
            return;
        } else if(newBudget < totalExpenses) {
          alert("You cannot reduce the budget value lower than the spending");
           return;
        }
        
        setNewBudget(event.target.value);
        console.log(totalExpenses)
        console.log(newBudget);
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
