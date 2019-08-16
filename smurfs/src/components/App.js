import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchSmurfs} from "../actions"
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm'
import "./App.css";
class App extends Component {
  componentDidMount(){
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfList smurfs={this.props.smurfs}/>
      </div>
    );
  }
}
 const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetching: state.fetching,
  error: state.error
 })

export default connect(mapStateToProps,{fetchSmurfs}) (App);