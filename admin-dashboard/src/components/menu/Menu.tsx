import { Link } from "react-router-dom";
import "./menu.scss";
import {menu} from "../../data"

const Menu = () => {
  return (
    <div className="menu">
      {menu.map(items=>(

       <div className="items" key={items.id}>
        <span className="title">{items.title}</span>
        {items.listItems.map((listItem)=>(
          
          <Link to={listItem.url} className="listItem" key={listItem.id} >
        <img src={listItem.icon} alt="" />
        <span className="listItemTitle">{listItem.title}</span>
        </Link>
        
        ))}
       </div>
       
      ))}
      

    </div>
  );
};

export default Menu