const object = {
  id: "2345673712678366XYZ",
  role: "admin",
  name: "Bára",
  surname:  "Macháčková",
  students: ["2345673712678366ABC", "2345673712678366DEF", "2345673712678366GHI", "2345673712678366JKL"],
}

const students = {
    "2345673712678366ABC": {
    name: "Tomáš",
    surname:  "Hron",
    lectures: ["2345673712678366H1", "2345673712678366H2"]
    plan: ["present simple", "present continuous", "past simple", "past continuous"],
    legalRepresentative: False,
    totalLectures:  ["2345673712678366H1", "2345673712678366H2"]
    lecturePrice: 300
  },
  "2345673712678366DEF":{
  
  }
  "2345673712678366GHI":{
  
  }
  "2345673712678366JKL":{
  
  }
}

const lecture = {
  id: "2345673712678366H1",
  student: "2345673712678366ABC",
  date: 1123456,
  plan: "revision of present simple", 
  document?:  ["path", "path"],
  status:  "done",
  paid: True,
  checked: True
}

const lecture = {
  id: "2345673712678366H2",
  student: "2345673712678366ABC",
  date: 654321,
  plan: "past simple", 
  document?: [],
  status: "inprogress",
  paid: False,
  checked: False
}

# výběr studenta č.2 -> students["2345673712678366DEF"]
# lectureDays jsou čísla, kvůli lehčí filtraci dnu přes cyklus 
# document?: --> volitelný atribut

"""
const days = ["Monday", "Thuesday", "Wednesday", ""]
"""
