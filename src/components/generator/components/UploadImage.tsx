import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FileContext, UIContext } from '@/context';
import { Button, Text } from '@/styled-components';
import { byteToMB } from '@/utilities';
import { axiosInstance } from '@/client';

import { DropWrapper } from '../styled-components';
import { useToast } from '@/hooks';
import { ImageResponse } from '@/interfaces';

const UploadImage = () => {

    const { file, cleanFile } = useContext( FileContext );
    const { loading, notLoading } = useContext( UIContext );
    const navigate = useNavigate();

    const toast = useToast();
    const size = byteToMB( file?.size || 0 );

    const UploadImage = async () => {

        if ( !file )
            return toast.fire({
                icon: 'error',
                title: 'No image selected'
            });
        loading();

        const formData = new FormData();
        formData.append('file', file );

        await axiosInstance
            .post<ImageResponse>(
                '/file',
                formData,
                { headers: { 'Content-Type': 'multipart/form-data' } }
            )
            .then( res => navigate(`?image=${ res.data.id }`))

        cleanFile();
        notLoading();      
    }

    return (
        <>
        <DropWrapper>
            { file?.name }
            <Text style={{ marginBottom: '0' }}>{ size } Megabytes</Text>
        </DropWrapper>

        <Button
            style={{ marginTop: '1rem' }}
            onClick={ UploadImage }
        >Upload</Button>
        </>
    )
}

export default UploadImage;
