import React,{useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
 
const [image,setImage]=useState('')

const handleChange=()=>{
  axios.get('https://api.generated.photos/api/v1/faces?api_key=325EJ3Tsw7oo50PwzNdlzg&order_by=random')
  .then(res=>{
    const uri=res.data.faces[0].urls[4][512]
    uri && setImage(uri)
  }).catch(err=>{
    console.log(err.message)
  })
}

  return (
    <div className="App">
    <h1>AI photo generator</h1>
    {image && <img src={image} alt="AI Face"/>}
    <button type="button" onClick={handleChange}>image</button>
    </div>
  );
}

export default App;
