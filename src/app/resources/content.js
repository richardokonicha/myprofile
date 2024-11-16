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
    headline: <>Empowering Innovation with Cloud and AI</>,
    subline: <>
        I'm Rich*, a passionate Cloud & Platform Engineer at <InlineCode>Fugoku</InlineCode>. With over a decade of experience, I build scalable solutions, lead teams, and create tools that enable businesses to thrive in the era of AI.
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
        description: <>Rich* is a Senior Fullstack Engineer and Entrepreneur with a passion for leveraging Cloud and AI to transform businesses. At Fugoku, he designs scalable platforms that empower companies to deliver services, and ai products to their customers.</>
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
                    <>Integrated AI systems into client workflows, improving decision-making and reducing operational costs by 20%.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Developer',
                achievements: [
                    <>Designed and deployed cloud infrastructure for enterprise clients, reducing downtime by 40%.</>,
                    <>Led a team to create AI-powered tools for predictive analytics, resulting in a 15% increase in revenue for clients.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'University of Nigeria',
                description: <>Bachelor's degree in Software Engineering, focusing on cloud systems.</>,
            },
            {
                name: 'Build the Future',
                description: <>Advanced courses in AI integration and cloud application development.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Cloud Architecture',
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
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
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