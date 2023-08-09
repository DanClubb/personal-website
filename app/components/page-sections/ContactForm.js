import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/contact-form.css";
import Tick from "../Tick";
import LoadingSpinner from "../LoadingSpinner";

function ContactForm() {
  const [formBtnContent, setFormBtnContent] = useState("Send");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const buttonDispaly = () => {
    if (isLoading) return <LoadingSpinner />;
    else if (formBtnContent === "tick") return <Tick />;
    else return formBtnContent;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsLoading(true);
    emailjs
      .sendForm(
        "service_b8qxv26",
        "contact_form",
        form.current,
        "KDpHeJFRuw5tb6XJ6"
      )
      .then(
        (success) => {
          setFormBtnContent("tick");
          setTimeout(() => {
            setFormBtnContent("Send");
          }, 3000);
          setIsLoading(false);
        },
        (error) => {
          setFormBtnContent("Try Again");
          setTimeout(() => {
            setFormBtnContent("Send");
          }, 3000);
          setIsLoading(false);
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
        <button
          type="submit"
          className={`contact-form__button ${isLoading && "disabled"} ${
            formBtnContent === "tick" && "sent"
          }`}
          disabled={isLoading}
        >
          {buttonDispaly()}
        </button>
      </div>
      <div
        className={`alert 
        ${formBtnContent !== "Send" ? "show" : "hidden"}
        ${formBtnContent === "tick" && "alert--success"} ${
          formBtnContent === "Try Again" && "alert--error"
        }`}
      >
        {formBtnContent === "tick" && (
          <p>
            <span>Success alert!</span>
            <br />
            Your message was sent successfully
          </p>
        )}

        {formBtnContent === "Try Again" && (
          <p>
            <span>Error alert!</span>
            <br />
            Failed to send your message
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
