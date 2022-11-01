import { GlobalStyle } from '../styles/global.style'

const data = {
  'student': {
    id: 178,
    role: 'student',
    firstName: 'Janna',
    lastName: 'Slavíková',
    legalRepresentative: false,
    lessons: [
      {
        id: 47,
        status: 'success',
        date: '2022-09-27T09:24:50.696Z',
      },
      {
        id: 48,
        status: 'cancelled',
        date: '2022-09-30T09:24:50.696Z',
      },
      {
        id: 41,
        status: 'cancelled',
        date: '2022-09-30T09:24:50.696Z',
      },
      {
        id: 42,
        status: 'cancelled',
        date: '2022-09-30T09:24:50.696Z',
      },
    ],
    plan: [
      'Present simple',
      'Present continuous',
      'Prepositions',
      'Past simple',
      'Past continuou',
      'Present perfect',
      'Past perfect',
      'Past perfect continuou',
      'Future perfect continuous'
    ],
    homeworks: [
      {
        id: 4,
        title: 'Letter',
        completed: true,
        description: 'Write letter to your frined with all requisities, that we have spoken about.  ',
      },
      {
        id: 69,
        title: 'Sheet',
        completed: false,
        description: 'Revision of your sheets.',
      },
      {
        id: 3,
        title: 'Wordlist',
        completed: true,
        description: 'Reading excersie in wordlist section with dogs and household.',
      },
      {
        id: 6,
        title: 'Grammar',
        completed: false,
        description: 'Revision of PS',
      },
      {
        id: 6,
        title: 'PDF',
        completed: false,
        description: 'Print out  new  work list from PDF section.',
      },
    ],
    files: [
      {
        name: 'food',
        url: 'https://cloud.mongodb.com/v2/612a1ea5b432cc61c2fb551a#metrics/replicaSet/62b867019f2f9b04f65af6e4/explorer/nej-kamos/baskets/find',
      },
      {
        name: 'hello',
        url: 'https://ews-tactical.atlassian.net/jira/software/c/projects/OFE/boards/1496?selectedIssue=OFE-56996',
      },
    ],
    wordList:
      'https://www.vocabulary.com/lists/137174/flashcards',
  },
  'parent': {
    id: 47,
    role: 'parent',
    firstName: 'Anna',
    lastName: 'Honova',
    children: [
      {
        id: 178,
        firstName: 'Jana',
        lastName: 'Slavíková',
        lessons: [
          {
            id: 47,
            status: 'success',
            date: '2022-09-27T09:24:50.696Z',
          },
          {
            id: 48,
            status: 'cancelled',
            date: '2022-09-30T09:24:50.696Z',
          },
        ],
        plan: [
          'Present simple',
          'Present continuous',
          'Prepositions',
          'Past simple'
        ],
        homeworks: [
          {
            id: 4,
            title: 'Letter',
            completed: true,
            description: 'Write letter to your frined with all requisities, that we have spoken about.  ',
          },
          {
            id: 69,
            title: 'Sheet',
            completed: false,
            description: 'Revision of your sheets.',
          },
          {
            id: 3,
            title: 'Wordlist',
            completed: true,
            description: 'Reading excersie in wordlist section with dogs and household.',
          },
          {
            id: 6,
            title: 'Grammar',
            completed: false,
            description: 'Revision of PS',
          },
          {
            id: 6,
            title: 'PDF',
            completed: false,
            description: 'Print out  new  work list from PDF section.',
          },
        ],
        files: [
          {
            name: 'food',
            url: 'https://cloud.mongodb.com/v2/612a1ea5b432cc61c2fb551a#metrics/replicaSet/62b867019f2f9b04f65af6e4/explorer/nej-kamos/baskets/find',
          },
          {
            name: 'hello',
            url: 'https://ews-tactical.atlassian.net/jira/software/c/projects/OFE/boards/1496?selectedIssue=OFE-56996',
          },
        ],
        wordList:
          'https://www.figma.com/file/EsdxbekJrScMOYiIbjaQNq/Bachelor-Thesis?node-id=0%3A1',
      },
    ],
    payments: [
      {
        id: 27,
        lessonId: 48,
        status: 'waiting',
        amount: 360,
        paidAt: null,
      },
    ],
  },
  'admin': {
    id: 27,
    role: 'admin',
    firstName: 'Bára',
    lastName: 'Macháčková',
    students: [
      {
        id: 178,
        role: 'student',
        firstName: 'Jana',
        lastName: 'Slavíková',
        legalRepresentative: false,
        lessons: [
          {
            id: 47,
            status: 'success',
            date: '2022-09-27T09:24:50.696Z',
          },
          {
            id: 48,
            status: 'cancelled',
            date: '2022-09-30T09:24:50.696Z',
          },
          {
            id: 41,
            status: 'cancelled',
            date: '2022-09-30T09:24:50.696Z',
          },
          {
            id: 42,
            status: 'cancelled',
            date: '2022-09-30T09:24:50.696Z',
          },
        ],
        plan: [
          'Present simple',
          'Present continuous',
          'Prepositions',
          'Past simple',
          'Past continuou',
          'Present perfect',
          'Past perfect',
          'Past perfect continuou',
          'Future perfect continuous'
        ],
        homeworks: [
          {
            id: 4,
            title: 'Letter',
            completed: true,
            description: 'Write letter to your frined with all requisities, that we have spoken about.  ',
          },
          {
            id: 69,
            title: 'Sheet',
            completed: false,
            description: 'Revision of your sheets.',
          },
          {
            id: 3,
            title: 'Wordlist',
            completed: true,
            description: 'Reading excersie in wordlist section with dogs and household.',
          },
          {
            id: 6,
            title: 'Grammar',
            completed: false,
            description: 'Revision of PS',
          },
          {
            id: 6,
            title: 'PDF',
            completed: false,
            description: 'Print out  new  work list from PDF section.',
          },
        ],
        files: [
          {
            name: 'food',
            url: 'https://cloud.mongodb.com/v2/612a1ea5b432cc61c2fb551a#metrics/replicaSet/62b867019f2f9b04f65af6e4/explorer/nej-kamos/baskets/find',
          },
          {
            name: 'hello',
            url: 'https://ews-tactical.atlassian.net/jira/software/c/projects/OFE/boards/1496?selectedIssue=OFE-56996',
          },
        ],
        wordList:
          'https://www.vocabulary.com/lists/137174/flashcards',
      },
    ],
    post: [
      {
        id: 4,
        personId: 47,
        type: 'apology',
        lesson: 47,
        date: '2022-09-27T09:24:50.696Z',
        seen: false,
      },
      {
        id: 5,
        personId: 48,
        type: 'payment',
        lesson: 47,
        date: '2022-09-27T09:24:50.696Z',
        seen: false,
      },
    ],
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      {/* we can change the role by input student or admin to data[]*/}
      <Component {...pageProps} data={data['admin']} />
    </>
  )
}

export default MyApp
