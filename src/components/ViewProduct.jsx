// imports
import './ViewProduct.css'


// component function
const ViewProduct = ({ product }) => (
	<section className="view-product">
		<img src={product.img} />
		<h2> {product.name} </h2>
		<p> {product.price} kr </p>
	</section>
)

// export
export default ViewProduct
