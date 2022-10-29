import { InputFilter, FilterP } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <FilterP>Find contacts by name</FilterP>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={({ target }) => onChange(target.value)}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
