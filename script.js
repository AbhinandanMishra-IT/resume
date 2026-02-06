document.addEventListener("DOMContentLoaded", () => {

    /* EXPERIENCE BAR */
    const fill = document.querySelector(".fill");
    if (fill) fill.style.width = "85%";

    /* TRANSLATIONS */
    const translations = {
        en: {
            tagline: "EXECUTIVE DIGITAL TRANSFORMATION",
            designation: "IT Infrastructure Leader | Cloud | Operations",
            summary: "Driving enterprise-scale IT infrastructure and cloud transformation.",
            btn_work: "View My Work",
            btn_skills: "Core Expertise",
            btn_download: "Download Resume",
            experience: "Years of Experience",
            profile_text: "Executive presence. Transformation at scale."
        },
        hi: {
            tagline: "कार्यकारी डिजिटल परिवर्तन",
            designation: "आईटी इंफ्रास्ट्रक्चर लीडर | क्लाउड",
            summary: "एंटरप्राइज़ स्तर पर आईटी और क्लाउड परिवर्तन।",
            btn_work: "मेरा काम",
            btn_skills: "मुख्य कौशल",
            btn_download: "रिज़्यूमे",
            experience: "अनुभव",
            profile_text: "रणनीतिक नेतृत्व और परिवर्तन।"
        }
    };

    const switcher = document.getElementById("languageSwitcher");

    function updateLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(el => {
            el.textContent = translations[lang][el.dataset.key];
        });
    }

    switcher.value = "en";
    updateLanguage("en");
    switcher.addEventListener("change", () => updateLanguage(switcher.value));

    /* FLOATING SKILLS */
    const skills = ["Cloud", "AWS", "GCP", "DevOps", "Security", "Automation"];
    const container = document.querySelector(".skills-bg");

    if (container) {
        setInterval(() => {
            const s = document.createElement("span");
            s.className = "skill-float";
            s.textContent = skills[Math.floor(Math.random() * skills.length)];
            s.style.left = Math.random() * 100 + "%";
            s.style.animationDuration = "40s";
            container.appendChild(s);
            setTimeout(() => s.remove(), 60000);
        }, 2000);
    }
});
