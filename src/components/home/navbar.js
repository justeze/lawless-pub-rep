import React from "react";
import "../../styles/home/navbar.css";
import MenuImg from "../../assets/menu.png"
import SearchImg from "../../assets/magnifying-glass.png"

class Navbar extends React.Component {
    render() {
        return (
            <>
            
                <div className="navbar">
                    <div className="navbar-menu">
                            <img src={MenuImg} alt="menu bar" />
                    </div>
                    <div className="page-title">
                        <h4 className="font-weight-bold">Food Items</h4>
                    </div>
                    <div className="search">
                        <img src={SearchImg} alt="magnifying glass" />
                    </div>
                    <div className="cart">
                        <h4 className="font-weight-bold">Cart <span className="badge badge-pill badge-info">0</span></h4>
                    </div>
                </div>
            </>
        )
    }
}
export default Navbar