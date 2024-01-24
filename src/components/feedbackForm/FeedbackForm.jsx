import React, { useState } from "react";
import axios from "axios";

function FeedbackForm(props) {
  const initialFormData = {
    Name: "",
    Email: "",
    FeedbackText: "",
    Rating: 1,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const feedbackData = {
      ProductId: props.productId,
      id: Date.now().toString(),
      ...formData,
    };

    try {
      const response = await axios.post(
        "https://zwqwf8xdf4.execute-api.ap-southeast-2.amazonaws.com/DEV/feedbacks",
        feedbackData
      );

      console.log("Feedback submitted successfully:", response.data);
      setFormData(initialFormData)
      // You may want to reset the form or perform other actions after successful submission
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="md:flex-1 p-8">
      <div className="w-full max-w-md mx-auto bg-slate-100 p-8 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Feedback Text
            </label>
            <textarea
              name="FeedbackText"
              value={formData.FeedbackText}
              onChange={handleInputChange}
              rows="4"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">
              Rating
            </label>
            <select
              name="Rating"
              value={formData.Rating}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
