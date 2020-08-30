import React from "react";
import "../../styles/home/sidebar-left.css";
import ForkLogo from "../../assets/fork.png"
import ClipboardLogo from "../../assets/clipboard.png"
import AddItemLogo from "../../assets/add.png"
import ModalAdd from "./addModal";


class Sidebar extends React.Component {
    render() {
        return (
            <>

                <div className="sidebar-left">
                    <div className="sidebar-menu">
                        <img src={ForkLogo} alt="" />
                        <img src={ClipboardLogo} alt="" />
                        <button type="button" className="nav-link" data-toggle="modal" data-target="#modal-add"><img src={AddItemLogo} alt="" /></button>
                    </div>
                </div>
                <ModalAdd/>
            </>
        )
    }
}
export default Sidebar