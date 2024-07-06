import React from 'react';

const TransactionLog = ({ transactions }) => {
  return (
    <div>
      <h2>Transaction Log</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction}</li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionLog;
