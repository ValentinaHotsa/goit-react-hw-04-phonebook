import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmit = evt => {
    evt.preventDefault();

    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.addContact(newContact);
    this.setState({ name: '', id: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.onSubmit}>
        <label className={css.formLabel}>
          Name
          <input
            className={css.formInput}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            required
          />
        </label>

        <label className={css.formLabel}>
          Number
          <input
            className={css.formInput}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
            required
          />
        </label>

        <button className={css.formButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
