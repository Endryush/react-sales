import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import './Navbar.scss';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Link className="navbar__menu--link" to="/">Início</Link>
      </div>
      <div className="navbar__menu">
        <Link className="navbar__menu--link" to="/promocoes">Promoções</Link>
        <Button className="navbar__menu--link" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <span>Minha Conta</span>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} to="/signup">
            Criar Conta
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/login">
            Login
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}
