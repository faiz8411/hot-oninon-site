import React from 'react';
import './About.css'
import about1 from '../../Image/contact1.png'
import about2 from '../../Image/contact2.png'
import about3 from '../../Image/contact3.png'
import icon from '../../ICON/Group 245.png'
import { Card, CardGroup } from 'react-bootstrap';
const About = () => {
    return (


        <div className="container mt-5">
            <div className="about-sec">
                <h2>why you choose our FOOD</h2>
                <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Molestiae corrupti et placeat ipsum sapiente. <br /> Exercitationem animi perspiciatis tempore architecto illum aut harum? <br /> Similique temporibus amet saepe ipsam id vero quis!</p>
            </div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={about1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={about2} />
                    <Card.Body>
                        <Card.Title>Taste Quality</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={about3} />
                    <Card.Body>
                        <Card.Title>Delivary fast</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>

        </div>

    );
};

export default About;