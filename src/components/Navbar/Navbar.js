import './Navbar.css'
import '../CartWidget/CartWidget'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
    <>
    <nav className="Navbar">
        <div className="navbarImgContainer">
            <img src="images/logo FoodSpot.png" alt="imagen icono"/>
        </div>
        <div className="navItemsContainer">
            <button>Menu</button>
            <button>Promociones</button>
            <button>Sucursales</button>
            <button>Contacto</button> 
        </div> 
        <CartWidget/>
    </nav>
    <div className="bottomBarNav">

    </div>
    </>
    )
    
}

export default Navbar