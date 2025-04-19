'use client';

import { useState } from 'react';
import Button from './_components/Button';
import Display from './_components/Display';
import styles from './page.module.css';

const buttons = [
  'C', '/', '*', 'del',
  '7', '8', '9', '-',
  '4', '5', '6', '+',
  '1', '2', '3', '=',
  '0', '00', '.'
];

export default function Home() {
  const [value, setValue] = useState("");

  function handleOnClick(v: string) {
    if (v === 'C') {
      setValue("");
      return;
    } 
    if (v === 'del') {
      setValue(value.slice(0, -1));
      return;
    } 
    if (v === '=') {
      try {
        setValue(eval(value).toString());
      } catch {
        setValue('Error');
      }
      return;
    }

    setValue((prev) => `${prev}${v}`);
  }

  return (
    <div className="flex items-center justify-center bg-[#404040] min-h-screen p-4">
      <div className={`${styles.calc} w-full max-w-[600px] h-auto p-6 sm:p-10`}>

        <Display value={value || '0'} />

        <div className='mt-10 grid grid-cols-4 gap-4'>
          {buttons.map((b) => (
            <Button key={b} char={b} onClick={() => handleOnClick(b)} />
          ))}
        </div>
      </div>
    </div>
  );
}