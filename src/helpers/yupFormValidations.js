import * as Yup from "yup";
import {
  INPUT_REQUIRED,
  INVALID_EMAIL,
  PASSWORD_INCORRECT,
} from "./messagesText";

const yupEmail = () =>
  Yup.string().email(INVALID_EMAIL).required(INPUT_REQUIRED);

const yupPassword = () =>
  Yup.string().min(6, PASSWORD_INCORRECT).required(INPUT_REQUIRED);

const yupName = () => Yup.string().required(INPUT_REQUIRED);

export { yupEmail, yupName, yupPassword };
