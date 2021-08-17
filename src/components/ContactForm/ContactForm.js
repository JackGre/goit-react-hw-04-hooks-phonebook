import React, { useState } from 'react';
import shortid from 'shortid';
import styles from './ContactForm.module.css';

export default function ContactForm({ addContact }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    
    const reset = () => {
        setName("");
        setNumber("");
    }

    const onChange = (e) => {
        switch (e.currentTarget.name) {
            case "name":
                return setName(e.target.value);
            case "number":
                return setNumber(e.target.value);
            default:
                return;
        }
    };
  const onSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    addContact(newContact);
    reset();
  };
        
    return (
            <form className={styles.Form} onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={onChange}
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={onChange}
                />
                <button type="submit">Add contact</button>
            </form>
    );
    

}





