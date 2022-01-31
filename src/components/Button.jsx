import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="button">
      {props.content}
    </button>
  );
};

Button.defaultProps = {
  content: "Button",
};

Button.propTypes = {
  content: PropTypes.string,
};

export default Button;
