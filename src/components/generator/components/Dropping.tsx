import { Text } from '@/styled-components';
import image from '@/assets/upload.png';

import { DropWrapper, DropBackground } from '../styled-components';

const Dropping = () => {
    return (
        <DropWrapper>
            <DropBackground
                src={ image }
                alt="Upload image"
            />

            <Text>
                Drop here your image
            </Text>
        </DropWrapper>
    )
}

export default Dropping;
