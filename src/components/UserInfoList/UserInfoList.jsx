import React from "react";
import "./UserInfoList.scss";

export const UserInfoList = ({ user }) => {
  const checkDataAvailability = (item) => {
    return item === null ? "The data is missing" : item;
  };

  return (
    <ul className="userInfoList">
      <li className="userInfoItem">
        <span>Name: </span>
        {checkDataAvailability(user?.name)}
      </li>
      <li className="userInfoItem">
        <span>Login: </span>
        <a href={`https://github.com/${user?.login}`} target="_blank">
          {checkDataAvailability(user?.login)}
        </a>
      </li>
      <li className="userInfoItem">
        <span>Repos: </span>
        {checkDataAvailability(user?.public_repos)}
      </li>
      <li className="userInfoItem">
        <span>Bio: </span>
        {checkDataAvailability(user?.bio)}
      </li>
    </ul>
  );
};
