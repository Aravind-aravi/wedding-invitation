import React, { Component } from 'react'
import {
  Container,
} from 'reactstrap';
// import logo from './logo.svg';
import './App.css';
import Screen from './Screen';

const gallery = [ // galley image list
  require('./Image/gallery/1.png'),
  require('./Image/gallery/2.jpg'),
  require('./Image/gallery/3.jpg'),
  require('./Image/gallery/4.jpg'),
  require('./Image/gallery/5.jpg'),
  require('./Image/gallery/6.jpg'),
];

export default class App extends Component{
  state={
    config:{
      global: {
        googleMapAPIKey: 'AIzaSyDSjYdBUN_NDRJQShxs0ugvMBV2goZvT2o',
        comment: {
          livere: {
            enable: true, // if false, not rendering livere comment component
            service: 'city',
            uid: 'MTAyMC8yNTYzNi8yMjMy',
          },
          facebook: {
            enable: false, // if false, not rendering facebook comment component
            appId: '1535680996513864',
          },
        },
      },
      title: 'Wedding Invitation', // recomanded English
      wedding: {
        place: {
          name: 'Beautiful Wedding Hall 3F Beautiful Hall',
          address: 'hi',
          latitude: 37.51990006878117,
          longitude: 126.94020220536675,
        },
        at: 'Saturday, January 27, 2018 12:00 PM',
      },
      bridal: {
        name: 'Steven G. Rogers',
        image: require('./Image/bridal.jpeg'),
        phone: '+821011111111',
        facebook: false, // if false, not showing facebook icon
        father: 'Dong',
        mother: 'the eldest son of Gangnam-gu',
        position: '',
      },
      groom: {
        name: 'Scarlett Johansson',
        image: require('./Image/groom.jpeg'),
        phone: '+821022222222',
        facebook: 'https://www.facebook.com/luckyyowu',
        father: 'Bucheon City',
        mother: 'the second daughter of Wonmi-gu',
        position: '',
      },
      image: {
        header: require('./Image/header.jpg'),
        gallery: gallery.map(item => ({
          original: item,
          thumbnail: item,
        })),
      }
    }
  }
  render(){
  return (
    <Container className="app">
      <Screen.Header config={this.state.config} />
      <Screen.Profile config={this.state.config} />
      <Screen.Gallery config={this.state.config} />

    </Container>
  )
}
}


