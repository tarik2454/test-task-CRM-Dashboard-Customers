import user1xwebp from '../../assets/img/user/user@1x.webp';
import user2xwebp from '../../assets/img/user/user@2x.webp';
import user1xjpeg from '../../assets/img/user/user@1x.jpeg';
import user2xjpeg from '../../assets/img/user/user@2x.jpeg';

import styles from './User.module.scss';

export default function User() {
  return (
    <div className={styles.user}>
      <picture>
        <source
          srcSet={`${user1xwebp} 1x, ${user2xwebp} 2x,`}
          type="image/webp"
        />
        <source
          srcSet={`${user1xjpeg} 1x, ${user2xjpeg} 2x`}
          type="image/jpeg"
        />
        <img src={user1xjpeg} alt="User" className="team__img" width="42" />
      </picture>

      <div className={styles.user__info}>
        <p className={styles.user__name}>Evano</p>
        <span className={styles.user__position}>Project Manager</span>
      </div>
    </div>
  );
}
