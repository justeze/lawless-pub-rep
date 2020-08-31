import React from "react";
// import { Link } from "react-router-dom";

import "../../styles/home/sidebar-left.css";
import ForkLogo from "../../assets/fork.png"
import ClipboardLogo from "../../assets/clipboard.png"
import AddItemLogo from "../../assets/add.png"
import ModalAdd from "./addModal";
import { useSelector } from "react-redux";



const Sidebar = () => {
    const auth = useSelector((state) => state.auth);

    return (
        <>

            <div className="sidebar-left">
                <div className="sidebar-menu">
                    <img src={ForkLogo} alt="" />
                    <img src={ClipboardLogo} alt="" />
                    {auth.isAdmin ? (
                    <button type="button" className="nav-link" data-toggle="modal" data-target="#modal-add"><img src={AddItemLogo} alt="" /></button>
                    ) : null}
                </div>
            </div>
            <ModalAdd />
        </>
    )

}
export default Sidebar