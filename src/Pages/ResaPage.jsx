import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ReservationService from "../Services/ReservationService";
import MyCalendar from "../Components/Calendar";
import TypeHebergementService from "../Services/TypeHebergementService";
import OptionService from "../Services/OptionService";
import EquipementService from "../Services/EquipementService";

const ResaPage = () => {
  const [reservation, setReservation] = useState({});
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [option, setOption] = useState([]);
  const [equip, setEquip] = useState([]);

  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ReservationService.createResa(reservation);
      Navigate("/");
    } catch (err) {
      console.log("Erreur lors de la récupération des données:");
    }
  };

  const fetchHebergement = async () => {
    try {
      const response = await TypeHebergementService.getAllTypesHebergements();
      setData(response.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des données:", err);
      setError("Une erreur est survenue lors de la récupération des données.");
    }
  };

  const fetchOption = async () => {
    try {
      const response = await OptionService.getAllOptions();
      setOption(response.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des données:", err);
      setError("Une erreur est survenue lors de la récupération des données.");
    }
  };

  const fetchEquipement = async () => {
    try {
      const response = await EquipementService.getAllEquipements();
      setEquip(response.data);
    } catch (err) {
      console.error("Erreur lors de la récupération des données:", err);
      setError("Une erreur est survenue lors de la récupération des données.");
    }
  };

  
  
  useEffect(() => {
    fetchHebergement(), fetchOption(), fetchEquipement();
  }, []);


  return (
    <>
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
                  aria-label="Hébergement"
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez un hébergement</option>
                  {data.map((hebergement) => (
                    <option key={hebergement.idTYPE} value={hebergement.idTYPE}>
                      {hebergement.nom_hebergement}
                    </option>
                  ))}
                </Form.Select>
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
                <Form.Select
                  aria-label="Options"
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez une option</option>
                  {option.map((opt) => (
                    <option key={opt.idOption} value={opt.idOption}>
                      {opt.nom}
                    </option>
                  ))}
                </Form.Select>
              </InputGroup>

              <InputGroup className="inputGroup">
                <InputGroup.Text className="formControlResa">
                  Equipements :
                </InputGroup.Text>
                <Form.Select
                  aria-label="Equipements"
                  onChange={handleChange}
                >
                  <option value="">Sélectionnez un équipement</option>
                  {equip.map((stuff) => (
                    <option key={stuff.idEquipement} value={stuff.idEquipement}>
                      {stuff.nom}
                    </option>
                  ))}
                </Form.Select>
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
  );
};

export default ResaPage;
