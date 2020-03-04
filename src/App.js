import React from 'react';
import './App.css';
import './item/item.css';
import Item from './item/Item';
import Header from './header/Header';
import Menu from './menu/menu';
import Search from './search/search';
import item_1 from './item/imgs/item_1.jpg';
import item_2 from './item/imgs/item_2.jpg';
import item_3 from './item/imgs/item_3.jpg';
import item_4 from './item/imgs/item_4.jpg';


import { Row, Col } from 'antd';





function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Menu />
        <Col flex="auto">
         <Search />
      <div className="cards">
        <Item title="Ons Jabeur" description="Ons Jabeur, née le 28 août 1994 à Ksar Hellal, est une joueuse de tennis tunisienne, professionnelle depuis 2012." url={item_1}/>
        <Item title="Malek Jaziri" description="Malek Jaziri, né le 20 janvier 1984 à Bizerte, est un joueur de tennis tunisien, professionnel depuis 2002" url={item_2}/>
        <Item title="Selima Sfar" description="Selima Sfar est une joueuse de tennis tunisienne, professionnelle depuis 1999, née le 8 juillet 1977 à Sidi Bou Saïid" url={item_3}/>
        <Item title="Aziz Dougaz" description="Mohamed Aziz Dougaz est un joueur de tennis tunisien. Dougaz a un classement ATP simple en carrière de 425 atteint le 9 décembre 2019." url={item_4}/>
      </div>
      </Col>
     </Row>
    </div>
  );
}

export default App;
