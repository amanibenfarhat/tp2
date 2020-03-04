import React from 'react';
import "antd/dist/antd.css";
import { Card } from 'antd';
const { Meta } = Card;



function Item(props){
    return(
      <div>
        <Card
        hoverable
        cover={<img alt="example" src={props.url}/>}>
        <Meta 
        title={props.title} description={props.description} />
      </Card>
      </div>
    )
}
export default Item
