import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root'); 

function ImageModal({ image, onClose }) {
  const { urls, alt_description, user, likes } = image;
  

  return (
   <Modal
  isOpen={true}
  onRequestClose={onClose}
  className="modal"
  overlayClassName="overlay"
  shouldCloseOnOverlayClick={true}
  shouldCloseOnEsc={true}
    >
      
      <div className={styles['modal-content']}>
        <div className={styles['image-wrapper']}>
        
        <img src={urls.regular} alt={alt_description} className={styles['modal-image']} />
        <button className={styles['close-btn']} onClick={onClose} aria-label="Close modal">
  ×
          </button>
          </div>
    <div className={styles['info']}>
      <p><strong>Author:</strong> {user.name}</p>
      <p><strong>Likes:</strong> {likes}</p>
      {alt_description && <p><strong>Description:</strong> {alt_description}</p>}
      
    </div>
  </div>
</Modal>
  );
}

export default ImageModal;