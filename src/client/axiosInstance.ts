import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';

const toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: ( toast ) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const axiosInstance = axios.create({
    baseURL: SERVER_URL,
    headers: { 'Accept': 'application/json' },
});

axiosInstance.interceptors.response.use(
    response => response,
    ( error: AxiosError<any> ) => {
        console.log( error );
        toast.fire({
            title: error.response?.data.message,
            icon: 'error'
        })

        return error;
    }
)

export default axiosInstance;
