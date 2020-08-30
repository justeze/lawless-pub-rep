import React from "react";
// import Axios from "axios"
import { connect } from "react-redux";
import { requestMenuCreator } from "../redux/actions/menu";

import Navbar from "../components/home/navbar";
import Sidebar from "../components/home/sidebar-left";
import Sidecart from "../components/home/sidebar-right";
import Content from "../components/home/content";
import ModalCheckout from "../components/home/checkoutModal";


class home extends React.Component {
    state = {
        // menus: [],
        // carts: []
    }



    addToCart = (id_item, name, price, img) => {
        const index = this.state.carts.findIndex((item) => {
            return item.id === id_item;

        });

        if (index >= 0) {
            // console.log(this.state.carts)
            this.state.carts.splice(index, 1);
            this.setState({
                carts: this.state.carts,
            });
        } else {
            const newCart = {
                id: id_item,
                nama_produk: name,
                qty: 1,
                harga_produk: price,
                gambar_produk: img,

            };

            this.setState({
                carts: this.state.carts.concat(newCart),
            });
        }
    };

    incCounter = (id_item) => {
        const index = this.state.carts.findIndex((item) => {
            return item.id === id_item;
        });

        let arrData = [...this.state.carts];
        arrData[index] = {
            ...arrData[index],
            qty: this.state.carts[index].qty + 1,
        };

        this.setState({
            carts: arrData,
        });
    };

    decCounter = (id_item) => {
        const index = this.state.carts.findIndex((item) => {
            return item.id === id_item;
        });

        if (this.state.carts[index].qty > 1) {
            let arrData = [...this.state.carts];
            arrData[index] = {
                ...arrData[index],
                qty: this.state.carts[index].qty - 1,
            };

            this.setState({
                carts: arrData,
            });
        }
    };
    handleCancel = () => {
        this.setState({
            carts: []
        })
    }

    componentDidMount() {
        this.props.requestMenuCreator()
    }

    render() {
        // console.log(mapStateToProps)
        return (
            <>
                <Navbar />
                <Sidebar />
                <Content
                // menus={this.props.menus}
                />
                <Sidecart
                // arrMenu={this.state.menus}

                // arrCart={this.state.carts}
                // incCounter={(id) => { //id sesuai database
                //     this.incCounter(id);
                // }}
                // decCounter={(id) => { //id sesuai database
                //     this.decCounter(id);
                // }}
                // cancel={this.handleCancel}
                />
                <ModalCheckout />
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
        requestMenuCreator: (menu) => dispatch(requestMenuCreator(menu)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);