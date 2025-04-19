import styles from './Display.module.css';

export default function Display({ value }: { value: string }) {
  return (
    <div className={`${styles.display}`}>
      {value}
    </div>
  );
}
