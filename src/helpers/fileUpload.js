export const fileUpload = async (file) => {
  if (!file) throw new Error("No tenemos ningun archivo");
  const cloudUrl = "https://api.cloudinary.com/v1_1/dfrkozxrv/upload";
  const formData = new FormData();
  formData.append("upload_preset", "journalApp");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, { method: "POST", body: formData });
    if (!resp.ok) throw new Error("No se pudo recibir ningun mensaje");
    const cloudResp = await resp.json();
    return cloudResp.secure_url;
  } catch (error) {
    throw new Error(error.message);
  }
};
