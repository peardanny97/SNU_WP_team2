import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import AddFoodsDirectly from "./admin/addFoodsDirectly";
import app from './FirebaseApp';
import getFoodsData from "./useCase/getFoodsData";
import GameScreen from "./Components/GameScreen";
import Header from "./Components/Header";

function App() {
	const firebaseApp = app;
	
	return (
	<div className="App">
		<Header />
		<AddFoodsDirectly />
		
		<GameScreen/>
    </div>
    );
}

export default App;
