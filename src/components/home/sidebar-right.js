import React from "react";
import { connect } from 'react-redux'
import { increaseQty, decreaseQty, clearCart } from "../../redux/actions/menu";
// import { addToCart } from '../../redux/actions/menu'

import "../../styles/home/sidebar-right.css";
import AddFoodLogo from "../../assets/food-and-restaurant.png"

import ModalCheckout from "./checkoutModal";


const Sidecart = (props) => {
    if (props.menu.carts.length) {
        return (
            <>
                <div className="cart-items">
                    <div className="col">
                        {props.menu.carts.map((menu) => {
                            // console.log(props.arrCart)
                            return (
                                <div className="row selected-items" key={menu.id}>
                                    <div className="col">
                                        <img src={menu.img} alt="" />
                                    </div>
                                    <div className="col-md-4">
                                        <p>{menu.name}</p>
                                        <div className="row ">
                                            <div className="col">
                                                <div className="btn-group">
                                                    <button className="button"
                                                        onClick={() => {
                                                            props.decreaseQtyAct(menu.id);
                                                        }}>-</button>
                                                    <span className="qty">{menu.qty}</span>
                                                    <button className="button"
                                                        onClick={() => {
                                                            props.increaseQtyAct(menu.id);
                                                        }}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col align-self-end">
                                        <h6 className="font-weight-bold price">Rp. {menu.price * menu.qty}</h6>
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
                                <h6 className="font-weight-bold">Rp. {props.menu.carts.reduce((total, menu) => {
                                    return total + menu.price * menu.qty;
                                }, 0)}</h6>
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
                            <button type="button" className="block" data-toggle="modal" data-target="#checkout">Checkout</button>
                        </div>
                        <div className="row cancel-btn">

                            <button type="button" className="block" onClick={() => {
                                props.clearCartAct();
                            }}>Cancel</button>
                        </div>
                    </div>
                </div>
                <ModalCheckout/>
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

const mapStateToProps = (state) => {
    const { menu } = state
    return {
        menu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseQtyAct: (id) => {
            dispatch(increaseQty(id))
        },
        decreaseQtyAct: (id) => {
            dispatch(decreaseQty(id))
        },
        clearCartAct: () => {
            dispatch(clearCart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidecart);