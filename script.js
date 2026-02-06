window.addEventListener("load", () => {
    const fill = document.querySelector(".fill");
    fill.style.width = "85%"; // change based on experience
});
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
        designation: "आईटी इंफ्रास्ट्रक्चर लीडर | क्लाउड | ऑपरेशंस | प्रोक्योरमेंट",
        summary:
            "एंटरप्राइज़ स्तर पर आईटी इंफ्रास्ट्रक्चर, क्लाउड माइग्रेशन और लागत-अनुकूल संचालन का नेतृत्व।",
        btn_work: "मेरा कार्य देखें",
        btn_skills: "मुख्य विशेषज्ञता और कौशल",
        btn_download: "रिज़्यूमे डाउनलोड करें",
        experience: "अनुभव के वर्ष",
        profile_text:
            "कार्यकारी उपस्थिति। बड़े स्तर पर परिवर्तन। रणनीतिक नेतृत्व।"
    },

    mr: {
        tagline: "कार्यकारी डिजिटल परिवर्तन",
        designation: "आयटी पायाभूत सुविधा लीडर | क्लाउड | ऑपरेशन्स | खरेदी",
        summary:
            "एंटरप्राइझ स्तरावरील आयटी पायाभूत सुविधा आणि क्लाउड परिवर्तनाचे नेतृत्व.",
        btn_work: "माझे काम पहा",
        btn_skills: "मुख्य कौशल्ये",
        btn_download: "रिझ्युमे डाउनलोड करा",
        experience: "अनुभवाची वर्षे",
        profile_text:
            "कार्यकारी उपस्थिती. मोठ्या प्रमाणावर परिवर्तन."
    },

    te: {
        tagline: "ఎగ్జిక్యూటివ్ డిజిటల్ ట్రాన్స్‌ఫార్మేషన్",
        designation: "ఐటీ ఇన్ఫ్రాస్ట్రక్చర్ లీడర్ | క్లౌడ్ | ఆపరేషన్స్",
        summary:
            "ఎంటర్‌ప్రైజ్ స్థాయిలో ఐటీ మౌలిక సదుపాయాలు మరియు క్లౌడ్ మార్పును నడిపించడం.",
        btn_work: "నా పని చూడండి",
        btn_skills: "ప్రధాన నైపుణ్యాలు",
        btn_download: "రెజ్యూమ్ డౌన్‌లోడ్",
        experience: "అనుభవ సంవత్సరాలు",
        profile_text:
            "నాయకత్వ స్థాయి మార్పు. వ్యూహాత్మక డిజిటల్ నాయకత్వం."
    },

    pa: {
        tagline: "ਐਗਜ਼ਿਕਿਊਟਿਵ ਡਿਜ਼ੀਟਲ ਟ੍ਰਾਂਸਫ਼ਾਰਮੇਸ਼ਨ",
        designation: "ਆਈਟੀ ਢਾਂਚਾ ਲੀਡਰ | ਕਲਾਊਡ | ਓਪਰੇਸ਼ਨ",
        summary:
            "ਐਂਟਰਪ੍ਰਾਈਜ਼ ਪੱਧਰ 'ਤੇ ਆਈਟੀ ਅਤੇ ਕਲਾਊਡ ਤਬਦੀਲੀ ਦਾ ਨੇਤ੍ਰਿਤਵ।",
        btn_work: "ਮੇਰਾ ਕੰਮ ਵੇਖੋ",
        btn_skills: "ਮੁੱਖ ਹੁਨਰ",
        btn_download: "ਰਿਜ਼ਿਊਮੇ ਡਾਊਨਲੋਡ",
        experience: "ਅਨੁਭਵ ਦੇ ਸਾਲ",
        profile_text:
            "ਕਾਰਜਕਾਰੀ ਮੌਜੂਦਗੀ। ਵੱਡੇ ਪੱਧਰ 'ਤੇ ਤਬਦੀਲੀ।"
    },

    gu: {
        tagline: "એક્ઝિક્યુટિવ ડિજિટલ ટ્રાન્સફોર્મેશન",
        designation: "આઈટી ઇન્ફ્રાસ્ટ્રક્ચર લીડર | ક્લાઉડ | ઓપરેશન્સ",
        summary:
            "એન્ટરપ્રાઇઝ સ્તરે આઈટી માળખું અને ક્લાઉડ પરિવર્તનનું નેતૃત્વ.",
        btn_work: "મારું કામ જુઓ",
        btn_skills: "મુખ્ય કુશળતાઓ",
        btn_download: "રિઝ્યૂમે ડાઉનલોડ",
        experience: "અનુભવના વર્ષો",
        profile_text:
            "એક્ઝિક્યુટિવ હાજરી. મોટા સ્તરે પરિવર્તન."
    }
};

/* LANGUAGE SWITCH */
const switcher = document.getElementById("languageSwitcher");

switcher.addEventListener("change", () => {
    const lang = switcher.value;
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[lang][key];
    });
});

/* DEFAULT LANGUAGE */
switcher.value = "en";
switcher.dispatchEvent(new Event("change"));
/* ================= LANGUAGE SWITCH WITH FADE ================= */

const switcher = document.getElementById("languageSwitcher");

function updateLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");

        el.classList.add("text-fade-out");

        setTimeout(() => {
            el.textContent = translations[lang][key];
            el.classList.remove("text-fade-out");
            el.classList.add("text-fade-in");
        }, 200);

        setTimeout(() => {
            el.classList.remove("text-fade-in");
        }, 500);
    });
}

switcher.addEventListener("change", () => {
    updateLanguage(switcher.value);
});

/* Default language */
updateLanguage("en");


/* ================= BACKGROUND SKILLS ANIMATION ================= */

const skills = [
    "Cloud Infrastructure",
    "AWS",
    "GCP",
    "IT Operations",
    "Procurement",
    "Vendor Management",
    "Cost Optimization",
    "Data Center",
    "Networking",
    "Firewalls",
    "Automation",
    "IT Governance",
    "Security",
    "SLA Management"
];

const skillsContainer = document.querySelector(".skills-bg");
if (skillsContainer) {

    function createSkill() {
        const skill = document.createElement("span");
        skill.className = "skill-float";
        skill.innerText = skills[Math.floor(Math.random() * skills.length)];

        skill.style.left = Math.random() * 100 + "%";
        skill.style.fontSize = Math.random() * 6 + 12 + "px";
        skill.style.animationDuration = Math.random() * 20 + 30 + "s";

        skillsContainer.appendChild(skill);

        setTimeout(() => skill.remove(), 60000);
    }

    setInterval(createSkill, 1800);
}

