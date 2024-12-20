import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ReservationService from "../Services/ReservationService";
import MyCalendar from "../Components/Calendar";

const ResaPage = () => {
  const [reservation, setReservation] = useState({});
  
  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
}

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await ReservationService.createResa(reservation);
        console.log('Données reçues:', response.data);
        Navigate('/')
    } catch (err) {
        console.log('Erreur lors de la récupération des données:');
    }
};

  return <>

      <div className="d-flex justify-content-center">
        <div className="d-block justify-content-center">
          <h1 className="h1Planning">Planning </h1>
          <MyCalendar className="calendar"></MyCalendar>
        </div>

        <div className="reservationDroite">
          <h1 className="h1Reservation">Réservation</h1>
          <div>
            <form>
              <InputGroup className="inputGroup">
                <InputGroup.Text className="formControlResa">
                  Hébergement
                </InputGroup.Text>
                <Form.Select 
                aria-label="type" 
                name="type"
                onChange={handleChange}

                 />
              </InputGroup>
              <InputGroup className="inputGroup">
                <InputGroup.Text className="formControlResa">
                  Date de début :
                </InputGroup.Text>
                <Form.Control aria-label="type" type="date" name="type" />
              </InputGroup>
              <InputGroup className="inputGroup">
                <InputGroup.Text className="formControlResa">
                  Date de fin :
                </InputGroup.Text>
                <Form.Control aria-label="type" type="date" name="type" />
              </InputGroup>

              <InputGroup className="inputGroup">
                <InputGroup.Text className="formControlResa">
                  Options :
                </InputGroup.Text>
                <Form.Select aria-label="type" type="select" name="type" />
              </InputGroup>

              <InputGroup className="inputGroup">
                <InputGroup.Text className="formControlResa">
                  Equipements :
                </InputGroup.Text>
                <Form.Select aria-label="type" type="select" name="type" />
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
    </>

};

export default ResaPage;
