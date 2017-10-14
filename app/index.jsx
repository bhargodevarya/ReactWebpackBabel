import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';

var Header = createReactClass({
  render: function() {
    return (
      <p>This is the header</p>
    )
  }
});

var Author = createReactClass({

  render: function() {

    let data = this.props.author.books.map((book, i) => {
      return <div key={i}>
        <br></br>

        <li>{book}</li>

      </div>
    });

    return (
      <div>
        The author {this.props.author.name}
        has written the following books {data}
      </div>
    )
  }

});

//this is depracted
var App = createReactClass({
  /**
creating state for this component.
Top level components have state which is passed to child components as state.
**/
  getInitialState: function() {
    //returning an object, but can be anything
    return {
      authors: [
        {
          name: "Bhargo",
          books: ['bhargo1', 'bhargo2']
        }, {
          name: "Amar",
          books: ['amar1', 'amar2']
        }
      ]
    }
  },

  render: function() {
    //map through the authors array in the state to create Author tag
    let authorTag = this.state.authors.map((auth, i) => {
      return <Author key={i} author={auth}/>
    })
    return (
      <div>
        <Header/>
        {authorTag}
      </div>
    )
  }
});

ReactDOM.render(
  <App/>, document.getElementById('app'));
