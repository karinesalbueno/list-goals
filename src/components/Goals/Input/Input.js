import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const Input = props => {
  const GoalInputRef = useRef();
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false)
      return;
    }
    props.onAddGoal(enteredValue);
  };

  console.log(GoalInputRef.current.value);
  
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isValid && 'invalid'}>
        <label>Goals</label>
        <input type="text" onChange={goalInputChangeHandler} ref={GoalInputRef} id="inputText" />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
export default Input;


const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

 & input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

 &.input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {
  border-color: red;
  background-color: #ffd7d7;
}

`