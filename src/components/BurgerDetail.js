import { Component } from "react";
import LayoutContainer from "./LayoutContainer";
  const Salad= () => {
    return ( <div className="salad"/> )
  }
  const Cheese = () => <div className="cheese"/>
  const Meat = () => <div className="meat"/>
  const Bacon = () => <div className="bacon"/>
export default class BurgerDetail extends Component {
  render() {
    const {menu} = this.props;
    const values = Object.values(menu);

    const burgerBody = values.map((item,index) => {
     const{key,amount} =item;
     const toppingComponent =[]
     for( let i = 1; i<= amount; i++) {
       switch(key) {
         case 'salad' :
            toppingComponent.push(<Salad/>);
            break;
          case 'cheese' :
            toppingComponent.push(<Cheese/>);
            break;
          case 'meat' :
            toppingComponent.push(<Meat/>);
            break;
          case 'bacon' :
            toppingComponent.push(<Bacon/>);
            break;
            default:
              break;
       }
     }
     return toppingComponent;
     
    })
    return (
      <LayoutContainer>
      <div className="box">
        {/* Phần bánh burger phía trên */}
        <div className="bread-top">
          <div className="seeds" />
          <div className="seeds2" />
        </div>

        {burgerBody}
        {/* <div className="ingredients">
         <Salad/>
        <Cheese/>
        <Meat/>
        <Bacon/> 
        </div> */}
        {/* Phần bánh burger phía dươi */}
        <div className="bread-bottom" />
      </div>
      </LayoutContainer>
    );
  }
}
