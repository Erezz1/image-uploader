import { createContext } from 'react';
import { IFileContext } from './file-context.d';

export const fileState: IFileContext = {
    file: null,
    cleanFile: () => {},
    addFile: ( file: File ) => {}
}

export const FileContext = createContext<IFileContext>( fileState );
