import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt=""/>
        <span>AdminBoard</span>
      </div>
      <div className="icons">
        <img src="./search.svg" alt="" className="icon" />
        <img src="./app.svg" alt="" className="icon" />
        <img src="./expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="./notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user" >
          <img src="https://images.pexels.com/photos/27034673/pexels-photo-27034673/free-photo-of-a-fox-sitting-behind-the-grass-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />
          <span>Jordy</span>
        </div>
        <img src="./settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default Navbar