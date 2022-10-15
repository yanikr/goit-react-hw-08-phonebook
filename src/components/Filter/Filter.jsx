import {InputFilter, FilterP} from './Filter.styled'

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
