import { AddToCartIcon } from "./Icons";

function Products ({ products }) {
  return (
    <ul>
      {
        products?.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={`${product.title} image`} />
            <p><strong>{product.title}</strong> - ${product.price}</p>
            <p>{product.category}</p>
            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default Products