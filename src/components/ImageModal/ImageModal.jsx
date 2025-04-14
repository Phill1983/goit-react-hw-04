import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ image, onClose }) {
  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={true}
      className="modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      closeTimeoutMS={300}
      onRequestClose={onClose}
    >
      <div className={styles['modal-content']}>
        <div className={styles['image-wrapper']}>
          <img
            src={urls.regular}
            alt={alt_description}
            className={styles['modal-image']}
          />
          <button
            className={styles['close-btn']}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className={styles.info}>
          <p className={styles.author}>📸 {user.name}</p>
          <p className={styles.likes}>❤️ {likes} likes</p>
          {alt_description && (
            <p className={styles.desc}>“{alt_description}”</p>
          )}
          <p className={styles.credit}>
            Photo by{' '}
            <a href={user.links.html} target="_blank" rel="noreferrer">
              {user.name}
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com" target="_blank" rel="noreferrer">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;