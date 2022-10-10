import { GlobalStyle } from '../styles/global.style'

const data = {
  'student': {
    id: 178,
    role: 'student',
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
      'Past simple',
    ],
    homeworks: [
      {
        id: 4,
        title: 'Letter',
        completed: true,
        description: 'Write letter about how my cock is huge.',
      },
      {
        id: 69,
        title: 'Yo mama',
        completed: false,
        description: 'Revision of yo mama sheets.',
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
          'Past simple',
        ],
        homeworks: [
          {
            id: 4,
            title: 'Letter',
            completed: true,
            description: 'Write letter about how my cock is huge.',
          },
          {
            id: 69,
            title: 'Yo mama',
            completed: false,
            description: 'Revision of yo mama sheets.',
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
        firstName: 'Jana',
        lastName: 'Slavíková',
        password: 'anna.honova',
        parent: 47,
        lessons: [
          {
            id: 47,
            status: 'success',
            date: '2022-09-27T09:24:50.696Z',
          },
          {
            id: 42,
            status: 'success',
            date: '2022-09-27T09:24:50.696Z',
          }
        ],
        plan: [
          'Present simple',
          'Present continuous',
          'Prepositions',
          'Past simple',
        ],
        lessonSummaries: [
          {
            id: 64,
            lessonId: 47,
            summary: 'present simple, exercise on the present simple tenses',
          },
          {
            id: 65,
            lessonId: 41,
            summary: 'past simple, exercise on the present simple tenses',
          }
        ],
        files: [
          {
            name: 'text',
            url: 'https://cloud.mongodb.com/v2/612a1ea5b432cc61c2fb551a#metrics/replicaSet/62b867019f2f9b04f65af6e4/explorer/nej-kamos/baskets/find'
          },
          {
            name: 'doc',
            url: 'https://ews-tactical.atlassian.net/jira/software/c/projects/OFE/boards/1496?selectedIssue=OFE-56996'
          },
        ],
        homeworks: [
          {
            id: 4,
            title: 'Letter',
            completed: true,
            description: 'Write letter about how my cock is huge.',
          },
          {
            id: 69,
            title: 'Yo mama',
            completed: false,
            description: 'Revision of yo mama sheets.',
          },
        ],
        wordList: [
          {
            id: 4,
            completed: true,
            words:
              'https://www.figma.com/file/EsdxbekJrScMOYiIbjaQNq/Bachelor-Thesis?node-id=0%3A1',
          },
        ],
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
      {/* můžu měnit role admin, student, parent */}
      <Component {...pageProps} data={data['student']} />
    </>
  )
}

export default MyApp
