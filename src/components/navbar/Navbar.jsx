import { Header } from "./NavbarStyle"

function Navbar() {
  const optionMenu =[
      "Home",
      "Cars",
      "About Us",
    ];


  return (
    <Header>
    <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Logo_Honda_F1.png" alt="" srcset="" />
    </div>
    <ul className="menu-list">
      {optionMenu.map((option, index) => (
        <li key={index}>
          <a href="">{option}</a>
        </li>
      ))}
    </ul>

    <div className="user-button">
        <button>Sign In</button>
        <button>Cart</button>
    </div>
    
    </Header>
  )
}

export default Navbar