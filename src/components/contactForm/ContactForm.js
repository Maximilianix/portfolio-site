import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Button from '../button/Button';
import { FaPaperPlane } from 'react-icons/fa';
import Loader from '../loader/Loader';
import styled from 'styled-components';


const StyledForm = styled.form`
  overflow: hidden;
  margin-bottom: 7rem;
  grid-area: box1;
  .input-wrap {
    position: relative;
    margin: 1rem 0 3rem 0;
    input,
    textarea {
      &.textarea {
        resize: none;
      }
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding-top: 20px;
      font-size: 1rem;
      font-family: "Roboto";
      background:transparent;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.white} inset !important;
      }
      &:focus,
      &:valid {
        + .label {
          &:after {
            transform: translateX(0%);
          }
          .content-name {
            transform: translateY(-100%);
            font-size: 1.2rem;
            color: ${({ theme }) => theme.lightbaseColor};
            &.text-name {
              transform: translateY(-500%);
            }
          }
        }
      }
    }
    label {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      border-bottom: 1px solid ${({ theme }) => theme.black};
      &:after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        height: 100%;
        width: 100%;
        border-bottom: 3px solid ${({ theme }) => theme.baseColor};
        transform: translate(-100%);
        transition: all 0.3s ease;
      }
      .content-name {
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: all 0.3s ease;
      }
    }
  }
  h5 {
    margin: 1rem 0 2rem 0;
    padding: 1rem;
    display: block;
    border-radius: 8px;
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
    &.error {
      color: #721c24;
      background-color: #f8d7da;
      border-color: #f5c6cb;
    }
  }
  .send {
    position: absolute;
  }
`

//emailjs.com service
//https://dashboard.emailjs.com/
const ContactForm = () => {

    const [loading, setLoading] = useState(false);
    const [responseText, setResponseText] = useState({text:'',isError:''});
    
    function sendEmail(e) {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_oxbolfh', 'template_puqf9pw', e.target, 'user_Tuj3aUbzYDVwLBW8TfyFZ')
            .then((response) => {
                setLoading(false);
                console.log('SUCCESS!', response.status, response.text);
                setResponseText({text:'Your email was sent. Thank you.'});
            }, (error) => {
                setLoading(false);
                console.log('FAILED...', error);
                setResponseText({text:'Sorry but there is an error, try another time.',isError:'error'});
        });
        e.target.reset();
    }

    let form = (
        <StyledForm onSubmit={sendEmail}>
            <div className="input-wrap">
                <input type="text" name="name" maxLength="30" required />
                <label htmlFor="name" className="label">
                    <span className="content-name">Name</span>
                </label>
            </div>
            <div className="input-wrap">
                <input type="email" name="email" maxLength="30" required />
                <label htmlFor="email" className="label">
                    <span className="content-name">E-mail</span>
                </label>
            </div>

            <div className="input-wrap">
                <textarea className="textarea" name="message" rows="5" maxLength="500" required>
                </textarea>
                <label htmlFor="message" className="label">
                    <span className="content-name text-name">Message</span>
                </label>
            </div>
            {(responseText.text !== '')&& <h5 className={responseText.isError}>{responseText.text}</h5>}
            <Button classVal={"send"} value={"Send"} icon={<FaPaperPlane />} />
        </StyledForm>
    );

    if (loading) {
        form = <Loader />;
    };

    return (
        <div className="contactForm">
            <h2>Contact Form</h2>
            {form}
        </div>
    );
}

export default ContactForm;


