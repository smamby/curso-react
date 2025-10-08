import { AddToCartIcon } from './Icons.jsx'
function Products ({ products }) {
  return (
    <ul>
        {
          products?.map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={`${product.title} image`} />
              <strong>{product.title}</strong>
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