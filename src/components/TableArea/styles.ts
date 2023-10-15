import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #101010;
    padding: 20px;

    border-radius: 10px;
    margin-top: 1rem;
    
`;

export const TableHeadCollum = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0px;
    text-align: left;
    

`;
