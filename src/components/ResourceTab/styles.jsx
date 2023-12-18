import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 20px 0;

    > h2 {
        color: var(--white);
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 10px;
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 8px;
    }
`