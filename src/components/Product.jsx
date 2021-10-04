import React from 'react'

const Product = ({products, product, cart, setCart}) => {
    const {id, name, price} = product;

    //Add product to the cart
    const selectProduct = (id) => {
        const product = products.filter(product => product.id === id)[0];
        setCart([
            ...cart,
            product
        ]);
    }

    //Delete product from cart
    const deleteProduct = (id) => {
        const products = cart.filter(product => product.id !== id)
        setCart(products)
    }
    
    return ( 
        <div>
            <h2> {name} </h2>
            <p> ${price} </p>

            {products
            ?

            (<button 
            type="button"
            onClick={() => selectProduct(id)}
            >Comprar</button>)

            :

            (<button 
            type="button"
            onClick={() => deleteProduct(id)}
            >Eliminar</button>)
            }
        </div>
     );
}
 
export default Product;