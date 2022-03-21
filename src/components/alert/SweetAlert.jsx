import Swal from 'sweetalert2';

const InfoAlert = (message) => Swal.fire(message);

const SuccessAlert = (title, message) =>
  Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });

const ErrorAlert = (title, message) =>
  Swal.fire({
    icon: 'warning',
    title: title,
    text: message,
    timer: 4000,
  });

export {
  InfoAlert,
  SuccessAlert,
  ErrorAlert,
};
