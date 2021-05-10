import React, {Component} from 'react';
import Main from "./components/MainComponent";
import {BrowserRouter, HashRouter} from 'react-router-dom';
import "./App.css";
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/configureStore';


const store = ConfigureStore();


class App extends Component {
 
 render(){
  return (
    <Provider store={store}>
    <HashRouter>
    <div>
     <Main/>
    </div>
    </HashRouter>
    </Provider>
  );

}
}


export default App;


//provider  is allow to access of store into whole react application