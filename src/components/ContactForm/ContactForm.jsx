import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Button, Input, Form, Label } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = ({ target: { name, value } }) => {
    this.setState(() => ({ [name]: value }));
  };

  onFormSubmit = e => {
    e.preventDefault();
    const nameId = nanoid();

    const userContacts = {
      id: nameId,
      name: this.state.name,
      number: this.state.number,
    };

    this.clearData();

    this.props.onHandleSubmit(userContacts);
  };

  clearData = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <>
        <Form action="" onSubmit={this.onFormSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.inputChange}
            />
          </Label>

          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.inputChange}
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
};
