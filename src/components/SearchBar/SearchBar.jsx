import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    if (e) e.preventDefault(); // щоб працювало і по кнопці, і по Enter
    const trimmed = query.trim();
    if (!trimmed) {
      toast.error('Please enter a search term');
      return;
    }
    onSubmit(trimmed);
    setQuery('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
      <span className={styles.icon} onClick={handleSubmit} title="Search">
  <FontAwesomeIcon icon={faMagnifyingGlass} />
</span>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
            className={styles.input}
          />
          
        </div>
      </form>
    </header>
  );
}

export default SearchBar;

