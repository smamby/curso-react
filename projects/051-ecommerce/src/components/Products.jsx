import { AddToCartIcon } from './Icons.jsx'

export default function Products ({ products }) {
  return (
    <ul>
      {
        products?.map(product => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
              <p>{product.category}</p>
            </div>
            <button>
              <AddToCartIcon />
            </button>
          </li>
        ))
      }
    </ul>
  )
}