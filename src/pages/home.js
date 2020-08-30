import React from "react";
// import Axios from "axios"
// import { connect } from "react-redux";
// import { requestMenuCreator } from "../redux/actions/action";

import Navbar from "../components/home/navbar";
import Sidebar from "../components/home/sidebar-left";
import Sidecart from "../components/home/sidebar-right";
import Content from "../components/home/content";
import ModalCheckout from "../components/home/checkoutModal";


const home = () => {
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

export default home
