import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  loginNameId = nanoid();
  loginNumberId = nanoid();

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className = {css.form} onSubmit={this.handleSubmit}>
          <label className = {css.label} htmlFor={this.loginNameId}> Name </label>
          <input
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className = {css.label} htmlFor={this.loginNumberId}> Number </label>
          <input
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={css.formButton}>Add contact</button>
        </form>
      </div>
    );
  }
}
