import React from 'react';
import { connect } from 'react-redux';

const TaskDetail = ({ task }) => {
  if (!task) {
    return <div>Select a task</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {task.title}
        <br />
        Department: {task.department}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { task: state.selectedTask };
};

export default connect(mapStateToProps)(TaskDetail);