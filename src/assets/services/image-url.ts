const getCroppedImageUrl = (url: string) => {
  if (!url.includes("media/")) return "/no-image-placeholder.webp"; // Prevent cropping placeholder
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
