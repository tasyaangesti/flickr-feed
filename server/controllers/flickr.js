const axios = require("axios");
const { promisify } = require("util");
const redis = require("../config/redis");

const getAsync = promisify(redis.get).bind(redis);
const setAsync = promisify(redis.set).bind(redis);

const FLICKR_API_URL =
  "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1";

class Flickr {
  static async getData(req, res) {
    const cacheKey = "default";
    try {
      const cachedData = await getAsync(cacheKey);
      if (cachedData) {
        console.log("cache hit for getData");
        return res.status(200).json(JSON.parse(cachedData));
      }

      const response = await axios.get(FLICKR_API_URL);
      await setAsync(cacheKey, JSON.stringify(response.data), "EX", 3600);
      console.log("cache miss for getData", response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error("error:", error.message);
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async searchData(req, res) {
    const { tags } = req.query;
    const cacheKey = tags;
    if (!tags) {
      return res.status(404).json({ message: "data not found" });
    }

    try {
      const cachedData = await getAsync(cacheKey);
      if (cachedData) {
        console.log("cache hit for searchData");
        return res.status(200).json(JSON.parse(cachedData));
      }

      const searchUrl = `${FLICKR_API_URL}&tags=${tags}`;
      const response = await axios.get(searchUrl);
      await setAsync(cacheKey, JSON.stringify(response.data), "EX", 3600);
      console.log("cache miss for searchData", response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error("error:", error.message);
      if (error.code === 404) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "internal server error" });
      }
    }
  }
}

module.exports = Flickr;
