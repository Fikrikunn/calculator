import styles from './Button.module.css';

export default function Button({ char, onClick }: { char: string; onClick: () => void }) {
  const isOperator = isNaN(Number(char)) && char !== '.' && char !== '00';

  const textColor = isOperator ? 'text-[#00ffe0]' : 'text-white';

  return (
    <div
      onClick={onClick}
      className={`
        ${styles.button}
        flex items-center justify-center text-2xl font-bold size-[80px] sm:size-[100px]
        cursor-pointer select-none ${textColor}
      `}
    >
      {char}
    </div>
  );
}
