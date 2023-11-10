import React from 'react';
import {UserItemProps} from '../../../types';

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.email}</p>
        <p className="card-text">{`Active: ${user.isActive ? 'Yes' : 'No'}`}</p>
        <p className="card-text">{`Role: ${user.role}`}</p>
      </div>
    </div>
  );
};

export default UserItem;