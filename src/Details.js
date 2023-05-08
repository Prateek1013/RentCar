import { Card, Button, Space, Tag } from 'antd';
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const Details = (props) => {
  const { id, name, contact, start, end } = useParams();
  const { Data, person } = props;
  console.log(person);
  const car = Data.find(item => item.id == id);
  var color = 'error';
  var tagmsg = 'Unavailable';

  if (!car.book_status) {
    color = 'success'; tagmsg = 'Available';
  }
  const navigate = useNavigate();
  const nav = (e) => {
    navigate('/');
  }

  const divStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)',

    };

  return (
    <div style={divStyle}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Card
          hoverable
          style={{
            width: 500,
            marginLeft:'30%',

          }}
          cover={<img alt="example" src={car.details.url} />}
        >
            <Meta title={car.details.name} />
            <Meta title={car.details.price + ' per day'} />
            <Space direction="vertical" style={{ width: '100%' }}>
            <Button type="primary" disabled={car.book_status} block href={`/book/${car.id}`}>Book</Button>
            <Button type='primary' block onClick={nav}>Back to Dashboard</Button>
            </Space>
        </Card>
        <Card
          title="Car details"
          style={{
            width: 500,
            textAlign: 'center',
            marginLeft:'30%',
            
          }}
        >
          <Tag color={color}> {tagmsg}
          </Tag>
            <p>Vehicle number {car.details.plate}</p>
            <p>{car.details.seats} Setater </p>
            <p>{car.details.color} color</p>
            <p>{car.details.engine}</p>
            <p>{car.details.description}</p>
        </Card>
        <Card
          title="Current booking"
          style={{
            width: 500,
            textAlign: 'center',
            marginLeft:'30%',
          }}
        >
          {name && <Space direction="vertical" style={{ width: '100%' }}>
          <Tag color='success'> Current Booking found!
            </Tag>
            <p>This {car.details.name} is Booked by {name} from <br />
              {start} to {end}. <br />
              Contact Number of the customer {contact}
            </p>
          </Space>}
          {!name && 
            <Tag color='error'> No current Booking found
            </Tag>
          }
        </Card>
      </Space>

    </div>
  );
}

export default Details;