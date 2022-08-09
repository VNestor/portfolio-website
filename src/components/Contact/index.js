import React from "react";
import {
  ContactceH1,
  ContactSection,
  FormButton,
  FormContainer,
} from "./ContactElements";
const Contact = () => {
  return (
    <ContactSection>
      <ContactceH1>Contact.</ContactceH1>
      <FormContainer>
        <form>
          <label>Full Name: </label>
          <input type="text" placeholder="Full Name" required />

          <label>Email: </label>
          <input type="email" placeholder="Email" required />

          <label>Subject: </label>
          <input type="text" placeholder="Subject" required />

          <label>Message: </label>
          <input type="text" placeholder="Message" require />
        </form>
        <FormButton type="submit">Send</FormButton>
      </FormContainer>
    </ContactSection>
  );
};

export default Contact;
