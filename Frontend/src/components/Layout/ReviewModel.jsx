import React, { useState,useRef } from "react";

const ReviewModal = ({ open, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [text, setText] = useState("");
  const fileRef = useRef();
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    
  };
  
  if (!open) return null;
  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-[95%] sm:w-[500px] bg-[#1f1f1f] text-white rounded-2xl shadow-xl p-6">
        
        {/* Title */}
        <p className="text-center text-sm text-gray-400 mb-3">
     SB Leather Karachi
        </p>

        {/* User */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center font-bold">
            M
          </div>
          <div>
            <p className="font-semibold">Muhammad Haseeb Sheikh</p>
            <p className="text-xs text-gray-400">
              Posting publicly across Google
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
              className={`w-8 h-8 cursor-pointer transition ${
                (hover || rating) >= star
                  ? "text-yellow-400"
                  : "text-gray-500"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.17L12 18.896l-7.336 3.872 1.402-8.17L.132 9.211l8.2-1.193z" />
            </svg>
          ))}
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Share details of your own experience at this place"
          className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-sm focus:outline-none focus:border-gray-400 mb-5"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Upload Button */}
         <div>
      {/* Hidden Input */}
      <input
        type="file"
        ref={fileRef}
        multiple
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Button */}
      <button
        onClick={() => fileRef.current.click()}
        className="w-full bg-[#2a2f3a] hover:bg-[#353b48] text-sm py-3 rounded-full flex items-center justify-center gap-2 mb-4"
      >
        📷 Add photos and videos
      </button>

      {/* Preview */}
      <div className="flex gap-3 flex-wrap">
        {files.map((file, index) => (
          <div key={index} className="w-20 h-20 relative">
            
            {file.type.startsWith("image") ? (
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-full h-full object-cover rounded-md"
              />
            ) : (
              <video
                src={URL.createObjectURL(file)}
                className="w-full h-full object-cover rounded-md"
              />
            )}

          </div>
        ))}
      </div>
    </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-blue-400 border border-gray-600 rounded-md"
          >
            Cancel
          </button>

          <button
            className={`px-4 py-2 text-sm rounded-md ${
              rating > 0
                ? "bg-gray-300 text-black"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
            disabled={rating === 0}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;