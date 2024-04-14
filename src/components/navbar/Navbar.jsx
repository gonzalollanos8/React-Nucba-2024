import { Header } from "./NavbarStyle"
import { BsFillPersonFill, BsCart } from "react-icons/bs";

function Navbar() {
  const optionMenu =[
      "Home",
      "Cars",
      "About Us",
    ];


  return (
    <Header>
    <div className="logo">
          <img src="/img/Logo.png" alt="" srcset="" />
    </div>
    <ul className="menu-list">
      {optionMenu.map((option, index) => (
        <li key={index}>
          <a href="">{option}</a>
        </li>
      ))}
    </ul>

    <div className="user-button">
        <button><BsFillPersonFill /></button>
        <button><BsCart /></button>
    </div>
    
    </Header>
  )
}

export default Navbar