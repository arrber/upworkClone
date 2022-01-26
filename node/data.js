// named exports
const TALENT = {
    title: 'Find quality talent or agencies',
    talents: [
        {
            image:"/assets/images/web-mob-soft.svg",
            title:"Web, Mobile & Software Dev",
        },
        {
            image:"/assets/images/design.svg",
            title:"Design & Creative",
        },
        {
            image:"/assets/images/writing.svg",
            title:"Writing",
        },
        {
            image:"/assets/images/sales.svg",
            title:"Sales & Marketing",
        },
        {
            image:"/assets/images/admin.svg",
            title:"Admin Support",
        },
        {
            image:"/assets/images/customer.svg",
            title:"Customer Service",
        },
        {
            image:"/assets/images/data-science.svg",
            title:"Data Sciente & Analytics",
        },
        {
            image:"/assets/images/engineering.svg",
            title:"Engineering & Architecture",
        },
    ]
}

const WORK = {
    title: 'How it works',
    works: [
        {
            image:"/assets/images/work-1.svg",
            title:"Post a job (it’s free)",
            description:"Tell us about your project. Upwork connects you with top talent and agencies around the world, or near you.",
        },
        {
            image:"/assets/images/work-2.svg",
            title:"Bids come to you",
            description:"Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.",
        },
        {
            image:"/assets/images/work-3.svg",
            title:"Collaborate easily",
            description:"Use Upwork to chat or video call, share files, and track project milestones from your desktop or mobile.",
        },
        {
            image:"/assets/images/work-4.svg",
            title:"Payment simplified",
            description:"Pay hourly or fixed-price and receive invoices through Upwork. Pay for work you authorize.",
        }
    ]
}

const OFFER = {
    title: 'Choose the offering that works best for you',
    description: 'All options include access to Upwork’s talent pool of quality talent and agencies.',
    list: [
        {
            title: 'BASIC',
            button: 'Select Basic',
            fee: 'FREE',
            services: [
                'Verified work history and reviews',
                'Unlimited proposals',
                'Built-in collaboration tools and easy payments'
            ]
        },
        {
            title: 'Plus',
            button: 'Select Basic',
            fee: '$49.99/month*',
            services: [
                'Verified work history and reviews',
                'Unlimited proposals',
                'Built-in collaboration tools and easy payments'
            ]
        },
        {
            title: 'Business',
            button: 'Select Basic',
            fee: '$849/month**',
            services: [
                'Verified work history and reviews',
                'Unlimited proposals',
                'Built-in collaboration tools and easy payments'
            ]
        },
        {
            title: 'Enterprise',
            button: 'Select Basic',
            fee: 'Price varies - contact us for a demo',
            services: [
                'Custom configurable contracting and onboarding process',
                'Worker classification compliance services',
                'Project-based or managed solutions, and dedicated account executive'
            ]
        }
    ]
};

module.exports = {
    TALENT,
    WORK,
    OFFER
}

// const name = 'jon'

// const person = {
        // passing only name creates a key value as below
//     name: 'jon'
// }