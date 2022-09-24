import styled from 'styled-components';

export const DropWrapper = styled.div`
    width: 15rem;
    margin: 0.5rem 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F6F8FB;
    border: 1px dashed #97BEF4;
    border-radius: 0.5rem;
    text-align: center;

    @media (min-width: 768px) {
        width: 20rem;
    }
`;

export const DropBackground = styled.img`
    height: 90px;
    margin-bottom: 1rem;
`;
