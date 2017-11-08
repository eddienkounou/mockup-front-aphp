import React, {Component} from 'react';

import informezvous from '../Health-information-technology.jpg';
import preparezvotrevenue from '../preparezvotrevenue.jpg'
import vivezalopital from '../vivezalopital.jpg'
import gerezvotrepriseencharge from '../gerezvotrepriseencharge.jpg'

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

class Home extends Component {
  constructor() {
    super();

    this.state = {};
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

    return (
      <Row>
        <Col lg="3" sm="6" xs="12" style={cardStyle}>
          <Card style={cardHeight}>
            <CardBody>
              <CardTitle style={cardTitleStyle}>Informez-vous</CardTitle>
            </CardBody>
            <img width="100%" height="170px" src={informezvous}/>
            <CardBody>
              <CardLink href="#">Actualité personnalisée</CardLink>
              <br/>
              <CardLink href="#">Sport et santé</CardLink>
              <br/>
              <CardLink href="#">Autre 1</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" sm="6" xs="12" style={cardStyle}>
          <Card style={cardHeight}>
            <CardBody>
              <CardTitle style={cardTitleStyle}>Préparez votre venue</CardTitle>
            </CardBody>
            <img width="100%" height="170px" src={preparezvotrevenue}/>
            <CardBody>
              <CardLink href="#">Lien 1</CardLink>
              <br/>
              <CardLink href="#">Lien 2</CardLink>
              <br/>
              <CardLink href="#">Lien 3</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" sm="6" xs="12" style={cardStyle}>
          <Card style={cardHeight}>
            <CardBody>
              <CardTitle style={cardTitleStyle}>Vivez à l'hôpital</CardTitle>
            </CardBody>
            <img width="100%" height="170px" src={vivezalopital}/>
            <CardBody>
              <CardLink href="#">Lien 1</CardLink>
              <br/>
              <CardLink href="#">Lien 2</CardLink>
              <br/>
              <CardLink href="#">Lien 3</CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" sm="6" xs="12" style={cardStyle}>
          <Card style={cardHeight}>
            <CardBody>
              <CardTitle style={cardTitleStyle}>Gérez votre prise en charge</CardTitle>
            </CardBody>
            <img width="100%" height="170px" src={gerezvotrepriseencharge}/>
            <CardBody>
              <CardLink href="#">Lien 1</CardLink>
              <br/>
              <CardLink href="#">Lien 2</CardLink>
              <br/>
              <CardLink href="#">Lien 3</CardLink>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Home;
