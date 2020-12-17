import React, {Suspense, lazy} from 'react';
import Loader from '../../loader/Loader';
import styled from 'styled-components';

const ContactForm = lazy(() => import('../../contactForm/ContactForm'));
const ContactInfo = lazy(() => import('../../contactInfo/ContactInfo'));
const Googlemap = lazy(() => import('../../contactMap/Googlemap'));

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-template-areas:
    "box1 box2"
    "box3 box3";
  @media (max-width: 1024px) {
    grid-template-areas:
      "box1 box1"
      "box2 box2"
      "box3 box3";
  }
  .contactForm {
    grid-area: box1;
  }
  .contactInfo {
    grid-area: box2;
  }
  .contactMap {
    grid-area: box3;
  }
`

const Contact = () => (
    <StyledContact className="contact">
        <Suspense fallback={<Loader />}>
            <ContactForm />
            <ContactInfo />
            <Googlemap />
        </Suspense>
    </StyledContact>
);

export default Contact;

