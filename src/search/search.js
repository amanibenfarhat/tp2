import React from 'react';
import "./search.css";
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


function Search(){
    return(
      <div className="search">
        <form action="" methode="">
             <div className="input-block">
              <input type="text" name="" required placeholder="Search here ..."></input>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>

             </div>
        </form>
      </div>
    )
}
export default Search
