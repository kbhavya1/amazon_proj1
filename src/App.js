import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Suggestions from './Suggestions.js'
import person1 from './person1.png';
import person2 from './person2.png';

// function App() {
//   return (
//     <div>Hello World!</div>
//   );
// }

export default class App extends Component{

  constructor(){
    super();

    this.state = {
      value:'',
      flag:0,
      user:[],
    }
  }

  setValue = (event)=>{
    let _value = event.target.value;
    this.setState({value:_value,flag:1});
  }

  setDropDown=(event)=>{
    let _name = event.target.childNodes[0].value;
    this.setState({user:[...this.state.user,_name],value:'',flag:0})
  }


  includeData=(event)=>{
    let _value = event.target.value;
    if(['Backspace'].includes(event.key) && _value == 0){
        let _arr = [...this.state.user];
        _arr.splice(-1,1);
        this.setState({user:_arr});
        event.target.focus();
        return;
    }

    if(['Enter','Tab',','].includes(event.key)){
      event.preventDefault();

      let _users = this.state.value.trim();

      if(_users){
        this.setState({user:[...this.state.user,_users],value:''})
      }
    }
  }

  delData=(event)=>{
    let _element = event.target.parentElement.childNodes[0].value;

    let _array = this.state.user.filter(data=>data !== _element);

    this.setState({user:_array})
  }

  render(){
    var textStyle = {
      marginBottom:'1px',
      marginLeft:'3px'
    };
    return(
    <div>
    <span style={textStyle}>Enter some tag</span>
    <br />
      <div className="tags-input" data-name="tags-input">
          {this.state.user.map(data=>
            <span className="tags" key={data}>
              <input type="hidden" value={data} />
              {data}
              <span className="close" onClick={this.delData}>
              </span>
            </span>)}
          <input className="main-tag"
                  placeholder="Enter text here"
                  type="text"
                  value = {this.state.value}
                  onChange = {this.setValue}
                  onKeyDown = {this.includeData}
          />

      </div>
      {(this.state.flag)?
      <div className="suggestion-box">
        <Suggestions  result={this.state.value} setDropDowns={this.setDropDown} />
      </div>
      :null}
      </div>
    );
  }
}

//export default App;
