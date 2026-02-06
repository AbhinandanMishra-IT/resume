document.addEventListener("DOMContentLoaded", () => {

    /* ================= EXPERIENCE BAR ================= */
    const fill = document.querySelector(".fill");
    if (fill) fill.style.width = "85%";

    /* ================= TRANSLATIONS ================= */
    const translations = {
        en: {
            tagline: "EXECUTIVE DIGITAL TRANSFORMATION",
            designation: "IT Infrastructure Leader | Cloud | Operations | Procurement",
            summary:
                "Driving enterprise-scale IT infrastructure, cloud migration, and cost-optimized operations across multi-location environments.",
            btn_work: "View My Work",
            btn_skills: "Core Expertise & Skills",
            btn_download: "Download Resume",
            experience: "Years of Experience",
            profile_text:
                "Executive presence. Transformation at scale. Strategic leadership blending cloud, automation, and governance."
        },
        hi: {
            tagline: "कार्यकारी डिजिटल परिवर्तन",
            designation: "आईटी इंफ्रास्ट्रक्चर लीडर | क्लाउड | ऑपरेशंस",
            summary:
                "एंटरप्राइज़ स्तर पर आईटी इंफ्रास्ट्रक्चर और क्लाउड परिवर्तन का नेतृत्व।",
            btn_work: "मेरा कार्य देखें",
            btn_skills: "मुख्य कौशल",
            btn_download: "रिज़्यूमे डाउनलोड",
            experience: "अनुभव के वर्ष",
            profile_text: "रणनीतिक नेतृत्व। बड़े स्तर पर परिवर्तन।"
        }
        // (You can keep other languages as-is)
    };

    /* ================= LANGUAGE SWITCH ================= */
    const switcher = document.getElementById("languageSwitcher");

    function updateLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.dataset.key;
            if (!translations[lang] || !translations[lang][key]) return;

            el.classList.add("text-fade-out");
            setTimeout(() => {
                el.textContent = translations[lang][key];
                el.classList.remove("text-fade-out");
                el.classList.add("text-fade-in");
            }, 200);
            setTimeout(() => el.classList.remove("text-fade-in"), 500);
        });
    }

    if (switcher) {
        const browserLang = navigator.language.slice(0, 2);
        const defaultLang = translations[browserLang] ? browserLang : "en";
        switcher.value = defaultLang;
        updateLanguage(defaultLang);
        switcher.addEventListener("change", () => updateLanguage(switcher.value));
    }

    /* ================= STAR FIELD (DOM, LIGHT) ================= */
    const starsContainer = document.querySelector(".stars");
    if (starsContainer) {
        for (let i = 0; i < 60; i++) {
            const star = document.createElement("span");
            star.className = "star";
            star.style.top = Math.random() * 100 + "%";
            star.style.left = Math.random() * 100 + "%";
            star.style.opacity = Math.random() * 0.4 + 0.1;
            star.style.animationDelay = Math.random() * 20 + "s";
            starsContainer.appendChild(star);
        }
    }

    /* ================= SUBTLE MOUSE PARALLAX (FINAL) ================= */
    if (
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
        window.innerWidth > 1024
    ) {
        const heroLeft = document.querySelector(".hero-left");
        const heroRight = document.querySelector(".hero-right");

        document.addEventListener("mousemove", (e) => {
            const x = (e.clientX / window.innerWidth - 0.5);
            const y = (e.clientY / window.innerHeight - 0.5);

            if (heroLeft)
                heroLeft.style.transform =
                    `translate(${x * 5}px, ${y * 5}px)`;

            if (heroRight)
                heroRight.style.transform =
                    `translate(${x * -3}px, ${y * -3}px)`;
        });
    }

    /* ================= PDF DOWNLOAD ================= */
    const pdfBtn = document.getElementById("downloadPDF");
    if (pdfBtn && window.html2pdf) {
        pdfBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const hero = document.querySelector(".hero");
            if (!hero) return;

            html2pdf().set({
                margin: 0.4,
                filename: "Abhinandan_Mishra_Resume.pdf",
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, backgroundColor: "#ffffff" },
                jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
            }).from(hero).save();
        });
    }

});
