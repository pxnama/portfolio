import React from 'react';
import './App.css';
import ListItem from './components/ListItem';


const data = [
  {"name":"Item 1", "url":"www.google.com", "gradient1":"#B78628", "gradient2":"#EEB609"},
  {"name":"Item 2", "url":"www.google.com", "gradient1":"#B6B6BB", "gradient2":"#D8D8D8"},
  {"name":"Item 3", "url":"www.google.com", "gradient1":"#804A01", "gradient2":"#CE8235"},
  {"name":"Item 4", "url":"www.google.com", "gradient1":"#fff", "gradient2":"#fff"}
];

class App extends React.Component {
  render (){
    
   return(
    <div className="App">
      <header className="AppHeader">
        <h1>Panama Wallace</h1>
      </header>
      <div className="ListContainer">
        {data.map((e, i) => 
          <ListItem url={e.url}/>
        )}
      </div>
    </div>
   );
  }
}

export default App;
