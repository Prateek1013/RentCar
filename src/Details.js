import { Card, Button,Space,Tag } from 'antd';
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const Details = ({Data}) => {
const {id}=useParams();
const car=Data.find(item => item.id==id);
var color='error';
var tagmsg='Unavailable';

if(!car.book_status)
{
  color='success'; tagmsg='Available';
}
const navigate = useNavigate();
const nav=(e)=>{
  navigate('/');
}
  return (  
        <div>
            <Space direction="vertical" style={{ width: '100%' }}>
            <Card
              hoverable
              style={{
                width: 500,
              }}
              cover= {<img alt="example" src={car.details.url} />}
            >
            <Space direction="vertical" style={{ width: '100%' }}>
    <Meta title={car.details.name}/>
    <Meta title={car.details.price+' per day'}/>
    <Button type="primary" disabled={car.book_status} block href={`/book/${car.id}`}>Book</Button>
    </Space>    
    </Card>
    <Card
      title="Car details"
      style={{
        width: 500,
      }}
    >
   <Tag color={color}> {tagmsg}
    </Tag>
    <Space direction="vertical" style={{ width:'100%' }}>
    <p>Vehicle number {car.details.plate}</p>
    <p>{car.details.seats} Setater </p>
    <p>{car.details.engine}</p>
    <p>{car.details.description}</p>
    </Space>
    </Card>
    <Card
      title="Current booking"
      style={{
        width: 500,
      }}
    >
    <button onClick={nav}>Dashboard</button>
    </Card>
    </Space>

        </div>
    );
}
 
export default Details;