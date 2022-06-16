import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import User from './User/User';
import AddFoodsDirectly from "./admin/addFoodsDirectly";

function App() {

	let [title,b] = useState('recommendation')



	return (
	<div className="App">
		<User />
		<AddFoodsDirectly />
    	<div className = "black-nav">
    		<h1 style = {{color: "white"}}>더 비쌀까 쌀까?</h1>
    	</div>
    	<div className= "game-screen" style={{background:"dimgray"}}>
        	
        	<div className= "Left-box">
				{/* <img src={require('./img/42e863669e2698303171baa9c2467987.jpg').default}  /> */}
				<img src="img/42e863669e2698303171baa9c2467987.jpg" className= "img-thumbnail"/>
			</div>
			<div className= 'Right-box'>
				<button className = "Expensive-button" type = "button" >비싸다!</button>
				<button className = "Cheap-button" type = "button" >싸다!</button>
				<img src="img/39876858ec6a3109c42e71b37504983e.jpg" className = "img-thumbnail"/>
			</div>
    	</div>
    </div>
    );
}

export default App;
