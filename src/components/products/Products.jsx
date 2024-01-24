import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "./productSlice.js";
import { Link } from "react-router-dom";

function Products() {
  const [apiProducts, setProducts] = React.useState([]);
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    console.log("Product before dispatch");
    dispatch(setSelectedProduct(product));
    
  };

  const url =
    "https://zlibo5ns34.execute-api.ap-southeast-2.amazonaws.com/FBstage1";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        console.log(res)
        const responseData = JSON.parse(res.data.body);
        const products = responseData;
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return (
    <div>
      <div>
        <div className="mx-auto max-w-2xl px-3 py-16 sm:px-5 sm:py-24 lg:max-w-7xl lg:px-2">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {apiProducts &&
              apiProducts.map((product) => (
                <div key={product.id} className="group relative " onClick={()=>handleProductClick(product)}>
                <Link to={`/product/${product.id}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between" >
                    <div>
                      <h3 className="text-sm text-white">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-white">
                      {product.price}
                    </p>
                  </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
