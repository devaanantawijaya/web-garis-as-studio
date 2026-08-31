'use client';

import { ConsultationSection } from "@/components/ConsultationSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProyekPilihan } from "@/components/ProyekPilihan";
import { PROJECTS } from "@/lib/projects";
import { PageView, Project } from "@/types/type";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToPortfolio = () => {
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="flex-1">
      {/* 1. Hero Section: 5 Selected Projects Carousel */}
      <HeroCarousel
        projects={PROJECTS}
      />

      {/* 2. Proyek Pilihan: 9 Selected Projects with Category Filters & "Lihat Portofolio Lainnya" */}
      <ProyekPilihan
        projects={PROJECTS}
      />

      {/* 3. Konsultasi Kepada Kami: Direct WhatsApp Section (No Form) */}
      <ConsultationSection />
    </main>
  );
}
