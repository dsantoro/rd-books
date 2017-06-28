import React, { Component } from 'react';
import Header from './components/Header';
import Vitrine from './components/Vitrine';
import getBooks from './api/GoogleBooks';
import FontAwesome from 'react-fontawesome';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      term : '',
      books : {
        items: []
      }
    }
  }

  handleSubmit(event) {

    let that = this;
    let term = that.refs.search.value;
    if(term !== '') {
      getBooks(term).then(function(data){

        that.setState({
          term : term,
          books: {
            items: data.items
          }
        })
      })
    }
    event.preventDefault();
  }

  render() {

    return (

      <div>
        <Header />
        <div className="row expanded collapse">
          <div className="small-12 columns">
            <div className="hero flex align-end">
              <div className="curtain"></div>
              <div className="row">
                <div className="small-12 medium-8 medium-centered large-6 large-centered columns">
                  <form onSubmit={this.handleSubmit.bind(this)} className="search-books flex">
                    <input type="search" name="search" ref="search" placeholder="Pesquisar Livros" />
                    <button type="submit"><FontAwesome name='search' /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="small-12 columns">
              <span className="search-history">Você pesquisou por: <strong>{ this.state.term } !</strong></span>
              <ul className="small-block-grid-1 medium-block-grid-3 large-block-grid-4">

                {this.state.books.items.map((book, i) => {
                  return <Vitrine
                    key={ i }
                    id= { book.id }
                    title={ book.volumeInfo.title }
                    image={ book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '' }
                    author={ book.volumeInfo.authors }
                    publisher={ book.volumeInfo.publisher }
                    link= { book.volumeInfo.canonicalVolumeLink }
                  />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
