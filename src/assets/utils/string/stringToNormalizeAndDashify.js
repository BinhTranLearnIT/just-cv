import React from "react";

export default function stringToNormalizeAndDashify(str) {
  if (str) {
    return str
      .normalize("NFD") // Normalize accents
      .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
      .toLowerCase() // Lowercase
      .trim() // Remove leading/trailing spaces
      .replace(/\s+/g, "-") // Replace spaces with dashes
      .replace(/[^\w\-]+/g, "") // Remove non-word characters
      .replace(/\-\-+/g, "-"); // Replace multiple dashes with single
  }
}
