import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const ContactSection = styled.section`
  background: #29598f;
  margin: 0 auto;
  overflow: hidden;
  color: #a9c5e6;
  text-align: center;
  padding: 10vh calc((95vw - 1000px) / 2);

  @media screen and (max-width: 850px) {
    padding: 12vh calc((95vw - 1000px) / 2);
  }
`;

export const ContactceH1 = styled.h1`
  display: block;
  margin: 0 auto;
  font-size: clamp(3rem, 2.5vw, 5rem);
`;

export const FormModal = styled.div`
  display: ${({ showModal }) => (showModal ? "block" : "none")};
  text-align: center;
  background: #0b1928;
  margin: 2rem auto;
  color: #a9c5e6;
  padding: 3rem 6rem;
  padding-bottom: 4rem;
  z-index: 999;
`;

export const CloseIcon = styled(AiOutlineClose)`
  color: #a9c5e6;
`;

export const ModalIcon = styled.div`
  position: relative;
  background: transparent;
  border: transparent;
  cursor: pointer;
  outline: none;
  &&& {
    top: -2rem;
    right: -5rem;
    text-align: right;
  }
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

  textarea {
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
  padding: 1vh 4vw;
  color: #a9c5e6;
  background: #0b1928;
  margin-top: 1rem;

  &&& {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #0b1928;
    background: #a9c5e6;
  }
`;
