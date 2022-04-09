const account = {
  id: "2345673712678366XYZ",
  role: "admin",
  name: "Bára",
  surname:  "Macháčková",
  username: "",
  password: "",
  students: ["2345673712678366ABC", "2345673712678366DEF", "2345673712678366GHI", "2345673712678366JKL"],
}

const account = {
  id: "2345673712678366ABFDSA",
  role: "parent",
  name: "Tomáš",
  surname:  "Hron",
  username: "",
  password: "",
  phone: "(+420) 734 788 454"
}

const account = {
  id: "2345673712678366ABC",
  role: "student",
  name: "Tomáš",
  surname:  "Hron",
  lectures: ["2345673712678366H1", "2345673712678366H2"],
  plan: ["present simple", "present continuous", "past simple", "past continuous"],
  legalRepresentative: "2345673712678366ABFDSA",
  totalLectures:  ["2345673712678366H1", "2345673712678366H2"],
  lecturePrice: 300,
  homework: [
    { name: "words1", checked: false },
    { name: "words2", checked: false },
    { name: "words3", checked: true },
    { name: "words4", checked: false },
    { name: "words5", checked: true },
  ]
}

const lecture = {
  id: "2345673712678366H1",
  student: "2345673712678366ABC",
  date: 1123456,
  plan: "revision of present simple",
  document?:  ["path", "path"],
  status:  "done",
  paid: true,
  checkPayment: true,
  checked: true,
  price: 300                        // při dokončení lekce se cena připíše z ceny žáka
}

const lecture = {
  id: "2345673712678366H2",
  student: "2345673712678366ABC",
  date: 654321,
  plan: "past simple", 
  document?: [],
  status: "inprogress",
  paid: false,
  checkPayment: false,
  checked: false
  price: 300                        // při dokončení lekce se cena připíše z ceny žáka
}

# výběr studenta č.2 -> students["2345673712678366DEF"]
# lectureDays jsou čísla, kvůli lehčí filtraci dnu přes cyklus 
# document?: --> volitelný atribut

"""
const days = ["Monday", "Thuesday", "Wednesday", ""]
"""

// Mongo database structure
const accountSchema = {
  role: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  students: {
    type: [String],
    default: []
  },
  phone: {
    type: String,
    default: ""
  },
  lectures: {
    type: [String],
    default: []
  },
  legalRepresentative: {
    type: String,
    default: ""
  },
  totalLectures: {
    type: [String],
    default: []
  },
  lecturePrice: {
    type: Number,
    default: 0
  },
  homework: {
    type: [{
      type: String,
      checked: Boolean
    }],
    default: []
  },
}

const lectureSchema = {
  student: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  plan: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    default: "in-progress"
  },
  paid: {
    type: Boolean,
    default: false
  },
  checkPayment: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,                        // při dokončení lekce se cena připíše z ceny žáka
    required: true
  }

  document?: [String],
}
