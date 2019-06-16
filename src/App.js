import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UserForm2 from './components/UserForm2';
import axios from "axios";


class App extends Component {
  constructor(){
    super();
    this.state = {
      name: null,
      repos: null,
      avatar_url: null,
      location: null,
      followers: null,
      following: null,
      url: null,

      name2: null,
      repos2: null,
      avatar_url2: null,
      location2: null,
      followers2: null,
      following2: null,
      url2: null
    }
  }


  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        console.log(res);
        const repos = res.data.public_repos;
        console.log(repos);
        const name = res.data.name;
        console.log(name);
        const avatar_url = res.data.avatar_url;
        const location = res.data.location;
        const followers = res.data.followers;
        const following = res.data.following;
        const url = res.data.url;
        this.setState({
          repos : repos,
          name,
          avatar_url,
          location,
          followers,
          following,
          url
          });
        })
      } else return;
    }

    getUser2 = (e) => {
      e.preventDefault();
      const user2 = e.target.elements.username2.value;
      if(user2){
        axios.get(`https://api.github.com/users/${user2}`)
        .then((res2) => {
          console.log(res2);
          const repos2 = res2.data.public_repos;
          console.log(repos2);
          const name2 = res2.data.name;
          console.log(name2);
          const avatar_url2 = res2.data.avatar_url;
          const location2 = res2.data.location;
          const followers2 = res2.data.followers;
          const following2 = res2.data.following;
          const url2 = res2.data.url;
          this.setState({
            repos2 : repos2,
            name2,
            avatar_url2,
            location2,
            followers2,
            following2,
            url2
            });
          })
        } else return;
      }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-titel">GitHub Search</h1>
        </header>

        <table width="1000px">
          <tbody>
            <tr>
              <td>
                <UserForm getUser={this.getUser} />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img width="250" src ={this.state.avatar_url}/>
                      </td>
                      <td>
                        {this.state.name ? <p>{this.state.name}</p>
                          : <p></p>}
                        {this.state.location ? <p>{this.state.location}</p>
                          : <p></p>}
                        {this.state.url ? <p>{this.state.url}</p>
                          : <p></p>}
                        {this.state.repos ? <p>Number of repos: {this.state.repos}</p>
                          : <p></p>}
                        {this.state.followers ? <p>Number of followers: {this.state.followers}</p>
                          : <p></p>}
                        {this.state.following ? <p>Number of following: {this.state.following}</p>
                          : <p></p>}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <UserForm2 getUser2={this.getUser2} />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <img width="250" src ={this.state.avatar_url2}/>
                      </td>
                      <td>
                        {this.state.name2 ? <p>{this.state.name2}</p>
                          : <p></p>}
                        {this.state.location2 ? <p>{this.state.location2}</p>
                          : <p></p>}
                        {this.state.url2 ? <p>{this.state.url2}</p>
                          : <p></p>}
                        {this.state.repos2 ? <p>Number of repos: {this.state.repos2}</p>
                          : <p></p>}
                        {this.state.followers2 ? <p>Number of followers: {this.state.followers2}</p>
                          : <p></p>}
                        {this.state.following2 ? <p>Number of following: {this.state.following2}</p>
                          : <p></p>}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        <p>GitHub user info comparisons</p>
        <table width="1000px">
          <tbody>
            <tr>
              <td width="200px">
                <p>{this.state.name}</p>
                <p>Number of repos: {this.state.repos}</p>
                <p>Number of followers: {this.state.followers}</p>
                <p>Number of following: {this.state.following}</p>
              </td>
              <td width="200px">
                <p>{this.state.name2}</p>
                <p>Number of repos: {this.state.repos2}</p>
                <p>Number of followers: {this.state.followers2}</p>
                <p>Number of following: {this.state.following2}</p>
              </td>
              <td>

              {/**
              {this.state.repos = this.state.repos2 ?
                <p>{this.state.name} has the same amount of repos as {this.state.name2}</p>
                :
                  this.state.repos > this.state.repos2 ?
                  <p>{this.state.name} has more repos than {this.state.name2}</p>
                  : <p>{this.state.name2} has more repos than {this.state.name}</p>
              }
              **/}


                {this.state.repos > this.state.repos2 ? <p>{this.state.name} has more repos than {this.state.name2}</p>
                : <p>{this.state.name2} has more repos than {this.state.name}</p>}
                {this.state.followers > this.state.followers2 ? <p>{this.state.name} has more followers than {this.state.name2}</p>
                : <p>{this.state.name2} has more followers than {this.state.name}</p>}
                {this.state.following > this.state.following2 ? <p>{this.state.name} has more following than {this.state.name2}</p>
                : <p>{this.state.name2} has more following than {this.state.name}</p>}
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
