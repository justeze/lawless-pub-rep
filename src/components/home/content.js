import React from "react";
import "../../styles/home/content.css";



const Content = (props) => {
        return (
            <>
                <div className="content">
                    <div className="content-menu">
                        <div className="col-md-12 bg-items">
                            <div className="row">
                                {props.arrMenu.map((item) => {
                                    // console.log(props.arrMenu)
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
                                                    }
                                                }
                                            />
                                            <p>{item.nama_produk}</p>
                                            <p className="price">Rp. {item.harga_produk}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default Content