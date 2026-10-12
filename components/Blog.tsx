import Link from "next/link";
import BlogCard from "./BlogCard";
import styles from "./Blog.module.css";

const posts = [
  {
    title: "How a Digital Marketing Agency Can Boost Your Business",
    text: "We are the top digital marketing agency for branding corp. We offer a full range of services to grow your traffic and sales.",
    color: "#3fa1e3",
  },
  {
    title: "The Latest Trends and Strategies with a Digital Marketing Agency",
    text: "Working with this digital marketing agency has been a true partnership. They have taken the time to understand our goals.",
    color: "#e95a35",
  },
  {
    title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    text: "What sets this digital marketing agency apart is their commitment to transparency and clear reporting on every campaign.",
    color: "#6e33f2",
  },
];

export default function Blog() {
  return (
    <section id="service" className={styles.blog}>
      <h2 className={styles.title}>
        Digital Marketing &amp; SEO Services That Grow Traffic &amp; Increase Revenue
      </h2>
      <p className={styles.text}>
        We are the top digital marketing agency for branding corp. We offer a full range of
        services to help clients improve their search engine rankings and drive more traffic to
        their websites.
      </p>
      <Link href="#service" className={styles.button}>
        See more
      </Link>

      <div className={styles.cards}>
        {posts.map((post, index) => (
          <BlogCard
            key={post.title}
            title={post.title}
            text={post.text}
            color={post.color}
            filled={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
