import React, { Component } from 'react';
import LayoutContainer from './LayoutContainer';

class BurgerMenu extends Component {
    render() {
      const {menu, onToppingChange} = this.props;
      const values = Object.values(menu);
      
      const tbodyContent = values.map((item, index) => {
        const {key, unitPrice, amount} = item;
        const label = key.slice(0,1).toUpperCase() + key.slice(1,key.length)
        const totalToppingPrice = amount*unitPrice
        const isLessButtonDisabled = amount === 0;
        //  đặt tên kiểu boolean thì nên có is phía trước
      
        return (
          <tr key={index}>
      <td>{label}</td>
      <td className='burger-item-amount'>
          <button 
          className='btn btn-primary' 
          disabled={isLessButtonDisabled}
          onClick= {()=> onToppingChange(key,-1)}>Less</button>
          <span>{amount}</span>
          <button className='btn btn-primary' 
          onClick={()=> onToppingChange(key, +1)}>More</button>
      </td>
      <td>{unitPrice}</td>
      <td>{totalToppingPrice}</td>
    </tr>
        )
      });

      let totalPrice = 0
      for(let topping of values) {
         totalPrice = totalPrice +  topping['amount'] * topping['unitPrice']
      }
        return (
      <LayoutContainer>
          <h4 className='text-center'>Menu</h4>
          <div className='menu-container'>
          <table className="table">
  <thead>
    <tr>
    {/* bao nhiêu tr la bấy nhiêu hàng,
    bao nhiêu th là bấy nhiêu cột
    td là phần tử con */}
      <th scope="col">Topping</th>
      <th scope="col">Amount</th>
      <th scope="col">Unit Price</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>   
  {tbodyContent}
    {/* total coin */}
    <tr>
      <th scope="row">
          <strong>Total price</strong>
      </th>
      <td></td>
      <td></td>
      <td>
          <strong>${totalPrice}</strong>
      </td>
    </tr>
  </tbody>
</table>
        <div>
        <button className='btn btn-primary me-2'>Order now</button>
        <button className='btn btn-primary'>Reset</button>
        </div>
    </div>
      </LayoutContainer>
        );
    }
}

export default BurgerMenu;