import type { Metadata } from 'next'
import { projects } from '../../../data/projectData'
import ProjectVisualization from '../../../components/ProjectVisualization'
import { NotFound } from '../../../components/NotFound'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const title = `${project.name} - ${project.capacity} Solar Project`
  const description = `${project.name} is a ${project.capacity} ${project.type} in ${project.location}. Status: ${project.status}${project.annualGeneration ? ` · Annual generation: ${project.annualGeneration}` : ''}${project.co2Reduction ? ` · CO₂ reduction: ${project.co2Reduction}` : ''}.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return <div><NotFound/></div>
  }

  return (
    <div>
      <Header/>
      <div className="p-2 sm:p-4 mx-auto sm:m-4">
      <ProjectVisualization projectData={project} />
      </div>
      <Footer/>
    </div>
  )
}
