import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 42px;
    margin-bottom: 40px;
  }
`;

const Login = ({ onLogin }) => {
  return (
    <Wrapper>
      <h1>Login</h1>
      <Button onClick={onLogin}>Login with Google</Button>
    </Wrapper>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
