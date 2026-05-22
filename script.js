// Render Cert
function renderCerts() {
    const container = document.getElementById("container-certs");
    let htmlContent = "";

    certsData.forEach((cert) => {
        htmlContent += `
            <a href="${cert.link}" target="_blank" class="relative group aspect-video rounded-md overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex-shrink-0 cursor-pointer block">
                <img src="${cert.bgImage}" alt="${cert.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                
                <div class="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-2 text-center backdrop-blur-sm">
                    <i class="${cert.icon} text-ong-100 mb-1 text-lg drop-shadow-md"></i>
                    <h3 class="text-white font-medium text-[10px] leading-snug line-clamp-2">${cert.title}</h3>
                </div>
            </a>
        `;
    });
    container.innerHTML = htmlContent;
}

// Render Projects
function renderProjects(dataArray, containerId, isMini = false) {
    const container = document.getElementById(containerId);
    let htmlContent = "";

    dataArray.forEach((project) => {
        const tagsHtml = project.tags
            .map(
                (tag) =>
                    `<span class="text-[11px] font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded">${tag}</span>`,
            )
            .join("");

        const isVideo = project.image.toLowerCase().endsWith(".mp4");
        const mediaHtml = isVideo
            ? `<video src="${project.image}" autoplay loop muted playsinline class="w-full h-full object-fill object-top"></video>`
            : `<img src="${project.image}" alt="${project.title}" class="w-full h-full object-fill object-top" />`;

        const previewHtml = project.previewLink
            ? `<a href="${project.previewLink}" target="_blank" class="text-slate-400 hover:text-ong-600 transition-colors bg-slate-50 p-2 rounded-md border border-slate-200" title="Live Demo"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>`
            : "";

        const containerClasses =
            "group border border-slate-100 rounded-md overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col bg-white";

        const mediaWrapperClasses = isMini
            ? "w-full aspect-square bg-slate-100 overflow-hidden relative border-b border-slate-100 flex-shrink-0"
            : "w-full aspect-video bg-slate-100 overflow-hidden relative border-b border-slate-100 flex-shrink-0";

        const contentWrapperClasses = isMini
            ? "p-5 flex-grow flex flex-col"
            : "p-6 md:p-8 flex-grow flex flex-col";

        const descFontSize = isMini ? "text-sm" : "text-xs";

        htmlContent += `
            <div class="${containerClasses}">
                <div class="${mediaWrapperClasses}">
                    ${mediaHtml}
                </div>
                <div class="${contentWrapperClasses}">
                    <div class="flex justify-between items-start mb-2 gap-4">
                        <h3 class="text-lg font-bold text-slate-900 group-hover:text-ong-600 transition-colors leading-tight">
                            ${project.title}
                        </h3>
                        <div class="flex gap-2 flex-shrink-0">
                            ${previewHtml}
                            <a href="${project.githubLink}" target="_blank" class="text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-md border border-slate-200" title="Source Code">
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <p class="text-slate-600 mb-4 ${descFontSize} leading-relaxed flex-grow">
                        ${project.desc}
                    </p>
                    <div class="flex flex-wrap gap-2 mt-auto pt-2">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// Tab Switch Logic
function switchTab(tabId) {
    const btnFeatured = document.getElementById("btn-featured");
    const btnMini = document.getElementById("btn-mini");
    const contFeatured = document.getElementById("container-featured");
    const contMini = document.getElementById("container-mini");

    const activeBtnClass = ["border-ong-600", "text-ong-600"];
    const inactiveBtnClass = ["border-transparent", "text-slate-500"];

    if (tabId === "featured") {
        contFeatured.classList.remove("hidden-tab");
        contMini.classList.add("hidden-tab");

        btnFeatured.classList.add(...activeBtnClass);
        btnFeatured.classList.remove(...inactiveBtnClass);

        btnMini.classList.add(...inactiveBtnClass);
        btnMini.classList.remove(...activeBtnClass);
    } else {
        contFeatured.classList.add("hidden-tab");
        contMini.classList.remove("hidden-tab");

        btnMini.classList.add(...activeBtnClass);
        btnMini.classList.remove(...inactiveBtnClass);

        btnFeatured.classList.add(...inactiveBtnClass);
        btnFeatured.classList.remove(...activeBtnClass);
    }
}

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    renderCerts();
    renderProjects(projectsData, "container-featured", false);
    renderProjects(miniProjectsData, "container-mini", true);
});
