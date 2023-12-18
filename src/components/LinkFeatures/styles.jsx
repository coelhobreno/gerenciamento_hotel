import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    > svg {
        width: 32px;
        height: 32px;
        padding: 6px;
        border-radius: 12px;

        color: var(--icons);

        cursor: pointer;
        opacity: .7;
    }

    > svg:hover{
        background-color: var(--tertiary);
        color: var(--white);
    }

    &.active svg{
        background-color: var(--tertiary);
        color: var(--white);
    }
`