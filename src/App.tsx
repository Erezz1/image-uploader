import { BrowserRouter } from 'react-router-dom';

import { Container } from '@/components';
import { FileProvider, UIProvider } from '@/context';

const App = () => {
    return (
        <BrowserRouter>
            <UIProvider>
                <FileProvider>
                    <Container />
                </FileProvider>
            </UIProvider>
        </BrowserRouter>
    )
}

export default App;
