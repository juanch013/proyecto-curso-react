import './Navbar.css'

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
        <div className="navCartContainer">
            <div className="cartWidgetContainer">
                <img src="images/cart.png" alt="carro"/>
                <span>5</span>
            </div>
        </div>
    </nav>
    <div className="bottomBarNav">

    </div>
    </>
    )
    
}

export default Navbar