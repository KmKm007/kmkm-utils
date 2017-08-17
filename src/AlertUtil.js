import swal from 'sweetalert'
import 'sweetalert/dist/sweetalert.css'
import 'sweetalert/themes/google/google.css'

const AlertUtil = {
}

AlertUtil.alertError = function (title, content, confirmCallback) {
  swal({
    title,
    text: content,
    type: 'error',
    allowOutsideClick: true
  }, confirmCallback)
}

AlertUtil.alertSuccess = function (title, content, confirmCallback) {
  swal({
    title,
    text: content,
    type: 'success',
    allowOutsideClick: true
  }, confirmCallback)
}

AlertUtil.$swal = swal

export default AlertUtil
