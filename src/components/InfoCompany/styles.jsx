import styled from "styled-components";

import { IoMdLogOut, IoIosNotifications } from "react-icons/io";

export const Container = styled.div`
    grid-area: IC;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 12px;

    background-color: var(--primary);
`

export const AcessInfo = styled.div`

    > h2 {
        font-size: 16px;
        color: var(--text-primary);
        font-weight: 500;
    }

    > span {
        font-size: 14px;
        color: var(--text-secondary);
        font-weight: 600;
    }

`

export const LogoutArea = styled.div`
    display: flex;
    align-items: center;
`

export const IconNotification = styled(IoIosNotifications)`

    width: 32px;
    height: 32px;
    padding: 6px;

    color: var(--tertiary);

    cursor: pointer;

    margin-right: 7px;

    border-radius: 12px;
    border: 1px solid var(--tertiary);
    
    transition: box-shadow .2s;

    &:hover {
        box-shadow: inset 0 0 5px 0;
    }
`

export const IconLogout = styled(IoMdLogOut)`
    width: 32px;
    height: 32px;
    padding: 6px;

    color: var(--tertiary);

    cursor: pointer;

    border-radius: 12px;
    border: 1px solid var(--tertiary);
    transition: box-shadow .2s;

    &:hover {
        box-shadow: inset 0 0 5px 0;
    }
`