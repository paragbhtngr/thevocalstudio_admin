import React, { Component } from 'react'
import { Button, Table, Modal, Form} from 'react-bootstrap'

export default class User extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showUploadModal: false,
            userFirstName: null,
            userLastName: null,
            userEmailAddress: null,
            users: [{
                id: 23,
                firstName: 'Parag',
                lastName: 'Bhatnagar',
                emailAddress: 'paragbhtngr@gmail.com',
            }, {
                id: 67,
                firstName: 'Ethan',
                lastName: 'Seow',
                emailAddress: 'ethanseow@gmail.com',
            }]
        }
    }

    handleCloseUploadModal = () => {
        this.setState({ showUploadModal: false })
    }
    
    handleShowUploadModal = () => {
        this.setState({ showUploadModal: true })
    }
    
    handleUploadChange = (e) => {
        this.setState({[e.target.id]: e.target.value})
    }

    handleUploadSubmit = () => {
        console.log(`Creating New User: 
        firstName: ${this.state.userFirstName}
        lastName: ${this.state.userLastName}
        emailAddress: ${this.state.userEmailAddress}
        `)
    }
    
    render() {
        return (
        <div>
            <div className="title-bar" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
            }}>
                <h4>USER</h4>
                <Button variant="light" onClick={this.handleShowUploadModal}>Create New</Button>
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '0.75rem',
                alignItems: 'space-between'

            }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return(
                            <tr>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.emailAddress}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>

            {/* Upload Modal */}
            <Modal show={this.state.showUploadModal} onHide={this.handleCloseUploadModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="userFirstName">
                            <Form.Control type="text" placeholder="First Name" onChange={this.handleUploadChange}/>
                        </Form.Group>
                        <Form.Group controlId="userLastName">
                            <Form.Control type="text" placeholder="Last Name" onChange={this.handleUploadChange}/>
                        </Form.Group>
                        <Form.Group controlId="userEmailAddress">
                            <Form.Control type="email" placeholder="Email Address" onChange={this.handleUploadChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseUploadModal}>
                    Cancel
                    </Button>
                    <Button variant="primary" onClick={this.handleUploadSubmit}>
                    Create User 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        )
    }
}
