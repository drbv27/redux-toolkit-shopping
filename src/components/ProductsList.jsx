import { addProductToCart,removeProductFromCart } from "../reducers/cart/cartSlice";
import { useDispatch,useSelector } from "react-redux";

const ProductsList = ({products}) => {
    const dispatch = useDispatch()
    const {productsList} = useSelector(state => state.cart)
    const handleAddOrRemoveProduct = (productId) =>{
        const product = products.find(product => product.id === productId);
        
         if(productsList.find(pdt => pdt.id === productId)){
            dispatch(removeProductFromCart(productId));
        }else{
            dispatch(addProductToCart(product))
        } 
    }
  return (
    <>
        <h2>Listado de Productos</h2>
        <div className="row">
            {
                products.map(product =>{
                    return(
                        <div className="col-3 mt-3" key={product.id}>
                            <h4>{product.title}</h4>
                            <p><b>Price:</b> {product.price}</p>
                            <p><b>Category:</b> {product.category}</p>
                            <button
                                className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger" : 
                                "btn-success"}`}
                                onClick={()=>handleAddOrRemoveProduct(product.id)}
                                >{productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
                            </button>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default ProductsList