import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Richard',
    lastName: 'Okonicha',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Engineer | Cloud & Platform',
    avatar: '/images/avatar.jpeg',
    location: 'Africa/Lagos',
    languages: ['English'], // Reflects your native proficiency
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Insights</>,
    description: <>Stay updated with my thoughts on cloud innovation, AI advancements, and tips for tech entrepreneurs.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/richardokonicha',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/richardokonicha/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://www.x.com/@richardokonicha/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:richardokonicha@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Showcasing my journey in cloud and AI as a ${person.role}`,
    headline: <>Maximize business with Technology</>,
    subline: <>
        <p> I'm <InlineCode>Richard</InlineCode>, Senior Software Engineer and Entrepreneur with a decade of experience across startups and large-scale operations, and engineering teams.</p><p>I'm known for clear communication and brilliant problem solving.</p>
    </>
}
const about = {
    label: 'About',
    title: 'About Me',
    description: `Meet ${person.name}, ${person.role} based in ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://app.cal.com/richardokonicha'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Richard is a Senior Fullstack Engineer and Entrepreneur with a passion for leveraging Cloud and AI to transform businesses. Designs scalable platforms that empower companies to deliver services, and ai products to their customers.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Fugoku',
                timeframe: '2022 - Present',
                role: 'Software Architect',
                achievements: [
                    <>Developed and optimized cloud-based solutions, boosting efficiency by 30% for key clients.</>,
                    <>Integrated AI systems into client workflows, improving decision-making and reducing operational costs by 20%.</>,
                    <>Designs scalable platforms that empower companies to deliver services, and ai products to their customers.</>

                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-006.png',
                        alt: 'Fugoku',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'All Hands AI',
                timeframe: '2018 - 2022',
                role: 'Lead Developer',
                achievements: [
                    <>Designed and deployed cloud infrastructure for enterprise clients, reducing downtime by 40%.</>,
                    <>Led a team to create AI-powered tools for predictive analytics, resulting in a 15% increase in revenue for clients.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-002.jpeg',
                        alt: 'Open Devin Project,',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Swell',
                timeframe: '2022 - 2023',
                role: 'Senior Software Engineer (Storefront)',
                achievements: [
                    <>I led the Storefront Team, driving significant code contributions to the origin swell theme and store platform editor, resulting in the successful securing of $20M in Series A funding.</>,
                    <>Managed comprehensive release notes, introduced new features, and provided responsive support to client inquiries, ensuring a seamless and innovative user experience.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-001.jpeg',
                        alt: 'Swell',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-004.jpeg',
                        alt: 'Swell',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Cardagraph',
                timeframe: '2020 - 2021',
                role: 'Senior Software Engineer & Architect ( Core )',
                achievements: [
                    <>Cardagraph is a software platform that predicts product delivery timelines using real data. They allow users to simulate adjustments to scope and resources</>,
                    <>Develop front-end interfaces and integrated UI data components based on product designs.</>,
                    <>Implemented new interfaces for Reports, Groups, and People modules for module data analysis.</>,
                    <>Integrated data platform with Cardagraph-core machine learning engine via Restful API.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-003.jpeg',
                        alt: 'Cardagraph',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-00.jpeg',
                        alt: 'Gdg',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'eHealth4everyone',
                timeframe: '2018 - 2020',
                role: 'Team Lead ( Python App Development Team ) ',
                achievements: [
                    <>Led a team of 6 in the development of the Integrated supportive supervison system for the ministry of health for their health data collection requirements.</>,
                    <>Architected our microservice OpenHisa health insurance management system for the Ministry of Health, if was deployed in 12 states to standardize the insurance in these states.</>,
                    <>Deployed and maintained services with over 10,000 active users using Docker, Kubernetes, and Traefik.</>,
                    <>Conducted refactoring of services to reduce latency, code review sessions, and provided team reports.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/cover-005.jpeg',
                        alt: 'eHealth4everyone',
                        width: 16,
                        height: 9
                    }
                ]
            },

        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Harvard University',
                description: <>Advanced courses in Memory Management, Data Structures, Web Technologies, Distributed Systems, AI integration and cloud application development. with Course Director: Dr. David Mulan (Ph.D.)</>,
            },
            {
                name: 'University of Nigeria',
                description: <>Bachelor's degree in Mechanical Engineering, several courses on engineering management, engineering design, systems design, safety and physics</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Full Stack',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Cloud',
                description: <>Designing scalable, secure, and efficient cloud solutions for diverse industries.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'AI Systems',
                description: <>Developing and integrating AI-driven workflows to enhance productivity and decision-making.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }

        ]
    }
}



const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };