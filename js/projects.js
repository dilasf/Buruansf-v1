const projects = [
    {
        id: 1,
        title: {
            id: "Website Portofolio Pribadi",
            en: "Personal Portfolio Website"
        },
        cover: "assets/img/thumbnail/tb-portofolio.jpeg",
        github: "https://github.com/dilasf/portfolio-skeleton-react.git",
        description: {
            id: "Merancang dan membangun website portofolio pribadi menggunakan HTML dan CSS, dipublikasikan melalui GitHub Pages sebagai representasi kompetensi Web & Mobile Developer.",
            en: "Designed and built a personal portfolio website using HTML and CSS, published through GitHub Pages as a representation of Web & Mobile Developer skills."
        },
        documents: [
            {
                title: {
                    id: "Artikel Ilmiah - Perancangan Website Portofolio",
                    en: "Scientific Article - Portfolio Website Design"
                },
                type: "HTML",
                file: "assets/docs/artikel-portofolio-sifa.html"
            }
        ]
    }
];

function getProjectText(project, key, lang) {
    if (typeof project[key] === "object") {
        return project[key][lang] || project[key].id;
    }

    return project[key];
}

function getDocumentText(type, lang) {
    if (type === "PDF") {
        return lang === "id" ? "Buka atau lihat dokumen PDF" : "Open or view PDF document";
    }

    if (type === "HTML") {
        return lang === "id" ? "Buka artikel ilmiah di browser" : "Open article in browser";
    }

    return lang === "id" ? "Buka atau unduh dokumen DOCX" : "Open or download DOCX document";
}

function renderProjectsGrid(lang = "id") {
    const projectsGrid = document.getElementById("projectsGrid");

    if (!projectsGrid) {
        return;
    }

    projectsGrid.innerHTML = projects.map(project => {
        const title = getProjectText(project, "title", lang);
        const description = getProjectText(project, "description", lang);

        return `
            <a href="project-detail.html?id=${project.id}" class="project-card">
                <div class="project-cover">
                    ${
                        project.cover
                            ? `<img src="${project.cover}" alt="${title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                               <div class="cover-placeholder" style="display: none;"></div>`
                            : `<div class="cover-placeholder"></div>`
                    }
                </div>

                <div class="project-info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </a>
        `;
    }).join("");
}

function renderProjectDetail(lang = "id") {
    const projectDetail = document.getElementById("projectDetail");

    if (!projectDetail) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const projectId = Number(params.get("id"));
    const project = projects.find(item => item.id === projectId);

    if (!project) {
        projectDetail.innerHTML = `
    <a href="index.html#projects" class="back-link">
        <span>←</span>
        ${lang === "id" ? "Kembali ke Proyek" : "Back to Projects"}
    </a>

    <div class="detail-hero">
        <div class="detail-info">
            <p class="section-label">${lang === "id" ? "Detail Proyek" : "Project Detail"}</p>
            <h1>${title}</h1>

            <p class="detail-description">${description}</p>

            ${
                project.github
                    ? `<a href="${project.github}" class="github-link" target="_blank">GitHub Repository</a>`
                    : ""
            }
        </div>

        <div class="detail-cover">
            ${
                project.cover
                    ? `<img src="${project.cover}" alt="${title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                       <div class="cover-placeholder" style="display: none;"></div>`
                    : `<div class="cover-placeholder"></div>`
            }
        </div>
    </div>

    <div class="detail-documents">
        <h2>${lang === "id" ? "Dokumen Proyek" : "Project Documents"}</h2>

        ${
            project.documents && project.documents.length > 0
                ? project.documents.map(doc => `
                    <a href="${doc.file}" class="document-card" target="_blank">
                        <div class="document-icon">${doc.type}</div>
                        <div>
                            <h3>${doc.title[lang] || doc.title.id}</h3>
                            <p>${getDocumentText(doc.type, lang)}</p>
                        </div>
                    </a>
                `).join("")
                : `
                    <div class="empty-document">
                        <p>${lang === "id" ? "Dokumen project belum tersedia." : "Project documents are not available yet."}</p>
                    </div>
                `
        }
    </div>
    `;
        return;
    }

    const title = getProjectText(project, "title", lang);
    const description = getProjectText(project, "description", lang);

    projectDetail.innerHTML = `
    <div class="detail-hero">
        <div class="detail-info">
            <p class="section-label">${lang === "id" ? "Detail Proyek" : "Project Detail"}</p>
            <h1>${title}</h1>

            <p class="detail-description">${description}</p>

            ${
                project.github
                    ? `<a href="${project.github}" class="github-link" target="_blank">GitHub Repository</a>`
                    : ""
            }
        </div>

        <div class="detail-cover">
            ${
                project.cover
                    ? `<img src="${project.cover}" alt="${title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                       <div class="cover-placeholder" style="display: none;"></div>`
                    : `<div class="cover-placeholder"></div>`
            }
        </div>
    </div>

    <div class="detail-documents">
        <h2>${lang === "id" ? "Dokumen Proyek" : "Project Documents"}</h2>

        ${
            project.documents && project.documents.length > 0
                ? project.documents.map(doc => `
                    <a href="${doc.file}" class="document-card" target="_blank">
                        <div class="document-icon">${doc.type}</div>
                        <div>
                            <h3>${doc.title[lang] || doc.title.id}</h3>
                            <p>${getDocumentText(doc.type, lang)}</p>
                        </div>
                    </a>
                `).join("")
                : `
                    <div class="empty-document">
                        <p>${lang === "id" ? "Dokumen project belum tersedia." : "Project documents are not available yet."}</p>
                    </div>
                `
        }
    </div>
`;
}

