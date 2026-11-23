import Link from 'next/link';
import PixelIcon from '@/components/PixelIcon';
import { about, profile, ui } from '@/content/site';
import StructuredData from '@/components/StructuredData';
import { pageMetadata, pageData } from '@/lib/seo';

export const metadata = pageMetadata('about');

export default function About() {
  return <>
    <StructuredData data={pageData('about')} />
    <header className="page-heading"><h1>{about.title}</h1></header>
    <div className="about-story prose">
      <p className="lead">{about.intro}</p>
      {about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      <div className="button-row">
        <a className="button button-green" href={`mailto:${profile.email}`}>{ui.emailButton} <PixelIcon name="arrow" /></a>
        <a className="button" href={profile.github}>{ui.footerGithub} ↗</a>
        <Link className="button" href="/projects">{ui.projectsButton} <PixelIcon name="arrow" /></Link>
      </div>
    </div>
  </>;
}
