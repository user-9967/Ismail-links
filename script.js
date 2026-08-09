const icons = {

    instagram: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm9.55 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
        </svg>
    `,

    linkedin: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.97V21H9V9Z"/>
        </svg>
    `,

    github: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.18c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.39.96.1-.75.4-1.26.74-1.55-2.57-.29-5.27-1.29-5.27-5.75 0-1.27.45-2.3 1.2-3.11-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.17 1.19a11 11 0 0 1 5.77 0c2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.75.81 1.2 1.84 1.2 3.11 0 4.47-2.71 5.45-5.29 5.74.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/>
        </svg>
    `,

    youtube: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.7V8.3l6.3 3.7-6.3 3.7Z"/>
        </svg>
    `,

    mail: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.4l9 6.1 9-6.1V6H3Zm18 12V8.8l-8.44 5.72a1 1 0 0 1-1.12 0L3 8.8V18h18Z"/>
        </svg>
    `,

    code: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m8.7 17.7-5.7-5.7 5.7-5.7 1.4 1.4L5.8 12l4.3 4.3-1.4 1.4Zm6.6 0-1.4-1.4 4.3-4.3-4.3-4.3 1.4-1.4 5.7 5.7-5.7 5.7ZM13.1 4l-3.2 16-2-.4 3.2-16 2 .4Z"/>
        </svg>
    `,

    rocket: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13.1 3.1c2.8-2.2 5.5-2.5 7.8-2.1.4 2.3.1 5-2.1 7.8l-4.1 4.9-3.6-3.6 4.9-4.1-2.9 2.9-3.5-3.5 3.5-2.3ZM8.6 13.6l1.8 1.8-3.2 3.2-3.4.3.3-3.4 3.2-3.2 1.3 1.3ZM6.2 20.1c-.7.7-1.8 1-2.8 1.1.1-1 .4-2.1 1.1-2.8l1.7-1.7 1.7 1.7-1.7 1.7Zm12-10.6c.7.7 1.8.7 2.5 0 .7-.7.7-1.8 0-2.5-.7-.7-1.8-.7-2.5 0-.7.7-.7 1.8 0 2.5Z"/>
        </svg>
    `
};


/* ================================
   SOCIAL LINKS
================================ */

const socialItems = [

    ["instagram", profileLinks.instagram],

    ["linkedin", profileLinks.linkedin],

    ["github", profileLinks.github],

    ["youtube", profileLinks.youtube],

    ["mail", profileLinks.email]

];


const socialRow =
    document.getElementById("socialRow");


socialItems.forEach(([icon, url]) => {

    const a = document.createElement("a");

    a.className = "social";

    /*
       If URL is missing, use #
       instead of crashing JavaScript.
    */

    const safeUrl = url || "#";

    a.href = safeUrl;

    if (safeUrl.startsWith("http")) {

        a.target = "_blank";

        a.rel = "noopener noreferrer";

    }

    a.innerHTML =
        icons[icon];

    socialRow.appendChild(a);

});


/* ================================
   MAIN LINK CARDS
================================ */

const list =
    document.getElementById("linksList");


links.forEach((link, index) => {

    const a =
        document.createElement("a");

    a.className =
        "link-card";

    const safeUrl =
        link.url || "#";

    a.href =
        safeUrl;

    if (safeUrl.startsWith("http")) {

        a.target = "_blank";

        a.rel =
            "noopener noreferrer";

    }

    a.style.animation =
        `cardIn .55s ease ${index * 70}ms both`;


    a.innerHTML = `

        <span class="link-icon">

            ${icons[link.icon] || icons.code}

        </span>

        <span class="link-copy">

            <span class="link-title">

                ${link.title}

            </span>

            <span class="link-desc">

                ${link.description}

            </span>

        </span>

        <span class="link-arrow">

            →

        </span>

    `;


    list.appendChild(a);

});


/* ================================
   YEAR
================================ */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ================================
   THEME BUTTON
================================ */

const themeBtn =
    document.getElementById("themeBtn");


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body
                .classList
                .toggle("light");

        }
    );

}


/* ================================
   CARD ANIMATION
================================ */

const style =
    document.createElement("style");


style.textContent = `

@keyframes cardIn {

    from {

        opacity: 0;

        transform:
            translateX(25px);

    }

    to {

        opacity: 1;

        transform:
            translateX(0);

    }

}

`;


document.head.appendChild(style);
