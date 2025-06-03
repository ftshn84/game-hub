import noImage from "@/assets/no-image-placeholder.webp"; // Import a placeholder image for cases where the URL is empty or undefined
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage; // Return a placeholder image if the URL is empty or undefined
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;
