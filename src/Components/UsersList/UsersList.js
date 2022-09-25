import React from "react";
import classes from "./UsersList.module.css";
import UserCard from "../UserCard/UserCard";

const UsersList = ({ users }) => {
  return (
    <div className={classes["users-list"]}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          avatar={user.avatar}
          firstName={user.first_name}
          lastName={user.last_name}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default UsersList;
