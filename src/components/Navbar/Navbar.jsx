import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './Navbar.css'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import PersonIcon from '@mui/icons-material/Person';


const Navbar = () => {
  return (
    <nav className="nav" style={{boxShadow: "1px 2px 5px"}}>
      <Link to="/" style={{ fontSize: '30px' }}>
        ARThub
      </Link>
      <ul>
          <CustomLink to="/ContulMeu">Contul meu
              <PersonIcon style={{ padding: '0', marginLeft: '10px'}}></PersonIcon>
          </CustomLink>
        <CustomLink to="/Produse">Produse
          <ColorLensIcon style={{ padding: '0', marginLeft: '10px'}}></ColorLensIcon>
        </CustomLink>
        <CustomLink to="/Contact">Contact
          <PermContactCalendarIcon style={{ padding: '0', marginLeft: '10px' }}></PermContactCalendarIcon>
        </CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
  
export default Navbar;