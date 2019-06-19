import React from 'react'
import Band from '../components/Band'
import tameImg from '../images/tame_impala.jpg'


export default function TameImpala() {


  return (
    <Band
      img={tameImg}
      name='Tame Impala'
      description='Tame Impala is an Australian psychedelic music project led by multi-instrumentalist Kevin Parker, who writes, records, performs, and produces the music. As a touring act, Parker guitar, vocals plays alongside Dominic Simper guitar, synthesiser and some members of Australian psychedelic rock band Pond – Jay Watson synthesiser, vocals, guitar, Cam Avery bass guitar, vocals, and Julien Barbagallo drums, vocals. Previously signed to Modular Recordings, Tame Impala is now signed to Interscope Records in the US, and Fiction Records in the UK.'
    />
  )
}