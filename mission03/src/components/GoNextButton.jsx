import React from 'react';
import { Link } from 'react-router-dom';

function GoNextButton() {
  return (
    <button type="button">
      <Link to="getbirthyear">진행하기</Link>
    </button>
  );
}

export default GoNextButton;
