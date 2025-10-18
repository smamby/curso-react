import './css/App.css'
import { CartIcon } from './components/Icons'
import { products as initialProducts } from './mocks/products'
import Products from './components/Products'

function App () {

    return (
        <>
            <h1>React e-commerce <CartIcon /></h1>
            <Products products={initialProducts} />
        </>
    )
}

export default App