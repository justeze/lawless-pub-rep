import React from "react"
import { connect } from 'react-redux'
// import { requestMenuCreator } from "../../redux/actions/menu";
import { addToCart } from '../../redux/actions/action'
import "../../styles/home/content.css"


const Content = (props) => {
    return (
        <>
            <div className="content">
                <div className="content-menu">
                    <div className="col-md-12 bg-items">
                        <div className="row">
                            {props.menu.menus.map((item) => {
                                // console.log(props.menu.menus)
                                return (
                                    <div className="col-md-4 mt-4" key={item.id}>
                                        <img
                                            src={item.gambar_produk}
                                            alt="img-espresso"
                                            className="img-fluid"
                                            onClick={() => {
                                                props.addToCart(
                                                    item.id,
                                                    item.nama_produk,
                                                    item.harga_produk,
                                                    item.gambar_produk)
                                                // console.log(props.addToCart)
                                                // console.log(item.id)
                                            }
                                        }
                                        />
                                        <p>{item.nama_produk}</p>
                                        <p className="price">Rp. {item.harga_produk}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    const { menu } = state
    return {
        menu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, name, price, img) => dispatch(addToCart(id, name, price, img))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);