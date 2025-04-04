import { useState, useEffect } from "react";
import axios from "axios";

const useLicenses = () => {
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const response = await axios.get("https://api.fossology.org/licenses");
        setLicenses(response.data);
      } catch (error) {
        console.error("Error fetching licenses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLicenses();
  }, []);

  return { licenses, loading };
};

export default useLicenses;
