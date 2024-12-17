import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from 'react-router-dom';

const HebergementCard = ({HebergementCard}) =>{

  const navigate=useNavigate();
    const navigateTo = (id) => {
        navigate('/readHebergementById/'+id);
    }
  return (
    // <div onClick={() => {navigateTo(HebergementCard.idTYPE)}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{HebergementCard.nom}</Card.Title>
        <Card.Text>
          {HebergementCard.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="list-group-flush">Capacité : {HebergementCard.capacite}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Link href="#" to={"/DetailPage"}>Détails de l'hébergement</Link>
      </Card.Body>
    </Card>
    // </div>

  );
}

export default HebergementCard;