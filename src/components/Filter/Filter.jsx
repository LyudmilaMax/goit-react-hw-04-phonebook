import { Input } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter ({ value, onChange }) {
  return (
    <label>
      <Input
        type="text"
        placeholder="Find contacts by name"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


