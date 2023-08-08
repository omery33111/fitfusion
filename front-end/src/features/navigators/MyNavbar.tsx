import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFileText } from "react-icons/bs";
import { useAppSelector } from '../../app/hooks';
import { selectIsLogged, selectIsStaff } from '../authentication/authenticationSlice';
import { useAppDispatch } from '../../app/hooks';
import { logoutAsync, reset } from '../authentication/authenticationSlice';



const MyNavbar = () => {
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(logoutAsync());
    dispatch(reset());
    window.location.href = "/";
  };

  const storedIsStaff = JSON.parse(localStorage.getItem('is_staff') as string)

  const isLogged = useAppSelector(selectIsLogged)
  const isStaff = useAppSelector(selectIsStaff)

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

              {storedIsStaff ? (<Navbar.Brand style = {{color: "white", position: "relative", top: -10}} href="/portal">שגב סעדה</Navbar.Brand>) :
              
              (<Navbar.Brand style = {{color: "white", position: "relative", top: -10}} href="/">שגב סעדה</Navbar.Brand>)
              }

              

              {storedIsStaff ? (
                
                <Nav.Link style = {{color: "white", bottom: 10, position: "absolute", marginLeft: 13}} onClick={() => onLogout()}>
                    התנתקות
                  </Nav.Link>

              ) : (

                <Nav.Link style = {{color: "white",  bottom: 10, position: "absolute", marginLeft: 13}} href = "/authentication/login">
                התחברות
                </Nav.Link>

              )}


            </Nav>

        
            </Container>

        </Navbar>


    </div>
  )
}

export default MyNavbar