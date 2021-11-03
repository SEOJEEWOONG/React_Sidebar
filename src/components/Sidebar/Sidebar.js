import React, {useState} from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const SidebarNav = styled.nav`
  background: #1C72BD;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarButton = styled.button`
  padding: 20px;
  height: 60px;
  width: 125px;
  color: white;
  font-size: 16px;
  border: white;
  background-color: #1C72BD;
  :hover {
    background-color: #99c6f5;
  }
`;

const Sidebar = () => {
    const [device, setDevice] = useState('V');
    const changeDevice = (evt) => setDevice(evt.target.name);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
      <IconContext.Provider value={{ color: 'black' }}>
        <SidebarButton name='V' onClick={(evt)=>{changeDevice(evt); showSidebar();}}>V</SidebarButton>
        <SidebarButton name='D' onClick={(evt)=>{changeDevice(evt); showSidebar();}}>D</SidebarButton>  
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} device={device}/>;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      );
};

export default Sidebar;