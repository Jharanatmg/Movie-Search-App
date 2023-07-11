import React from 'react'
interface IButton{
    className?:string,
    onClick?:()=>void,
    text?:string,
    type?:'submit'|'button'|'reset'    

}

const Button:React.FC<IButton> = ({className,onClick,text, type}) => {
  return (
  
        <button className={className} type={type} onClick={onClick}>{text}</button>
    
  )
}

export default Button