import React from 'react';

import styles from './EditFilterBtn.module.css';

interface EditFilterBtnProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const EditFilterBtn = ({ text, isSelected, onClick }: EditFilterBtnProps) => {
  const buttonStyle = isSelected ? styles.selected : styles.notSelected;

  return (
    <button
      className={`${styles.EditFilterBtn} ${buttonStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default EditFilterBtn;
