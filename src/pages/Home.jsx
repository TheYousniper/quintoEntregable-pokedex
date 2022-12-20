import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {setTrainerGlobal} from '../store/slices/trainer.slice'
import Footer from './Footer';
import './styles/Home.css'


const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerGlobal(e.target.name.value.trim()));
    e.target.name.value = '';
    navigate('/pokedex');
  };

  return (
    <div className='home__container'>
      <img className='home__img' src="./pokedex.png" alt="" />
      <h1 className='home__title'>Hi Trainer!!</h1>
      <p className='home__paragraph'>Give me your name to start</p>
      <form className='home__form' onSubmit={handleSubmit}>
        <input className='home__input' id='name' type="text" />
        <button className='home__btn'>Start</button>
      </form>
      <Footer/>
    </div>
  );
};

export default Home;
