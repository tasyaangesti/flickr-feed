import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Search } from "../components/search";
import axios from "axios";

export function Home() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async (tags = "") => {
    try {
      const response = await axios.get(
        `http://localhost:3000/view-photos${tags ? `/search?tags=${tags}` : ""}`
      );
      setPhotos(response.data.items);
    } catch (error) {
      console.error("Error fetching photos", error);
    }
  };

  return (
    <div>
      <Search onSearch={fetchPhotos} />
      <Card photos={photos} />
    </div>
  );
}
