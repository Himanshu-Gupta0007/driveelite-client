import React, { useState } from 'react';

const AddCar = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    licensePlate: '',
    color: '',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    seats: '',
    dailyPrice: '',
    description: '',
    features: [], // e.g. AC, GPS, etc.
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
      alert('Maximum 6 images allowed');
      return;
    }

    const newPreviews = [];
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        newImages.push(file);
        // Update state after all files processed (simple way)
        if (newPreviews.length === files.length) {
          setImagePreviews((prev) => [...prev, ...newPreviews]);
          setImages((prev) => [...prev, ...newImages]);
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
    // Here you would send formData + images to backend (FormData API)
    console.log('Submitting:', formData, images);
    alert('Car added successfully! (Check console for data)');
    // Reset form if needed
  };

  const featuresList = [
    'Air Conditioning',
    'GPS Navigation',
    'Bluetooth',
    'Sunroof',
    'Leather Seats',
    'Backup Camera',
    'Android Auto / Apple CarPlay',
    'Cruise Control',
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Add New Car to Fleet
          </h1>
          <p className="text-gray-400 mt-1">Fill in the details to list your vehicle • Delhi, India</p>
        </div>
        <button
          type="submit"
          form="addCarForm"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-medium shadow-lg shadow-purple-900/30 transition-all duration-300"
        >
          Publish Car
        </button>
      </div>

      <form id="addCarForm" onSubmit={handleSubmit} className="space-y-10">
        {/* Basic Info */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Make / Brand *</label>
              <input
                type="text"
                name="make"
                value={formData.make}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="e.g. BMW, Toyota, Mercedes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Model *</label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="e.g. X5, Fortuner, C-Class"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Year *</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                min="2000"
                max={new Date().getFullYear() + 1}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="e.g. 2023"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">License Plate *</label>
              <input
                type="text"
                name="licensePlate"
                value={formData.licensePlate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="e.g. DL 1C AA 1234"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Color</label>
              <input
                type="text"
                name="color"
                value={formData.color}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="e.g. Black, Pearl White"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Fuel Type</label>
              <select
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                <option>Petrol</option>
                <option>Diesel</option>
                <option>Electric</option>
                <option>Hybrid</option>
                <option>CNG</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pricing & Specs */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-pink-400">Pricing & Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Daily Rental Price (₹) *</label>
              <input
                type="number"
                name="dailyPrice"
                value={formData.dailyPrice}
                onChange={handleChange}
                required
                min="500"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="e.g. 4500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Number of Seats</label>
              <input
                type="number"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                min="2"
                max="8"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                placeholder="e.g. 5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Transmission</label>
              <select
                name="transmission"
                value={formData.transmission}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              >
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-cyan-400">Key Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuresList.map((feature) => (
              <label key={feature} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  value={feature}
                  checked={formData.features.includes(feature)}
                  onChange={handleFeatureChange}
                  className="w-5 h-5 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
                />
                <span className="text-gray-300">{feature}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-purple-400">Description</h2>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            placeholder="Describe the car: condition, mileage, special notes, etc..."
          />
        </div>

        {/* Images Upload */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 text-pink-400">Upload Images (Max 6)</h2>
          
          <label className="block">
            <div className="border-2 border-dashed border-gray-700 rounded-xl p-10 text-center cursor-pointer hover:border-purple-500 transition">
              <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="mt-4 text-gray-400">Click to upload or drag & drop</p>
              <p className="text-sm text-gray-500">PNG, JPG, WEBP (max 5MB per image)</p>
            </div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          {/* Preview */}
          {imagePreviews.length > 0 && (
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg border border-gray-700 shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button (mobile view) */}
        <div className="md:hidden">
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-medium shadow-lg shadow-purple-900/30 transition-all duration-300"
          >
            Publish Car to Fleet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;