import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './counter'

import CSS from './App.css'

class App extends React.Component{
  render(){
    return <div>
      <Counter/>
    </div>
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

export default App;
