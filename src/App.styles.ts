import styled from "styled-components";

export const Container = styled.div`
    background-color: #000000;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Header = styled.div`
    background-color: #000000;
    height: 150px;
    text-align: center;
    -webkit-box-shadow:0px 0px 88px 45px rgba(16,185,129,0.24);
    -moz-box-shadow: 0px 0px 88px 45px rgba(16,185,129,0.24);
    box-shadow: 0px 0px 88px 45px rgba(16,185,129,0.24);
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    background: -webkit-linear-gradient(#ffff, #f1f1f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-top: 2rem;
    

`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 5rem;
    color: white;
`;


