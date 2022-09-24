import { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';

import { FileContext } from '@/context';
import { Title, Text } from '@/styled-components';
import { Wrapper } from '@/styled-components';

import { Droppable, Image, UploadImage } from './components';

const Generator = () => {

    const { file } = useContext( FileContext );
    const [ searchParams ] = useSearchParams();
    const imageId = searchParams.get('image');

    if ( imageId )
        return (
            <Wrapper>
                <Image id={ imageId } />
            </Wrapper>
        )

    if ( file )
        return (
            <Wrapper>
                <UploadImage />
            </Wrapper>
        )

    return (
        <Wrapper>
            <Title>Upload your image</Title>
            <Text>File should be Jpeg, Png,...</Text>

            <Droppable />
        </Wrapper>
    )
}

export default Generator;
