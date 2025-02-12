import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    return React.createElement(
        'div',
        { className: 'products-container' },
        React.createElement('h1', null, 'Products'),

        // Display Products
        React.createElement(
            'div',
            { className: 'products-list' },
            products.length > 0 
                ? products.map((product) =>
                    React.createElement(
                        'div',
                        { key: product.id, className: 'product-card' },
                        React.createElement('h3', null, product.name),
                        React.createElement('p', null, `Price: ₹${product.price}`)
                    )
                )
                : React.createElement('p', null, 'No products found.')
        )
    );
};

export default Products;
