import { Container, Nav, Navbar } from 'react-bootstrap'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFileText } from "react-icons/bs";



const MyNavbar = () => {
  return (
    <div>
        <Navbar style = {{backgroundColor: "#002c44"}}>

            <Container>

            <Nav>
            <Navbar>
 
            </Navbar>
            </Nav>

            
            <Nav>
            <Container style = {{backgroundColor: "#92b2ff", borderRadius: "30px", height: 73}}>
            <Navbar style = {{marginRight: "40px"}}>
              <Nav.Link style = {{color: "white", position: "relative", left: "0%"}} href = "wa.me/message/3SHA5UDB7SPHO1">
              <FontAwesomeIcon icon={faWhatsapp} size = '2x' />
              </Nav.Link>

              <Nav.Link style = {{color: "white", position: "relative", left: "10%"}} href = "#callback">
              <BsFileText style={{margin: "3 20px", fontSize: "30px"}}/>
              <div style = {{position: "absolute", marginLeft: "15px"}}>
              פרטים
              </div>
              </Nav.Link>
              
              <Nav.Link style = {{color: "white", position: "relative", left: "20%"}} href = "https://www.instagram.com/segev_saada/">
              <FontAwesomeIcon icon={faInstagram} size = '2x'/>
              </Nav.Link>
            </Navbar>
            </Container>
            </Nav>
            

            <Nav>

            <Navbar.Brand style = {{color: "white"}} href="/">שגב סעדה</Navbar.Brand>

            </Nav>

        
            </Container>

        </Navbar>


    </div>
  )
}

export default MyNavbar