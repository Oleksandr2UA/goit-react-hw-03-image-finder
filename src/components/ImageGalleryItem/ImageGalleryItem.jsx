export const ImageGalleryItem = ({ url, tags, bigUrl }) => {
  return (
    <li className="gallery-item">
      <img src={url} alt={tags} />
    </li>
  );
};
