import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>AR Fruits Warehouse</Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/manageInventory">Manage Inventory</Nav.Link>
                                <Nav.Link as={Link} to="/addItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="/myItem">My Item</Nav.Link>
                            </>

                        }
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {user ?
                            <Nav.Link as={Link} onClick={handleSignOut} to="/">Signout</Nav.Link>
                            :
                            <Nav.Link as={Link} to="/login"> Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <div className='navbar'>
        //     <div>
        //         <h1>AR Warehouse</h1>
        //     </div>
        //     <div>
        //         <Link to="/home">Home</Link>
        //         {
        //             user && <>
        //                 <Link to="/manageInventory">Manage Inventory</Link>
        //                 <Link to="/addItem">Add Item</Link>
        //                 <Link to="/myItem">My Item</Link>
        //             </>
        //         }
        //         <Link to="/blogs">Blogs</Link>
        //         {
        //             user ?
        //                 <Link to="/" onClick={handleSignOut}>Signout</Link>
        //                 :
        //                 <Link to="/login">Login</Link>
        //         }


        //     </div>
        // </div>
    );
};

export default Header;