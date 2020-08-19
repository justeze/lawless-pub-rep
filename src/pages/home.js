import React from "react";
import Axios from "axios"

import Navbar from "../components/home/navbar";
import Sidebar from "../components/home/sidebar-left";
import Sidecart from "../components/home/sidebar-right";
import Content from "../components/home/content";


class home extends React.Component {
    state = {
        menus: [],
        carts: []
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

    componentDidMount() {
        // const URLString = "http://localhost:2300/menu"
        Axios.get(process.env.REACT_APP_URLSTRING)
            .then((res) => {
                // console.log(res)
                this.setState({
                    menus: [...res.data.data]
                })
            })
            .catch((err) => console.log(err))
    }


    render() {
        return (
            <>
                <Navbar />
                <Sidebar />
                <Content
                    arrMenu={this.state.menus}
                    addToCart={(id_item, name, price, img) =>
                        this.addToCart(id_item, name, price, img)
                    }
                />
                <Sidecart
                    // arrMenu={this.state.menus}
                    arrCart={this.state.carts}
                />
                
            </>
        )

    }

}

export default home;