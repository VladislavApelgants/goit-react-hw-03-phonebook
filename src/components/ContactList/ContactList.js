import s from './ContactList.module.scss';
import PropTypes from 'prop-types';

export default function ContactList({ data, onChange }) {
  return (
    <ul className={s.contact__list}>
      {data.map(e => (
        <li key={e.id} className={s.contact__item}>
          <span className={s.contact__name}>{e.name}:</span>
          <span className={s.contact__number}>{e.number}</span>
          <button
            type="button"
            className={s.contact__button}
            onClick={() => onChange(e.id)}
          >
            D
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
