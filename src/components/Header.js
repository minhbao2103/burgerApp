const Header = (props) => {
    const{title} = props
    return (
     <header className="topbar">
         <h1 className="topbar__title">{title}</h1>
         <div className="topbar__cart">
           <span>
           <i className="fa fa-cart-plus"></i>
           </span>
           <span>Your cart</span>
           <span>(0)</span>
         </div>
     </header>
    )
}

export default Header