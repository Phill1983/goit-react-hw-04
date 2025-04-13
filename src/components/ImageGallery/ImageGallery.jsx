import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';


const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image, index) => {
        const isLast = index === images.length - 1;

        return (
          <li
            key={image.id}
            className={`${styles.item} gallery-item`}
            ref={isLast ? scrollRef => {
              if (scrollRef) scrollRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } : null}
          >
            <ImageCard image={image} onClick={onImageClick} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
