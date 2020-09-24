import React,{Component, Fragment} from 'react';
import { NavLink } from "react-router-dom";

import "./App.css";
import logo from "../img/icon.png";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from "reactstrap";

import Logout from './Logout';

class Header extends Component{
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    HeaderWithLogin = () => (
        <Fragment>
            <Nav className="mr-auto ml-3 navbar-items" navbar>
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/" className="nav-link navbar-links active">
                        Top
                    </NavLink>
                </NavItem>
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/" className="nav-link navbar-links active">
                        New
                    </NavLink>
                </NavItem>
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/ask" className="nav-link navbar-links active">
                        Ask
                    </NavLink>
                </NavItem>
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/submit" className="nav-link navbar-links active">
                        Submit
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className="login">
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/profile" className="nav-link navbar-links active">
                        @{
                        this.props.session.activeUser.username
                    }
                    </NavLink>

                </NavItem>
                <Logout/>
            </Nav>
        </Fragment>
    );

    HeaderWithUnLogin = () => (
        <Fragment>
            <Nav className="mr-auto ml-3 navbar-items" navbar>
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/" className="nav-link navbar-links active">
                        Top
                    </NavLink>
                </NavItem>
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/" className="nav-link navbar-links active">
                        New
                    </NavLink>
                </NavItem>
                <NavItem onClick={this.state.isOpen ? this.toggle : null}>
                    <NavLink to="/ask" className="nav-link navbar-links active">
                        Ask
                    </NavLink>
                </NavItem>

            </Nav>
            <Nav className="login">
                <NavItem onClick={this.state.isOpen ? this.toggle : null} className="login">
                    <NavLink to="/login" className="nav-link navbar-links active">
                        Login
                    </NavLink>
                </NavItem>
            </Nav>
        </Fragment>
    );

    render() {
        const {activeUser} = this.props.session ? this.props.session : {activeUser:null};

        return (
            <div>
                <Navbar dark style={{ backgroundColor: "#FA5700" }} expand="md">
                        <NavbarBrand className="nav-align">
                            <img src={logo} className="logo" alt="" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            {
                                activeUser ? this.HeaderWithLogin() : this.HeaderWithUnLogin()
                            }
                        </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default Header;
