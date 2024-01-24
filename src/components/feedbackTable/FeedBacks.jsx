import React, { useState, useEffect } from "react";
import axios from "axios";
import FeedbackForm from "../feedbackForm/FeedbackForm";

function FeedBacks() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url =
      "https://zwqwf8xdf4.execute-api.ap-southeast-2.amazonaws.com/DEV/feedbacks";
    (async () => {
      try {
        const res = await axios.get(url);
        setFeedbackData(res.data.feedbacks);
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
     <div className="container mx-auto mt-8 p-6">
      <h2 className="text-3xl font-semibold mb-4 text-black">Feedbacks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          feedbackData.map((feedback, index) => (
            <div
              key={index}
              className="p-4 rounded-lg shadow-md border bg-slate-100 border-gray-300"
            >
              <div>
                <h4 className="text-xl font-semibold mb-2">{feedback.Name}</h4>
                <p className="text-gray-600 mb-2">{feedback.Email}</p>
                <p className="text-gray-800">{feedback.FeedbackText}</p>
                <p className="text-gray-600 mt-2">Rating: {feedback.Rating}</p>
              </div>
              <div className="flex items-center mt-2">
                <p className="mr-2">Stars: </p>
                {Array.from({ length: feedback.Rating }, (_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.69l2.245 4.565 5.005.73-3.625 3.534.855 5.004L12 16.69l-4.48 2.344.855-5.004L4.75 8.985l5.005-.73L12 2.69z"
                      fillRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
      {/* <div className="">
        <div className="container mx-auto mt-8 p-6 ">
          <h2 className="text-3xl font-semibold mb-4 text-black">Feedbacks</h2>

          <table className="min-w-full border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-black">Email</th>
                <th className="py-2 px-4 border-b text-black">Feedback Text</th>
                <th className="py-2 px-4 border-b text-black">Name</th>
                <th className="py-2 px-4 border-b text-black">Product ID</th>
                <th className="py-2 px-4 border-b text-black">Rating</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                feedbackData.map((feedback, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-500" : ""}
                  >
                    <td className="py-2 px-4 border-b">{feedback.Email}</td>
                    <td className="py-2 px-4 border-b">
                      {feedback.FeedbackText}
                    </td>
                    <td className="py-2 px-4 border-b">{feedback.Name}</td>
                    <td className="py-2 px-4 border-b">{feedback.ProductId}</td>
                    <td className="py-2 px-4 border-b">{feedback.Rating}</td>
                  </tr>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </tbody>
          </table>
        </div>
      </div> */}
    </>
  );
}

export default FeedBacks;
