"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    name: "Michael Kaizer",
    role: "CEO of Basecamp Corp",
  },
  {
    quote:
      "Our organic traffic grew steadily from the first month. The team explains every report in plain language, so we always know what is working and why.",
    name: "Priya Raghunathan",
    role: "Head of Growth at Maze",
  },
  {
    quote:
      "They rebuilt our landing pages and paid campaigns at the same time. Sign-ups went up, and our cost per lead finally started going down.",
    name: "Tomasz Wierzbicki",
    role: "Marketing Director at Afterpay",
  },
  {
    quote:
      "Working with MAC feels like having an in-house team. They answer fast, share ideas before we ask, and never miss a deadline.",
    name: "Lena Okafor",
    role: "Founder of Northwind Studio",
  },
  {
    quote:
      "The new brand and website gave our sales team something they are proud to show. Clients now mention our site in almost every first call.",
    name: "Diego Marchetti",
    role: "COO of Brightline Logistics",
  },
];

function formatNumber(number: number) {
  return number < 10 ? "0" + number : String(number);
}

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  function showPrev() {
    setIndex(index === 0 ? total - 1 : index - 1);
  }

  function showNext() {
    setIndex(index === total - 1 ? 0 : index + 1);
  }

  return (
    <section className={styles.testimonial}>
      <blockquote key={index} className={styles.quote}>
        &ldquo;{current.quote}&rdquo;
      </blockquote>

      <div className={styles.author}>
        <Image className={styles.avatar} src="/assets/stats-avatar-1.png" alt="" width={70} height={70} />
        <p className={styles.name}>{current.name}</p>
        <p className={styles.role}>{current.role}</p>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={showPrev} aria-label="Previous testimonial">
          <Image src="/assets/testimonial-prev-button.svg" alt="" width={88} height={56} />
        </button>
        <p className={styles.counter}>
          <span className={styles.current}>{formatNumber(index + 1)}</span>/{formatNumber(total)}
        </p>
        <button type="button" className={styles.arrow} onClick={showNext} aria-label="Next testimonial">
          <Image src="/assets/testimonial-next-button.svg" alt="" width={88} height={56} />
        </button>
      </div>
    </section>
  );
}
