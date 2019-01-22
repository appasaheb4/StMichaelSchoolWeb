import React, { Component } from "react";
import axios from "axios";
//Css Files
import "./LoginScree.css";
import { any } from "prop-types";

export default class LoginScreen extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("call");

    axios
      .get("/api/getUserTypes")
      .then(response => {
        let data = response.data;
        this.setState({ data: data.data });
      })  
      .catch(function(error) {
        console.log(error);
      });
  }  

  //TODO: func click_Login

  click_Login(){
    alert('hi')
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-offset-4 col-md-4">
          <h1 style={{ textAlign: "center" }}>St Michael's school</h1>
          <div className="well">  
            <form onSubmit={this.click_Login.bind(this)}>
              <div className="form-group">
                <select className="form-control browser-default custom-select">
                  {this.state.data.map((item: any) => (
                    <option key={item.id} value={item.type}>
                      {item.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                  />
                </div>
                <div className="form-group">
                  <a href="#" className="ForgetPwd">
                    Forget Password?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
