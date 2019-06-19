import React from 'react'
import Band from '../components/Band'
import tomsStoryImg from '../images/toms_story.jpg'


export default function TomsStory() {


  return (
    <Band
      img={tomsStoryImg} 
      name='Toms Story'
      description='Toms Story is an indie instrumental rock trio based in Manila, Philippines. The band is composed of original members: Tom Naval on bass, Gabba Santiago on guitars, and Christer "Degs" de Guia on drums.
        The band independently released its self-titled album in 2016, and is currently managed by A Spur of the Moment Project, an independent record label.'
        />  
        )
}