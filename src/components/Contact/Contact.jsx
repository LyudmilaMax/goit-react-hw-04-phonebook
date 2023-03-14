import { Item, Button } from './Contact.styled';
import PropTypes from 'prop-types';

export function Contact({ id, name, number, onDelete }) {
  return (
    <Item>
      {name} : {number}
      <Button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
