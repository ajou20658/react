import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    
    background-color: rbga(20,20,20,0.8);
    z-index:10;
`;
const List = styled.ul`
    display: flex;
`;

const Item=styled.li`
    width:80px;
    height: 50px;
    text-align: center;
    border-bottom: 4px solid ${props=>props.current ?"red":"transparent"};
    transition : border-bottom 0.5s ease-in-out;
`;

const SLink=styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location: {pathname}})=>(
    <Header>
        <List>
            <Item current={pathname ==="/"}>
                <SLink to ="/">Movies</SLink>

            </Item>
            <Item current={pathname==="/tv"}>
                <SLink to ="/tv">TV</SLink>
            </Item>
            <Item current = {pathname==="/search"}>
                <SLink to ="/search">Search</SLink>
            </Item>
        </List>
    </Header>
));