import { createContext } from 'react';

import { IUIContext } from './ui-context.d';

export const UIState: IUIContext = {
    isLoading: false,
    loading: () => {},
    notLoading: () => {},
}

export const UIContext = createContext<IUIContext>( UIState );
