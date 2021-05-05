export const existingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => cartItem.id === nextCartItem.id
    );
}


export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
    const quantityIncrement = 1;
    const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });
    if (cartItemExists) {
        return prevCartItems.map(cartItem =>
            cartItem.id === nextCartItem.id ? {
                ...cartItem,
                quantity: cartItem.quantity + quantityIncrement
            } : cartItem
        );
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: nextCartItem.itemQty ? nextCartItem.itemQty : quantityIncrement,
        }
    ]
}

export const removeCartProduct = ({ prevCartItems, nextCartItem }) => {
    return prevCartItems.filter(
        cartItem => cartItem.id !== nextCartItem.id
    )
}

export const reduceCartProduct = ({ prevCartItems, nextCartItem }) => {
    const existingCartItem = prevCartItems.find(cartItem =>
        cartItem.id === nextCartItem.id);
    if (existingCartItem.quantity === 1) {
        return prevCartItems.filter(cartItem =>
            cartItem.id !== existingCartItem.id)
    }

    return prevCartItems.map(cartItem =>
        cartItem.id === existingCartItem.id ?
            {
                ...cartItem,
                quantity: cartItem.quantity - 1
            } : cartItem)
}