import React from 'react';
import TaskCard from './components/TaskCard';
import HabitTracker from './components/HabitTracker';

function App() {
  return (
    <div>
      <h1>Personal Productivity Manager</h1>
      <TaskCard />
      <HabitTracker />
    </div>
  );
}

export default App;
