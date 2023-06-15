import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTour } from "../redux/actions/tour.tsx";
import { AnyAction } from "redux";

const CreateTour = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File>();
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [distance, setDistance] = useState("");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [featured, setFeatured] = useState("");
  const [price, setPrice] = useState("");

  const handleImageChange = (e: any) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    if (files.length > 0) {
      const file: File = files[0]; // khai báo kiểu dữ liệu của biến file là File
      setImage(file);
    } else {
      setImage(undefined);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title || "");
    formData.append("file", image || "");
    formData.append("city", city || "");
    formData.append("description", description || "");
    formData.append("address", address || "");
    formData.append("distance", distance || "");
    formData.append("maxGroupSize", maxGroupSize || "");
    formData.append("featured", featured || "");
    formData.append("price", price || "");

    dispatch(createTour(formData) as unknown as AnyAction);
  };
  return (
    <div className="container my-5 d-flex w-50 flex-column gap-4">
      <form className="w-100 d-flex flex-column gap-3">
        <div className="form-group ">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            id="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group ">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            id="City"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            id="Price"
            placeholder="99k "
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            id="Address"
            placeholder="Apartment, studio, or floor"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Distance</label>
          <input
            type="text"
            className="form-control"
            id="Distance"
            placeholder="127 km"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Distance</label>
          <input
            type="number"
            className="form-control"
            id="MaxGroupSize"
            placeholder="3"
            value={maxGroupSize}
            onChange={(e) => setMaxGroupSize(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Featured</label>
          <input
            type="number"
            className="form-control"
            id="Featured"
            placeholder="Relax"
            value={featured}
            onChange={(e) => setFeatured(e.target.value)}
          />
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Description here"
            id="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Comments</label>
        </div>

        <div className="form-group">
          <label
            style={{ width: "fit-content", marginTop: "12px" }}
            htmlFor="file-input"
            className="hover-8 cursor-pointer ms-3 d-flex align-items-center justify-content-center px-3 py-1 border border-r-8 shadow-sm fz-12 fw-600 bg-white "
          >
            <span>Upload a file</span>

            <input
              type="file"
              name="avatar"
              id="file-input"
              accept=".jpg,.jpeg,.png"
              onChange={handleImageChange}
              className="opacity-0"
              style={{ width: "0px" }}
            />
          </label>

          {image ? (
            <img
              className="mt-4"
              src={URL.createObjectURL(image)}
              alt=""
              width={200}
            />
          ) : (
            ""
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary border-none outline-none"
          style={{ backgroundColor: "#FAA935", border: "none" }}
          onClick={handleSubmit}
        >
          Create Tour
        </button>
      </form>
    </div>
  );
};

export default CreateTour;
