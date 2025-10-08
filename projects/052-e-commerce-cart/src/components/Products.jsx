import { AddToCartIcon } from './Icons.jsx'

function Products ({ products }) {
  return (
    <ul>
      {
        products?.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt="" />
            <strong>{product.title}</strong> - ${product.price}
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