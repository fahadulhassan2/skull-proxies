import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarLink2,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer style={{alignContent:"center",textAlign:"center"}} isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to="features" onClick={toggle}>
                        Feature
                    </SidebarLink>
                    <SidebarLink to="sites" onClick={toggle}>
                        Supported Sites
                    </SidebarLink>
                    <SidebarLink to="pricing" onClick={toggle}>
                        Pricing
                    </SidebarLink>
                    <SidebarLink to="faq" onClick={toggle}>
                        FAQ
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/dashboard">Dashboard</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;