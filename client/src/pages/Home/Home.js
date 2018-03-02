import React, { Component } from "react";
import Navbar from "../../components/Nav";
import { Col, Container, Row } from "../../components/Grid";
import { Card, CardBody, CardHeader } from "../../components/Card";



class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col size="md-6">
              <img className="mx-auto d-block" src="img/quizard_of_ahhhs.png" alt="Quizard of Ahhhs... Logo" height="250" />
              <Card>
                <CardHeader><h1 className="text-center">Rules of the Game</h1></CardHeader>
                <CardBody>
                  <h3 className="text-center">Every player has 10 seconds to answer each question.  The player with the most questions correct at the end of 15 questions will be the winner and will enter Emerald Quizity.</h3>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container> 
      </div>
    )
  }
}
    
    
export default Home;