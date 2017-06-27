import React, { Component } from 'react';

class Vitrine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'isFav' : ''
    }
  }

  componentWillMount() {

    let isFav = window.localStorage.getItem(this.props.id)
    this.setState({ isFav: isFav})
  }

  componentDidUnmount() {

    this.setState({ isFav: '' })
  }

  favorite(event) {

    window.localStorage.setItem(this.props.id, 'favoritado')
    this.setState({ isFav: "favoritado"})
    event.preventDefault();
  }

  render() {

    return(
      <li>
        <a className="each-book" target="blank_" href={ this.props.link }>
          <figure>
            { this.props.image ? <img src={ this.props.image }  alt={ this.props.title } /> : ''}
          </figure>
          <h3>{ this.props.title }</h3>
          <p className="author">{ this.props.author ? this.props.author : '- Não informado' }</p>
          <span className="publisher">{ this.props.publisher ? this.props.publisher : '- Não informado' }</span>
          <object><a onClick={ this.favorite.bind(this) } className={ this.state.isFav } href="javascript:void(0);">{this.state.isFav ? 'Favoritado' : 'Favoritar'}</a></object>
        </a>
      </li>
    )
  }
}

export default Vitrine;
