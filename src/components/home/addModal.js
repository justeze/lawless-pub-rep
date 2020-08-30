import React from "react";
import Axios from "axios"

class ModalAdd extends React.Component {
    state = {
        name: '',
        img: '',
        price: '',
        ctgr: '',
        categorys: []
    }

    componentDidMount() {
        // const URLString = "http://localhost:2300/"
        Axios.get(`${process.env.REACT_APP_URLSTRING}kategori`)
            .then((res) => {
                // console.log(res)
                this.setState({
                    categorys: [...res.data.data]
                })
            })
            .catch((err) => console.log(err))
    }
    insertMenu = () => {
        let formData = new FormData();
        formData.append("nama_produk", this.state.name);
        formData.append("harga_produk", this.state.price);
        formData.append("id_kategori", this.state.ctgr);
        formData.append("gambar_produk", this.state.img);

        const configHeader = {
            headers: {
                "content-type": "multipart/form-data",
            }
        };

        const URLString = `${process.env.REACT_APP_URLSTRING}`;
        console.log(formData);
        this.setState({
            name: '',
            price: '',
            ctgr: '',
            img: '',
        })

        Axios.post(URLString, formData, configHeader)
            .then((res) => {
                console.log(res);
            })
            .catch(err => console.log(err))
    };
    kambing = (event) => {
        console.log(event.target.value)
    }
    render() {
        return (
            <>
                <div className="modal add fade" id="modal-add" tabIndex="-1" aria-labelledby="modal-add" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="modal-add">Add Menu</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="col-10">
                                        <input className="form-control shadow" name="name" type="text" id="name" autoComplete="off" onChange={(event) => {
                                            this.setState({ name: event.target.value })
                                        }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="image">Image</label>
                                    </div>
                                    <div className="col-10">
                                        <input className="form-control shadow" name="picture" type="file" id="image" autoComplete="off" onChange={(event) => {
                                            this.setState({ img: event.target.files[0] })
                                        }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="price">Price</label>
                                    </div>
                                    <div className="col-10">
                                        <input className="form-control shadow price" name="price" type="number" id="price" autoComplete="off" onChange={(event) => {
                                            this.setState({ price: event.target.value })
                                        }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="cat">Category</label>
                                    </div>
                                    <div className="col-10" >
                                        <select className="form-control shadow category" name="id_category" id="cat" autoComplete="off" onChange={(event) => {
                                            this.setState({ ctgr: event.target.value })
                                        }}>
                                            <option value="" disabled hidden>Category</option>
                                            {this.state.categorys.map((item) => {
                                                return (
                                                    <option key={item.id} value={item.id} >{item.kategori}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn  btn-pink btn-cancel" data-dismiss="modal" >Cancel</button>
                                <button type="button" className="btn btn-blue btn-add" onClick={() => {
                                    this.insertMenu();
                                }} data-dismiss="modal">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ModalAdd;