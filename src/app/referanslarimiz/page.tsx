"use client";

import { useState, useMemo } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ReferencesHero from "@/components/sections/references/ReferencesHero";
import ProjectFilter from "@/components/sections/references/ProjectFilter";
import ProjectGrid from "@/components/sections/references/ProjectGrid";
import { projects } from "@/data/projects";

export default function ReferanslarimizPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tümü") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <ReferencesHero />
      <Section>
        <Container>
          <ProjectFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <ProjectGrid projects={filteredProjects} />
        </Container>
      </Section>
    </>
  );
}
