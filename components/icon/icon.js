import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/styles/colors';

const IconComponent = (props) => <Icon {...props} />;

IconComponent.defaultProps = {
  size: 30,
  color: colors.textOnPrimary,
};

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

export default IconComponent;
