import { useSelector } from "react-redux";
import { selectSelectedProduct } from "../../components/products/productSlice";
import FeedbackForm from "../../components/feedbackForm/FeedbackForm";
import FeedBacks from "../../components/feedbackTable/FeedBacks";

export default function ProductPage() {
  const product = useSelector(selectSelectedProduct);

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="md:flex-1 p-8">
        <div className="flex items-center mb-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-3/4 h-auto rounded-lg shadow-lg mr-4"
          />
        </div>
        <div className="flex items-center mt-4">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product Image ${index + 1}`}
              className="w-1/6 h-auto rounded-lg shadow-lg mr-2"
            />
          ))}
        </div>
        <section aria-labelledby="information-heading" className="mt-2">
          <div>
            <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
            <p className="text-2xl mb-2">${product.price}</p>
            <div className="flex items-center">
              <p className="mr-2">{product.rating}</p>
            </div>
          </div>
          <h3 id="information-heading" className="text-lg font-medium">
            Product Information
          </h3>
          <p className="text-gray-700">{product.description}</p>
          <ul className="mt-4 list-disc pl-4">
            <li>
              <strong>Brand:</strong> {product.brand}
            </li>
            <li>
              <strong>Category:</strong> {product.category}
            </li>
            <li>
              <strong>Discount Percentage:</strong> {product.discountPercentage}
              %
            </li>
            <li>
              <strong>Stock:</strong> {product.stock}
            </li>
          </ul>
        </section>
      </div>

      <div className="md:flex-1 p-8">
        <FeedBacks />
        <FeedbackForm productId={product.id} />
      </div>
    </div>
  );
}
