"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button/Button";
import style from "./ContactForm.module.scss";
import { validate } from "../../../utilis/validate";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    fullname?: string;
    phone?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formData);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ fullname: "", phone: "", email: "", message: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.personalData}>
          <label htmlFor="fullname">
            Imię i nazwisko
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              // required
            ></input>
            {errors.fullname ? (
              <p className={style.errorMsg}>*{errors.fullname}</p>
            ) : null}
          </label>

          <label htmlFor="phone">
            Numer telefonu
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              // required
            ></input>
            {errors.phone ? (
              <p className={style.errorMsg}>*{errors.phone}</p>
            ) : null}
          </label>
        </div>
        <label htmlFor="email">
          Adres e-mail
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            // required
          ></input>
          {errors.email ? (
            <p className={style.errorMsg}>*{errors.email}</p>
          ) : null}
        </label>
        <label htmlFor="message">
          Wiadomość
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message ? (
            <p className={style.errorMsg}>*{errors.message}</p>
          ) : null}
        </label>
        <div className={style.button}>
          <Button type="submit" title="wyślij" outlined />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
