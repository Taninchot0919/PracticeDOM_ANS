let profiles = [
    {
        id: "kriengkrai",
        lect: "Asst.Prof.Kriengkrai Porkaew",
        img: "./imgs/AjKK.jpg",
        academic: [
            "M.Sc. & Ph.D. (Computer Science) the Department of Computer Science, the University of Illinois at Urbana-Champaign, USA",
            "B.Sc. (Computer Science) the Department of Computer Science, Ramkhamhaeng University, Thailand",
            "B.Sc. (Medical Science) the Faculty of Medicine - Siriraj Hospital, Mahidol University, Thailand"
        ],
        teaching: ["Bioinformatics: Biological Sequence Analysis",
            "DB: DBMS, DB Technology, DB Design, Multimedia IR",
            "PL: Java, Perl, Programming Language Concepts",
            "SE: Design Patterns, Web Application Development"
        ]
    },

    {
        id: "pichet",
        lect: "Lect. Pichet Limvajiranan",
        img: "./imgs/AjPichet.jpg",
        academic: ["M.Sc. (Computer Science) 2542 Chulalongkorn University, Thailand",
            "B.Sc. (Computer Science) 2538 Rajabhat Institute Saundusit, Thailand"
        ],
        teaching: ["Data Structures and Algorithms",
            "Java Server Side Programming",
            "Programming Language (Visual Basic, C, Pascal, Java)",
            "Programming Syntax & Semantic"
        ]
    },

    {
        id: "sanit",
        lect: "Lect. Sanit Sirisawatvatana",
        img: "./imgs/AjSanit.jpg",
        academic: [
            "M.B.A. (Finance) 1997, University of Texas at San Antonio, U.S.A",
            "B.Engineer (Electrical) 1991, Chulalongkorn University"
        ],
        teaching: [
            "Business Intelligence",
            "Data Warehouse",
            "Web Technology",
            "Web Programming"
        ]
    },

    {
        id: "umaporn",
        lect: "Asst.Prof.Umaporn Supasitthmethee",
        img: "./imgs/AjJing.jpg",
        academic: [
            "Ph.D. Computer Science 2551, King Mongkut's University of Technology Thonburi (1-year internship at Kyoto University)",
            "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
            "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
        ],
        teaching: ["Java Programming", "Web Programming", "XML Technology"
        ]
    },

    {
        id: "tisanai",
        lect: "Mr. Tisanai Chatuporn (Learning Facilitator)",
        img: "./imgs/Tisanai.jpg",
        academic: [
            "M.Sc. Information Technology 2548, King Mongkut's University of Technology Thonburi",
            "B.Sc. Information Technology 2545, King Mongkut's University of Technology Thonburi",
        ],
        teaching: ["Java Programming", "Web Programming"
        ]
    }
];

let lectId = document.getElementById('lect');
let imgId = document.getElementById('img-container');
let academicId = document.getElementById('academic');
let teachingId = document.getElementById('teaching');
let indexPerson = 0;
let prevProfileIndex;


//Show active current Person and move previous back to thumbnail

//Show next person
let nextButt = document.querySelector('.next-btn');
nextButt.addEventListener('click', nextTo);

//Show previous person
let prevButt = document.querySelector('.prev-btn');
prevButt.addEventListener('click', backTo);

//Show random person
let surpriseButton = document.querySelector('.surprised-btn');
surpriseButton.addEventListener('click', randomPerson);

//Search staff name
let searchButton = document.getElementById('lect-search');
searchButton.addEventListener("click", searchKub);


function onlyAlpha(event) {
    let letterCode = event.keyCode;
    if (letterCode > 31 && (letterCode < 48 || letterCode > 57)) return true;
    return false;
}

function searchKub() {
    let searchName = document.getElementById('lect-value').value;
    console.log(searchName);
    for (let i = 0; i < profiles.length; i++) {
        if (searchName == profiles[i].id) {
            active_Person(i);
            break;
        }
    }
}

function randomPerson() {
    prevProfileIndex = indexPerson;
    indexPerson = Math.floor(Math.random() * 5);
    console.log(indexPerson);
    addToThumbnail(prevProfileIndex, indexPerson);
    active_Person(indexPerson)
}

function active_Person(number) {
    lectId.innerHTML = profiles[number].lect;
    imgId.setAttribute('src', profiles[number].img);

    //Academic
    for (let i = 0; i = academicId.childElementCount; i++) {
        academicId.removeChild(academicId.firstElementChild);
    }

    for (let i = 0; i < profiles[number].academic.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = profiles[number].academic[i];
        academicId.insertBefore(li, null);
    }

    //Teaching Exp
    for (let i = 0; i = teachingId.childElementCount; i++) {
        teachingId.removeChild(teachingId.firstElementChild);

    }

    for (let i = 0; i < profiles[number].teaching.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = profiles[number].teaching[i];
        teachingId.insertBefore(li, null);
    }
}

function nextTo() {
    prevProfileIndex = indexPerson;
    indexPerson++;
    if (indexPerson > profiles.length - 1) {
        indexPerson = 0;
    }
    addToThumbnail(prevProfileIndex, indexPerson);
    active_Person(indexPerson);
}
function backTo() {
    prevProfileIndex = indexPerson;
    indexPerson++;
    if (indexPerson > profiles.length - 1) {
        indexPerson = 0;
    }
    addToThumbnail(prevProfileIndex, indexPerson);
    active_Person(indexPerson);
}


function addToThumbnail(oldProfileIndex, currentProfileIndex) {
    let replaceThumbnail = document.getElementById(profiles[currentProfileIndex].id);
    let replaceLectQueryImg = replaceThumbnail.getElementsByTagName("img")[0];
    let replaceLectQueryP = replaceThumbnail.getElementsByTagName("p")[0];
    replaceLectQueryImg.src = profiles[oldProfileIndex].img;
    replaceLectQueryP.textContent = profiles[oldProfileIndex].lect;
    replaceThumbnail.id = profiles[oldProfileIndex].id;

}