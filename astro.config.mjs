import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Github for Scholars',
      description: 'A comprehensive guide to using Github for academic research, writing, and digital scholarship in the Humanities',
      social: [
        { label: 'GitHub', href: 'https://github.com/buildLittleWorlds/github-for-scholars', icon: 'github' },
      ],
      editLink: {
        baseUrl: 'https://github.com/buildLittleWorlds/github-for-scholars/edit/main/',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/introduction/' },
            { label: 'Why Github for Scholars?', link: '/why-github/' },
            { label: 'Prerequisites & Mindset', link: '/prerequisites/' },
          ],
        },
        {
          label: 'Part 1: Github Fundamentals',
          collapsed: false,
          items: [
            { label: 'Creating Your Account', link: '/fundamentals/account-setup/' },
            { label: 'Understanding Repositories', link: '/fundamentals/repositories/' },
            { label: 'Your Scholar Profile', link: '/fundamentals/profile/' },
            { label: 'Issues & Project Management', link: '/fundamentals/issues/' },
            { label: 'Collaboration Basics', link: '/fundamentals/collaboration/' },
            { label: 'Github Pages & Websites', link: '/fundamentals/pages/' },
          ],
        },
        {
          label: 'Part 2: Version Control for Academic Writing',
          collapsed: false,
          items: [
            { label: 'Rethinking the Writing Process', link: '/writing/process/' },
            { label: 'Setting Up a Research Project', link: '/writing/project-setup/' },
            { label: 'Commits as Research Milestones', link: '/writing/commits/' },
            { label: 'Branching for Different Arguments', link: '/writing/branching/' },
            { label: 'Collaborative Writing Workflows', link: '/writing/collaboration/' },
            { label: 'Managing Sources & Citations', link: '/writing/citations/' },
            { label: 'Peer Review with Pull Requests', link: '/writing/peer-review/' },
          ],
        },
        {
          label: 'Part 3: AI-Enhanced Scholarship',
          collapsed: false,
          items: [
            { label: 'AI Tools Overview', link: '/ai/overview/' },
            { label: 'Research with AI Assistance', link: '/ai/research/' },
            { label: 'AI-Powered Writing & Editing', link: '/ai/writing/' },
            { label: 'Automated Documentation', link: '/ai/documentation/' },
            { label: 'Code Generation for Scholars', link: '/ai/code-generation/' },
            { label: 'Ethical Considerations', link: '/ai/ethics/' },
          ],
        },
        {
          label: 'Case Studies',
          items: [
            { label: 'Digital Dissertation Project', link: '/case-studies/dissertation/' },
            { label: 'Collaborative Conference Paper', link: '/case-studies/conference-paper/' },
            { label: 'Open Access Journal Article', link: '/case-studies/journal-article/' },
            { label: 'Digital Humanities Project', link: '/case-studies/dh-project/' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Templates & Workflows', link: '/resources/templates/' },
            { label: 'Recommended Tools', link: '/resources/tools/' },
            { label: 'Further Reading', link: '/resources/reading/' },
            { label: 'Community & Support', link: '/resources/community/' },
            { label: 'Troubleshooting', link: '/resources/troubleshooting/' },
          ],
        },
      ],
      // customCss: [
      //   './src/styles/custom.css',
      // ],
      // components: {
      //   Header: './src/components/Header.astro',
      // },
    }),
  ],
});