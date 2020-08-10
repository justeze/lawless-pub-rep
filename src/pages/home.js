import React from "react";
import Axios from "axios"

import Navbar from "../components/home/navbar";
import Sidebar from "../components/home/sidebar-left";
import Sidecart from "../components/home/sidebar-right";
import Content from "../components/home/content";


class home extends React.Component {
    constructor() {
        super()
        this.state = {
            menu: [],
            cart: []
        }
    }
    componentDidMount() {
        const URLString = "http://localhost:9000/"
        Axios.get(URLString)
            .then((res) => {
                // console.log(res)
                this.setState({
                    menu: [...res.data.data]
                })
            })
            .catch((err) => console.log(err))
    }
    
    // toggleMenu(id) {
    //     const { menu } = this.state
    //     const arrtodo = [...menu]
    //     const result = arrtodo.map((item) => {
    //         return item.id === id ? { ...item, isComplete: !item.isComplete } : item;
    //     })
    //     this.setState({
    //         menu: result
    //     })
    //     console.log(result)
    // }

    render() {
        // console.log(this.state.menu)
        // const { menu } = this.state
        return (
            <>
                <Navbar />
                <Sidebar />
                <Sidecart
                    arrMenu={this.state.menu}
                    carts={this.state.cart}
                    // toggleMenu={this.toggleMenu.bind(this)}
                />
                <Content
            
                    arrMenu={this.state.menu}
                    // toggleMenu={this.toggleMenu.bind(this)}

                />
            </>
        )

    }

}

export default home;