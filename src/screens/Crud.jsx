import React, { Component } from 'react';
import Popup from '../component/pop-up/PopUp';
import './curd.css';


class Crud extends Component {


  constructor() {
    super();
    this.url = "https://jsonplaceholder.typicode.com/posts";
    this.state = {
      data: [],
      isShow: false,
      isOpen: false,
      id: 0,
      title: ""
    }
    console.log("Contructor Calle");
  }
  componentDidMount() {

    console.log("component did mount");
    this.getData();
  }
  componentDidUpdate() {
    console.log("Component did Update");
  }
  componentWillUnmount() {
    console.log("Component will unmou");
  }

  getData = async () => {
    try {
      var response = await fetch(this.url);
      var jsonData = await response.json();
      this.setState({ data: jsonData });
    } catch (error) {
      alert(error)
    }
  }

  handleClose = (id, title) => {
    this.setState({ isOpen: !this.state.isOpen, id: id, title: title });
  }

  handleDelete = (id) => {
    var filterData = this.state.data.filter((value) => { return value["id"] !== id })
    this.setState({ data: filterData });
  }


  render() {
    return this.state.isOpen ? <Popup
      content={<>
        <b>{this.state.id}</b>
        <p>{this.state.title}</p>
      </>}
      handleClose={this.handleClose}
    /> : <div className="App">
      <button onClick={this.getData} className='fetch-button'>Fetch Data</button>
      {this.state.data.length > 0 ? <div className='container'> <table>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">TITLE</th>
              <th scope="col">BODY</th>
              <th scope="col">VIEW</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((val, key) => {
              return (
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.userId}</td>
                  <td>{val.title}</td>
                  <td>{val.body}</td>
                  <td><button onClick={() => { this.handleClose(val.id, val.title) }}>View</button></td>
                  <td><button onClick={() => { this.handleDelete(val.id) }}>Delete</button></td>
                </tr>
              )
            })}


          </tbody>

        </table>

      </table></div> : <div>Please Waits</div>
      }
    </div>
  }
}
export default Crud;
