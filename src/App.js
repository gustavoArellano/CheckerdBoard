import React, {Component} from 'react'
import './App.css';
class App extends Component {
    state = {
        n : [1, 2, 3, 4, 5, 6, 7, 8],
        j : [1, 2, 3, 4, 5, 6, 7, 8]
    }
    takeUserInput = (z) => {
        var array = []
        for (var i = 0; i < z; i++){
          array[i] = i + 1
       }
      this.setState({
          n : array
      })
      this.setState({
        j : array
    })
    console.log(this.state.j)
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.takeUserInput(e.target.value)
    }
    render () {
      return (
        <div className="container">
          <input className="input" onChange={this.handleChange} placeholder="Enter your chess number here" />
            {this.state.n.map((i) => (
              <table >
                <tr style={{display : "inline-block"}}>
                  {this.state.j.map((r) => {
                    if ((i % 2) === 0) {
                      if ((r % 2) === 0) {
                        return (
                          <th className="box-1"></th>
                        )
                          } else {
                            return (
                              <th className="box-2"></th>
                            )
                              }
                    } else {
                      if ((r % 2) === 0) {  
                        return (
                          <th className="box-2"></th>
                        )
                      } else {
                        return (
                          <th className="box-1"></th>
                        )
                      }
                    }
                  }
                )}
            </tr>
          </table>
        ))}
      </div>
    )
  }
}
export default App;