import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = ({contacts, onClick}) => {

    return (
        contacts.map(({ name, number, id }) => {
            return (
            <li className={styles.ContactItem} key={id}>
                <p>
                    <span>{name}</span>
                    <span>{number}</span>
                </p>
                    <button onClick={() => onClick(id)}>Delete</button>
            </li>
        )})

    )
}

export default ContactItem;