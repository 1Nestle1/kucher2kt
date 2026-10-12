import Image from "next/image";
import styles from "./FaqItem.module.css";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

export default function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className={styles.item}>
      <button type="button" className={styles.question} aria-expanded={isOpen} onClick={onToggle}>
        {question}
        <Image src={isOpen ? "/assets/faq-minus.svg" : "/assets/faq-plus.svg"} alt="" width={24} height={24} />
      </button>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}
