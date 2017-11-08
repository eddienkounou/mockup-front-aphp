import React, {Component} from 'react';

import {
  Collapse,
  Container,
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
  FormText,
  Label,
  Input,
  Badge
} from 'reactstrap';
import {Row, Col} from 'react-flexbox-grid';

class Profile extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {

    return (
      <Row>
        <Col lgOffset={2} lg={8} xs={12}>

          <Form>
            <FormGroup row>
              <Label for="Identifiant" sm={3}>Identifiant</Label>
              <Col sm={9}>
                <Input type="text" name="Identifiant" id="Identifiant" value="RichardNicot01" disabled="disabled"/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>Email</Label>
              <Col sm={9}>
                <Input type="email" name="email" id="exampleEmail" value="richard.nicot@ibm.com" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={3}>Mot de passe</Label>
              <Col sm={9}>
                <Input type="password" name="password" id="examplePassword" value="password" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={3}>Sexe</Label>
              <Col sm={9}>
                <Input type="select" name="select" id="exampleSelect" disabled>
                  <option>Masculin</option>
                  <option>Féminin</option>
                  <option>Autre</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="prenom" sm={3}>Prénom</Label>
              <Col sm={9}>
                <Input type="text" name="prenom" id="prenom" value="Richard" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="nom" sm={3}>Nom</Label>
              <Col sm={9}>
                <Input type="text" name="nom" id="nom" value="Nicot" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="adresse" sm={3}>Adresse</Label>
              <Col sm={9}>
                <Input type="text" name="adresse" id="adresse" value="2 Bis Rue Jules Michelet" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="codepostal" sm={3}>Code postal</Label>
              <Col sm={9}>
                <Input type="number" name="codepostal" id="codepostal" value="90000" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="ville" sm={3}>Ville</Label>
              <Col sm={9}>
                <Input type="text" name="ville" id="ville" value="Belfort" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="telephone" sm={3}>Téléphone</Label>
              <Col sm={9}>
                <Input type="number" name="telephone" id="telephone" value="0675443298" disabled/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="consentement" sm={3}>Consentements</Label>
              <Col sm={9}>
                <Input type="select" name="consentement" id="consentement" multiple disabled>
                  <option selected>Standard</option>
                  <option>Antibiotiques</option>
                  <option>Don d'organes</option>
                  <option>Transfusion</option>
                  <option>Maintenir en vie</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}></Col>
              <Col sm={9}>
                <Button color="primary" block>Modifier les informations</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Profile;
