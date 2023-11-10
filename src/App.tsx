import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';

const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  const addUser = (user: any) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <>
    </>
  );
};

export default App;
