import React from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import GalleryImages from "./GalleryImages";

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 922: 3 }}>
      <Masonry gutter="1rem">
        {GalleryImages.map((item, index) => (
          <img
            className="masonry__img"
            src={item}
            key={index}
            alt=""
            style={{ width: "100%", display: "block", borderRadius: "10px" }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};
export default MasonryImagesGallery;
