import { useState , useContext } from "react";
import { useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Modal} from 'antd';

import { MyContext } from './MyContext';

const Booking = (props) => {
    const {id}=useParams();
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [startDate,setStartDate]=useState('');
    const [endDate,setEndDate]=useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);


    const navigate = useNavigate();

    const {dat,setdat } = useContext(MyContext);
    
    const handleSubmit = (e)=>{
    e.preventDefault();
    const indianPhoneNumberRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (!indianPhoneNumberRegex.test(contact)) {
    alert("Please enter a valid Indian phone number.");
    }
    const startDateObject = new Date(startDate);
    const endDateObject = new Date(endDate);
    if (startDateObject.getTime() > endDateObject.getTime()) {
      alert("Start date is After end date.");
    };
    const person={name,contact,startDate,endDate};
    props.booked(person);
    const newdat=[...dat];
    const index=dat.findIndex( obj => obj.id==id);
    dat[index].book_status=true;
    setdat(newdat);
    if (e.target.checkValidity()) {
        setIsSubmitted(true);
        return true; 
      } else {
        return false;
      }
}
const success = (e) => {
    if (isSubmitted) {
        Modal.success({
            content: `Booking confirmed from ${startDate} to ${endDate}`,
            onOk() {
              navigate(`/details/${id}/${name}/${contact}/${startDate}/${endDate}`);
            }
          });
      } else {
        alert('Please submit the form first!');
      }
  };

    return ( 
        <div>
            <h2>Booking Details</h2>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" required value={name} 
            onChange={(e)=>{
                setName(e.target.value);
            }} />
            <label> Contact number </label>
            <input type="tel" required value={contact}
            onChange= {(e)=>{
                setContact(e.target.value);
            }}/>
            <label> Start Date </label>
            <input type="date" required value={startDate}
            onChange= {(e)=>{
                setStartDate(e.target.value);
            }}/>
            <label>End Date</label>
            <input type="date" required value={endDate}
            onChange={(e)=>{
                setEndDate(e.target.value);
            }}/>
            <button type="submit" onClick={success}>Book</button>
            </form>
        </div>
     );
}
export default Booking;