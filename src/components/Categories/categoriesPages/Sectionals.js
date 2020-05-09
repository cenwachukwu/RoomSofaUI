import React from 'react';
import '../Categories.scss';
import ProductsPils from '../../ProductsPills/ProductPill';

const Sectionals = (props) => {
  const categoriesProps = props.ProductData;
  const loading = props.loading;
  const error = props.error;
  console.log(categoriesProps);

  return (
    <div className="CategoriesPage">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : categoriesProps ? (
        <div className="CategoriesPageContainer">
          {categoriesProps.map((product, index) => {
            if (product.category == 'Sectionals') {
              // console.log(product);
              return (
                <div key={index + 0}>
                  <ProductsPils data={product} />
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>something is wrong</p>
      )}
    </div>
  );
};

export default Sectionals;
