import styled from "styled-components";

import { Link } from "react-router-dom";

import { MdOutlineHotelClass } from "react-icons/md";

export const Container = styled(Link)`
    grid-area: LA;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--primary);
`

export const Logo = styled(MdOutlineHotelClass)`
    color: var(--tertiary);
    font-size: 30px;

    cursor: pointer;
    opacity: .6;

    &:hover{
        opacity: 1;
    }
`