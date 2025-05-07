import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slide from '../slide/Slide';
import Card from './Card';
import AlternateCard from './AlternateCard';
import Footer from '../footer/Footer';

export default function BlogHome() {
  
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titletwo: "STRONG STYLE",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
      name: "By Jasmin Smith",
      subTitle: "How to Shop Mindfully",
      qrCode: "/images/qrcode.png",
      cover: "/Images/blog5.jpg",
    },
  ]  

  return (
    <>
        <Container fluid className='p-0'>
            <Row>
                <Col xs={12} md={6}>
                    <div className='leftcontent-holder'>
                        {
                            data.map((item)=>{
                                return (
                                    <>
                                        <div className='logo'><h1>M</h1></div>

                                        <div className='home-img'>
                                            <img src={item.cover} alt='' />
                                        </div>

                                        <div className='text'>
                                            <h1>{item.titleOne}</h1>
                                            <p>{item.paraOne}</p>
                                            <span>{item.name}</span>
                                        </div>
                                        <div className='text text2'>
                                            <h1>{item.titletwo}</h1>
                                            <p>{item.paraTwo}</p>
                                            <span>{item.subTitle}</span>
                                        </div>
                                        <div className='qrcode'><img src={item.qrCode} alt='' /></div>
                                    </>    

                                )
                            })
                        }
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className='rightcontent-holder'>
                        <Slide />
                        <Card />
                        <AlternateCard />
                        <Footer />
                    </div>    
                </Col>
            </Row>
        </Container>
    </>
  )
}
