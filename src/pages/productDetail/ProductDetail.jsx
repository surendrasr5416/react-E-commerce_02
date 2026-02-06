import { Link, useParams } from "react-router-dom";
import products_list from '../../data/Products'
import ProductCard from "../../components/ProductCard/Productcard";
// import './ProductCard.css'


function ProductDetail() {
    return (
        <>
        <h1>
            Product Paage
        </h1>
            <div >
                {
                    products_list.map((products, index) => (
                        <ProductCard product={products} />

                    ))
                }
            </div>
        </>
    )

}
export default ProductDetail;