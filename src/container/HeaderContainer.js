
import Header2 from '../components/Header2';
import {connect} from 'react-redux';
import { addToCart,removeToCart } from "../services/actions/action";

const mapStateToProps=state=>({
        data: state.cardItem
})
const mapDispatchToProps=dispatch=>({
    // addToCartHandler:data=>dispatch(addToCart(data)),
    
    removeToCartHandler:data=>dispatch(removeToCart(data)),
    // {console.warn("container",data)}
  
})
export default connect(mapStateToProps,mapDispatchToProps) (Header2) ;