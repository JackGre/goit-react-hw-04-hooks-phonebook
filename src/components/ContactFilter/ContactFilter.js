import React from 'react';
import styles from './ContactFilter.module.css';


const ContactFilter = ({ value, onChange }) => {
    return (
        <div className={styles.Filter}>
            <label>
                 Find contacts by name
                <input type="text" value={value} onChange={onChange}></input>
            </label>
        </div>
    )
}
export default ContactFilter;
