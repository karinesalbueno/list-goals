import React, { useState } from 'react';

import GoalList from './components/Goals/GoalList/GoalList';
import Input from './components/Goals/Input/Input';
import './App.css';
import Modal from './components/modal/modal';

const App = () => {
  const [Goals, setGoals] = useState([
    { text: 'Do all exercises!', id: '1' },
    { text: 'Finish course jest', id: '2' }
  ]);
  const [modalOpen, setModalOpen] = useState(false)

  const addGoalHandler = enteredText => {
    setGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      if (enteredText.length < 4 ){
        setModalOpen(true)
      }    
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (Goals.length > 0) {
    content = (
      <GoalList items={Goals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div className='container'>
      {modalOpen && <Modal onClick={()=>{setModalOpen(false)}} isOpen={false} message="Você inseriu uma tarefa inválida. Escreva mais rs" />
}
      <section id="goal-form">
        <Input onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
