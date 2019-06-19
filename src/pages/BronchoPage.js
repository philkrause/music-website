import React from 'react'
import Band from '../components/Band'
import bronchoImg from '../images/broncho.jpg'


export default function Broncho() {


  return (
    <Band
      img={bronchoImg} 
      name='Broncho'
      description='Broncho is an American indie rock band based in Norman, Oklahoma. The band formed in Norman in 2010. The current lineup consists of Ryan Lindsey on guitar and vocals, Ben King on guitars, Penny Pitchlynn on bass and Nathan Price on drums.
      Their debut album Cant Get Past the Lips originally came out in 2011 and was rereleased by Fairfax Recordings in 2013. Broncho released their second album Just Enough Hip to Be Woman on September 16, 2014 on Dine Alone Records. The album received generally favorable reviews from the music press.'
    />
  )
}