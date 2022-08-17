import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineCheck } from "react-icons/ai";
import {
  CloseIcon,
  ContactceH1,
  ContactSection,
  FormButton,
  FormContainer,
  FormModal,
  ModalIcon,
} from "./ContactElements";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g8slx3v",
        "template_nxf56gb",
        form.current,
        "yhyBmxSUj8efSlYNx"
      )
      .then(
        (result) => {
          setShowModal(!showModal);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactSection id="contact">
      <ContactceH1>Contact.</ContactceH1>
      <FormModal showModal={showModal} onClick={toggle}>
        <ModalIcon>
          <CloseIcon />
        </ModalIcon>
        Message Sent! <AiOutlineCheck />
      </FormModal>
      <FormContainer>
        <form ref={form} onSubmit={sendEmail}>
          <label>Full Name: </label>
          <input
            type="text"
            placeholder="Full Name"
            name="contact_name"
            required
          />

          <label>Email: </label>
          <input
            type="email"
            placeholder="Email"
            name="contact_email"
            required
          />

          <label>Subject: </label>
          <input type="text" placeholder="Subject" name="subject" required />

          <label>Message: </label>
          <textarea rows="5" placeholder="Message" name="message" require />
          <FormButton type="submit" value="Send">
            Send
          </FormButton>
        </form>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
