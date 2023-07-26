import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact-form.css";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_b8qxv26",
        "contact_form",
        form.current,
        "KDpHeJFRuw5tb6XJ6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <div className="label-input-container">
        <label className="contact-form__label">What is your name?</label>
        <input
          type="text"
          className="contact-form__input"
          name="user_name"
          placeholder="Name"
        />
      </div>
      <div className="label-input-container">
        <label className="contact-form__label">What is your email?</label>
        <input
          type="email"
          className="contact-form__input"
          name="user_email"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="label-input-container">
        <label className="contact-form__label">Your message</label>
        <textarea
          className="contact-form__input contact-form__message"
          name="message"
        ></textarea>
      </div>
      <div className="label-input-container">
        <button type="submit" className="contact-form__button">
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
