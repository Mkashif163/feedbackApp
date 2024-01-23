import { StarIcon } from "@heroicons/react/20/solid";

export default function ProductPage() {
 const product = null;
 
  return (
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">

    { product && <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="object-cover object-center"
          />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
            {product.name}
          </h2>
          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>
            <p className="text-2xl text-gray-900">{product.price}</p>
            {/* Reviews */}
            <div className="mt-6">
              <h4 className="sr-only">Reviews</h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>
          </section>
        </div>
      </div>}
    </div>
  );
}
