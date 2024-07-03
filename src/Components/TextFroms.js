import React, { useState } from 'react';

export default function TextForms(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{props.heading}</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="3"
          placeholder="Enter your text here"
        ></textarea>
      </div>
      <div className="space-x-2">
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Your Text Summary</h2>
        <p>Number of characters: {text.length}</p>
        <p>Number of words: {text.split(/\s+/).filter((word) => word).length}</p>
        <p>Estimated reading time: {(text.split(/\s+/).filter((word) => word).length * 0.08).toFixed(2)} seconds</p>
      </div>
    </div>
  );
}
