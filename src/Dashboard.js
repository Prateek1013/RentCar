import { Card, Button,Space } from 'antd';
const { Meta } = Card;
const Dashboard = ({Data}) => {
    return ( 
        <div>
            <h2>Cars for Rent</h2>
            <Space direction="horizontal" style={{ width: '100%' }}>
            {Data.map(car => (
              <Card
              hoverable
              style={{
                width: 240,
              }}
              cover= {<img alt="example" src={car.details.url} />}
            >
    <Space direction="vertical" style={{ width: '100%' }}>
    <Meta title={car.details.name}/>
    <Meta title={car.details.price+' per day'}/>
    { !car.book_status && <Meta title='yes'/>}
    <Button type="primary" disabled={car.book_status} block href={`/book/${car.id}`}>Book</Button>
    <Button block href={`/details/${car.id}`}>Details</Button>
    </Space>
  </Card>))}
  </Space>
        </div>
     );
}
 
export default Dashboard;