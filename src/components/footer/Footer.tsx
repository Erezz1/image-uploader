import { Text } from '@/styled-components';
import { FooterContainer, Link } from './styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <Text>
                created by <strong>Erezz1</strong> - <Link target="_blank" href="https://devchallenges.io/">devChallenges.io</Link>
            </Text>
        </FooterContainer>
    )
}

export default Footer;
