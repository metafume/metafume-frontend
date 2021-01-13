import PropTypes from 'prop-types';

const ConditionalWrapper = ({ Wrapper, children }) => <Wrapper>{children}</Wrapper>;

ConditionalWrapper.propTypes = {
  Wrapper: PropTypes.elementType.isRequired,
  children: PropTypes.node,
};

export default ConditionalWrapper;
