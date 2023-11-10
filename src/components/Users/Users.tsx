import React from 'react';
import UserItem from '../UserItem/UserItem';
import { UsersProps } from '../../../types';

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;