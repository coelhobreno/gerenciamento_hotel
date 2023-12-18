import styled from "styled-components";

import { HiMagnifyingGlass } from "react-icons/hi2";

export const Container = styled.div`
    grid-area: FA;

    padding: 103px 10px 10px 7px ;

    background-color: var(--primary);

    max-height: calc(100vh - 50px);

    overflow-y: scroll;
`

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;

    top: 53px;

    background-color: var(--primary);
    border-bottom: 1px solid var(--secondary);

    padding: 20px 0;

    > span {
        color: var(--text-primary);
        margin-bottom: 10px;
    }

    > input {
        color: var(--text-primary);
        font-size: 14px;
        font-weight: 500;

        background-color: var(--secondary);
        padding: 10px 2px 10px 35px;
        
        border-radius: 10px;

        &::placeholder{
            color: var(--text-secondary);
        }

        &:focus {
            color: var(--text-primary);
        }
    }
`

export const IconGlass = styled(HiMagnifyingGlass)`
    color: var(--white);
    font-size: 25px;

    position: absolute;
    top: 54px;
    left: 6px;
`

export const Separate = styled.div`
    border-bottom: 1px solid var(--secondary);
`