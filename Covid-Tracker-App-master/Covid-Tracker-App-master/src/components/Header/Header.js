import style  from './styles.module.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand="lg"  className={style.Main}>
            <Container fluid>
                <Navbar.Brand href="#" className={style.logo_main}>COVID TRACKER</Navbar.Brand>
                {new Date().toDateString() }
            </Container>
        </Navbar>
    );
}

export default Header;