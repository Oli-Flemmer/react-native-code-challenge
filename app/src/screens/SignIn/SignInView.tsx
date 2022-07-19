import React from 'react';
import style from './SignInViewStyles';
import { Flex, Text } from '@flemmer-digital/mobile-app-components';
import { Credentials } from './SignInContainer'

interface Props {
  authenticate: (credentials: Credentials) => void
}

const SignInView = ({ authenticate }: Props): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      direction="column"
      style={style.outerContainer}>
      <Text>Implement authentication here</Text>
    </Flex>
  );
};

export default SignInView;
