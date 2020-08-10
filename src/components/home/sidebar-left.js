import React from "react";
import "../../styles/home/sidebar-left.css";
import ForkLogo from "../../assets/fork.png"
import ClipboardLogo from "../../assets/clipboard.png"
import AddItemLogo from "../../assets/add.png"


class Sidebar extends React.Component {
    render() {
        return (
            <>

                <div className="sidebar-left">
                    <div className="sidebar-menu">
                        <img src={ForkLogo} alt="" />
                        <img src={ClipboardLogo} alt="" />
                        <img src={AddItemLogo} alt="" />
                    </div>
                </div>

            </>
        )
    }
}
export default Sidebar