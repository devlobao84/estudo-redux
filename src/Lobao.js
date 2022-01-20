import React, { Component } from 'react'
import User from './User';
import './lobao.css'
import avatar from './avatar.png'

class Dev extends Component {
 render() {
     return (
         <div>
             <div>
                <h1 className='title'>
                 testando essa merda!            
                </h1>
             </div>
             <div>
                <h2>
                 Preciso aprender rápido
                </h2>                 
             </div>       
             <div>
                <p>
                <User name="Jonas"  foto={avatar} ></User>
                <User name="Ana"></User>
                </p>
             </div>             
         </div>
     );
    }
}

export default Dev;