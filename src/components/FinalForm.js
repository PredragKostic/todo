import React from 'react';
import { Field, Form } from 'react-final-form';

const MyForm = () => {
  return (
    <Form
      onSubmit={(formObj) => {
        console.log(formObj);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="Title">
            {({ input }) => (
              <input placeholder="Title" type="text" {...input} />
            )}
          </Field>
          <Field name="Department">
            {({ input }) => (
              <input placeholder="Department" type="text" {...input} />
            )}
          </Field>
          {/* <select name="Department" placeholder="Department">
            <option>Job</option>
            <option>House</option>
            <option>Other</option>
          </select> */}

          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  );
};

export default MyForm;
