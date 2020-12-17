import React from 'react';
import styled from 'styled-components';
// import './_animated-box.scss';

const StyledClouds = styled.section`
@-webkit-keyframes FadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes FadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes Float {
  from {
    transform: translateX(100%) translateZ(0);
  }
  to {
    transform: translateX(-15%) translateZ(0);
  }
}
@keyframes FadeFloat {
  0%,
  100% {
    opacity: 0;
  }
  5%,
  90% {
    opacity: 1;
  }
}
#Clouds {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 60%;
  overflow: hidden;
  animation: FadeIn 3s ease-out;
  user-select: none;
}
.Cloud {
  position: absolute;
  width: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  height: 70px;
  animation-duration: 120s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  animation-name: Float, FadeFloat;
  z-index: 1;
  filter: ${({ theme }) => theme.filter1};
  background-image: url('data:image/png;base64,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')
;
  &:nth-child(10) {
    animation-delay: -184.61538462s;
    top: 60%;
  }
  &:nth-child(9) {
    animation-delay: -166.15384615s;
    top: 54%;
  }
  &:nth-child(8) {
    animation-delay: -147.69230769s;
    top: 48%;
  }
  &:nth-child(7) {
    animation-delay: -129.23076923s;
    top: 42%;
  }
  &:nth-child(6) {
    animation-delay: -110.76923077s;
    top: 36%;
  }
  &:nth-child(5) {
    animation-delay: -92.30769231s;
    top: 30%;
  }
  &:nth-child(4) {
    animation-delay: -73.84615385s;
    top: 24%;
  }
  &:nth-child(3) {
    animation-delay: -55.38461538s;
    top: 18%;
  }
  &:nth-child(2) {
    animation-delay: -36.92307692s;
    top: 12%;
  }
  &:nth-child(1) {
    animation-delay: -18.46153846s;
    top: 6%;
  }
}
.Cloud.Foreground {
  height: 10%;
  min-height: 40px;
  z-index: 3;
  &:nth-child(10) {
    animation-duration: 80s;
    height: 35%;
  }
  &:nth-child(9) {
    animation-duration: 84s;
    height: 32.5%;
  }
  &:nth-child(8) {
    animation-duration: 88s;
    height: 30%;
  }
  &:nth-child(7) {
    animation-duration: 92s;
    height: 27.5%;
  }
  &:nth-child(6) {
    animation-duration: 96s;
    height: 25%;
  }
  &:nth-child(5) {
    animation-duration: 100s;
    height: 22.5%;
  }
  &:nth-child(4) {
    animation-duration: 104s;
    height: 20%;
  }
  &:nth-child(3) {
    animation-duration: 108s;
    height: 17.5%;
  }
  &:nth-child(2) {
    animation-duration: 112s;
    height: 15%;
  }
  &:nth-child(1) {
    animation-duration: 116s;
    height: 12.5%;
  }
}
.Cloud.Background {
  height: 9.09090909%;
  min-height: 20px;
  animation-duration: 210s;
  filter: ${({ theme }) => theme.filter2};
  &:nth-child(10) {
    animation-duration: 110s;
    height: -3.40909091%;
  }
  &:nth-child(9) {
    animation-duration: 114s;
    height: -2.15909091%;
  }
  &:nth-child(8) {
    animation-duration: 118s;
    height: -0.90909091%;
  }
  &:nth-child(7) {
    animation-duration: 122s;
    height: 0.34090909%;
  }
  &:nth-child(6) {
    animation-duration: 126s;
    height: 1.59090909%;
  }
  &:nth-child(5) {
    animation-duration: 130s;
    height: 2.84090909%;
  }
  &:nth-child(4) {
    animation-duration: 134s;
    height: 4.09090909%;
  }
  &:nth-child(3) {
    animation-duration: 138s;
    height: 5.34090909%;
  }
  &:nth-child(2) {
    animation-duration: 142s;
    height: 6.59090909%;
  }
  &:nth-child(1) {
    animation-duration: 146s;
    height: 7.84090909%;
  }
}

`

const AnimatedBox = () => (
    <StyledClouds className="animated-box">
        <div id="Clouds">
            <div className="Cloud Foreground"></div>
            <div className="Cloud Background"></div>
            <div className="Cloud Foreground"></div>
            <div className="Cloud Background"></div>
            <div className="Cloud Foreground"></div>
            <div className="Cloud Background"></div>
            <div className="Cloud Background"></div>
            <div className="Cloud Foreground"></div>
            <div className="Cloud Background"></div>
            <div className="Cloud Background"></div>
        </div>

        <svg  id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="40px" height="24px" viewBox="0 0 40 24" >
        <defs>
            <path id="Cloud" d="M33.85,14.388c-0.176,0-0.343,0.034-0.513,0.054c0.184-0.587,0.279-1.208,0.279-1.853c0-3.463-2.809-6.271-6.272-6.271
            c-0.38,0-0.752,0.039-1.113,0.104C24.874,2.677,21.293,0,17.083,0c-5.379,0-9.739,4.361-9.739,9.738
            c0,0.418,0.035,0.826,0.084,1.229c-0.375-0.069-0.761-0.11-1.155-0.11C2.811,10.856,0,13.665,0,17.126
            c0,3.467,2.811,6.275,6.272,6.275c0.214,0,27.156,0.109,27.577,0.109c2.519,0,4.56-2.043,4.56-4.562
            C38.409,16.43,36.368,14.388,33.85,14.388z"/>
        </defs>
        </svg>
    </StyledClouds>
);

export default AnimatedBox;


