"use client";

import { useState } from "react";
import Link from "next/link";
import FaqItem from "./FaqItem";
import styles from "./Faq.module.css";

const questions = [
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights.",
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer:
      "We improve your search rankings with technical SEO, helpful content and quality backlinks. Paid search and social campaigns then bring the right visitors to your site while organic traffic grows.",
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer:
      "Paid campaigns can bring traffic within days. SEO usually shows clear progress after three to six months, depending on your industry, competition and the current state of your website.",
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "We agree on goals with you first, such as leads, sales or sign-ups. Then we track traffic, conversions and cost per result, and send you a clear monthly report with next steps.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? -1 : index);
  }

  return (
    <section id="resources" className={styles.faq}>
      <div>
        <h2 className={styles.title}>Digital Marketing FAQs</h2>
        <p className={styles.text}>
          As a leading digital marketing agency, we are dedicated to providing comprehensive
          educational resources and answering frequently asked questions to help our clients.
        </p>
        <Link href="#resources" className={styles.button}>
          More Questions
        </Link>
        <Link href="#contact" className={styles.link}>
          Contact Us
        </Link>
      </div>

      <div className={styles.list}>
        {questions.map((item, index) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
}
