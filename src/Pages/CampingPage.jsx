import Button from 'react-bootstrap/Button';
import NavBar from '../Components/NavBar';
import MyFooter from '../Components/Footer';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




const CampingPage = () => {
    return <>
    

  

    <div className='d-flex justify-content-center'>
    <div className='divCard'>  
    <Row>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='cardCamping'>
            <Card.Img src="src/Images/images campingpage/campingvuegenerale.webp" />
            <Card.Body className='cardBodyCamping'>
              <Card.Title className='d-flex justify-content-center'>Notre camping</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusamus. Sapiente ut suscipit vitae, at qui voluptas tempore. Aliquam corporis eligendi assumenda voluptatem labore possimus vitae modi perferendis nihil deserunt?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <div className='divCard'>  
    <Row>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='d-flex justify-content-center'>
            <Card.Img variant="top" src="src/Images/images campingpage/piscine.jpg" />
            <Card.Body className='cardBodyCamping'>
              <Card.Title className='d-flex justify-content-center'>Nos équipements</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusamus. Sapiente ut suscipit vitae, at qui voluptas tempore. Aliquam corporis eligendi assumenda voluptatem labore possimus vitae modi perferendis nihil deserunt?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    <div className='divCard'>  
    <Row>
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='d-flex justify-content-center'>
            <Card.Img className="cardImage" variant="top" src="src/Images/images campingpage/equipe.png" />
            <Card.Body className='cardBodyCamping'>
              <Card.Title className='d-flex justify-content-center'>Notre équipe d'animation</Card.Title>
              <Card.Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, accusamus. Sapiente ut suscipit vitae, at qui voluptas tempore. Aliquam corporis eligendi assumenda voluptatem labore possimus vitae modi perferendis nihil deserunt?
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
    </div>
    </>;
}
 
export default CampingPage;