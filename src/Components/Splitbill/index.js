import React, { useState } from 'react';

const SplitBill = ({ selected }) => {
  const [amount, setAmount] = useState(0);
  const [yurExp, setYurExp] = useState(0);
  const [friendExp, setFriendExp] = useState(0);
  const [whoPays, setWhoPays] = useState('you');
  

  const splitHandler = () => {  
    const split = amount / 2;
    console.log(split);
  };
  return (
    <div>
      {/* Conditional rendering for selected friend */}
      {selected ? (
        <h1>Split a bill with {selected.name}</h1>
      ) : (
        <h1>Select a friend to split the bill</h1>
      )}

      <div>
        <h3>Amount</h3>
        <input 
          onChange={(e) => setAmount(e.target.value)} 
          type="number" 
          value={amount} 
        />
      </div>

      <div>
        <h3>Your Expense</h3>
        <input 
          onChange={(e) => setYurExp(e.target.value)} 
          type="number" 
          value={yurExp}
        />
      </div>

      <div>
        {/* Conditional check for selected friend */}
        <h3>{selected ? `${selected.name}'s Expense` : "Friend's Expense"}</h3>
        <input 
          onChange={(e) => setFriendExp(e.target.value)} 
          type="number" 
          value={friendExp}
        />
      </div>

      <div>
        <h3>Who is paying the bill?</h3>
        <select 
          onChange={(e) => setWhoPays(e.target.value)} 
          value={whoPays}
        >
          <option value="you">You</option>
          {/* Conditional check to prevent error */}
          {selected && <option value="friend">{selected.name}</option>}
        </select>
      </div>

      <button  onClick={splitHandler}>Split</button>
    </div>
  );
};

export default SplitBill;
