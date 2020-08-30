import React from "react"
import { connect } from 'react-redux'
import { requestMenuCreator } from "../../redux/actions/action";
import { addToCart } from '../../redux/actions/action'
import "../../styles/home/content.css"


class Content extends React.Component {
    componentDidMount() {
        this.props.requestMenuCreator()
    }
    render() {
        return (
            <>
                <div className="content">
                    <div className="content-menu">
                        <div className="col-md-12 bg-items">
                            <div className="row">
                                {this.props.menu.menus.map((item) => {
                                    // console.log(this.props.menu.menus)
                                    return (
                                        <div className="col-md-4 mt-4" key={item.id}>
                                            <img
                                                src={item.gambar_produk}
                                                alt="img-espresso"
                                                className="img-fluid"
                                                onClick={() => {
                                                    this.props.addToCart(
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
}

const mapStateToProps = (state) => {
    // console.log(state.menu)
    return {
        menu: state.menu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestMenuCreator: () => dispatch(requestMenuCreator()),
        addToCart: (id, name, price, img) => dispatch(addToCart(id, name, price, img))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);