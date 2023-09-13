export const validate = ({
  fullname,
  phone,
  email,
  message,
}: {
  fullname: string;
  phone: string;
  email: string;
  message: string;
}) => {
  const errors: {
    fullname?: string;
    phone?: string;
    email?: string;
    message?: string;
  } = {};
  if (!fullname || fullname.trim() === " ") {
    errors.fullname = "Imię i nazwisko wymagane";
  }

  if (!email || email.trim() === " ") {
    errors.email = "Email wymagany";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      email
    )
  ) {
    errors.email = "Nieprawidłowy adres email";
  }

  if (!phone || phone.trim() === " ") {
    errors.phone = "Numer telefonu wymagany";
  }

  if (!message || message.trim() === " ") {
    errors.message = "Wiadomość wymagana";
  }
  return errors;
};
