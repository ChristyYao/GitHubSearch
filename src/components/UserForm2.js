import React from 'react';

const UserForm2 = (props) => {
  return (
    <form onSubmit={props.getUser2}>
      <input
        style={{ margin: "20px auto", display: "block", width: "150px", flex: 1}}
        type="text"
        name="username2"
        placeholder="Enter a GitHub username"
      />
      <button>Submit</button>
    </form>
  );
}

export default UserForm2;
