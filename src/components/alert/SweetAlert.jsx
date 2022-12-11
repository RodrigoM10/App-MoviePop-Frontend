import Swal from 'sweetalert2';
import { getLogout } from '../../reducers/auth/actions';

const InfoAlert = (message) => Swal.fire(message);

const SuccessAlert = (title, message) =>
  Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    timer: 2000,
    showConfirmButton: false,
  });

const SuccessLoginAlert = (title, message, navigate) =>
  Swal.fire({
    icon: 'success',
    title: title,
    text: message,
    showConfirmButton: true,
    confirmButtonText: 'OK'
  }).then((result) => {
    if (result.isConfirmed){
      setTimeout(navigate("/searchPage"), 2000)
    }
  });

  const SuccessLogoutAlert = (dispatch, navigate) =>
  Swal.fire({
    title: 'Estas seguro?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Cerrar Sesión',
  }).then((result) => {
    if (result.isConfirmed) {
      dispatch(getLogout());
      navigate("/");
      SuccessAlert('Sesión cerrada','Gracias por visitar')
    }
  })

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
  SuccessLoginAlert,
  SuccessLogoutAlert,
  ErrorAlert
};
