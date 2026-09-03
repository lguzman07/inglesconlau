import styles from './BunnyVideoEmbed.module.css';

export default function BunnyVideoEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={src}
        title={title}
        loading="lazy"
        className={styles.iframe}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
}
