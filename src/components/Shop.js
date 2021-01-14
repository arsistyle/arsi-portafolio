import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getShop } from '../services';
import { HTML } from '../functions';
import { Image } from './Image';

import '../assets/scss/style/components/Shop.scss';

const Shop = ({ items }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const response = await getShop();
      console.log(response);
      if (response) {
        setProducts(response);
        setLoading(false);
      }
    }
    loadProducts();
  }, [items]);
  return (
    <div className='shop'>
      <div className='shop__list'>
        {products?.map((x) => {
          return (
            <a href={x.permalink} className='shop__item' key={x.name}>
              <div className='shop__image'>
                <img src={x.images[0].src} alt={x.name} />
              </div>
              <h3 className='shop__title'>{x.name}</h3>
              <p className='shop__desc'>
                {HTML(x.short_description, 'shop__price__html')}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
