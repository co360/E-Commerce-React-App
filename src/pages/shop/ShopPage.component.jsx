import React from 'react';
import Preview from '../../components/preview-component/Preview.component';

import ShopData from './shop.data';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <Preview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
