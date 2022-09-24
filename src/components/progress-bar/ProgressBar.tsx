import LinearProgress from '@material/react-linear-progress';

import { WrapperProgressbar } from './styled-components';
import './styles/progress-bar.css';

const ProgressBar = () => {

    return (
        <WrapperProgressbar>
            <p>Uploading...</p>

            <LinearProgress
                indeterminate
                color="secondary"
                className="progressbar_linea"
            />
        </WrapperProgressbar>
    );
}

export default ProgressBar;
