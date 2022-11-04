import React from 'react';

import { selectTask } from '../actions';
import TaskList from './TaskList';

import TaskDetail from './TaskDetail';
import MyForm from './FinalForm';
import { ResetTvTwoTone } from '@mui/icons-material';
import ResponsiveAppBar from './Nav';

import { Route, Routes } from 'react-router';
import House from './House';
import Job from './Job';
import Other from './Other';
import Contact from './Contact';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Routes>
      <Route path="/" element={<TaskList />} />
        <Route path="/House" element={<House />} />
        <Route path="/Job" element={<Job />} />
        <Route path="/Other" element={<Other />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <div className="ui container grid">
        <div className="ui row">
          
          <div className="column eight wide">
            <TaskDetail />
          </div>
          <div className="column eight wide">
            <MyForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
