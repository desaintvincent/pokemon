import React from 'react';
import styled from 'styled-components';
import {
    Link
} from "react-router-dom";
import ROUTE from "../routing/constants";

const Container = styled.div`
  display: block;
`;

const Header = () => (
    <nav>
        <ul>
            <li>
                <Link to={ROUTE.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTE.POKEMONLIST}>pokemon list</Link>
            </li>
            <li>
                <Link to={ROUTE.ABOUT}>about</Link>
            </li>
        </ul>
    </nav>
)

const Template = ({children}) => {
    return (
        <Container>
            <Header />
            {children}
        </Container>
    );
};

export default Template;
