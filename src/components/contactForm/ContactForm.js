import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import Button from '../button/Button';
import { FaPaperPlane } from 'react-icons/fa';
import Loader from '../loader/Loader';
import './_contactForm.scss';

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
        <form onSubmit={sendEmail}>
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
        </form>
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


