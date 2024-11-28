"use client";

import { useState } from 'react';
import { sendMailAction } from '@/utils/sendMailAction';
import { FaAddressBook, FaSeedling, FaWpforms } from 'react-icons/fa';

// Form fields interface
interface FormFields {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  postcode: string;
  houseNumber: string;
  message: string;
}

export const metadata = {
  title: 'Contact Form',
};

// Main component
export default function FormSMTP() {
  const [formValues, setFormValues] = useState<FormFields>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    postcode: '',
    houseNumber: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
  const [isSubmitting, setIsSubmitting] = useState(false); // Track if the form is in the process of being submitted

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value ? '' : 'Volledige naam is vereist';
      case 'companyName':
        return value ? '' : 'Bedrijfsnaam is vereist';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Voer een geldig e-mailadres in';
      case 'phone':
        return /^\d{9,10}$/.test(value) ? '' : 'Telefoonnummer moet uit 9 tot 10 cijfers bestaan';
      case 'postcode':
        return /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(value) ? '' : 'Voer een geldige Nederlandse postcode in';
      case 'houseNumber':
        return value ? '' : 'Voer uw huisnummer in';
      default:
        return '';
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid = Object.values(formErrors).every((error) => error === '') && Object.values(formValues).every((value) => value !== '');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true); // Set submitting state to true

    try {
      const { name, companyName, phone, email, postcode, houseNumber, message } = formValues;

      await sendMailAction({
        name,
        email,
        companyName,
        phone,
        postcode,
        houseNumber,
        message,
      });

      setIsSubmitted(true); // Set submitted state to true on success
    } catch (error) {
      console.error('Failed to send message', error);
      // Optionally handle error state here, e.g., display an error message
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <div className="text-lg w-full scroll-mt-24 text-center scroll-smooth md:scroll-auto" id='fromStart'>
      {isSubmitted ? (
        <div className="text-center py-10">
          {/* <h2 className="text-2xl font-bold mb-4">Bedankt voor uw bericht!</h2>
          <p className="text-lg">We waarderen uw vraag en nemen zo snel mogelijk contact met u op.</p> */}
          <h2 className="text-2xl font-bold mb-4">Thank you for your message!</h2>
          <p className="text-lg">We appreciate your inquiry and will get back to you shortly.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
          className="grid grid-cols-1 gap-4 w-full mx-auto text-black md:grid-cols-2 lg:grid-cols-2"
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="formName" value="main-page" />
          <input type="hidden" name="formURL" value="https://buurmannenbuurmann.nl/contact" />

          {/* Text Inputs */}
          {Object.entries(formValues).map(([name, value], index) => (
            <div
              key={name}
              className={`
                w-full 
                ${index >= Object.entries(formValues).length - 1 ? 'col-span-1 md:col-span-2' : 'col-span-2 md:col-span-1'}
                `}
            >

              {index === Object.entries(formValues).length - 1 ? (
                // Render textarea for the last element
                <textarea
                  name={name}
                  value={value}
                  onChange={handleChange}
                  rows={4}
                  className={`bg-white shadow-md rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${
                    formErrors[name] ? 'border-red' : 'file-input-bordered file-input-success'
                  }`}
                  placeholder={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                />
              ) : (
                // Render input for other elements
                <input
                  type="text"
                  name={name}
                  value={value}
                  onChange={handleChange}
                  className={`bg-white shadow-md rounded-xl w-full border-none px-4 mb-2 mt-2 py-4 md:py-4 ${
                    formErrors[name] ? 'border-red' : 'file-input-bordered file-input-success'
                  }`}
                  placeholder={`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
                />
              )}




              {formErrors[name] && <p className="text-red text-xs">{formErrors[name]}</p>}
            </div>
          ))}

          {/* Submit Button */}
          <div className="col-span-2 w-full">
            <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`col-start-1 col-end-7 submit-button relative inline-flex mt-2 h-12 overflow-hidden md:min-w-[250px] w-full md:max-w-[300px] shadow-md transition duration-300 ease-in-out hover:shadow-lg rounded-xl leading-tight border-none ${isFormValid && !isSubmitting ? 'bg-MainBG hover:bg-MainBG/90' : 'bg-red/80 cursor-not-allowed'} text-white font-bold text-2xl transition-colors duration-300 relative`}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#013867_0%,#2EC6FE_50%,#013867_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 text-sm font-medium text-white  transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl backdrop-blur-3xl gap-2`}>
                  {/* {isSubmitting ? 'Verzenden...' : 'Verzenden'} */}
                  {isSubmitting ? 'Submiting...' : 'Submit'}
                  <FaWpforms />
                </span>                
              </button>
          </div>
        </form>

      )}
    </div>
  );
}
