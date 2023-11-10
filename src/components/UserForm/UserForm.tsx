// src/components/UserForm.tsx
import React, { useState } from 'react';
import { UserFormProps, User } from '../../../types';

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    isActive: false,
    role: 'user',
  });

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.checked }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...user, id: Math.random().toString() });
    setUser({
      id: '',
      name: '',
      email: '',
      isActive: false,
      role: 'user',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isActive"
          name="isActive"
          checked={user.isActive}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label" htmlFor="isActive">
          Active
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select
          className="form-select"
          id="role"
          name="role"
          value={user.role}
          onChange={handleChange}
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default UserForm;