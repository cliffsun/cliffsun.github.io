// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blogs",
          title: "blogs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Overview of research interests, directions, and selected work tailored for PhD applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-junior-year-reflection",
        
          title: "Junior Year Reflection",
        
        description: "Yep, it was that bad that I&#39;m writing about it now.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/junior-year-reflection/";
          
        },
      },{id: "post-nasa-competitions",
        
          title: "NASA Competitions",
        
        description: "Besides doing physics research, I also compete in NASA competitions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/hulc/";
          
        },
      },{id: "news-started-quantum-machine-learning-internship-at-the-johns-hopkins-applied-physics-lab",
          title: 'Started quantum machine learning internship at the Johns Hopkins Applied Physics Lab.',
          description: "",
          section: "News",},{id: "news-multiple-nanowire-superconducting-quantum-interference-devices-critical-currents-symmetries-and-vorticity-stability-regions-published-in-iopscience-nano-express",
          title: '“Multiple-nanowire superconducting quantum interference devices: critical currents, symmetries, and vorticity stability regions” published...',
          description: "",
          section: "News",},{id: "news-perfect-superconducting-diode-and-supercurrent-range-controller-published-in-elsevier-physics-letters-a",
          title: '“Perfect superconducting diode and supercurrent range controller” published in Elsevier Physics Letters A....',
          description: "",
          section: "News",},{id: "news-awarded-best-undergraduate-research-poster-at-the-chicago-quantum-exchange",
          title: 'Awarded “Best Undergraduate Research Poster” at the Chicago Quantum Exchange',
          description: "",
          section: "News",},{id: "news-headed-to-aps-march-to-present-about-superconducting-quantum-interference-in-nanowire-networks-for-digital-and-quantum-logic",
          title: 'Headed to APS March to present about “Superconducting Quantum Interference in Nanowire Networks...',
          description: "",
          section: "News",},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cavity_setup/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/disorder_symmetry/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/generative_qml/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/inverse_problem/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/modeling_jjs/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mw_squids/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/psd/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum_annealing/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/statfit/";
            },},{id: "projects-quantum-interference-in-superconducting-nanowire-devices",
          title: 'Quantum interference in superconducting nanowire devices',
          description: "A brief introduction into quantum interference devices",
          section: "Projects",handler: () => {
              window.location.href = "/projects/transformers/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Cliff_Sun_CV-3.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%6C%69%66%66%78%73%32@%69%6C%6C%69%6E%6F%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=E1iNOm0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
