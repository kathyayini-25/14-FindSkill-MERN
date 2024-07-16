import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "findSkill");

  try {
    const cloudinaryUploadEndpoint = 'https://api.cloudinary.com/v1_1/dsv9l62de/image/upload'; // Replace with your actual Cloudinary cloud name
    const res = await axios.post(cloudinaryUploadEndpoint, data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
//dsv9l62de