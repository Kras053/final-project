import React from 'react';
import { NavLink } from 'react-router-dom'; 
import styled from 'styled-components';
import logo from '../assets/NSDlogga.png';
import { MdMenu } from 'react-icons/md'
import { GiFallingStar } from 'react-icons/gi'
import { Link } from 'react-router-dom'; 
import { TotalWishlistItems } from "./TotalWishlistItems";


const NavBar = ({ toggle }) => {
    return (
        <Nav>
            <NavContainer>
                    <LogoContainer>
                        <NavLink
                            to='/' 
                        >
                            <img 
                                src={logo}
                                className="logo"
                                style={logoStyle}
                                alt="Nordic Spells Decor logotype"
                            />
                        </NavLink>
                    </LogoContainer>

                    <LinkContainer>
                        <Hamburger onClick={toggle}>
                            <HamburgerIcon />
                        </Hamburger>
                        <StarLink to='/wishlist' 
                            activeClassName='active'
                            style={linkStyle}
                            alt="wishlist"
                            >
                                <div>
                                    <StarIcon />
                                </div>
                                <div>
                                    <TotalWishlistItems />
                                </div>
                        </StarLink>
                        <NavMenu>
                            <NavLinks to='/rentals' 
                                activeClassName='active'
                                style={linkStyle}
                            >
                                Hyrsaker
                            </NavLinks>
                            <NavLinks to='/flowers' 
                                activeClassName='active'
                                style={linkStyle}
                            >
                                Blommor
                            </NavLinks>
                            <NavLinks to='/services' 
                                activeClassName='active'
                                style={linkStyle}
                            >
                                Tj??nster
                            </NavLinks>
                            <NavLinks to='/about' 
                                activeClassName='active'
                                style={linkStyle}
                            >
                                Om oss
                            </NavLinks>
                            <NavLinks to='/contact' 
                                activeClassName='active'
                                style={linkStyle}
                            >
                                Kontakt
                            </NavLinks>
                            <NavLinks to='/wishlist' 
                                activeClassName='active'
                                style={linkStyle}
                            >
                                ??nskelista
                                <TotalWishlistItems />
                            </NavLinks>
                        </NavMenu>
                    </LinkContainer>
            </NavContainer>
        </Nav>
    )
};

export default NavBar;


const Nav = styled.nav`
    background: #F1EEEB;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    max-height: 120px;
    z-index: 999;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    top: 0;
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 668px) {
        max-width: 1300px;
    }
`

const LogoContainer = styled.div `
    margin: 0 20px 5px 20px;
    padding: 0;
`

const LinkContainer = styled.div `
    display: flex;
    gap: 30px;
    margin: 45px 70px 0 0;
    z-index: 999;
`

const Hamburger = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 2.5rem;
    cursor: pointer;
    
    @media (min-width: 830px) {
        display: none;
    }
`

const HamburgerIcon = styled(MdMenu)`
    cursor: pointer;
    color: #fff;
`

const StarIcon = styled(GiFallingStar)`
    cursor: pointer;
    color: #fff;
    font-size: 2.5rem;
`

const NavMenu = styled.ul`
    display: none;
  
    @media (min-width: 830px) {
        display: flex;
        align-items: center;
    }
`

const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  
  :hover {
    border-bottom: 3px solid white;
  }
`
const StarLink = styled(Link)`
    position: absolute;
    top: 2rem;
    right: 4rem;
    transform: translate(-50%, 25%);
    display: flex;
    flex-direction: row;
    align-items: center;
    
    @media (min-width: 830px) {  
        display: none;
    }
`

const linkStyle = {
    color: "black",
    fontSize: "15px",
    fontWeight: "300",
    textTransform: "uppercase",
}

const logoStyle = {
    height: "auto",
    width: "140px",
}