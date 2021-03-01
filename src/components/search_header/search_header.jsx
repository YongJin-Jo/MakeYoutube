import style from './search_header.module.css'
import React, { memo, useRef } from 'react'


const SearchHeader = memo(
  ({onSearch}) => {

    const inputRef = useRef();
  
    const handeSearch = () =>{
      const value = inputRef.current.value;
      onSearch(value)
    }
  
    const onClick = () => {
      handeSearch()
    }
    const onKeyPress = (event) =>{
      if(event.key==='Enter'){
        handeSearch()
      }
    }

    return (
      <header className={style.header}>
        <div className={style.logo}>
          <a href="">
            <img className={style.img} src="/images/logo.png" alt="logo"/>
            <h1 className ={style.title}>Youtube</h1>
          </a>
        </div>
        <input className ={style.input} 
          ref={inputRef}
          type="search"
          placeholder="Search.."
          onKeyPress={onKeyPress}
          />
        <button className ={style.button} type="submit" onClick={onClick}>
          <img  className ={style.buttonimg} src="/images/search.png" alt="search"/>
        </button>
      </header>
    )
  }
)
export default SearchHeader
