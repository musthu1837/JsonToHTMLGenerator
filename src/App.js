import React from 'react';
import './App.css';
import data from './data'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  renderHTMLElment = (elementData) => {
      debugger
      let childrens = [];
      if( elementData.children && elementData.children.length > 0){
        childrens = elementData.children.map((child, index) => {
          return this.renderHTMLElment(child)
        })
      }
      let parentNode = React.createElement(
        elementData.type
      , {style: elementData.styles, id: elementData.id, key: elementData.id, ...elementData.events}
      , childrens.length !== 0 ? childrens: elementData.innerHTML + ": Styles: " + JSON.stringify(elementData.styles)
      )

      return parentNode;
  }

  render(){
    console.log(data)
    return (
      <div className="App">
        {
          data.data.map((ele, index) => {
            return this.renderHTMLElment(ele);
          })
        }
      </div>
    );
  }
}

export default App;
