// frontend/src/Pages/Product.jsx
import React, { useContext, useEffect } from 'react' // useEffect ko add karein
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../Components/Bredcrums/BredCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));

  // Yeh useEffect hook page ko top par scroll karega
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]); // productId ke change hone par hi yeh chalta hai

  return (
    <div>
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description product={product}/>
      <RelatedProducts product={product}/>
    </div>
  )
}

export default Product