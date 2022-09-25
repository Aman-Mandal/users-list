import React from "react";
import classes from "./UserCard.module.css";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const UserCard = ({ firstName, lastName, avatar, email }) => {
  return (
    <div className={classes.card}>
      <img className={classes.avatar} src={avatar} alt="avatar" />
      <div className={classes.content}>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{email}</p>
      </div>
      <div className={classes.socials}>
        <AiFillTwitterCircle className={classes.social} />
        <AiFillInstagram className={classes.social} />
        <BsFacebook className={classes.social} />
      </div>
    </div>
  );
};

export default UserCard;
