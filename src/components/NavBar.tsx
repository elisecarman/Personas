import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function NavBar() {

    return(
        <Navbar className='fixed-top'>
            <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/InteractionDesign-New/AccessibleComponent'>
                    Accessible Components
                </Nav.Link>
                <Nav.Link as={Link} to = '/InteractionDesign-New/PersonasStoryboarding'>
                    Personas & Storyboarding
                </Nav.Link>
                <Nav.Link as={Link} to = '/InteractionDesign-New/ResponsiveRedesign'>
                    Responsive Redesign
                </Nav.Link>
            </Nav>
        </Navbar>
    )
    
}

export default NavBar
