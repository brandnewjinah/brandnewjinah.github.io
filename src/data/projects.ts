export const projects = [
    {
        id: 1,
        link: "movie",
        header: "Healthspan",
        subheader:
            "Patient-facing platform that allows users to manage prescriptions, connect with physicians, and track their health records.",
        stacks: [
            { id: 1, stack: "Vue.js" },
            { id: 2, stack: "React/TypeScript" },
            { id: 3, stack: "CSS/SCSS" },
        ],
        links: [{ id: 2, type: "external", url: "https://gethealthspan.com" }],
        details: [
            {
                id: 1,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742224592/01_pres_ckxrri.webp",
                header: "Patient Intake & Prescription",
                description: [
                    {
                        id: 1,
                        text: "I developed the **patient intake flow** using **Vue.js**, building **custom selection components** to create an interactive questionnaire. To support users returning later, I added state management that saves progress. I also integrated **API connections** to store responses and generate **personalized prescriptions** based on user inputs. With focus on **accessibility and usability**, I optimized the UI for all screen sizes. This feature streamlined **onboarding**, improved data accuracy, and increased user retention.",
                    },
                ],
            },
            {
                id: 2,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742225244/02_lab_kjpgge.webp",
                header: "Interactive Lab Results",
                description: [
                    {
                        id: 1,
                        text: "I designed and built the **Lab Results Page**, giving patients a clear and visual way to understand their biomarker data. I built a **custom biomarker graph system** that dynamically shows each marker's position within a range. To visualize progress, I added an **animated graph** reflecting the user’s optimization percentage. I also introduced **categorization, filtering, and sorting** to make data easy to navigate. This made the lab results not only informative but also actionable and engaging.",
                    },
                ],
            },
            {
                id: 3,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742225492/03_ui_j94duo.webp",
                header: "UI Components",
                description: [
                    {
                        id: 1,
                        text: "I created a **UI component library** by translating Figma designs into reusable components using **Vue.js and React/TypeScript**. I built a flexible **card system** and applied the **compound component pattern** to support varied use cases. I introduced **responsive typography**, custom **SVG icons**, and a set of **design tokens** to ensure visual consistency. For subtle polish, I added Framer Motion animations throughout. This system helped deliver a cohesive and high-performance UI across both the product and marketing site.",
                    },
                ],
            },
            {
                id: 4,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742226422/04_sf_gl8res.webp",
                header: "Filter and Shop",
                description: [
                    {
                        id: 1,
                        text: "I developed the **Shop Page**, allowing patients to explore medications and begin new visits. I built a **custom hero slider** that iintroduces medications. I designed UI indicators to highlight different protocols, helping users identify relevant treatments quickly. On the functionality side, I implemented a left-hand **filtering system** with options for medication type, protocol, and benefits. The result was a smoother, more intuitive shopping experience that helped patients make confident choices.",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        link: "ecomm",
        header: "K-lama",
        subheader:
            "A personalized Korean drama discovery app, that helps users discover, track, and organize dramas based on their unique preferences.",
        stacks: [
            { id: 1, stack: "React" },
            { id: 2, stack: "TypeScript" },
            { id: 2, stack: "SCSS" },
        ],
        links: [
            { id: 1, type: "github", url: "https://github.com/sanso-co/klama-frontend" },
            { id: 2, type: "external", url: "https://k-lama.com/" },
        ],
        details: [
            {
                id: 1,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742240905/k_01_d_om3gey.webp",
                header: "Drama Discovery with Smart Filtering",
                description: [
                    {
                        id: 1,
                        text: "I built the **Discovery Page** with a dynamic filtering system that lets users explore dramas by genre, tone, and keyword—all without page reloads. Using Zustand for state management, I enabled fast and responsive interactions. The filters are fully combinable, allowing users to layer their preferences for more personalized results. I also optimized rendering for smoother browsing, making it easy to discover dramas that match any mood or interest.",
                    },
                ],
            },
            {
                id: 2,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742245694/k_02_like_1_r3coan.webp",
                header: "Personalized Drama Tracking",
                description: [
                    {
                        id: 1,
                        text: "I implemented the **drama tracking feature**, giving users the ability to like, bookmark, or mark shows as watched directly from the detail page. Each interaction triggers API updates through **React hooks**, with UI feedback that feels instant and intuitive. I also built a section in the profile page where users can easily view and manage their saved dramas. This feature adds a layer of personalization, helping users keep track of what they’ve watched and what they want to watch next.",
                    },
                ],
            },
            {
                id: 3,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742239535/k_03_admin_ocerqh.webp",
                header: "Admin Dashboard",
                description: [
                    {
                        id: 1,
                        text: "I developed the **Admin Dashboard** to streamline content management for the drama database. Admins can search for shows via **TMDB API**, then imported data is automatically transformed to match the **K-lama model**. Each entry generates a **dynamic detail page** with pre-filled fields, ready for further editing through a structured form UI. This system ensures that show data stays accurate, organized, and easy to manage—making the catalog easier to maintain at scale.",
                    },
                ],
            },
            {
                id: 4,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742247818/04_mark_vssjd5.webp",
                header: "Custom Markdown Editor for Content Management",
                description: [
                    {
                        id: 1,
                        text: "I built a **custom Markdown Editor** into the Admin Dashboard, allowing non-technical admins to create, edit, and preview content without writing HTML. The editor supports **Markdown-to-HTML conversion** and offers both editing and live preview modes. I also wrote custom parsing logic to handle headers, lists, blockquotes, and inline styles—ensuring clean, well-structured output. This tool makes content updates faster and more consistent across the platform.",
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        link: "design",
        header: "Interactive",
        subheader:
            "Rate movies you've watched, get a personalized movie profile and get recommendations. Your one stop movie",
        stacks: [
            { id: 1, stack: "React" },
            { id: 2, stack: "Redux" },
        ],
        details: [
            {
                id: 1,
                imageUrl:
                    "http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg",
                header: "Rate Movies",
                description: [
                    {
                        id: 1,
                        text: "Users are asked to rate at least 10 movies from the data fetched from the TMDB api. Like or dislike movies. Rated movies are saved to the local storage through redux.",
                    },
                ],
            },
            {
                id: 2,
                imageUrl:
                    "http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg",
                header: "Get a movie profile",
                description: [
                    {
                        id: 1,
                        text: "Then a user can check out personalized profile, analyzed by liked and disliked movies, liked genres and directors and languages watched in. From the rated movies, reducer, liked movies, analyzed by calculating repeated genres, languages and directors, etc.",
                    },
                ],
            },
            {
                id: 3,
                imageUrl:
                    "http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg",
                header: "Get recommendations",
                description: [
                    {
                        id: 1,
                        text: "Movies are recommended based on users liked moives, liked genres and liked keywords. making calls to TMDB Api to get similar movies. liked movie, most liked genre top 3, most liked keywords top 3. random on refresh.",
                    },
                ],
            },
            {
                id: 4,
                imageUrl:
                    "http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg",
                header: "Get more granular",
                description: [
                    {
                        id: 1,
                        text: "What makes this app different from other apps is that users can choose keywords that describe why they liked the movie. Sometimes you like the movie for the background setting, or certain themes. Tell the app and it will give you better recommendations.",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        link: "baking",
        header: "EZ Texting",
        subheader:
            "A SaaS platform for SMS marketing solutions. I designed the UX/UI for the reporting system and the new mobile app, ensuring a seamless and intuitive user experience.",
        stacks: [
            { id: 1, stack: "UX" },
            { id: 2, stack: "UI" },
        ],
        links: [
            {
                id: 2,
                type: "external",
                url: "https://apps.apple.com/us/app/ez-texting-messaging-app/id1465358979",
            },
        ],
        details: [
            {
                id: 1,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742439294/ez_report_vyfqg5.webp",
                header: "Reporting with Actionable Insights",
                description: [
                    {
                        id: 1,
                        text: "I designed the **Reporting System UI** to make complex analytics approachable for small business owners.  I focused on surfacing clear, actionable insights that supported quick decision-making. I also added helpful UI elements that introduced relevant tools and suggestions based on user behavior—making the experience not only informative, but also more useful and aligned with business goals.",
                    },
                ],
            },
            {
                id: 2,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742439421/ez_app_tde5rd.jpg",
                header: "Mobile App",
                description: [
                    {
                        id: 1,
                        text: "I led the UX/UI design for the **EZ Texting Mobile App**, ㅅo make it easy for business owners to manage customer messaging on the go. I worked from early problem definition through final UI design, creating an experience that felt intuitive and responsive. Users could quickly send and receive messages, manage contacts, and keep their SMS campaigns running smoothly—right from their phones.",
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        link: "coffee",
        header: "Gladeo",
        subheader:
            "I defined user models based on client-provided data to align the design with both business goals and real user needs. By understanding how different student groups sought distinct outcomes, I shaped an experience that felt relevant and purposeful across user types.",
        stacks: [
            { id: 1, stack: "UX" },
            { id: 2, stack: "UI" },
        ],
        links: [
            {
                id: 2,
                type: "external",
                url: "https://www.gladeo.org",
            },
        ],
        details: [
            {
                id: 1,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742502958/gladeo_01_n3ggmi.webp",
                header: "User Modeling",
                description: [
                    {
                        id: 1,
                        text: "I defined **user models** based on client-provided data, ensuring the design aligned with both business and user goals. By understanding how different types of students approach career exploration, I was able to design an experience that felt relevant, helpful, and aligned with their goals.",
                    },
                ],
            },
            {
                id: 2,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742503041/gladeo_02_wklr7a.webp",
                header: "Comprehensive Sitemap",
                description: [
                    {
                        id: 1,
                        text: "I created a **site-wide sitemap** that outlined every section of the platform. This structure helped organize the content clearly, making it easier for users to navigate and for the team to plan and scale new features over time.",
                    },
                ],
            },
            {
                id: 3,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742503149/gladeo_03_vgf23d.webp",
                header: "High-Fidelity Wireframes",
                description: [
                    {
                        id: 1,
                        text: "I designed **high-fidelity wireframes** for a modular portal that connects students with career role models and stories. The layout was built to be flexible, so new content could be added regularly without breaking the structure or flow of the site.",
                    },
                ],
            },
            {
                id: 4,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742503257/gladeo_04_wrwiie.webp",
                header: "UI Guideline",
                description: [
                    {
                        id: 1,
                        text: "I defined the initial **UI guidelines** to set the visual direction for the platform. The goal was to keep the design clean and easy to follow, while still feeling friendly and encouraging—so students wouldn’t feel overwhelmed by too much information at once.",
                    },
                ],
            },
        ],
    },
    {
        id: 6,
        link: "type",
        header: "Revole",
        subheader:
            "A fashion e-commerce site for Millennial and Gen Z consumers. I led UX design of site revamp, collaborating with stakeholders, driving strategic planning and refining UX processes.",
        stacks: [{ id: 1, stack: "UX" }],
        links: [
            {
                id: 2,
                type: "external",
                url: "https://www.revolve.com",
            },
        ],
        details: [
            {
                id: 1,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742499645/re_discover_j1lias.webp",
                header: "UX Strategy & Competitive Analysis",
                description: [
                    {
                        id: 1,
                        text: "To help shape a clear direction for the redesign, I ran **surveys** to understand what customers cared about most and how that lined up with business priorities. I also reviewed the existing site through a **heuristic evaluation** and created **competitive analysis** to see how other brands approached similar challenges. These findings helped form a strategy that balanced real user expectations with business goals.",
                    },
                ],
            },
            {
                id: 2,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742499811/re_define_ocaetz.webp",
                header: "User Journey & Site Structure",
                description: [
                    {
                        id: 1,
                        text: "I mapped out the full customer journey—from browsing to checkout to what happens after a purchase—to spot friction points and improve the overall flow. Along with that, I created a detailed site map to make sure content was structured clearly and navigation made sense. This gave the team a solid foundation to build a smoother, more intuitive shopping experience.",
                    },
                ],
            },
            {
                id: 3,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742499921/re_wire_rgo4sm.webp",
                header: "High-Fidelity Wireframes",
                description: [
                    {
                        id: 1,
                        text: "I designed **high-fidelity wireframes** for key pages across the site. This gave stakeholders a chance to experience the design firsthand and made it easier for everyone to stay aligned before development began.",
                    },
                ],
            },
        ],
    },
    {
        id: 7,
        link: "airbnb",
        header: "Mahalo",
        subheader:
            "a human-powered search engine and Q&A platform, offering hand-curated search results to provide more relevant and structured information.",
        stacks: [
            { id: 1, stack: "UX" },
            { id: 2, stack: "UI" },
        ],
        details: [
            {
                id: 1,
                imageUrl:
                    "https://res.cloudinary.com/fw7128/image/upload/v1742500755/ma_yelefd.webp",
                header: "Redesign",
                description: [
                    {
                        id: 1,
                        text: "I led the **UX/UI redesign** of Mahalo, a knowledge-sharing platform visited by millions. Working closely with the product manager and developers, I focused on improving both usability and engagement by updating existing pages and designing new ones. My work included the **homepage, Mahalo Answers (the Q&A feature), and Mahalo Local**. I created wireframes and UI layouts that brought everything together into a clear, consistent, and intuitive experience.",
                    },
                ],
            },
        ],
    },
];
