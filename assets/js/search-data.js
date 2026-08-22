// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "my research but more descriptive.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-other-stuff",
          title: "Other Stuff",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-a-good-and-hard-past-few-months-before-senior-year",
        
          title: "A good and hard past few months before senior year",
        
        description: "A lot has happened!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/summer-recap/";
          
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
      },{id: "news-started-research-internship-at-the-johns-hopkins-applied-physics-lab",
          title: 'Started research internship at the Johns Hopkins Applied Physics Lab.',
          description: "",
          section: "News",},{id: "news-multiple-nanowire-superconducting-quantum-interference-devices-critical-currents-symmetries-and-vorticity-stability-regions-published-in-nano-express",
          title: '“Multiple-nanowire superconducting quantum interference devices: critical currents, symmetries, and vorticity stability regions” published...',
          description: "",
          section: "News",},{id: "news-perfect-superconducting-diode-and-supercurrent-range-controller-published-in-physics-letters-a",
          title: '“Perfect superconducting diode and supercurrent range controller” published in Physics Letters A.',
          description: "",
          section: "News",},{id: "news-awarded-best-undergraduate-research-poster-at-the-chicago-quantum-exchange",
          title: 'Awarded “Best Undergraduate Research Poster” at the Chicago Quantum Exchange',
          description: "",
          section: "News",},{id: "news-a-dayem-loop-qubit-based-on-interfering-superconducting-nanowires-released-on-arxiv-solves-decades-long-problem-in-nanowire-community",
          title: 'A Dayem Loop Qubit Based on Interfering Superconducting Nanowires released on arxiv. Solves...',
          description: "",
          section: "News",},{id: "news-headed-to-aps-march-to-present-about-superconducting-quantum-interference-in-nanowire-networks-for-digital-and-quantum-logic",
          title: 'Headed to APS March to present about “Superconducting Quantum Interference in Nanowire Networks...',
          description: "",
          section: "News",},{id: "news-selected-as-a-2026-barry-m-goldwater-scholar-only-400-scholars-selected-making-it-one-of-the-most-prestigious-undergraduate-awards",
          title: 'Selected as a 2026 Barry M. Goldwater Scholar! Only ~400 scholars selected, making...',
          description: "",
          section: "News",},{id: "news-selected-as-a-2026-astronaut-scholar-only-70-scholars-selected-every-year",
          title: 'Selected as a 2026 Astronaut Scholar! Only ~70 scholars selected every year.',
          description: "",
          section: "News",},{id: "news-symmetry-of-the-critical-current-function-in-superconducting-nanodevices-released-on-arxiv",
          title: '“Symmetry of the critical current function in superconducting nanodevices” released on arxiv.',
          description: "",
          section: "News",},{id: "news-a-dayem-loop-qubit-based-on-interfering-superconducting-nanowires-published-in-superconductor-science-and-technology-patent-also-filed",
          title: 'A Dayem Loop Qubit Based on Interfering Superconducting Nanowires published in Superconductor Science...',
          description: "",
          section: "News",},{id: "news-heading-to-the-annual-astronaut-scholarship-foundation-gala-in-houston-texas-there-i-will-be-presented-my-award",
          title: 'Heading to the annual Astronaut Scholarship Foundation Gala in Houston, Texas! There, I...',
          description: "",
          section: "News",},{id: "projects-superconducting-qubit-measurement-set-up",
          title: 'Superconducting Qubit Measurement Set-up',
          description: "Built qubit measurement set-up using commerical microwave circuitry and LabVIEW",
          section: "Projects",handler: () => {
              window.location.href = "/cavity_setup/";
            },},{id: "projects-generative-tensor-networks-on-holographic-quantum-tensor-networks",
          title: 'Generative Tensor Networks on Holographic Quantum Tensor Networks',
          description: "Implemented Born Machine with Pytorch Backend on Quantum Tensor Networks",
          section: "Projects",handler: () => {
              window.location.href = "/gen_qml/";
            },},{id: "projects-inverse-superconducting-design-tool",
          title: 'Inverse Superconducting Design Tool',
          description: "Developed a tool that estimates device geometry from experimental data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/inverse_problem/";
            },},{id: "projects-josephson-junction-arrays",
          title: 'Josephson Junction Arrays',
          description: "Extensively studied dynamics of disordered Josephson Junction Arrays",
          section: "Projects",handler: () => {
              window.location.href = "/modeling_jjs/";
            },},{id: "projects-quantum-annealing-for-radar-optimization",
          title: 'Quantum Annealing for radar optimization',
          description: "Using quantum annealing to solve a time-dependent high dimensional QUBO problem.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/quantum_annealing/";
            },},{id: "projects-transformers-for-quantum-compilation",
          title: 'Transformers for quantum compilation',
          description: "Using transformers to learn quantum compilation schemes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/transformers/";
            },},{id: "talks-analyzing-disorder-and-symmetries-in-random-josephson-junction-arrays",
          title: 'Analyzing Disorder and Symmetries in random Josephson Junction Arrays',
          description: "First ever poster presentation",
          section: "Talks",handler: () => {
              window.location.href = "/talks/disorder_symmetries/";
            },},{id: "talks-efficient-cryogenic-low-invasive-propellant-supply-exchange",
          title: 'Efficient Cryogenic Low Invasive Propellant Supply Exchange',
          description: "NASA presentation of my team&#39;s work on cryogenic propellant transfer. Won &quot;Best Technical Presentation&quot; and was integrated into NASA archtecture.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/eclipse/";
            },},{id: "talks-model-fitting-algorithm-for-disordered-josephson-junction-arrays",
          title: 'Model Fitting Algorithm for disordered Josephson Junction Arrays',
          description: "Inverse design tool for many Josepshon Junction Arrays.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/model_fitting/";
            },},{id: "talks-holographic-quantum-tensor-networks-and-quantum-annealing",
          title: 'Holographic Quantum Tensor Networks and Quantum Annealing',
          description: "Intern project presentation. 4/400 interns selected to present. URL not available.",
          section: "Talks",handler: () => {
              window.location.href = "/talks/apl/";
            },},{id: "talks-multiple-nanowire-superconducting-quantum-interference-devices-symmetries-critical-currents-and-diode-effect",
          title: 'Multiple Nanowire Superconducting Quantum Interference Devices: Symmetries, Critical Currents, and Diode Effect',
          description: "Awarded &quot;Best undergraduate presentation&quot; out of 77 participating",
          section: "Talks",handler: () => {
              window.location.href = "/talks/cqe/";
            },},{id: "talks-using-ads-cft-for-better-quantum-computing",
          title: 'Using AdS/CFT for better Quantum Computing',
          description: "A fun introduction into Holographic Quantum Computing. NOT RIGOROUS",
          section: "Talks",handler: () => {
              window.location.href = "/talks/adscft/";
            },},{id: "talks-superconducting-quantum-interference-in-nanowire-networks-for-digital-and-quantum-logic",
          title: 'Superconducting Quantum Interference in Nanowire Networks for Digital and Quantum Logic',
          description: "Culmination of undergraduate research. Note: title was changed prior to presentation; not reflected in official website",
          section: "Talks",handler: () => {
              window.location.href = "/talks/aps/";
            },},{id: "talks-superconducting-nanowires-for-digital-and-quantum-logic",
          title: 'Superconducting Nanowires for Digital and Quantum Logic',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/uiuc_symposium_2026/";
            },},{id: "talks-simulating-diffusion-advection-via-matrix-product-states",
          title: 'Simulating Diffusion-Advection via Matrix Product States',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/apl_2026_cfd/";
            },},{id: "talks-quantum-circuits-algorithms-and-sensors",
          title: 'Quantum Circuits, Algorithms, and Sensors',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/apl_2026_final_intern/";
            },},{id: "talks-a-machine-learning-architecture-for-scaling-holographic-quantum-circuits",
          title: 'A Machine Learning Architecture for scaling Holographic Quantum Circuits',
          description: "",
          section: "Talks",handler: () => {
              window.location.href = "/talks/apl_2026_intern_expo/";
            },},{id: "talks-superconducting-nanowires-for-digital-and-quantum-logic",
          title: 'Superconducting Nanowires for Digital and Quantum Logic',
          description: "Presented at Astronaut Scholarship Foundation",
          section: "Talks",handler: () => {
              window.location.href = "/talks/asf/";
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
          window.open("/assets/pdf/Cliff_Sun_CV.pdf", "_blank");
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
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/cliff-sun", "_blank");
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
