import React, { useState } from "react";

const AddCar = () => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    licensePlate: "",
    color: "",
    fuelType: "Petrol",
    transmission: "Automatic",
    seats: "",
    dailyPrice: "",
    description: "",
    features: [],
  });

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      features: checked
        ? [...prev.features, value]
        : prev.features.filter((f) => f !== value),
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 6) {
      alert("Maximum 6 images allowed");
      return;
    }

    const previews = [];
    const imgs = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        previews.push(reader.result);
        imgs.push(file);

        if (previews.length === files.length) {
          setImagePreviews((prev) => [...prev, ...previews]);
          setImages((prev) => [...prev, ...imgs]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", formData, images);
    alert("Car added successfully!");
  };

  const featuresList = [
    "Air Conditioning",
    "GPS Navigation",
    "Bluetooth",
    "Sunroof",
    "Leather Seats",
    "Backup Camera",
    "Android Auto / Apple CarPlay",
    "Cruise Control",
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Add New Car
          </h1>
          <p className="text-gray-500 mt-1">
            Fill vehicle details to list it on your fleet
          </p>
        </div>

        <button
          type="submit"
          form="addCarForm"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium shadow transition"
        >
          Publish Car
        </button>
      </div>

      <form id="addCarForm" onSubmit={handleSubmit} className="space-y-10">
        {/* Basic Info */}
        <Section title="Basic Information">
          <Grid>
            <Input label="Make / Brand *" name="make" value={formData.make} onChange={handleChange} required />
            <Input label="Model *" name="model" value={formData.model} onChange={handleChange} required />
            <Input label="Year *" type="number" name="year" value={formData.year} onChange={handleChange} required />
            <Input label="License Plate *" name="licensePlate" value={formData.licensePlate} onChange={handleChange} required />
            <Input label="Color" name="color" value={formData.color} onChange={handleChange} />

            <Select label="Fuel Type" name="fuelType" value={formData.fuelType} onChange={handleChange}>
              <option>Petrol</option>
              <option>Diesel</option>
              <option>Electric</option>
              <option>Hybrid</option>
              <option>CNG</option>
            </Select>
          </Grid>
        </Section>

        {/* Pricing */}
        <Section title="Pricing & Specs">
          <Grid cols="md:grid-cols-3">
            <Input label="Daily Price (₹)" type="number" name="dailyPrice" value={formData.dailyPrice} onChange={handleChange} required />
            <Input label="Seats" type="number" name="seats" value={formData.seats} onChange={handleChange} />
            <Select label="Transmission" name="transmission" value={formData.transmission} onChange={handleChange}>
              <option>Automatic</option>
              <option>Manual</option>
            </Select>
          </Grid>
        </Section>

        {/* Features */}
        <Section title="Key Features">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuresList.map((feature) => (
              <label key={feature} className="flex items-center gap-3 text-gray-700">
                <input
                  type="checkbox"
                  value={feature}
                  checked={formData.features.includes(feature)}
                  onChange={handleFeatureChange}
                  className="w-4 h-4 text-blue-600"
                />
                {feature}
              </label>
            ))}
          </div>
        </Section>

        {/* Description */}
        <Section title="Description">
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Car condition, mileage, notes..."
          />
        </Section>

        {/* Images */}
        <Section title="Upload Images (Max 6)">
          <label className="block cursor-pointer">
            <div className="border-2 border-dashed rounded-xl p-10 text-center text-gray-500 hover:border-blue-500 transition">
              Click to upload images
            </div>
            <input type="file" multiple accept="image/*" onChange={handleImageChange} className="hidden" />
          </label>

          {imagePreviews.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {imagePreviews.map((img, i) => (
                <div key={i} className="relative">
                  <img src={img} className="h-32 w-full object-cover rounded-lg border" />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Mobile Submit */}
        <div className="md:hidden">
          <button className="w-full py-4 bg-blue-600 text-white rounded-lg">
            Publish Car
          </button>
        </div>
      </form>
    </div>
  );
};

/* ---------- Reusable UI ---------- */

const Section = ({ title, children }) => (
  <div className="bg-white border rounded-2xl p-8 shadow-sm">
    <h2 className="text-xl font-bold text-gray-800 mb-6">{title}</h2>
    {children}
  </div>
);

const Grid = ({ children, cols = "md:grid-cols-2 lg:grid-cols-3" }) => (
  <div className={`grid grid-cols-1 ${cols} gap-6`}>{children}</div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
  </div>
);

const Select = ({ label, children, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
    <select
      {...props}
      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    >
      {children}
    </select>
  </div>
);

export default AddCar;
