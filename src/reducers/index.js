import { combineReducers } from 'redux';

const taskReducer = () => {
  return [
    { title: 'Practise react', department: 'Job' },
    { title: 'Vacuum the house', department: 'House' },
    { title: 'Hit a gym', department: 'Other' },
    { title: 'Keep practicing react', department: 'Job' },
  ];
};

const selectedTaskReducer = (selectedTask = null, action) => {
  if (action.type === 'TASK_SELECTED') {
    return action.payload;
  }
  return selectedTask;
};

export default combineReducers({
  tasks: taskReducer,
  selectedTask: selectedTaskReducer,
});
