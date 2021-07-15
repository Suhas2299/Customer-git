import {
  Nav,
  Navbar,
  Dropdown,
  DropdownButton,
  FormControl,
  InputGroup,
} from "react-bootstrap"; //
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export const AppNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    // <div className="bg-light text-light p-3 d-flex justify-content-end ">
    //   <Link to="/customer-upsert">
    //     <h6>ADD CUSTOMER</h6>
    //   </Link>
    // </div>
    <Navbar
      variant="dark"
      expand="lg"
      sticky="top"
      bg="info"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand href="#home">EBMS</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/customer-upsert">
            CustomerRegister
          </Nav.Link>
          <Nav.Link as={Link} to="/customer-list">
            CustomerList
          </Nav.Link>
          <Nav.Link as={Link} to="/find-customer">
            FindConsumer
          </Nav.Link>
          {/* <Nav.Link as={Link} to="">
            FindByMobile
          </Nav.Link>
          <Nav.Link as={Link} to="">
            FindByAdhar
          </Nav.Link>
          <Nav.Link as={Link} to="">
            FindByEmail
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
