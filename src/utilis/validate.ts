import { useTranslations } from "next-intl";

const validate = ({
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
    errors.fullname = "validate-messages.fullname";
  }

  if (!email || email.trim() === " ") {
    errors.email = "validate-messages.email";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
      email
    )
  ) {
    errors.email = "validate-messages.invalid-email";
  }

  if (!phone || phone.trim() === " ") {
    errors.phone = "validate-messages.phone";
  } else if (!/^\+\d{2,4}(?:\s\d{1,4}){3,}$/.test(phone)) {
    errors.phone = "validate-messages.invalid-phone";
  }

  if (!message || message.trim() === " ") {
    errors.message = "validate-messages.message";
  }
  return errors;
};

export default validate;
