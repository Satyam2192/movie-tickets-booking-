import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch(
          "https://dalle-arbb.onrender.com/api/v1/dalle",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: form.prompt,
            }),
          }
        );

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch(
          "https://dalle-arbb.onrender.com/api/v1/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...form }),
          }
        );

        await response.json();
        alert("Success");
        navigate("/");
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please generate an image with proper details");
    }

    
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="font-extrabold mt-8 text-[#222328] text-[32px] md:text-5xl mx-auto ">
          Create
        </h1>
        <p className="mt-4 text-[#666e75] text-[18px] md:text-2xl max-w-[600px] md:max-w-[900px] mx-auto">
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>

      <form className="mt-20 max-w-7xl mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
        <div className="truncate flex flex-col md:flex-row mt-14 mx-auto w-full md:w-auto">
          <div className="mt-7 relative bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full md:w-64 p-3 md:h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain "
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
          <div className="flex flex-col md:ml-11 mt-4 md:mt-0 md:flex-row gap-2 ">
            <img
              className="mx-auto md:mx-0 w-full md:w-80 h-80 rounded-lg ..."
              src="https://source.unsplash.com/1920x1920/?future"
              alt="image"
            />
            <img
              className="mx-auto md:mx-0 w-full md:w-80 h-80 rounded-lg ..."
              src="https://source.unsplash.com/1920x1920/?aliens"
              alt="image"
            />
            <img
              className="mx-auto md:mx-0 w-full md:w-80 h-80 rounded-lg ..."
              src="https://source.unsplash.com/1920x1920/?Ai-painting"
              alt="image"
            />
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={generateImage}
            disabled={generatingImg}
          >
            Generate Image
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-[#4caf50] hover:bg-green-600 text-w font-semibold py-2 px-4 border border-green-600 rounded shadow"
            disabled={loading}hite
          >
            {loading ? <Loader /> : "Share with the Community"}
          </button>
          
        </div>
        <div>
        <iframe src="https://helloenjoy.itch.io/hellorun" width="100%" height="800px"></iframe>
      </div>
        
      </form>
    </section>
  );
};

export default CreatePost;
