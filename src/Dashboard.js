import { Card, Button,Space,Tag } from 'antd';
const { Meta } = Card;
const Dashboard = ({Data}) => {
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
            <h2>Cars for Rent</h2>
            <Space direction="horizontal" style={{ width: '50%' }}>
            {Data.map(car => (
              <Card
              hoverable
              style={{
                width: 300,
                marginTop:32,
                marginBottom:'100%',
              }}
              cover= {<img alt="example" src={car.details.url} />}
            >
    <Space direction="vertical" style={{ width: '100%' }}>
    <Meta title={car.details.name}/>
    <Meta title={car.details.price+' per day'}/>
   
    { !car.book_status && <Tag color="success"> Available
    </Tag>}
    { car.book_status && <Tag color="error"> Unvailable
    </Tag>}
    
    <Button type="primary" disabled={car.book_status} block href={`/book/${car.id}`}>Book</Button>
    <Button disabled={car.book_status} block href={`/details/${car.id}` }>Details</Button>
    </Space>
  </Card>))}
  </Space>
        </div>
     );
}
 
export default Dashboard;