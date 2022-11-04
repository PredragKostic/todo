//Action creator
export const selectTask = (task) => {
    //Return an action
    return {
      type: 'TASK_SELECTED',
      payload: task,
    };
  };
  