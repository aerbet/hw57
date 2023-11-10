export interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: 'user' | 'editor' | 'administrator';
}

export interface UserFormProps {
  onSubmit: (user: User) => void;
}

export interface UsersProps {
  users: User[];
}

export interface UserItemProps {
  user: User;
}