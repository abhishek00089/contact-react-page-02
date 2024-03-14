import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useState } from 'react';

const ContactForm = () => {

  const [name , setName] = useState("Abhishek")
  const [email , setEmail] = useState("support@gmail.com")
  const [text , setText] = useState("Dummy text")

  

    const onSubmit = (e) => {
      e.preventDefault();


      setName(e.target[0].value)
      setEmail(e.target[1].value)
      setText(e.target[2].value)
    }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />} />
          <Button
            text="VIA CALL"
            icon={<FaPhoneSquareAlt fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<CiMail fontSize="24px" />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor='text'>Message</label>
            <textarea name='text' rows="8" />
          </div>
          <div style={{
            display: "flex",
            justifyContent: "end"
          }}>
            <Button
              text="Submit" />
          </div>

          <div>
              {name + " " + email +" " +text}
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/contact.svg" alt="contact-image" />
      </div>
    </section>
  )
}

export default ContactForm
