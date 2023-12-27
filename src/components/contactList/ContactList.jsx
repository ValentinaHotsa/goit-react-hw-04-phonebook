import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.containerList}>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contactItem} key={id}>
            {name}: {number}
            <button
              className={css.buttonDelete}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
