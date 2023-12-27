import css from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <label className={css.titleFilter}>
      Find contacts by name
      <input
        className={css.inputFilter}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  );
};
export default Filter;
