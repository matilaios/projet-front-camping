import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom';

const HebergementCard = ({item}) =>{

  return (
    <Card className='cardHebergement'>
      <Card.Img variant="top" src={`http://localhost:5173/${item.image}`} />
      <Card.Body>
        <Card.Title>{item.nom_hebergement}</Card.Title>
        <Card.Text className='textHebergement'>
        {item.description_hebergement}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="list-group-flush">Capacité : {item.capacite_hebergement}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link href="#" to={"/HebergementPage/"+item.idTYPE}>Détails de l'hébergement</Link>
      </Card.Body>
    </Card>

  );
}

export default HebergementCard;