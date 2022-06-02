
import Cartdata from '../components/Cartdata';
import {connect} from 'react-redux';
import {Incre,Decre, addToCart,removeToCart } from "../services/actions/action";

const mapStateToProps=state=>({
        data: state.cardItem
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    IncreHandler:data=>dispatch(Incre(data)),
    DecreHandler:data=>dispatch(Decre(data)),
    
    removeToCartHandler:data=>dispatch(removeToCart(data)),
    // {console.warn("container",data)}
  
})
export default connect(mapStateToProps,mapDispatchToProps) (Cartdata) ;