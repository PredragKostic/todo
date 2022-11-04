import React from 'react';
import { connect } from 'react-redux';
import { selectTask } from '../actions';

class TaskList extends React.Component {
  renderList() {
    return this.props.tasks?.map((task) => {
      return (
        <div className="item" key={task.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectTask(task)}
            >
              Select
            </button>
          </div>
          <div className="content">{task.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { selectTask })(TaskList);
