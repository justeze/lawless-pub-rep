import React from "react";
import '../styles/login/style.css'

import { connect } from "react-redux";
import { authLoginCreator } from "../redux/actions/action";


class login extends React.Component {
    state = {
        username: '',
        password: '',
    };

    onSubmit = () => {
        this.props.history.push("/");
    };
    render() {
        return (
            <>
                <section className="container-fluid">
                    <section className="row justify-content-center">
                        <section className="col-12 col-sm-6 col-md-3">
                            <form className="form-container">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Username</label>
                                    <input type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event) => {
                                        this.setState({
                                            username: event.target.value,
                                        });
                                    }} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone
                            else.</small>
                                    <div className="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event) => {
                                            this.setState({
                                                password: event.target.value,
                                            });
                                        }} />
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" className="btn-primary btn-block" onClick={() => {
                                        this.props.login(this.state.username, this.state.password);
                                        this.onSubmit();
                                    }}>Submit</button>
                                </div>
                            </form>
                        </section>
                    </section>
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (name, password) => dispatch(authLoginCreator(name, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(login);