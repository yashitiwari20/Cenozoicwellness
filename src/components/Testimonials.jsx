import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "I've been using Cenozoic products for months and I feel amazing! Highly recommend.",
      author: "Sarah M.",
    },
    {
      id: 2,
      quote:
        "The consultation was very helpful. I received personalized advice that made a real difference.",
      author: "John D.",
    },
    {
      id: 3,
      quote:"I love the triphala churna. It has helped my digestion so much!",
      author: "Priya S.",
    },
    {
      id: 4,
      quote:"The ashwagandha capsules have really helped me manage stress. I feel much calmer.",
      author: "Raj K.",
    },
    // Add more testimonials
  ];

  return (
    <div className="space-y-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="bg-white rounded-lg shadow-md p-6"
        >
          <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          <p className="mt-2 font-semibold">- {testimonial.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;