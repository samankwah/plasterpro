import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Video, X } from "lucide-react";

const MeetingRequest = () => {
  const dialogRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    topic: "",
  });

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Function to open modal
  const handleOpenDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // Function to close modal
  const handleCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Meeting Request:", formData);
    handleCloseDialog(); // Close modal after submission
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Request a Meeting
      </h2>
      <p className="text-gray-700 mb-4">
        Fill out the form below to schedule a meeting with Elizabeth Acheampong.
      </p>

      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          handleOpenDialog();
        }}
        className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors duration-200"
      >
        Request a Meeting
      </Link>

      {/* Meeting Request Modal */}
      <dialog
        ref={dialogRef}
        className="p-6 rounded-lg shadow-xl backdrop:bg-black backdrop:bg-opacity-50 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Schedule a Zoom Meeting</h2>
          </div>
          <button
            onClick={handleCloseDialog}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Meeting Topic</label>
            <input
              type="text"
              name="topic"
              required
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
              value={formData.topic}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <div className="relative">
                <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full pl-8 p-2 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.date}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Time</label>
              <div className="relative">
                <Clock className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <select
                  name="time"
                  required
                  className="w-full pl-8 p-2 border rounded-md"
                  onChange={handleInputChange}
                  value={formData.time}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-4">
            <button
              type="button"
              className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
              onClick={handleCloseDialog}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-colors"
            >
              Schedule Meeting
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MeetingRequest;
