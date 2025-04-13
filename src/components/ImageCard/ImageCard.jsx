import styles from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  const { alt_description, urls } = image;

  return (
    <div className={styles.card} onClick={() => onClick(image)}>
      <img
        src={urls.small}
        alt={alt_description}
        className={styles.image}
      />
    </div>
  );
}

export default ImageCard;
