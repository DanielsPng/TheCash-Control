import styled from "styled-components";

export const TableLine = styled.tr`
    
`;

export const TableCollum = styled.td`
    padding: 1rem 0;

`;

export const Category = styled.div<{ color: string, colorBorder: string}>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 100px;
    color: ${props => props.colorBorder};
    background-color: ${props => props.color};
    border: 1px solid ${props => props.colorBorder};

`;

export const Value = styled.div<{ color: string}>`
    color: ${props => props.color};

`;


