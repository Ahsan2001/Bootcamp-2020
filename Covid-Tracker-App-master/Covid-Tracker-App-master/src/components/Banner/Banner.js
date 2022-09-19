import React from 'react'
import styles from "./styles.module.css"
import App from "../../assets/app-preview.png"
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
  return (
    <section className={styles.bannerMain}>

        <Container>
              <Row>
                <Col xs={6} md={6} className={"offset-md-1 offset-0 align-self-center"}>
                        <div className={styles.InnerContent}>
                            <h1><span> COVID Tracker</span> app</h1>
                            <h3><strong>Stay safe. Protect each other.</strong></h3>
                            <p>COVID Tracker is a free Web app for your mobile phone and Computer. 
                                It will help us to protect each other and slow the spread of COVID-19 (coronavirus) in all over the world.</p>
                            <p>Using the COVID Tracker app along with the existing public 
                                health measures will help us all stay safe when we meet up, socialise, work or travel.</p>
                        </div>
                </Col>

                <Col xs={5} md={5}>
                    <div className={styles.innerImage}>
                    <img src={App} alt="App View" />
                    </div>
                </Col>
                </Row>
        </Container >
    </section>
  )
}

export default Banner