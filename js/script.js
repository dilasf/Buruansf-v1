const data = {
    id: {
        nav: {
            home: "Home",
            about: "Tentang",
            projects: "Proyek",
            contact: "Kontak"
        },

        home: {
            label: "Portfolio",
            title: "Halo, saya Sifa Fadilah",
            desc: "Fresh Graduate · Web & Mobile Developer",
            intro: "Saya membangun aplikasi web dan mobile — sekaligus terbiasa menjelaskan cara kerjanya, dari kode hingga ke orang-orang yang menggunakannya.",
            btnProjects: "Lihat Proyek",
            btnContact: "Hubungi Saya"
        },

        about: {
            label: "Tentang",
            title: "Tentang Saya",
            greeting: "SIFA FADILAH — INFORMATIKA, BUKAN SEKADAR KODE.",
            desc: "Lulusan Teknik Informatika (IPK 3.82) yang punya pengalaman ganda: membangun aplikasi web dengan Laravel dan mobile dengan Flutter, sekaligus mengajar 100+ mahasiswa cara melakukan hal yang sama. Saya percaya developer terbaik adalah yang bisa berpikir jernih, belajar cepat, dan menjelaskan ide-nya dengan baik.",
            gpa: "IPK",
            students: "Mahasiswa Diajar",
            focus: "Fokus Pengembangan"
        },

        projects: {
            label: "Proyek",
            title: "Proyek Saya",
            more: "Lihat Lebih Banyak"
        },

        contact: {
            label: "Kontak",
            title: "Mari Terhubung",
            intro: "Terbuka untuk diskusi proyek, kolaborasi, maupun peluang kerja. Tidak harus formal — sapa saja dulu.",
            email: "Email",
            phone: "Telepon",
            closing: "TERIMA KASIH SUDAH MAMPIR 👋"
        }
    },

    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            contact: "Contact"
        },

        home: {
            label: "Portfolio",
            title: "Hi, I'm Sifa Fadilah",
            desc: "Fresh Graduate · Web & Mobile Developer",
            intro: "I build web and mobile applications — and I'm used to explaining how they work, from the code to the people who use them.",
            btnProjects: "View Projects",
            btnContact: "Contact Me"
        },

        about: {
            label: "About",
            title: "About Me",
            greeting: "SIFA FADILAH — INFORMATICS, MORE THAN JUST CODE.",
            desc: "Informatics graduate (GPA 3.82) with a dual background: building web apps with Laravel and mobile apps with Flutter, while teaching 100+ students how to do the same. I believe the best developers think clearly, learn fast, and communicate their ideas well.",
            gpa: "GPA",
            students: "Students Taught",
            focus: "Development Focus"
        },

        projects: {
            label: "Projects",
            title: "My Projects",
            more: "See More"
        },

        contact: {
            label: "Contact",
            title: "Let's Connect",
            intro: "Open to project discussions, collaborations, or work opportunities. No need to be formal — feel free to just say hi.",
            email: "Email",
            phone: "Phone",
            closing: "THANKS FOR STOPPING BY 👋"
        }
    }
};

function setText(id, text) {
    const element = document.getElementById(id);

    if (element) {
        element.innerText = text;
    }
}

function setActiveLanguageButton(lang) {
    const btnId = document.getElementById("btn-id");
    const btnEn = document.getElementById("btn-en");

    if (btnId && btnEn) {
        btnId.classList.toggle("active", lang === "id");
        btnEn.classList.toggle("active", lang === "en");
    }
}

function changeLanguage(lang) {
    localStorage.setItem("language", lang);

    setText("navHome", data[lang].nav.home);
    setText("navAbout", data[lang].nav.about);
    setText("navProjects", data[lang].nav.projects);
    setText("navContact", data[lang].nav.contact);

    setText("homeLabel", data[lang].home.label);
    setText("title", data[lang].home.title);
    setText("desc", data[lang].home.desc);
    setText("homeIntro", data[lang].home.intro);
    setText("btnProjects", data[lang].home.btnProjects);
    setText("btnContact", data[lang].home.btnContact);

    setText("aboutLabel", data[lang].about.label);
    setText("aboutTitle", data[lang].about.title);
    setText("aboutGreeting", data[lang].about.greeting);
    setText("aboutDesc", data[lang].about.desc);
    setText("highlightGpa", data[lang].about.gpa);
    setText("highlightStudents", data[lang].about.students);
    setText("highlightFocus", data[lang].about.focus);

    setText("projectLabel", data[lang].projects.label);
    setText("projectTitle", data[lang].projects.title);
    setText("projectMore", data[lang].projects.more);

    setText("contactLabel", data[lang].contact.label);
    setText("contactTitle", data[lang].contact.title);
    setText("contactIntro", data[lang].contact.intro);
    setText("emailLabel", data[lang].contact.email);
    setText("phoneLabel", data[lang].contact.phone);
    setText("contactClosing", data[lang].contact.closing);

    if (typeof renderProjectsGrid === "function") {
        renderProjectsGrid(lang);
    }

    if (typeof renderProjectDetail === "function") {
        renderProjectDetail(lang);
    }

    setActiveLanguageButton(lang);
}

const savedLanguage = localStorage.getItem("language") || "id";
changeLanguage(savedLanguage);
