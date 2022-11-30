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

  const authenticate = (credentials: Credentials): boolean => {
    if (credentials.username !== 'user') return false
    if (credentials.password !== 'password') return false
    console.log('passes', new Date(credentials.dateOfBirth) == new Date(2000, 0, 1));
    if (new Date(credentials.dateOfBirth).toLocaleDateString() !== new Date(2000, 0, 1).toLocaleDateString()) return false
    setAuthenticated(true);
    return true;
  }
  return <SignInView authenticate={authenticate} />;
};

export default SignInContainer;
