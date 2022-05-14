import { Component } from "react";
import Header from "./Header";
import BurgerDetail from "./BurgerDetail";
import BurgerMenu from "./BurgerMenu";
import Footer from "./Footer";

class BurgerStore extends Component {
      state = {
        salad:{
           key:'salad',
           amount:0,
           unitPrice:10
        },
        cheese:{
          key:'cheese',
          amount:0,
          unitPrice:20
        },
        meat:{
          key:'meat',
          amount:0,
          unitPrice:30
        },
        bacon:{
          key:'bacon',
          amount:0,
          unitPrice:15
        },
      }

      onHandleToppingChange= (key,value)=> {
         const menu = this.state;
         menu[key]['amount']+= value
         this.setState({...menu,})
      }
  render() {
    return (
      <div>
            <Header title="Burger King"></Header>
        <div className="burger-body">
                  <div className="burger-container row">
          {/* sử dụng grid system bootstrap */}
          {/* col- man hình <576px thì hiện dọc 12
            col-lg >= 992px thì hiện 6 cột */}
          <div className="col-12 col-lg-6">
              <BurgerDetail menu={this.state}/>
          </div>
          <div className="col-12 col-lg-6">
              {/* truyền dữ liệu state list ở trên xuống burgermenu để render ra (menu là tên tự đặt) */}
              <BurgerMenu menu={this.state} 
                onToppingChange = {this.onHandleToppingChange}
              />
          </div>
                  </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default BurgerStore;
