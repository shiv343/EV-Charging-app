import axios from "axios";
BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "AIzaSyB7kMr1KI8r0U00pKKTrGY4i3NBi0yzxkk";
const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": API_KEY,
    "X-Goog-FieldMask": [
      "places.displayName",
      "places.formattedAddress",
      "places.evChargeOptions",
      "places.photos",
      "places.shortFormattedAddress",
    ],
  },
};
const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  NewNearByPlace
};
