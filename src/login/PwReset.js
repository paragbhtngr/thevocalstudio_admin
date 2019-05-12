import React, { Component } from 'react'
import { Container, Card, Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class PwReset extends Component {
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
                        <h5>Reset Password</h5>
                        <br/>   
                        <Form>
                            <Form.Group controlId="formBasicEmail" style={{textAlign: 'left'}}>
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit Password Reset Request
                            </Button>
                        </Form>
                        <br/><br/>
                        <Link to={'/login'}>Back to Login Page</Link>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
