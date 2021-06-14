import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './Button';
import Loading from './Loading';
import ErrorBox from './ErrorBox';

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

  p {
    width: 300px;
    line-height: 22px;
    font-size: 18px;
    margin-top: 20px;
  }
`;

const Login = ({ onLogin, loading, error }) => {
  return (
    <Wrapper>
      <h1>Login</h1>
      {loading ? <Loading /> : <Button onClick={onLogin}>Login with Google</Button>}
      {error && <ErrorBox message={error.message} />}
    </Wrapper>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

export default Login;
