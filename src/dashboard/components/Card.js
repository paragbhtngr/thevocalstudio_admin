import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class InfoCard extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }
    
    render() {
        return (
            <Card style={{minWidth: '250px', margin: '0.75rem'}}>
                <Card.Title style={{
                    padding: '1.25rem 1.25rem 0rem 1.25rem', 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                }}>
                    {this.props.title}
                    <Button size="sm">Delete</Button>
                </Card.Title>
                
                <Card.Body style={{paddingTop: '0px'}}>
                <p>{this.props.info}</p>   
                <div className="videoWrapper" style={{
                    position: 'relative',
                    paddingBottom: '56.25%', // 16:9
                    paddingTop: '25px',
                    height: '0'
                }}>
                    <iframe style= {{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                    }} title={this.props.title} width="560" height="349" 
                        src={this.props.videoURL} 
                        frameborder="0" allowfullscreen
                    ></iframe>
                </div>
                </Card.Body>
            </Card>
        )
    }
}
