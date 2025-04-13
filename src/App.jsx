import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Запит до Unsplash API
  useEffect(() => {
    if (searchQuery === '') return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}&client_id=${ACCESS_KEY}&per_page=12`
        );

        if (!response.ok) {
            const errorText = await response.text(); // ← прочитає відповідь з сервера
  console.error('Server response:', errorText); // ← покаже у консолі деталі
  throw new Error(`Failed to fetch images (status ${response.status})`);
        }

        const data = await response.json();

        if (data.results.length === 0) {
          toast.error('No images found');
        }

        setImages(prev =>
          page === 1 ? data.results : [...prev, ...data.results]
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
