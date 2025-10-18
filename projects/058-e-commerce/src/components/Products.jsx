import { AddToCartIcon } from './Icons'

export default function Products ({ products }) {
    return (
        <ul>
            {
                products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title + ' image'}  />
                        <p>{product.category}</p>
                        <p><strong>{product.title}</strong> - ${product.price}</p>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}