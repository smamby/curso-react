import { AddToCartIcon } from './Icons'

function Products ({ products }) {
    return (
        <ul>
            {
                products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={'image of ' + product.title} />
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

export default Products