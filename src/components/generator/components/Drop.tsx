import { Text } from '@/styled-components';
import image from '@/assets/image.svg';

import { DropWrapper, DropBackground } from '../styled-components';

const Drop = () => {
    return (
        <DropWrapper>
            <DropBackground
              src={ image }
              alt="upload your image"
            />
            <Text>
                Drag & Drop your image here
            </Text>
        </DropWrapper>
    )
}

export default Drop;
