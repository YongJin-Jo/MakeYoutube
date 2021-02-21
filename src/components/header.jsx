import './header.css';
import React, { createRef, useRef } from 'react'

const Header = (props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const onClick = () => {
    console.log('onclick')
  }

  const onkeyPress = () =>{
    console.log('onclick')
  }

  return (
    <header>
    <span>
        <a className="yt-logo" href="">
          <img src="./yt_logo_rgb_dark.png" alt=""/>
          </a>
        <fieldset className="search-fiedset">
          <form ref ={formRef} action="">
            <input ref ={inputRef} onKeyPress={onkeyPress} type="text"/>
            <button onClick={onClick}>
              <img src="./search-ico.png" alt=""/>
            </button>
          </form>
        </fieldset>
    </span>
  </header>
  )
}

export default Header



