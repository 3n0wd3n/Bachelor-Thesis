import { GlobalStyle } from '../styles/global.style'

const data = {
  'student': {
    id: 1,
    role: 'student',
    firstName: 'Janna',
    lastName: 'Gregory',
    legalRepresentative: false,
    lessons: [
      {
        id: 1,
        status: 'success',
        date: '2022-09-27T09:24:50.696Z',
      },
      {
        id: 2,
        status: 'cancelled',
        date: '2022-09-30T09:24:50.696Z',
      },
      {
        id: 3,
        status: 'cancelled',
        date: '2022-09-30T09:24:50.696Z',
      },
      {
        id: 4,
        status: 'cancelled',
        date: '2022-09-30T09:24:50.696Z',
      },
    ],
    plan: [
      'Present simple',
      'Present continuous',
      'Prepositions',
      'Past simple',
      'Past continuous',
      'Present perfect',
      'Past perfect',
      'Past perfect continuous',
      'Future perfect continuous'
    ],
    homeworks: [
      {
        id: 1,
        title: 'Letter',
        completed: true,
        description: 'Write letter to your friend with all requisites, that we have spoken about.  ',
      },
      {
        id: 2,
        title: 'Sheet',
        completed: false,
        description: 'Revision of your sheets.',
      },
      {
        id: 3,
        title: 'Word list',
        completed: true,
        description: 'Reading exercise in word list section with dogs and household.',
      },
      {
        id: 4,
        title: 'Grammar',
        completed: false,
        description: 'Revision of PS',
      },
      {
        id: 5,
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
    payments: [
        {
          id: 1,
          lessonId: 3,
          status: 'waiting',
          amount: 360,
          paidAt: null,
        },
      ],
    },
  'parent': {
    id: 1,
    role: 'parent',
    firstName: 'Jordan',
    lastName: 'Huberman',
    children: [
      {
        id: 1,
        firstName: 'Lex',
        lastName: 'Gordon',
        lessons: [
          {
            id: 1,
            status: 'success',
            date: '2022-09-27T09:24:50.696Z',
          },
          {
            id: 2,
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
            id: 1,
            title: 'Letter',
            completed: true,
            description: 'Write letter to your friend with all requisites, that we have spoken about.  ',
          },
          {
            id: 2,
            title: 'Sheet',
            completed: false,
            description: 'Revision of your sheets.',
          },
          {
            id: 3,
            title: 'Word list',
            completed: true,
            description: 'Reading exercise in word list section with dogs and household.',
          },
          {
            id: 4,
            title: 'Grammar',
            completed: false,
            description: 'Revision of PS',
          },
          {
            id: 5,
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
    id: 1,
    role: 'admin',
    firstName: 'Bára',
    lastName: 'Macháčková',
    students: [
      {
        id: 178,
        role: 'student',
        firstName: 'Jana',
        lastName: 'Gregory',
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
          'Past continuous',
          'Present perfect',
          'Past perfect',
          'Past perfect continuous',
          'Future perfect continuous'
        ],
        homeworks: [
          {
            id: 4,
            title: 'Letter',
            completed: true,
            description: 'Write letter to your friend with all requisites, that we have spoken about.  ',
          },
          {
            id: 69,
            title: 'Sheet',
            completed: false,
            description: 'Revision of your sheets.',
          },
          {
            id: 3,
            title: 'Word list',
            completed: true,
            description: 'Reading exercise in word list section with dogs and household.',
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
      {
        id: 178,
        role: 'student',
        firstName: 'Jacob',
        lastName: 'Statal',
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
          'Past continuous',
          'Present perfect',
          'Past perfect',
          'Past perfect continuous',
          'Future perfect continuous'
        ],
        homeworks: [
          {
            id: 4,
            title: 'Letter',
            completed: true,
            description: 'Write letter to your friend with all requisites, that we have spoken about.  ',
          },
          {
            id: 69,
            title: 'Sheet',
            completed: false,
            description: 'Revision of your sheets.',
          },
          {
            id: 3,
            title: 'Word list',
            completed: true,
            description: 'Reading exercise in word list section with dogs and household.',
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
        type: 'apology',
        personId: 47,
        lesson: 47,
        date: '2022-09-27T09:24:50.696Z',
        seen: false,
      },
      {
        id: 3,
        type: 'apology',
        personId: 42,
        lesson: 40,
        date: '2022-09-27T09:24:50.696Z',
        seen: false,
      },
      {
        id: 1,
        type: 'apology',
        personId: 40,
        lesson: 4,
        date: '2022-09-27T09:24:50.696Z',
        seen: false,
      },
      {
        id: 5,
        type: 'payment',
        personId: 48,
        lesson: 36,
        date: '2020-06-01T18:30:00.000Z',
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
      <Component {...pageProps} data={data['student']} />
    </>
  )
}

export default MyApp
