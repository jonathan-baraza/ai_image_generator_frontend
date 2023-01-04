import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import swal from "sweetalert";
import axios from "axios";
import Loader from "./Loader";
import Image from "next/image";

function ImageGenerator() {
  const [imageUrl, setImageUrl] = useState("");

  const [description, setDescription] = useState("");
  const [imageSize, setSize] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Generating please wait..."
  );
  const [generateSuccess, setGenerateSuccess] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);

  const BACKEND_URL = "https://ai-image-generator-k6yf.onrender.com/";

  const handleGenerateImage = async (e: any) => {
    e.preventDefault();
    if (!description)
      return swal(
        "Description required",
        "Kindly enter the image description",
        "warning"
      );
    if (!imageSize)
      return swal(
        "Image size required",
        "Kindly select the prefered image size",
        "warning"
      );

    try {
      setLoading(true);
      const response = await axios({
        method: "post",
        url: BACKEND_URL + "openai/generate-image",
        data: { description, imageSize },
      });

      const imageResponse = response.data?.data;
      console.log("response");
      console.log(imageResponse);
      setImageUrl(imageResponse);
      setLoadingMessage("Image loading...");
      setGenerateSuccess(true);
      setImgLoading(true);
      setLoading(false);
      setTimeout(() => {
        setImgLoading(false);
      }, 6000);
    } catch (error) {
      setLoading(false);
      swal("Error", "Image could not be generated", "error");
      resetPage();
    }
  };

  const resetPage = () => {
    clearInputs();
    setImgLoading(false);
    setGenerateSuccess(false);
    setLoading(false);
    setImageUrl("");
  };

  const clearInputs = () => {
    setDescription("");
    setSize("");
  };

  return (
    <>
      <div
        className="row w-100 m-0  d-flex align-items-center"
        style={{ minHeight: "82vh", backgroundColor: "#f1f3f4" }}
      >
        {!loading ? (
          <div className="col-sm-6 mx-auto  ">
            {!generateSuccess ? (
              <form className="w-100 rounded shadow p-4 bg-white">
                <div className="form-group ">
                  <label className="mt-2 mb-2">Image Description</label>
                  <textarea
                    name="description"
                    className="form-control"
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group mt-3">
                  <label className="form-label mt-2 mb-2" htmlFor="sizeSelect">
                    Image size
                  </label>
                  <select
                    className="form-select cursorPointer"
                    id="sizeSelect"
                    onChange={(e) => {
                      setSize(e.target.value);
                    }}
                  >
                    <option className="cursorPointer" value="" selected>
                      Choose...
                    </option>
                    <option className="cursorPointer" value="small">
                      Small
                    </option>
                    <option className="cursorPointer" value="medium">
                      Medium
                    </option>
                    <option className="cursorPointer" value="large">
                      Large
                    </option>
                  </select>
                </div>
                <button
                  className="btn btn-success form-control mt-4 d-flex align-items-center justify-content-center"
                  onClick={handleGenerateImage}
                >
                  Generate Image
                  <AiFillSetting className="ms-2" />
                </button>
              </form>
            ) : (
              <>
                <div className="w-100 d-flex align-items-center flex-column justify-content-center position-relative">
                  <div className="w-100 position-relative d-flex justify-content-center">
                    <img
                      src={imageUrl}
                      className="w-auto mx-auto"
                      alt={"Generated pic"}
                      style={{
                        maxHeight: "60vh",
                      }}
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-4 mb-2"
                    onClick={resetPage}
                  >
                    Generate new image{" "}
                  </button>
                  {/* {imgLoading && <Loader message={loadingMessage} />} */}
                </div>
              </>
            )}
          </div>
        ) : (
          <Loader message={loadingMessage} />
        )}
        {imgLoading && <Loader message={"Image Loading..."} />}
      </div>
    </>
  );
}

export default ImageGenerator;
