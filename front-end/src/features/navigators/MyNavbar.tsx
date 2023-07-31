import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">

            <Container>

            <Nav>

            <Navbar.Brand href="#home">Navbar</Navbar.Brand>

            </Nav>
        
            </Container>

        </Navbar>


    </div>
  )
}

export default MyNavbar