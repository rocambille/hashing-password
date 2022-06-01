import PropTypes from "prop-types";

export default function User({ data }) {
  return <p>{data.login}</p>;
}

User.propTypes = {
  data: PropTypes.shape({
    login: PropTypes.string.isRequired,
  }).isRequired,
};
