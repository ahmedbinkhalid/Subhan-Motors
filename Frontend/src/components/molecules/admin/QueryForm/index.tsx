import React, { useState } from "react";
import TextInput from "../../../atoms/admin/TextInput";
import NumberInput from "../../../atoms/admin/NumberInput";
import TextAreaInput from "../../../atoms/admin/TextAreaInput";

export const QueryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    minPrice: "",
    maxPrice: "",
    phoneNumber: "",
    make: "",
    model: "",
    enginecapacity: "",
    transmission: "",
    color: "",
    fromYear: "",
    toYear: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/postQuery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert("Error: " + (data.error || "Unable to submit query."));
      }
    } catch (error) {
      console.error("Error while submitting form:", error);
      alert("Error while submitting form. Please try again later.");
    }
  };

  return (
    <React.Fragment>
      <h2 className="md:text-3xl text-2xl font-semibold text-center mb-8 mt-4 text-charcoal-gray">
        Submit a Query
      </h2>
      <div className="max-w-3xl mx-auto px-4 py-8 bg-slate-50 rounded-md shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <TextAreaInput
              label="Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="Minimum Price"
              name="minPrice"
              value={formData.minPrice}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="Maximum Price"
              name="maxPrice"
              value={formData.maxPrice}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Car Make"
              name="make"
              value={formData.make}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Car Model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Engine Capacity"
              name="enginecapacity"
              value={formData.enginecapacity}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Transmission"
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              required
            />
            <TextInput
              label="Color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="From Year"
              name="fromYear"
              value={formData.fromYear}
              onChange={handleChange}
              required
            />
            <NumberInput
              label="To Year"
              name="toYear"
              value={formData.toYear}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit Query
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default QueryForm;
