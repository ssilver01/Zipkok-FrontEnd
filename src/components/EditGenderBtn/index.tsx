import React from 'react';

import styles from './EditGenderBtn.module.css';

interface EditGenderBtnProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const EditGenderBtn = ({ text, isSelected, onClick }: EditGenderBtnProps) => {
  const buttonStyle = isSelected ? styles.selected : styles.notSelected;

  return (
    <button
      className={`${styles.EditGenderBtn} ${buttonStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default EditGenderBtn;
