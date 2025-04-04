import { useState } from "react";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
    } else {
      setFile(selectedFile);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file before uploading");
      return;
    }
    console.log("Uploading:", file);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="file" onChange={handleFileChange} />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
