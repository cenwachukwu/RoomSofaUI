import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UploadProduct.scss';

const UploadProduct = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productType, setProductType] = useState('');
  const [productDimension, setProductDimension] = useState('');
  const [features, setFeatures] = useState('');
  const [images, setImages] = useState('');
  const [availableSizes, setAvailableSizes] = useState('');
  const [styleNumber, setStyleNumber] = useState('');
  const [category, setCategory] = useState('');
  const [isFreeShipping, setIsFreeShipping] = useState('');
  const [isSoldOut, setIsSoldOut] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const Product = {
      name: { name },
      price: { price },
      description: { description },
      dimension: [
        { product_type: productType, product_dimension: productDimension },
      ],
      features: [{ feature: features }],
      images: { images },
      availableSizes: [{ size: availableSizes }],
      styleNumber: { styleNumber },
      category: { category },
      isFreeShipping: { isFreeShipping },
      isSoldOut: { isSoldOut },
    };
    alert(Product);
    console.log(Product); //eventually this is going to be where we submit the file to the database i.e do our post request
    axios
      .post('url', Product)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const acceptedTypes = ['image/png', 'image/jpg', 'image/jpeg'];

  return (
    <div className="UploadProduct">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
              />
              <input
                type="text"
                value={productDimension}
                onChange={(e) => setProductDimension(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
              />
            </div>

            <div>
              <input
                type="file"
                value={images}
                accept={acceptedTypes.toString()}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    setImages(e.target.files[0]);
                  }
                }}
              />
            </div>

            <div>
              <input
                type="text"
                value={availableSizes}
                onChange={(e) => setAvailableSizes(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                value={styleNumber}
                onChange={(e) => setStyleNumber(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Sectional">Sectional</option>
                <option value="recliner">recliner</option>
                <option value="living room">living room</option>
                <option value="bedding">bedding</option>
              </select>
            </div>

            <div>
              <label htmlFor="isFreeShipping">Is free shipping availble</label>
              <select
                id="isFreeShipping"
                value={isFreeShipping}
                onChange={(e) => setIsFreeShipping(e.target.value)}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>

            <div>
              <label htmlFor="isSoldOut">Is it sold out?</label>
              <select
                id="isSoldOut"
                value={isSoldOut}
                onChange={(e) => setIsSoldOut(e.target.value)}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
