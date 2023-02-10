import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../../images/SKULLPROXIES LOGO-14.png'
// blacklogo.svg
import ModeIcon from '../../images/modicon.png';
import dropdownimg from '../../images/dropdownno.png';
import { IconContext } from 'react-icons/lib';
import './Navbar.css';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLogo,
  NavLinks,
  NavLinks2,
  NavBtn,
  NavBtnLink, Button
} from './NavbarElement';
import { Dropdown } from 'react-bootstrap';

const Navbar = ({ toggle, hide, user }) => {

  const [scrollNav, setScrollNav] = useState(false);
  // const [openDropdown, setOpenDrop] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false);
    }
  }



  useEffect(() => {
    window.addEventListener('scroll', changeNav)

  }, [])


  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer user={user}>

            <NavLogo to="/" onClick={toggleHome}>
              <img style={{ width: '25rem', imageRendering: '-webkit-optimize-contrast' }} className="img-fluid ClearSans-Bold" alt="not" src={logo} />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu className="mt-3 ">


              {user ?
                <NavItem user={user} hide={hide}>
                  <NavLinks2
                    className="hovering clearsansthin"
                    to="/"
                    //   smooth={true}
                    //   duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Home</NavLinks2>
                </NavItem >

                :
                <NavItem user={user} hide={hide}>
                  <NavLinks
                    className="clearsansthin "
                    to="home"
                    // smooth={true}
                    // duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Home</NavLinks>
                </NavItem >


              }

              {user ?
                <NavItem user={user} hide={hide}>
                  <NavLinks2
                    className="hovering clearsansthin"
                    to="/dashboard"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Overview</NavLinks2>
                </NavItem>

                :
                <NavItem hide={hide}>
                  <NavLinks
                    className="clearsansthin"
                    to="features"
                    // smooth={true}
                    // duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Features</NavLinks>
                </NavItem>


              }
              {user ?
                <NavItem user={user} hide={hide}>
                  <NavLinks2
                    className="hovering clearsansthin"
                    to="/premiumisp"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Premium ISP</NavLinks2>
                </NavItem>

                :
                <NavItem hide={hide}>
                  <NavLinks to="sites"
                    className="clearsansthin"
                    // style={{width:"10rem"}}
                    // smooth={true}
                    // duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Supported Sites</NavLinks>
                </NavItem>

              }

              {user ?
                <NavItem user={user} hide={hide}>
                  <NavLinks2
                    className="hovering clearsansthin"
                    to="/premiumresi"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Premium Residential</NavLinks2>
                </NavItem>

                :
                <NavItem hide={hide}>
                  <NavLinks to="pricing"
                    className="clearsansthin"
                    // smooth={true}
                    // duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Pricing</NavLinks>
                </NavItem>

              }
              {user ?
                ""

                :

                <NavItem hide={hide}>
                  <NavLinks to="faq"
                    className="clearsansthin"
                    // smooth={true}
                    // duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >FAQ</NavLinks>
                </NavItem>

              }

              {user ?
                ""

                :

                <NavItem hide={hide}>
                  <NavLinks to="contact"
                    className="clearsansthin"
                    // smooth={true}
                    // duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                  >Contact</NavLinks>
                </NavItem>

              }




              {user ?
                <NavBtn>
                  <NavBtnLink
                    style={{ background: "none", border: "none" }}
                    className="offset-5 clearsansthin"
                    to="/dashboard"
                  >

                    <img style={{ width: "2.4rem" }} src={ModeIcon} alt="" />

                  </NavBtnLink>
                  <Navbardropdown>
                    {/* <DropdownMenu /> */}
                  </Navbardropdown>
                </NavBtn>

                :
                <NavBtn >
                  <NavBtnLink className="ms-3 ClearSans-Bold"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavBtnLink>
                </NavBtn>
              }


            </NavMenu>





          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

function Navbardropdown(props) {
  const [openDropdown, setOpenDrop] = useState(false);

  return (
    <Dropdown className='drd '>

      <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdown2 border-0 p-0 m-0' style={{ border: 'none !important' }}>
        {/* Dropdown Button */}
      </Dropdown.Toggle>

      <Dropdown.Menu className='menuitem mt-1 '>
        <Dropdown.Item href="#/action-1" className=' text-white position-absolute top-75 border end-50'>Logout</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  )

}

function DropdownMenu() {
  function DropDownItem(props) {
    return (
      <a href='#' style={{ color: 'white', height: '50px', display: 'flex', alignItems: 'center', borderRadius: '6px', padding: '0.5rem' }} className="menu-item">
        {props.children}
      </a>
    )
  }

  return (
    <div className="dropdownmenu" style={{
      position: 'relative', top: '70px', width: '13em', left: '88%', padding: '8px',
      overflow: 'hidden',
      background: '#1c1c24',
      border: '1px solid #24242d',
      borderRadius: '6px'
    }}>
      <DropDownItem>
        Log Out
      </DropDownItem>
    </div>
  )
}

export default Navbar;