import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { Fragment, useRef, useState } from "react";
import confetti from "../../animations/confetti.json";
import "../../styles/contact-form.css";
import LoadingSpinner from "../LoadingSpinner";
import Tick from "../Tick";

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
    form.current.checkValidity();
    form.current.reportValidity();

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
        <label className="contact-form__label" htmlFor="user_name">
          What is your name?
        </label>
        <input
          type="text"
          className="contact-form__input"
          name="user_name"
          id="user_name"
          placeholder="Name"
          required
        />
      </div>
      <div className="label-input-container">
        <label className="contact-form__label" htmlFor="user_email">
          What is your email?
        </label>
        <input
          type="email"
          className="contact-form__input"
          name="user_email"
          id="user_email"
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div className="label-input-container">
        <label className="contact-form__label" htmlFor="message">
          Your message
        </label>
        <textarea
          className="contact-form__input contact-form__message"
          name="message"
          id="message"
          required
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
        {formBtnContent === 'tick' && (
          <Fragment>
            <Lottie animationData={confetti} loop={false} style={{position: "absolute", top: '-15rem', left: '50%', transform: 'translateX(-50%)', width: '20rem', height: '20rem'}} />
            <p>
              <span>Success alert!</span>
              <br />
              Your message was sent successfully
            </p>
          </Fragment>
          
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
