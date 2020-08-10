import React from "react";
import "../../styles/home/sidebar-right.css";
import AddFoodLogo from "../../assets/food-and-restaurant.png"


class Sidecart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrMenu: [...props.arrMenu],
            carts: props.carts
        };
    }
    componentDidMount() {
        console.log(this.props)
        this.setState ({
            arrMenu: [...this.props.arrMenu]
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.arrMenu !== this.props.arrMenu) {
            this.setState({ arrMenu: this.props.arrMenu });
        }
    }

    render() {
        if (this.state.carts.length) {
            return (
                <>
                    <div className="cart-items">
                        <div className="col">
                            {this.state.arrMenu.map((menu) => {
                                return (
                                    <div className="row selected-items" key={menu.id}>
                                        <div className="col">
                                            <img src={menu.gambar_produk} alt="" />
                                        </div>
                                        <div className="col-md-4">
                                            <p>{menu.nama_produk}</p>
                                            <div className="row ">
                                                <div className="col">
                                                    <div className="btn-group">
                                                        <button className="button">-</button>
                                                        <span className="qty">1</span>
                                                        <button className="button">+</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col align-self-end">
                                            <h6 className="font-weight-bold price">{menu.harga_produk}</h6>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="billOut">
                            <div className="row">
                                <div className="col billOut-total">
                                    <p className="font-weight-bold">Total :</p>
                                </div>
                                <div className="col billOut-price">
                                    <h7 className="font-weight-bold">Rp. 69.000</h7>
                                </div>
                            </div>
                            <div className="row my-row">
                                <div className="col billOut-desc">
                                    <p>*belum termasuk ppn</p>
                                </div>
                                <div className="col">
                                </div>
                            </div>
                        </div>

                        <div className="col btn">
                            <div className="row checkout-btn">
                                <a href="checkout.html">
                                    <button type="button" className="block">Checkout</button></a>
                            </div>
                            <div className="row cancel-btn">
                                <a href="../index.html">
                                    <button type="button" className="block">Cancel</button></a>
                            </div>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className="cart-items">
                        <img src={AddFoodLogo} alt=""></img>
                            <div className="no-chart">
                                <h4 className="font-weight-bold">Your cart is empty</h4>
                                <p>Please add some items from the menu</p>
                            </div>
                        </div>
                </>
            )
        }
    }
}
export default Sidecart

