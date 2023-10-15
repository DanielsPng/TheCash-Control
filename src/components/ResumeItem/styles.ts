import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    flex: 1;
`;

export const Title = styled.div`
    align-items: center;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: center;

`;

export const Info = styled.div<{color?: string}>`
    text-align: center;
    color: ${props => props.color ?? '#ffff'};
`;