import React, { Component } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

import Card from './components/Card'

export default class Audio extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showUploadModal: false,
            uploadTitle: null,
            uploadDescription: null,
            uploadURL: null
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
        console.log(`Uploading new audio: 
        title: ${this.state.uploadTitle}
        desc: ${this.state.uploadDescription}
        URL: ${this.state.uploadURL}
        `)
    }
    
    render() {
        return (
        <div>
            <div className="title-bar" style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h4>{this.props.category.toUpperCase()} AUDIO</h4>
                <Button variant="light" onClick={this.handleShowUploadModal}>Create New</Button>
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                marginLeft: '-0.75rem',
                marginRight: '-0.75rem',
                alignItems: 'space-between'

            }}>
            {/* <Card
                title="Arpeggio"
                info="This is some information about this exercise"
                videoURL="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
            ></Card>
            <Card
                title="Leggato"
                info="This is some information about this exercise"
                videoURL="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
            ></Card>
            <Card
                title="Altoplano"
                info="This is some information about this exercise"
                videoURL="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
            ></Card>
            <Card
                title="Quattro Formaggio"
                info="This is some information about this exercise"
                videoURL="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
            ></Card>
            <Card
                title="Parmiggiano"
                info="This is some information about this exercise"
                videoURL="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1"
            ></Card> */}
            {this.props.videos.map(video => {
                return(
                    <Card
                    title={video.title}
                    info={video.description}
                    videoURL={video.url}
                    ></Card>
                )
            })}
            </div>

            {/* Upload Modal */}
            <Modal show={this.state.showUploadModal} onHide={this.handleCloseUploadModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload New Audio File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="uploadTitle">
                            <Form.Control type="text" placeholder="Title" onChange={this.handleUploadChange}/>
                        </Form.Group>
                        <Form.Group controlId="uploadDescription">
                            <Form.Control type="text" placeholder="Description" onChange={this.handleUploadChange}/>
                        </Form.Group>
                        <Form.Group controlId="uploadURL">
                            <Form.Control type="text" placeholder="URL" onChange={this.handleUploadChange}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseUploadModal}>
                    Cancel
                    </Button>
                    <Button variant="primary" onClick={this.handleUploadSubmit}>
                    Upload 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
        )
    }
}
