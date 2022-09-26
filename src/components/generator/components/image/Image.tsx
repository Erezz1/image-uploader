import { useEffect, useState } from 'react';

import { axiosInstance } from '@/client';
import { ImageResponse } from '@/interfaces';

import { Img, Text, Icon, Link } from './styled-components';

interface IProps {
    id: string;
}
const Image = ({ id }: IProps ) => {

    const [ imageData, setImageData ] = useState<ImageResponse | null>({
        id: '',
        url: ''
    });

    useEffect(() => {
        axiosInstance
            .get<ImageResponse>(`/file/${ id }`)
            .then( res => setImageData( res.data ))
    }, [])

    const handleCopy = () => {
        navigator.clipboard.writeText( imageData?.url || 'No copied :(' )
    }

    if ( !imageData )
        return (
            <Text>
                <Icon
                    className="material-icons"
                    style={{ color: '#f27474' }}
                >
                    cancel
                </Icon>
                Image Not Found!
            </Text>
        )

    return (
        <>
            <Text>
                <Icon
                    className="material-icons"
                    style={{ color: '#219653' }}
                >
                    check_circle
                </Icon>
                Uploaded Successfully!
            </Text>

            <Img
                src={ imageData.url }
                alt="Imagen"
            />

            <Link>
                <p>{ imageData.url }</p>
                <button onClick={ handleCopy }>Copy Link</button>
            </Link>
        </>
    )
}

export default Image;
