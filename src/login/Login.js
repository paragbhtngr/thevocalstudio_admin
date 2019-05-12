import React, { Component } from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import api from '../api'

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: null,
      password: null,
      error: null,
    }
  }

  handleFormChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleLogin = () => {
    console.log(this.state)
    axios.post(

    )
  }

  render() {
    return (
      <Container fluid style={{
        backgroundImage: `url('https://thevocalstudio.sg/ClientAssets/images/banner/banner-2.jpg')`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Card style={{
          textAlign: 'center',
          padding: '1rem 3rem'
        }}>
          <Card.Body>
            <h3 style={{marginBottom: '-0.2rem', fontWeight: 'bolder', color: '#E95420'}}>The Vocal Studio</h3>
            <h5>Admin Dashboard</h5>
            <br/>   
            <Form>
              <Form.Group controlId="formBasicEmail" style={{textAlign: 'left'}}>
                <Form.Control name="email" type="email" placeholder="Email address" onChange={this.handleFormChange} />
              </Form.Group>
              
              <Form.Group controlId="formBasicPassword" style={{textAlign: 'left'}}>
                <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleFormChange} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.handleLogin}>
                Login
              </Button>
            </Form>
            <br/><br/>
            <Link to={'/pwreset'}>Forgot Password? Click here to reset</Link>
          </Card.Body>
        </Card>
      </Container>
      )
    }
  }
  