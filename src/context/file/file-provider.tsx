import { ReactNode, useState } from 'react';

import { FileContext } from './file-context';
import { fileState } from './file-context';

interface IFileProvider {
    children: ReactNode;
}
const FileProvider = ( { children }: IFileProvider ) => {

    const [ file, setFile ] = useState<File | null>( null );

    const cleanFile = () => {
        setFile( null );
    }

    const addFile = ( file: File ) => {
        setFile( file )
    }

    return (
        <FileContext.Provider value={{
            ...fileState,
            file,
            cleanFile,
            addFile
        }}>
            { children }
        </FileContext.Provider>
    )
}

export default FileProvider;
