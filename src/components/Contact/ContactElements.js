import styled from "styled-components";

export const ContactSection = styled.section`
  background: #29598f;
  margin: 0 auto;
  overflow: hidden;
  color: #a9c5e6;
  text-align: center;
  padding: 2rem calc((95vw - 1000px) / 2);
`;

export const ContactceH1 = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: clamp(3rem, 2.5vw, 5rem);
`;

export const FormContainer = styled.div`
  display: block;
  flex-direction: column;
  background: #0b1928;
  margin: 2rem auto;
  color: #a9c5e6;
  text-align: center;
  padding: 4rem 6rem;

  form {
    display: block;
    text-align: left;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    margin: 1rem;
  }

  label:after {
    content: "*";
    color: red;
  }
`;

export const FormButton = styled.button`
  border: 1px solid #a9c5e6;
  border-radius: 5px;
  padding: 1vh 1vw;
  color: #a9c5e6;
  background: #0b1928;
  margin-top: 1rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0b1928;
    background: #a9c5e6;
  }
`;
