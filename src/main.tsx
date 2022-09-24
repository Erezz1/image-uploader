import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';

import App from './App';

import 'sweetalert2/src/sweetalert2.scss';
import '@material/react-linear-progress/dist/linear-progress.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM
    .createRoot( root )
    .render(
        <StrictMode>
            <Normalize />
            <App />
        </StrictMode>
    );
