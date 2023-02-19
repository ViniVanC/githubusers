import React from "react";
import { NotUser } from "../NotUser/NotUser";
import { UserInfoList } from "../UserInfoList/UserInfoList";
import "./UserCard.scss";

export const UserCard = ({ fadeIn, user, notUser }) => {
  return (
    <div className={`userCard ${fadeIn && "fadeIn"}`}>
      {notUser ? (
        <NotUser />
      ) : (
        <>
          <div className="userImage">
            <img src={user?.avatar_url} alt={`avatar-${user?.login}`} />
          </div>
          <UserInfoList user={user} />
        </>
      )}
    </div>
  );
};
