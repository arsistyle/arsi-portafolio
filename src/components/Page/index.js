import React from 'react';
import Breadcrumbs from '../Breadcrumbs';

import '../../assets/scss/style/components/Page.scss';

const Page = props => {
//   const [loading, setImage] = useState(false);
//   if (props.banner) {
//     const image = new Image();
//     image.src = props.image;
//     image.onload = () => {
//       setImage(true);
//     };
//   }
  return (
    <section className='page'>
      <div className='page__banner'>
        {props.banner ? <img src={props.banner} alt={props.title} /> : ''}
      </div>
      <div className='frame'>
        <div className='page__content'>
          <Breadcrumbs />
          <props.content />
        </div>
      </div>
    </section>
  );
};

export default Page;
