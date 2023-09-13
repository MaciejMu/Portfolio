"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button/Button";
import style from "./ContactForm.module.scss";
import { validate } from "../../utilis/validate";
import axios from "axios";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

interface IValues {
  fullname: string;
  phone: string;
  email: string;
  message: string;
}
interface IErrors extends Partial<IValues> {}

const ContactForm = () => {
  const [values, setValues] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    await axios
      .post("/api", {
        fullname: values.fullname,
        phone: values.phone,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ fullname: "", phone: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
          setTimeout(() => setSuccess(false), 3000);
        } else {
          setLoading(false);
          setMessageState(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        setMessageState(String(err.message));
      });
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.personalData}>
        <Input
          value={values.fullname}
          onChange={handleChange}
          id="fullname"
          name="fullname"
          label="Imię i Nazwisko"
          placeholder="Robert Kubica"
          error={!!errors.fullname}
          errorMessage={!!errors.fullname ? errors.fullname : ""}
        />
        <Input
          value={values.phone}
          onChange={handleChange}
          id="phone"
          name="phone"
          label="Numer Telefonu"
          placeholder="000 000 000"
          error={!!errors.phone}
          errorMessage={!!errors.phone ? errors.phone : ""}
        />
      </div>
      <Input
        value={values.email}
        onChange={handleChange}
        id="email"
        name="email"
        label="Adres Email"
        placeholder="twójadres@mail.com"
        error={!!errors.email}
        errorMessage={!!errors.email ? errors.email : ""}
      />
      <TextArea
        value={values.message}
        onChange={handleChange}
        id="message"
        name="message"
        label="Wiadomość"
        placeholder="Napisz do mnie..."
        error={!!errors.message}
        errorMessage={!!errors.message ? errors.message : ""}
      />
      <Button
        type="submit"
        title={loading ? "Wysyłanie..." : "Wyślij"}
        disabled={loading}
      />
      <p>{success ? <span>{messageState}</span> : null}</p>
    </form>
  );
};

export default ContactForm;
