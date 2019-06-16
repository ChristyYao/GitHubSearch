import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input
        style={{ margin: "20px auto", display: "block", width: "150px", flex: 1}}
        type="text"
        name="username"
        placeholder="Enter a GitHub username"
      />
      <button>Submit</button>
    </form>
  );
}

export default UserForm;
