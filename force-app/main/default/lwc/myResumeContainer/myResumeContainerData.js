import SOCIAL from '@salesforce/resourceUrl/SOCIAL'
import bander from '@salesforce/resourceUrl/bander';
export const PROFILE_IMAGE = bander
export const SOCIAL_LINKS=[
     {
        type: "github",
        label: "github",
        link: "https://github.com/ruveyda35",
        icon: SOCIAL + '/SOCIAL/github.png'
    },
    {
        type: "linkedin",
        label: "linkedin",
        link: "https://www.linkedin.com/in/r%C3%BCveyda-k-51881a272/",
        icon: SOCIAL + '/SOCIAL/linkedin.png'
    },
    {
        type: "trailhead",
        label: "trailhead",
        link: "https://www.salesforce.com/trailblazer/rkrkc1",
        icon: SOCIAL + '/SOCIAL/trilhead.jpeg'
    }
]

export const USER_DETAILS={
    NAME:'Ruveyda  Karakoc',
    ROLE:'Salesforce Developer',
    EMAIL:'rvy3435@gmail.com',
    PHONE:'+90 546 232 1270',
    KONUM: 'Izmir, Turkey',
    type: "github",
    label: "github",
    link: "https://github.com/ruveyda35",
    icon: SOCIAL + '/SOCIAL/github.png',
    type1: "trailhead",
    label1: "trailhead",
    link1: "https://www.salesforce.com/trailblazer/rkrkc1",
    icon1: SOCIAL + '/SOCIAL/trilhead.jpeg',
    type2: "linkedin",
    label2: "linkedin",
    link2: "https://www.linkedin.com/in/r%C3%BCveyda-k-51881a272/",
    icon2: SOCIAL + '/SOCIAL/linkedin.png',
    not: "This project was prepared with LWC"

}

export const ABOUT_ME={
    HEADING:"ABOUT ME",
    KEYS_POINTS:[
        "A highly accomplished Salesforce Professional / Developer / Administrator with multi-cloud experience",
        "Experienced trailhead ranger, completed a super badge. ",
        "Exhibiting excellent analytical, problem-solving, and collaboration skills. Punctuality and ability to work both"+
        "independently and as part of a team-oriented environment.",
        "2 + years of experience in IT, a certified Full stack Salesforce Developer using Apex and JavaScript. ",
        "Communication and the ability to build excellent relationships and collaborate effectively with the team.",
        "Skilled at motivating people and passionate about continuously learning and staying up-to-date with"+
        "technology trends and keen on self-improvement.",
        "Actively making research and benefiting from feedback to improve performance, known for a proactive, selfmotivated approach to work. Additionally, strongly time management skills.",
        "Experience with JIRA and SDLC software for Agile development.",
        "Experience in developing and deploying Salesforce CRM solutions, Salesforce configuration, and customization.",
        "Possessing a strong understanding of Salesforce architecture and its data model",

    ]
}

export const PROFESSIONAL_EXPERIENCE={
    HEADING1: "WORK EXPERIENCE",
    EXPERIENCES: [
        
            "Clouds:",
            "Deployment:",
            "IDE:",
            "Methodologies:", 
            "Repository:",
           " Project_Management_Tools:",
           " Languages: ",
           " Web Services: ",
           
    ],

    KEYS_POINTS:[
        "Sales Cloud, Experience Cloud",
        "Change Sets",
        "Visual Studio Code, Developer Console",
        "Agile (Scrum)",
        "GitHub",
        "Jira, MS Teams, Zoom, Slack",
        "APEX, JAVASCRIPT, HTML",
        "XML, JSON, REST API"
    ] ,
    
    HEADING: ' Development Tools:',
                LIST: [
                    "Lightning Web Components (LWC)",
                     "Integration", 
                     "Trigger", 
                     "SOQL", 
                     "Synchronous/Asynchronous",
                     "Batch Apex", 
                     "Scheduled Apex", 
                     "Future Method", 
                     "Queueable Apex",
                ], 

    EXPERIENCES1: [
            {
                ROLE: "Order Management Project/ Experience Cloud",
                COMPANY_NAME: "Salesforce Administrator/Developer - Maxtechlab",
                DURATION: "02/2023 – 10/2023",
                DESCRIPTION:"Mean idea behind of this project is selecting products, seeing the prices of the products, then adding them to"+
                "the cart, placing an order in the cart, after placing the order, shipping processes etc. tracking a shopping"+
                "process in salesforce.",
                HEADER2: "Project Management Methodology:",
                LIST1: [
                    "» Scrum Type Of Agile Methodology.",
                    "» Jira will be used for tracking and managing tasks within our team or organization.",
                    "» Changeset for Deployment"
                ],
                HEADER3: "LWC for :",
                HEADER4: "Developed a Product List Page;",
                DESCRIPTION1:"• Such as each row will displayed max 3 products, and for each product's displays image, name price etc. And also"+
                "when clicking on any product image or name it should take to product details.",
                HEADER5: "Develop Add To Cart Functionality;",
                HEADER6: "Develop Product Detail Page etc;",
                HEADER7: "Integration for:",
                DESCRIPTION2:"• integrated the payment gateway",
                HEADER8: "Trigger for:",
                DESCRIPTION3: "• When a campaign is created for a product, send an e-mail containing the picture and link of the product to"+
                "community users",
                HEADER9: "Flow for:",
                LIST3: [
                    "• When a customer account request is created, sends an email to the customer, forwards the customer's information to"+
                    "the VP for approval. If approved, it creates an account, contact, and community user with the same customer"+
                    "information. Finally, it generates login details and sends them to the customer via email",
                    "• Sending the order stages to the customer by e-mail, sending a survey for product evaluation when the order is"+
                    "delivered, updating the product quantity in stock when the order is confirmed or canceled.",
                    "• When an order is placed, the price of the product at the entry price is automatically reflected in the cart.",
                ],
                DESCRIPTION4: "Enabled Lighting Experience, Created a Lightning Experience and Cloned an Existing Profile, Provide field-level access"+
                    "for all the objects and OWD."+
                    "Created custom objects, fields, formula fields, validation rules and for project. Also developed a lot of the different"+
                    "developer tools and flows such as mentioned above.",
                HEADER10: "Previous Experience:",  
                DESCRIPTION5: "High school math teacher // Mental arithmetic instructor"
                    
                    
                
                

            }
    ] 
    
    
}

export const SKILLS_EXTRA ={
    HEADING2: "SKILLS",
    HEADING1: "Highly capable in the following skill areas:",
    LIST:["Experience with both Sales Cloud and Experience Cloud.",
    "Implemented customizations using Apex classes, Apex Controllers, and Lightning Web Components(LWC).",
    "Extension List (Visual Studio)",
    "Implemented web service integration using SOAP, REST, and Salesforce APIs",
    "Writing triggers and corresponding test classes to ensure the functionality and integrity of Salesforce customizations.",
    "Experience in creating and managing flow automation processes.",
    "Writing Apex batch classes, Queueable classes, and Schedulable classes by implementing the respective interfaces to"+
    "efficiently process large data sets at scheduled intervals in Salesforce.",
    "Git and GitHub",
    "JavaScript, HTML, XML",
    "SOQL (Salesforce Object Query Language)",
    "DML (Data Manipulation Language)",
    "Customizing application creating custom objects, fields, formula fields, and validation rules to tailor Salesforce",
    "applications to specific business needs.",
    "Deploying Salesforce components using the Metadata API across various sandbox and production instances utilizing tools",
    "like Change Sets for these deployment tasks.",
    "Migrating data in Salesforce using various tools, including Data Loader, Data Import Wizard, and Data Loader.io.",
    "Proficient in project management and governance of the Software Development Life Cycle (SDLC), particularly with a"+
    "focus on Agile methodology."],
}
export const SKILLS_DATA ={
    HEADING: "SALESFORCE DEVELOPER SKILLS",
    SKILLS_LIST: [
        "Deployment, Change Set",
        "Git/GitHub",
        "Experience Cloud,Sales Cloud",
        "Lightning Web Components(LWC)",
        "Integration",
        "Custom Rest and Soap APIs",
        "Apex Trigger",
        "Test Classes",
        "JavaScript",
        "SOQL",
        "DML",
        "HTML",
        "Wrapper Classes",
        "Error handling Structure",
        "Apex Sharing",
        "Apex Best Practices",
        "Flow",
        "Security Modeling",
        "Postman ADT",
        "Dataloader.io",
        "Agile- Scrum, Jira"
    ]
}

export const PROJECTS ={
    HEADING: "PROJECTS",
    PROJECTS1:[
        {
    ROLE: "Developed Guesthouse Project / Sales Cloud",
    COMPANY_NAME: "Salesforce Administrator/Developer - Maxtechlab",
    DURATION: "06/2022 – 02/2023",
    DESCRIPTION:"Mean idea behind of this project is to build and managed to sales pipeline and keep the customers loyal to our"+
    "hotel for their next trips and to enhance the ability to organize the events such as a wedding,"+
    "conferences even the overnight ones."+
    "I have worked with Sales Cloud, including case management.",
    HEADING1: "LWC for;",
    LIST:[
        "• Enables the creation of guest registrations in the Opportunity object without needing to navigate to the Guest object.",
        "• Create products directly on the Opportunity object to provide users to select hotel rooms, specifying the time intervals as well"

    ],
    HEADING2: "Batch classes scheduled for;",
    LIST1:[
        "• Resetting the off and outstanding off days in the year",
        "• Celebrating their birthdays by extending exclusive discounts to our loyal customers as a gesture of appreciation",
    ],
    HEADING3: "Trigger for;",
    DESCRIPTION1: "• Checking rooms to prevents another opportunity from using the same room during the specified range of dates.",
    HEADING4: "Flow for;",
    DESCRIPTION2: "• Making automatically mark rooms as booked and to show rooms as available when a guest leaves the hotel or cancels"+
    "their booking associated with the opportunity.",
    DESCRIPTION3: "Created the salesforce lightning application custom objects, fields, formula fields, validation rules and customized"+
    "standard object for project. Additionally, migrated product data from an Excel sheet to Salesforce using Data Loader.io."+
    "Also developed a lot of the different developer tools and flows."+
    "Worked on various tasks such as case management (including case assignment rules and queues), report and dashboard"+
    "creation, and security implementation."+
    "Attended in agile scrum, daily stand up, Sprint review and user story sessions",
    ROLE1: "CRM) System for Vehicle Dealerships across Various City/ Sales Cloud",
    COMPANY_NAME1: "Salesforce Administrator/Developer - Maxtechlab",
    DURATION1: "07/2021 – 01/2022",
    HEADING5: "LWC for;",
    DESCRIPTION4: "To develop component to choose Vehicle Frame on Opportunity",
    HEADING6: "Integration for;",
    DESCRIPTION5: "To withdraw Products from third-part system to the Salesforce",
    HEADING7: "Batch Class for;",
    LIST3:[
        "• to remining to Sales Reps by email about their due opportunitiesT",
        "• To send automatic birthday celebration email to the contacts on their birthday"
    ],
    HEADING8: "Flow for;",
    LIST4:[
        "• To assign lead to respective sales representative and"+
        "Dealer’s Sales representative to be Notification about assignment.",
        "• Automatic filling of account object rating field based on the number of opportunity objects"],
    DESCRIPTION6: "Created Picklist Value, Developed Information Request Form for the Website. (Web To Lead Form)"+
        "Created Queues for the Leads, Relationship, Validation Rule and Lead Source Automation, Email Template, Account"+
        "Field Mapping on Lead conversion."+
        "Created Test Drive Activity Event for Opportunity and to submit the quote for approval."+
        "Attended in agile scrum, daily stand up, Sprint review and user story sessions",
        
    ROLE2: "Electronic Goods Store Chain/ Sales Cloud",
    COMPANY_NAME2: "Salesforce Administrator - Maxtechlab",
    DURATION2: "07/2021 – 01/2022",
    DESCRIPTION7:"Main objective is to track the orders and management the sales of products online and in stores on sales cloud in Salesforce.",
      HEADING9: "Flow for;",
    DESCRIPTION8:[ "• Of a client in order to track the frequency of shopping.",
                 "• If the actual delivery time  exceeds the maximum delivery time, sending an email to the customer explaining",
                 "that this can be tolerated"],
    
    DESCRIPTION9:["• Enabled person account and customized account and Order object.",
                "• Created custom objects, fields and also validation rules, roll-up summary, email template email Leatherhead",
                "queues and assigned them for cases and also case assignment rule case escalation rule case auto-Response",
                "Rules Web-to-Case HTML Generato.",
                "• Implemented data loader for insert and update of data via CSV files to add product and prices.",
                "• Created user, profiles, roles, permission sets",
                "Attended in agile scrum, daily stand up, Sprint review and user story sessions"],
            
}
],
HEADING10: "EDUCATION",
ROLE3: "Master's Degree Math",
COMPANY_NAME3: "Astrakhan State University",
DURATION3: "2011 – 2014",
COUNTRY: "   | Russia, Astrakhan",

ROLE4: "Chemist Bachelor's Degree",
COMPANY_NAME4: "Ataturk University",
DURATION4: "1998 – 2002",
COUNTRY2: "    | Turkey",

HEADING11: "CERTIFICATES",
DESCRIPTION10: "• Salesforce Certified Platform Developer 1",
DESCRIPTION11:  "• Salesforce Certified Administrator (SCA)"

}