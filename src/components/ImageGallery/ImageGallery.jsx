import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(({ id, previewURL, tags, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          url={previewURL}
          tags={tags}
          bigUrl={webformatURL}
        />
      ))}
    </ul>
  );
};
