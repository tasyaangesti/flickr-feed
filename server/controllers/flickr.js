const axios = require("axios");
const FLICKR_API_URL =
  "https://api.flickr.com/services/feeds/photos_public.gne";

class Flickr {
  static async getData(req, res) {
    try {
      const response = await axios.get(FLICKR_API_URL);
      console.log(response.data, ">> response");
      res.status(200).json(response.data);
    } catch (error) {
      console.error("error:", error);
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async searchData(req, res) {
    try {
      const { tags } = req.query;
      console.log(tags, ">> search");

      if (!tags) {
        throw { code: 404, message: "data not found" };
      }

      const search = await axios.get(`${FLICKR_API_URL}?tags=${tags}`);
      res.status(200).json(search.data);
    } catch (error) {
      console.error("error:", error);
      if (error.code === 404) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "internal server error" });
      }
    }
  }
}

module.exports = Flickr;
