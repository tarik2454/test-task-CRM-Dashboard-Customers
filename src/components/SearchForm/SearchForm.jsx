import spriteSvg from '../../assets/sprite.svg';

import styles from './SearchForm.module.scss';

export default function SearchForm() {
  return (
    <form className={styles.form}>
      <button className={styles.form__button} type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" alt="Search">
          <use href={spriteSvg + '#search'} />
        </svg>
      </button>
      <input
        className={styles.form__input}
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search"
      />
    </form>
  );
}
