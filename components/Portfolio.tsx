"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import styles from "./Portfolio.module.css";

const projects = [
  { title: "Ai Wave - Ai Chatbot Mobile App", client: "Ai Corporation. 2023", category: "UI/UX Design" },
  { title: "App Lancer - Freelance Marketplace App", client: "Lancer Corporation. 2023", category: "UI/UX Design" },
  { title: "Maze - Product Launch Campaign", client: "Maze. 2023", category: "Digital Marketing" },
  { title: "Basecamp - Brand Refresh", client: "Basecamp. 2022", category: "Branding" },
];

const filters = ["All Work", "UI/UX Design", "Digital Marketing", "Branding"];

function getProjects(filter: string) {
  if (filter === "All Work") {
    return projects;
  }
  return projects.filter((project) => project.category === filter);
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  return (
    <section id="case-study" className={styles.portfolio}>
      <h2 className={styles.title}>
        Real-world examples of how we have helped companies achieve their marketing objectives.
      </h2>

      <div className={styles.filters}>
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={filter === activeFilter ? styles.filterActive : styles.filter}
            aria-pressed={filter === activeFilter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter} [{getProjects(filter).length}]
          </button>
        ))}
      </div>

      <div className={styles.slider}>
        <div className={styles.featured}>
          <Image src="/assets/portfolio-featured.png" alt="" width={482} height={482} />
          <Link href="#case-study" className={styles.details}>
            See Details
          </Link>
        </div>

        {getProjects(activeFilter).map((project) => (
          <ProjectCard key={project.title} title={project.title} client={project.client} />
        ))}
      </div>
    </section>
  );
}
