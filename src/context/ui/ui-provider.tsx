import { ReactNode, useState } from 'react';
import { UIContext, UIState } from './ui-context';

interface IProps {
    children: ReactNode
}
const UIProvider = ({ children }: IProps ) => {

    const [ isLoading , setIsLoading ] = useState<boolean>( false );

    const loading = (): void => {
        setIsLoading( true );
    }

    const notLoading = (): void => {
        setIsLoading( false )
    }

    return (
        <UIContext.Provider value={{
            ...UIState,
            isLoading,
            loading,
            notLoading
        }}>
            { children }
        </UIContext.Provider>
    )
}

export default UIProvider;
