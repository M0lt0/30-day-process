//Exercises: Level 1
//Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
const body = document.getElementsByTagName("body")[0]
const container = document.getElementsByClassName("container")[0]

body.style.display = "flex"
body.style.flexDirection = "column"


container.style.display = " flex"
container.style.flexDirection = "row"
container.style.width = "965px"
container.style.height = "800px"
container.style.gap = "5px"
container.style.flexWrap = "wrap"


let isPrime = (num) => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}



for (let t = 0; t <= 100; t++) {
    let numberDiv = document.createElement("div")
    numberDiv.textContent = t
    container.appendChild(numberDiv)
    numberDiv.style.width = " 60px"
    numberDiv.style.height = " 60px"
    numberDiv.style.display = "flex"

    if (t > 0 && isPrime(t)) {

        numberDiv.style.backgroundColor = "red"

    } else if (t % 2 == 0) {

        numberDiv.style.backgroundColor = "green"

    } else if (t % 2 !== 0) {
        numberDiv.style.backgroundColor = "yellow"

    }


}

//Use the countries array to display all the countries.See the design
const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

const countriesDiv = document.getElementsByClassName("countries")[0]
const countriesCount = document.getElementsByClassName("country-count")[0]

countriesDiv.style.display = " flex"
countriesDiv.style.flexDirection = "row"
countriesDiv.style.width = "965px"
countriesDiv.style.height = "800px"
countriesDiv.style.gap = "5px"
countriesDiv.style.flexWrap = "wrap"
countriesCount.innerHTML = `total numbers of countries is : ${countries.length}`
countriesCount.style.margin = "10px 2px"


for (let c = 0; c < countries.length; c++) {
    let newCont = document.createElement("div")
    newCont.innerHTML = countries[c]
    countriesDiv.appendChild(newCont)
    newCont.style.width = "100px"
    newCont.style.height = "100px"
    newCont.style.display = "flex"
    newCont.style.border = "2px solid gray"
    newCont.style.justifyContent = "center"
    newCont.style.alignItems = "center"
    newCont.style.textAlign = "center"
    newCont.style.letterSpacing = "2px"

    if (!newCont.innerHTML.includes("Egypt")) {
        newCont.style.background = "green"
    } else {
        newCont.style.background = "red"

    }

}

//Exercises: Level 3
const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
        'HTML',
        'HTML5',
        'CSS',
        'CSS3',
        'JS',
        'JavaScript',
        'ES6',
        'Promise',
        'async await',
        'Database',
        'React',
        'React Hooks',
        'Context API',
        'React Router',
        'Web Storage',
        'localStorage',
        'sessionStorage',
        'Redux',
        'Node',
        'MongoDB',
        'SQL',
        'API',
        'DOM',
        'data science',
        'MERN',
        'Python',
        'Flask',
        'Statistics',
        'Linear Algebra',
        'Numpy',
        'Pandas',
        'Scipy',
        'Scikit-learn',
        'Visualization',
        'D3.js'
    ],
    author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
        titles: [
            ['🌱', 'Educator'],
            ['💻', 'Programmer'],
            ['🌐', 'Developer'],
            ['🔥', 'Motivator'],
            ['📔', 'Content Creator']
        ],
        qualifications: [
            'MSc. Computer Science Ongoing',
            'BSc. Information and Communication Eng.',
            'MSc. Food Technology',
            'BSc.Food Technology'
        ],
        socialLinks: [
            {
                social: 'LinkedIn',
                url: 'https://www.linkedin.com/in/asabeneh/',
                fontawesomeIcon: '<i class="fab fa-linkedin">'
            },
            {
                social: 'Twitter',
                url: 'https://twitter.com/Asabeneh',
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
            },
            {
                social: 'Github',
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: 'https://github.com/Asabeneh'
            },
            {
                social: 'DEV.to',
                fontawesomeIcon: '',
                url: 'https://dev.to/asabeneh'
            }
        ],
        skills: [
            'Web Development',
            'Data Analysis',
            'Data Visualization',
            'Programming',
            'Databases',
            'Developing API'
        ],
        bio:
            'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
        {
            name: '30 Days Of Python',
            topics: [
                'Python',
                'Flask',
                'Numpy',
                'Pandas',
                'Statistics',
                'API',
                'MongoDB'
            ],
            days: 30,
            status: 'Done',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
        },
        {
            name: '30 Days Of JavaScript',
            topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
            days: 30,
            status: 'Ongoing',
            questions: 'Above 500',
            projects: 'About 30',
            interviewQns: '',
            githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
        },
        {
            name: '30 Days Of HTML & CSS',
            topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
            days: 30,
            status: 'Coming',
            questions: 'Above 500',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of React',
            topics: [
                'React',
                'React Router',
                'Redux',
                'Context API',
                'React Hooks',
                'MERN'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of ReactNative',
            topics: ['ReactNative', 'Redux'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: 'Two',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Fullstack',
            topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Data Analysis',
            topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        },
        {
            name: '30 Days Of Machine Learning',
            topics: [
                'Python',
                'Numpy',
                'Pandas',
                'Scikit-learn',
                'Scipy',
                'Linear Algebra',
                'Statistics',
                'Visualization'
            ],
            days: 30,
            status: 'Coming',
            questions: '',
            projects: '',
            interviewQns: '',
            githubUrl: ''
        }
    ]
}


