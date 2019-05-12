import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import User from './User'
import Audio from './Audio'
import Settings from './Settings'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            activeWindow: "users",
            logout: false
        }

        this.changeActiveWindow = this.changeActiveWindow.bind(this)

    }

    changeActiveWindow = (window) => {
        this.setState({
            activeWindow: window,
        })
    }

    logout = () => {
        this.setState({
            logout: true
        })
    }
    
    render() {
        if (this.state.logout === true) {
            return <Redirect to='/login' />
        }

        return (
        <Container fluid>
            <Row>
                <Col sm={0} md={4} lg={3} xl={2} style={{padding: '0', minWidth: '1rem'}}>
                    <div className="sidebar bg-light" style={{
                            // background: '#E95420', 
                            minHeight: '100vh',
                            padding: '1rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center'
                        }}>
                        <h4>Admin Dashboard</h4>
                        <br/>           
                        <Button variant="light" onClick={() => this.changeActiveWindow("users")}>Users</Button>
                        <Button variant="light" onClick={() => this.changeActiveWindow("male_audio")}>Male Audio</Button>
                        <Button variant="light" onClick={() => this.changeActiveWindow("female_audio")}>Female Audio</Button>
                        <Button variant="light" onClick={() => this.changeActiveWindow("settings")}>Settings</Button>
                        <Button variant="light" onClick={this.logout}>Logout</Button>
                    </div>
                </Col>
                <Col sm={12} md={8} lg={9} xl={10} style={{
                    // background: 'green'
                    padding: '1rem 1.5rem',
                    }}>
                    {(() => {switch(this.state.activeWindow) {
                        case "users":
                            return <User/>
                        case "male_audio":
                            return <Audio category="male" videos={[
                                {
                                    title: "Arpeggio",
                                    description: "Description",
                                    url: "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
                                }, {
                                    title: "Arpeggio",
                                    description: "Description",
                                    url: "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
                                }, {
                                    title: "Arpeggio",
                                    description: "Description",
                                    url: "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
                                }, {
                                    title: "Arpeggio",
                                    description: "Description",
                                    url: "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
                                }, {
                                    title: "Arpeggio",
                                    description: "Description",
                                    url: "http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
                                }
                            ]}/>
                        case "female_audio":
                            return <Audio category="female"/>
                        case "settings":
                            return <Settings/>
                        default:
                            return <User/>
                    }})()}
                </Col>
            </Row>
        </Container>
        )
    }
}
