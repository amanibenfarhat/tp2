import React from 'react';
import {  Col } from 'antd';
import { Menu } from 'antd';
import './menu.css'
import { DribbbleOutlined ,MedicineBoxOutlined,ExperimentOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
function Menu_Side(){
  
    return(
        <Col span={4}>
          <div className="menu">
           <Menu mode="inline" style={{ width: 256 }}>
             <SubMenu key="sub1"  title={
                 <span>
                   <DribbbleOutlined />
                  

                  <span>Sports</span>
                 </span> } >
               <Menu.Item key="1">Option 1</Menu.Item>
               <Menu.Item key="2">Option 2</Menu.Item>
               <Menu.Item key="3">Option 3</Menu.Item>
               <Menu.Item key="4">Option 4</Menu.Item>
             </SubMenu>
             <SubMenu key="sub2"  title={
                 <span>
                   <MedicineBoxOutlined />
                  <span>Health</span>
                 </span> } >
               <Menu.Item key="1">Option 1</Menu.Item>
               <Menu.Item key="2">Option 2</Menu.Item>
               <Menu.Item key="3">Option 3</Menu.Item>
               <Menu.Item key="4">Option 4</Menu.Item>
             </SubMenu>
             <SubMenu key="sub3"  title={
                 <span>
                  <ExperimentOutlined />
                  <span>Beauty</span>
                 </span> } >
               <Menu.Item key="1">Option 1</Menu.Item>
               <Menu.Item key="2">Option 2</Menu.Item>
               <Menu.Item key="3">Option 3</Menu.Item>
               <Menu.Item key="4">Option 4</Menu.Item>
             </SubMenu>
       
        
            </Menu>
           </div>
        </Col>
    )
}
export default Menu_Side
