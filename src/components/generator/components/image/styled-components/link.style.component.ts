import styled from 'styled-components';

export const Link = styled.div`
    width: 95%;
    max-width: 20rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    padding: 10px 0;
    background-color: #F6F8FB;
    font-size: 12px;
    margin-top: 1rem;
    border-radius: 10px;
    border: 1px solid #E0E0E0;

    & > p {
        margin: 0 1rem;
        width: 60%;
        overflow: hidden;
    }

    & > button {
        position: absolute;
        padding: 9px 1rem;
        right: 1px;
        top: 0.1rem;
        color: #fff;
        background-color: #2F80ED;
        font-size: 12px;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 300ms;

        &:hover {
            background-color: #0280E0;
        }

        &:active {
            background-color: #0280E050;
        }
    }
`;
