import Modal from 'react-modal';
import './ImageModal.module.css';

Modal.setAppElement('#root');

function ImageModal({ image, onClose }) {
  const { alt_description, urls, user, likes } = image;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
    >
      <img src={urls.regular} alt={alt_description} className="modal-image" />
      <div className="info">
        <p><strong>Author:</strong> {user.name}</p>
        <p><strong>Likes:</strong> {likes}</p>
        {alt_description && <p><strong>Description:</strong> {alt_description}</p>}
      </div>
    </Modal>
  );
}

export default ImageModal;
