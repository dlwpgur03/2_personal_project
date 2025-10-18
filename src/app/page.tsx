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
    // 1. Fetch the list of repositories
    const repoResponse = await fetch('https://api.github.com/user/repos?sort=pushed&per_page=6&type=public', {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!repoResponse.ok) {
      console.error('GitHub API request for repos failed:', repoResponse.statusText);
      return [];
    }

    let repos: Repo[] = await repoResponse.json();

    // 2. Fetch languages for each repository concurrently
    const languagePromises = repos.map(repo => 
      fetch(repo.languages_url, { 
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 3600 },
      }).then(res => {
        if (!res.ok) {
          console.error(`Failed to fetch languages for ${repo.name}:`, res.statusText);
          return {}; // Return empty object on failure
        }
        return res.json();
      })
    );

    const languagesPerRepo = await Promise.all(languagePromises);

    // 3. Attach language data to each repo object
    repos = repos.map((repo, index) => ({
      ...repo,
      languages: languagesPerRepo[index],
    }));

    return repos;

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