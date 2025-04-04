import React from "react";

const GitHubLogin = () => {
  const handleLogin = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=YOUR_CLIENT_ID&scope=user`;
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
    >
      Login with GitHub
    </button>
  );
};

export default GitHubLogin;
