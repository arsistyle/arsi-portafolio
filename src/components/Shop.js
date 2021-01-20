/* TODO
 * Aplicar el loading con placeholder
 */

import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
// import { Link } from 'react-router-dom';
import { getShop } from '../services';
import { HTML } from '../functions';
import Image from './Image';

import '../assets/scss/style/components/Shop.scss';

const PlaceholderItem = () => (
  <div className='shop__item shop__item--placeholder'>
    <div className='shop__image shop__image--placeholder placeholder--child'></div>
    <div className='shop__title shop__title--placeholder placeholder--child'></div>
  </div>
);

const placeholders = [];
for (let i = 0; i < 4; i++) {
  placeholders.push(<PlaceholderItem key={i} />);
}

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
        {loading ? (
          <>{placeholders}</>
        ) : (
          products.map((x) => {
            return (
              <LazyLoad
                placeholder={<PlaceholderItem />}
                throttle={3000}
                key={x.name}
              >
                <a href={x.permalink} className='shop__item'>
                  <div className='shop__image'>
                    <img src={x.images[0].src} alt={x.name} />
                    <Image
                      src={x.images[0].src}
                      alt={x.name}
                      // backgroundColor={x.backgroundColor}
                      zoom
                    />
                  </div>
                  <h3 className='shop__title'>{x.name}</h3>
                  <p className='shop__desc'>
                    {HTML(x.short_description, 'shop__price__html')}
                  </p>
                </a>
              </LazyLoad>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Shop;
