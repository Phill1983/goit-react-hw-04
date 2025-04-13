import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

function ImageGallery({ images, onImageClick }) {
  if (images.length === 0) return null;

  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
