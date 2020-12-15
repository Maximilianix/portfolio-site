import React, {Suspense, lazy} from 'react';
import Loader from '../../loader/Loader'
import './_contact.scss';

const ContactForm = lazy(() => import('../../contactForm/ContactForm'));
const ContactInfo = lazy(() => import('../../contactInfo/ContactInfo'));
const Googlemap = lazy(() => import('../../contactMap/Googlemap'));

const Contact = () => (
    <div className="contact">
        <Suspense fallback={<Loader />}>
            <ContactForm />
            <ContactInfo />
            <Googlemap />
        </Suspense>
    </div>
);

export default Contact;

