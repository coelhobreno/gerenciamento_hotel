import styled from "styled-components";

import { IoPencilSharp } from "react-icons/io5";
import { PiTrashSimpleFill } from "react-icons/pi";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 0;

    color: var(--text-primary);

    border-bottom: 1px solid var(--grey);

    > span {
        font-size: 15px;;
    }
    
    > div {
        display: flex;
        
        :not(:first-child){
            margin-left: 5px;
        }

        > button {
            color: var(--grey);
            font-size: 15px;

            cursor: pointer;
            padding: 5px;

            display: flex;
            align-items: center;
            justify-content: center;
            
            border: 1px solid var(--grey);

            background-color: transparent;

            transition: border .2s, color .2s, scale .1s;

            &:hover {
                scale: 1.1;
            }
        }
    }
`

export const ButtonEdit = styled.button`
    &:hover {
        color: var(--white);
        border: 1px solid var(--white);
    }
`

export const IconEdit = styled(IoPencilSharp)``

export const ButtonDelete = styled.button`
    &:hover {
        color: var(--color-wrong);
        border: 1px solid var(--color-wrong);
    }
`

export const IconDelete = styled(PiTrashSimpleFill)``