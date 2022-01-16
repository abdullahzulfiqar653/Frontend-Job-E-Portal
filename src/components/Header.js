import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBox from './SearchBox';
import Logo from '../design_113638_3249872_424123_sourcefile.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ isAuthenticated }) => {
  console.log('is Authenticated:', isAuthenticated);
  return (
    <header className='bg-dark'>
      <Container className='main-navbar p-0'>
        <Link to='/' className='logo'>
          <h1 style={{color:'purple', paddingLeft:"50px", paddingBottom:"35px", textDecorationLine: 'overline'}}>JOB-E-PORTAL</h1>
        </Link>
        <div className='social-link-cont'>
          <div className='social__links'>
            {isAuthenticated ? (
              <Link to='/myaccount' className='myacount ml-3'>
                <i className='fas fa-shopping-cart'></i> My Account
              </Link>
            ) : (
              <Link to='/login'>
                <i className='fas fa-user'></i> Sign In
              </Link>
            )}
          </div>
          <SearchBox />
        </div>
      </Container>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(Header);
