// config.js
module.exports = {
    github: {
        username: 'MohammadMahbub', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [''] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'mohammad-mahbub-8828721b7',
        twitter: '@Mahbub1Mohammad',
        facebook: 'https://www.facebook.com/ahmed.mahbub1996/',
        dribbble: '',
        behance: '',
        medium: '',
        devto: '',
        website: 'https://mahbub-protfolio.netlify.app/',
        phone: '',
        email: 'mdmahbubur511@gmail.com'
    },
    skills: [
        'HTML',
        'CSS',
        'Bootstrap',
        'tailwind',
        'JavaScript - ES6',
        'React.js',
        'Node.js',
        'Express.js',
        'Material UI',
        'TypeScript (Basic)',
        'MongoDB',
        'Firebase',
        'Heroku',
        'Netlify',
        'Github',
        
       
    ],
    Learing: [
        'React-Native (Android & iOS)'
    ],
    experiences: [
        { 
            company: 'Code With Mosh',
            subject: 'Apps Development React-Native (Android & iOS)',
            position: '',
            from: '2021',
            to: 'Present'
        },
        { 
            company: 'Programming Hero',
            subject: 'Front-End Developer(MERN Stack)',
            position: '',
            from: '2020',
            to: '2021'
        },
        { 
            company: 'It Computer City',
            subject: 'Computer Science & Application',
            position: '',
            from: '2017',
            to: '2018'
        }
    ],
    education: [
        { 
            institution: 'National University, Bangladesh',
            degree: 'Bachelor of Science',
            from: 'Not Complete',
            to: '2019'
        },
        { 
            institution: 'Chandpur Government College',
            degree: 'Higher Secondary Certificate (HSC)',
            from: 'Completed - 2015',
            to: '2017',
        },
        { 
            institution: 'Munshirhat High School',
            degree: 'Secondary School Certificate (SSC)',
            from: 'Completed - 2010',
            to: '2015'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: '', // medium | dev.to
        username: 'MohammadMahbub',
        limit: 3 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
