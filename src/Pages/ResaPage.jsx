import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Components/NavBar';
import { Button } from 'react-bootstrap';
import MyCalendar from '../Components/Calendar';
import Calendar from 'react-calendar/dist/cjs/Calendar.js';
import Form from 'react-bootstrap/Form';
import {InputGroup } from "react-bootstrap";



const ResaPage = () => {
    return <>
   
   
    <div className='d-flex justify-content-center'>
  <div className='d-block justify-content-center'>
    <h1 className='h1Planning'>Planning </h1>
    <Calendar className='calendar'></Calendar>
    </div>
<div className='reservationDroite'>
  <h1 className='h1Reservation'>Réservation</h1>
<div>
  <form> 
    <InputGroup className="inputGroup"  >
        <InputGroup.Text className='formControlResa'>Hébergement</InputGroup.Text>
        <Form.Select
          aria-label="type"
          
          name="type"
        />
        </InputGroup>
<InputGroup className="inputGroup"  >
        <InputGroup.Text className='formControlResa'>Date de début :</InputGroup.Text>
        <Form.Control
          aria-label="type"
          type='date'
          name="type"
        />
 </InputGroup>
 <InputGroup className="inputGroup"  >
        <InputGroup.Text className='formControlResa'>Date de fin :</InputGroup.Text>
        <Form.Control 
          aria-label="type"
          type='date'
          name="type"
        />
 </InputGroup>
 
 <InputGroup className="inputGroup"  >
        <InputGroup.Text className='formControlResa'>Options :</InputGroup.Text>
        <Form.Select
          aria-label="type"
          type='select'
          name="type"
        />
 </InputGroup>

 <InputGroup className="inputGroup"  >
        <InputGroup.Text className='formControlResa'>Equipements :</InputGroup.Text>
        <Form.Select
          aria-label="type"
          type='select'
          name="type"
        />
 </InputGroup>
 <Form.Control 
  type="submit" 
  value="Réserver" 
  className="boutonReserver"
/>

 </form>
 </div>
</div>
</div>
      </>;
}
 
export default ResaPage;