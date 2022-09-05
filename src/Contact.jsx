import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            border-radius:20px;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }`;
  return (
    <Wrapper className="section">
      <div>Contact</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27852.663586597977!2d79.52266527720215!3d29.235819359737246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09a8b03af6bd3%3A0x72ec30f583d4ce18!2sTikonia%20Cant%20Area%2C%20Haldwani%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1662347942332!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
   <div className="container">
    <div className="contact-form">
      <form action="https://formspree.io/f/myyvkkqe" method="POST" className='contact-inputs'>
        <input type="text" name="Username" placeholder='Username' autoComplete='off' required />
        <input type="email" name="Email" placeholder='Email' autoComplete='off' required />
        <textarea name="message" placeholder='Enter Your Message' cols='30' rows='6' autoComplete='off' required></textarea>
        <input type="submit" value="send" />
      </form>
    </div>
   </div>
    </Wrapper>
    
  )
}

export default Contact