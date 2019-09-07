console.log('Staring biodata program')
let name = 'Mulki'
let age = 24
let address = 'Tlogomas'
let hobbies = ['gaming', 'music']
let is_married = false
let list_school = [
    {
        'SD': {
            name: 'SDN DINOYO 4',
            in: 2001,
            out: 2007, 
            major: ''
          }
    },
    {
        'SMP': {
            name: 'SDN DINOYO 4',
            in: 2007,
            out: 2010, 
            major: ''
          },
    },
    {
        'SMK': {
                name: 'SMK PGRI 3',
                in: 2010,
                out: 2013, 
                major: 'NETWORKING'
              }
    },
    {
        'UNIV': {
                name: 'MUHAMMADIYAH',
                in: 2014,
                out: 2018, 
                major: 'D3 NETWORKING'
              }
    }
]

let skills = [
    {
        'networking': 'expert'
    },
    {
        'subnetting': 'expert'
    },
    {
        'linux': 'advanced'
    }
]

let interest_in_coding = true

function getBiodata(name, age, address, hobbies, is_married, skills, interest_in_coding) {
    let newBiodata = Object.assign({
        name: this.name,
        age: this.age,
        address: this.address,
        hobbies: this.hobbies,
        is_married:this.is_married,
        list_school: this.list_school,
        skills: this.skills,
        interest_in_coding: this.interest_in_coding
    })
    return newBiodata
}

console.log(getBiodata())