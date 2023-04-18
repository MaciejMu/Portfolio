"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button/Button";
import style from "./ContactForm.module.scss";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // let isValidForm = handleValidation();
    // if (isValidForm) {
    try {
      const res = await axios.post("/api/contact", formData);
      console.log(res);
      setFormData({ fullname: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  // Validation check method
  // const handleValidation = () => {
  //   let tempErrors: { [key: string]: boolean } = {};
  //   let isValid = true;

  //   if (fullname.length <= 0) {
  //     tempErrors["fullname"] = true;
  //     isValid = false;
  //   }
  //   if (email.length <= 0) {
  //     tempErrors["email"] = true;
  //     isValid = false;
  //   }
  //   if (phone.length <= 0) {
  //     tempErrors["phone"] = true;
  //     isValid = false;
  //   }
  //   if (message.length <= 0) {
  //     tempErrors["message"] = true;
  //     isValid = false;
  //   }

  //   setErrors({ ...tempErrors });
  //   console.log("errors", errors);
  //   return isValid;
  // };

  // //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   let isValidForm = handleValidation();

  //   if (isValidForm) {
  //     setButtonText("Wysyłam");
  //     const res = await fetch("/api/sendgrid", {
  //       body: JSON.stringify({
  //         email: email,
  //         fullname: fullname,
  //         phone: phone,
  //         message: message,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });

  //     const { error } = await res.json();
  //     if (error) {
  //       console.log(error);
  //       setShowSuccessMessage(false);
  //       setShowFailureMessage(true);
  //       setButtonText("Send");
  //       return;
  //     }
  //     setShowSuccessMessage(true);
  //     setShowFailureMessage(false);
  //     setButtonText("Send");
  //   }
  //   console.log(fullname, email, phone, message);
  // };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.personalData}>
        <label htmlFor="fullname">
          Imię i nazwisko
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          ></input>
        </label>

        <label htmlFor="phone">
          Numer telefonu
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>
      <label htmlFor="email">
        Adres e-mail
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label htmlFor="message">
        Wiadomość
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <div className={style.button}>
        <Button type="submit" title="wyślij" outlined />
      </div>
    </form>
  );
};

export default ContactForm;
