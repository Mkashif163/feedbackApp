import React, { useEffect } from "react";
import axios from "axios";

function Products() {
  const [apiProducts, setProducts] = React.useState([]);

  const url =
    "https://zlibo5ns34.execute-api.ap-southeast-2.amazonaws.com/FBstage1";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        const responseData = JSON.parse(res.data.data);
        const products = responseData.Items;
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
                <div key={product.id} className="group relative ">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <a href={`/product/${product.id}`}>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </a>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-white">
                        <a href={`/product/${product.id}`}
                          className="font-medium text-gray-500 hover:text-gray-200"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
