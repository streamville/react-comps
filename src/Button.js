import PropTypes from 'prop-types';
import "./index.css";

function Button({ children, primary, secondary, success, warning, danger }) {
  // Check variation value logic
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!warning) +
    Number(!!success) +
    Number(!!danger);

  if (count > 1) {
    throw new Error(
      'Only one of primary, secondary, success, warning, danger can be true'
    );
  }

  return <button class="bg-red-500">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
};

export default Button;

