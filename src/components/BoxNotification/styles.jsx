import styled from "styled-components";

import { IoClose } from "react-icons/io5";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);   
    
    display: none;

    &.show {
        display: block;
    }
`

export const Notification = styled.div`
    width: 50%;
    height: 50%;

    min-width: 300px;
    max-width: 500px;

    position: relative;
    
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    
    background-color: var(--secondary);
    
    border: 1px solid var(--grey);

`

export const IconClose = styled(IoClose)`
    color: var(--white);
    font-size: 30px;

    padding: 4px;

    position: absolute;
    top: -13px;
    right: -13px;

    border: 1px solid var(--grey);
    border-radius: 50%;

    background-color: var(--secondary);

    opacity: .8;

    cursor: pointer;

    &:hover {
        opacity: 1;
    }

    transition: opacity .2s;
`