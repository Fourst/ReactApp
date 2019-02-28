import React, { Component } from 'react';

class Dropdawn extends Component{
 constructor(props){
    super(props)
    this.state  = {isOpened: true};
 };
  toggleState(){
      this.setState({isOpened : !this.state.isOpened});//функция setState({}) возвращает состаяние в обратную сторону true\false
  }
  render(){
    let dropdownText;
    if(!this.state.isOpened){
        dropdownText = <div>it`s magic</div>
    }
    return (
        <div onClick={this.toggleState.bind(this)}>
            Click me {dropdownText}
        </div>)
  }
}
export default Dropdawn;

// Добавить переменную в стате
//вызвать конструктор с параметром props
//super(props) - переопределяет конструктор
//в конструторе при инициализации создали переменную и поставили ее в false.this.state  = {isOpened: false}
//добавить событие onClick, для этого надо добавить в div <div onClick={this.toggleState}> и добавить bind(this)т.е. this - нашего класса
//описать метод
// далее содали проверку и  it`s Dropdown {dropdownText} сюда будет выводиться текст который скрыт и обратно
//let dropdownText;
// if(!this.state.isOpened){
//     dropdownText = <div>Vghuuuuuuuh!</div>
// }