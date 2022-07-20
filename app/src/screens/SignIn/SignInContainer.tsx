import React from 'react';

import SignInView from './SignInView';
export interface Credentials {
  username: string
  password: string
  dateOfBirth: Date
}

interface Props {
  setAuthenticated: (val: boolean) => void
}

const SignInContainer = ({ setAuthenticated }: Props) => {

  const authenticate = (credentials: Credentials) => {
    if (credentials.username !== 'user') return false
    if (credentials.password !== 'password') return false
    if (credentials.dateOfBirth !== new Date(2000, 0, 1)) return false
    setAuthenticated(true)
  }
  return <SignInView authenticate={authenticate} />;
};

export default SignInContainer;
