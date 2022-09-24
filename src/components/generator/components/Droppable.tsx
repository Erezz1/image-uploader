import { useCallback, useContext } from 'react';
import { useDropzone } from 'react-dropzone';

import { Text, Button } from '@/styled-components';
import { FileContext } from '@/context';
import { useToast } from '@/hooks';

import Drop from './Drop';
import Dropping from './Dropping';
import { byteToMB } from '@/utilities';

const acceptedFiles = [
    '.png',
    '.jpg',
    '.webp',
    '.jpeg',
    '.gif',
]

const Droppable = () => {

    const { addFile, cleanFile } = useContext( FileContext );
    const toast = useToast();

    const onDrop = useCallback(( acceptedFiles: File[] ) => {
        if ( acceptedFiles.length < 1 ) {
            cleanFile();
            return toast.fire({
                icon: 'error',
                title: 'Only images file'
            });
        }

        if( byteToMB(( acceptedFiles[0].size )) > 10 ) {
            cleanFile();
            return toast.fire({
                icon: 'error',
                title: 'The image exceeds the size (10 MB)'
            });
        }

        addFile( acceptedFiles[0] )
    }, []);

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        accept: { 'image/*': acceptedFiles },
        onDrop,
    });

    return (
        <>
        <div { ...getRootProps() }>
            <input { ...getInputProps() } />

            {
                isDragActive ?
                <Dropping /> :
                <Drop />
            }

        </div>

        <Text>Or</Text>
        <Button onClick={ open }>Choose a file</Button>
        </>
    )
}

export default Droppable;
