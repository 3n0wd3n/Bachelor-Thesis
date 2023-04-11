**KOLEKCE**

V databázi se nachází 6 kolekcí, kde některé z nich jsou propojené. 

> users
> 
> lectures
> 
> homeworks
> 
> apologies
> 
> payments
> 
> paymentRequests
_Pokusím se je postupně projít, říct k čemu slouží a jak jsou propojené._

Notace:

pole = []

objekt = {}

číslo = int

řetězec = str

pravdivostni hodnota = bool

**KOLEKCE - USER**

    {
    "_id": {"$oid":"63f0c3f9fa7ab09efe5fd64f"},
    "role": "admin/representative/student",
    "name": str,
    "surname": str,
    "username": str,
    "phone": str,
    "password": str,
    "students": [str],
    "disabled": bool,
    "lectures": [str],
    "legalRepresentative": str,
    "child": [str],
    "homeworks": [str],
    "plan": [str],
    "wordList": str,
    "files": [str],
    "createdAt": {"$date":{"$numberLong":"1676723193914"}},
    "updatedAt": {"$date":{"$numberLong":"1678451411735"}},
    "__v": {"$numberInt":"0"}
    }
