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

    componentDidMount() {
        this.props.requestMenuCreator()
    }

    render() {
        // console.log(mapStateToProps)
        return (
            <>
                <Navbar />
                <Sidebar />
                <Content />
                <Sidecart />
                <ModalCheckout />
            </>
        )

    }

}


const mapStateToProps = (state) => {
    // const { menu } = state
    // return {
    //     menu,
    // }
    return {
        menus: state.menu.menus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        requestMenuCreator: () => dispatch(requestMenuCreator()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);