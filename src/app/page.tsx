import Header from '@/components/Header';
import Home from '@/components/Home';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import type { Repo } from '@/types';

async function getGithubRepos(): Promise<Repo[]> {
  const token = process.env.GIT_TOKEN;
  if (!token) {
    console.warn('GitHub token is not set in .env.local. Skipping API call.');
    return [];
  }

  try {
    const response = await fetch('https://api.github.com/user/repos?sort=pushed&per_page=6&type=public', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('GitHub API request failed:', response.statusText);
      return [];
    }

    const data = await response.json();
    return data as Repo[];
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}

export default async function HomePage() {
  const repos = await getGithubRepos();

  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects repos={repos} />
      </main>
      <Footer />
    </div>
  );
}