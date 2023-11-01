import React from 'react';

const DeleteButton = ({ onDeleteDone }) => {
  return (
    <button onClick={onDeleteDone}>Delete </button>
  );
};

export default DeleteButton;

