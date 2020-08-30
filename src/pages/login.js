import React from "react";
import '../styles/login/style.css'

const login = () => {
    return (
        <>
            <section className="container-fluid">
                <section className="row justify-content-center">
                    <section className="col-12 col-sm-6 col-md-3">
                        <form className="form-container">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone
                            else.</small>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn-primary btn-block">Submit</button>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </>
    )
}

export default login