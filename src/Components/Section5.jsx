import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // For sending emails

const Section5 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    termsAccepted: false
  });

  const [error, setError] = useState('');

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Validate and send email
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message, termsAccepted } = formData;

    // Basic form validation
    if (!firstName || !lastName || !email || !phone || !message || !termsAccepted) {
      setError('Please fill in all fields and accept the terms.');
      return;
    }
    
    // Clear the error if everything is fine
    setError('');

    // EmailJS configuration to send email
    const serviceID = 'service_2j8vy7r';
    const templateID = 'template_mya4ggp';
    const userID = 'PZxvSQM20WZ5SDnpm';

    const templateParams = {
      firstName,
      lastName,
      email,
      phone,
      message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Message sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          termsAccepted: false,
        });
      }, (err) => {
        console.error('Failed to send the message. Error: ', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <>
      <div className='lg:w-7/12 w-10/12 mx-auto container py-20'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <p className='text-xs font-bold'>Get In Touch</p>
          <h1 className='font-bold text-[20px] lg:text-[35px]'>Contact me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <form className='flex flex-col gap-5 my-14' onSubmit={handleSubmit}>
            <div className='flex lg:flex-row flex-col justify-between items-center gap-5'>
              <div className='flex flex-col gap-2 w-full md:w-[50%]'>
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className='rounded border border-black outline-none p-3'
                />
              </div>

              <div className='flex flex-col gap-2 w-full md:w-[50%]'>
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className='rounded border border-black outline-none p-3'
                />
              </div>
            </div>

            <div className='flex lg:flex-row flex-col justify-between items-center gap-5'>
              <div className='flex flex-col gap-2 w-full md:w-[50%]'>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='rounded border border-black outline-none p-3'
                />
              </div>

              <div className='flex flex-col gap-2 w-full md:w-[50%]'>
                <label>Phone number</label>
                <input
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className='rounded border border-black outline-none p-3'
                />
              </div>
            </div>

            <div className='w-full flex flex-col gap-2'>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className='rounded border border-black p-3 outline-none placeholder-black'
                rows={5}
                cols={15}
                placeholder='Type your message...'
              ></textarea>
            </div>

            <div className='flex items-center gap-2'>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <p>I accept the terms</p>
            </div>

            {error && <p className='text-red-500'>{error}</p>}

            <div className='w-full'>
              <button className='bg-[#5E3BEE] rounded w-full py-4 text-white'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Section5;
