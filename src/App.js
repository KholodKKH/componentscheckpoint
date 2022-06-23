
import Photograph from "./Component/Profile/ProfilePhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Container,Carousel,Card,Form,Table} from "react-bootstrap";
import './App.css';
import imagesglass1 from "./images/imagesglass1.jpg";
import imagesglass2 from "./images/imagesglass2.jpg";
import imagesglass3 from "./images/imagesglass3.jpg";

function App() {
  return (
    <div className="App">
   {/* --- Navbar Part ----- */} 
   <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className='My Profile'>My Profile</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='Home'>Home</Nav.Link>
            <Nav.Link href="#features" className='about'>about</Nav.Link>
            <Nav.Link href="#pricing" className='services'>services</Nav.Link>
            <Nav.Link href="#pricing" className='Contact'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            height={"600px"}
            src={imagesglass1}
            alt="First slide"/>
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            height={"600px"}
            src={imagesglass2}
            alt="Second slide"/>
          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height={"600px"}
            src={imagesglass3}
            alt="Third slide"
          />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>
              {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Card part */}
      <div className='mycv'>
      <Card style={{ width: '18rem' }}>
      <Photograph/>
      <Card.Body>
        <FullName />
        <Card.Text className='description'> We fight to be right,We will be glad to supply your request</Card.Text>
      </Card.Body>
    </Card>
    {/* form part */}
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Your Email</Form.Label>
        <Address />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Opinion</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
      </div>
      <br></br>
      {/* table part */}
      <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr className='rowa'>
          <th>#</th>
          <th>Brand type</th>
          <th>Brand country</th>
          <th>Brand website URL</th>
        </tr>
      </thead>
      <tbody>
        <tr className='rowb'>
          <td>1</td>
          <td>Pier Martino </td>
          <td>Italia</td>
          <td>https://en.piermartino.it</td>
        </tr>
        <tr className='rowc'>
          <td>2</td>
          <td>Hermossa</td>
          <td>Turkia</td>
          <td>https://hermossaeyewear.com</td>
        </tr>
        <tr className='rowd'>
          <td>3</td>
          <td>Cadillac</td>
          <td>Italia</td>
          <td>https://www.gooptic.com/cadillac-eyeglasses</td>
        </tr>
      </tbody>
    </Table>
      </div>
      {/* footer part */}
      <div className='footer'>
      <footer className="page-footer font-small blue pt-4 footer1">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">ABOUT US </h5>
              <p>
              My Story
I thought one day that I would open a store and sell original products at a price much lower than the market and bring them from abroad and help customers.
I liked to specialize in optics and contact lenses<br></br>because it is the thing I use the most in my day..
                contact with us...
              </p>
            </div>
            <hr className="clearfix w-100 d-md-none pb-0" />
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Email address : alnamariqgroup@gmail.com</a>
                </li>
                <li>
                  <a href="#!">Phone Number : 00218915214045</a>
                </li>
                <li>
                  <a href="#!">Other Ph Num : 00218925214045</a>
                </li>
                <li>
                  <a href="#!">Address : Tripoli-Libya</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a href="#"> alnamariqgroup@gmail.com</a>
        </div>
      </footer>
      </div>
    </div>
  );
}
export default App;
