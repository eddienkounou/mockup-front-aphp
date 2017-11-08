import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Home from './components/home'
import Profile from './components/profile'

import logo from './aphp-logo.png';
import banner from './banner-header.jpg';
import informezvous from './Health-information-technology.jpg';
import preparezvotrevenue from './preparezvotrevenue.jpg'
import vivezalopital from './vivezalopital.jpg'
import gerezvotrepriseencharge from './gerezvotrepriseencharge.jpg'
import {
  Collapse,
  Container,
  Row,
  Col,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Badge
} from 'reactstrap';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.log = this.log.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: false,
      dropdownOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleLogin() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  log() {
    this.state.modal
      ? this.toggleModal()
      : null;
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  render() {

    var cardStyle = {
      padding: 20
    };

    var cardHeight = {
      height: 400
    };

    var cardTitleStyle = {
      maxHeight: 10
    };

    var bannerStyle = {
      position: "absolute",
      top: "0px",
      left: "0px",
      right: "0px",
      width: "100%",
      height: "200px",
      zIndex: -1
    }

    let login = null;
    if (!this.state.isLoggedIn) {
      login = <NavLink onClick={this.toggleModal}>Se connecter</NavLink>;
    } else {
      login = <NavLink>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleLogin}>
          <DropdownToggle tag="span" aria-expanded={this.state.dropdownOpen} onClick={this.toggleLogin} data-toggle="dropdown" caret>
            Richard Nicot
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link to="/profile">Profil</Link>
            </DropdownItem>
            <DropdownItem divider/>
            <DropdownItem onClick={this.log}>
              <Link to="/">Se déconnecter</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavLink>;
    }

    return (
      <Router>
        <div>
          {/*Navbar*/}
          <Navbar color="primary" dark expand="md">
            <NavbarBrand href="/">
              <img src={logo} width='202' alt="APHP"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  {login}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          {/*Navbar end*/}
          {/*Content*/}
          <Row className={styles.banner}>
            <img src={banner} style={bannerStyle} alt=""/>
          </Row>
          <Container>
            <Row>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </Row>

            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/profile" component={Profile}/>
            </Switch>

          </Container>
          {/*Content end*/}
          {/*Footer*/}
          <div className={styles.footer}></div>
          {/*Footer End*/}
          {/*Modal*/}
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Se connecter au portail</ModalHeader>
            <ModalBody>
              <Button color="primary" block>FRANCE CONNECT</Button>
              <br/>
              <Form>
                <FormGroup>
                  <Label for="exampleIdentifiant">Identifiant</Label>
                  <Input type="text" required name="id" id="exampleIdentifiant" placeholder="Votre identifiant"/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Mot de passe</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Votre mot de passe"/>
                </FormGroup>
                <Button href="#" color="link">Mot de passe oublié</Button>
                <Button href="#" color="link">Créer un compte</Button>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.log}>Accéder au portail</Button>{' '}
              <Button color="danger" onClick={this.toggleModal}>Annuler</Button>
            </ModalFooter>
          </Modal>
          {/*Modal End*/}
        </div>
      </Router>
    );
  }
}

export default App;
