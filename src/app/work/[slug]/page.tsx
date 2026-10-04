import { PROJECTS } from "@/data/projects";
import CaseStudyClient from "./CaseStudyClient";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyClient slug={slug} />;
}
