// ================= CONFIGURATION =================
const CONFIG = {
    animationSpeed: 50,
    starCount: 150,
    particleSpeed: 2,
    typingSpeed: 50,
    scrollThreshold: 100,
    parallaxIntensity: 20
};

// ================= MULTI-LANGUAGE TRANSLATIONS =================
const translations = {
    en: {
        tagline: "Digital Innovation Leader",
        designation: "Senior Digital Transformation Consultant",
        summary: "Driving enterprise-wide digital transformation through AI, cloud technologies, and agile methodologies. 10+ years of experience leading cross-functional teams to deliver innovative solutions that drive business growth and operational excellence.",
        btn_work: "View My Work",
        btn_skills: "Explore Skills",
        btn_download: "Download Resume",
        experience: "Years of Experience",
        profile_text: "Passionate about leveraging cutting-edge technologies to solve complex business challenges and create sustainable competitive advantages."
    },
    hi: {
        tagline: "डिजिटल इनोवेशन लीडर",
        designation: "वरिष्ठ डिजिटल परिवर्तन सलाहकार",
        summary: "AI, क्लाउड टेक्नोलॉजी और एजाइल पद्धतियों के माध्यम से उद्यम-व्यापी डिजिटल परिवर्तन को आगे बढ़ा रहा हूं। व्यवसाय वृद्धि और परिचालन उत्कृष्टता को बढ़ावा देने वाले नवीन समाधान प्रदान करने के लिए क्रॉस-फंक्शनल टीमों का नेतृत्व करने का 10+ वर्ष का अनुभव।",
        btn_work: "मेरा काम देखें",
        btn_skills: "कौशल देखें",
        btn_download: "रिज्यूमे डाउनलोड करें",
        experience: "अनुभव के वर्ष",
        profile_text: "जटिल व्यावसायिक चुनौतियों को हल करने और स्थायी प्रतिस्पर्धात्मक लाभ बनाने के लिए अत्याधुनिक तकनीकों का लाभ उठाने के बारे में भावुक।"
    },
    mr: {
        tagline: "डिजिटल नवकल्पना नेता",
        designation: "ज्येष्ठ डिजिटल परिवर्तन सल्लागार",
        summary: "AI, क्लाउड तंत्रज्ञान आणि चपळ पद्धतींद्वारे उद्योग-व्यापी डिजिटल परिवर्तनाचे नेतृत्व करत आहे. व्यवसाय वाढ आणि कार्यक्षम उत्कृष्टता वाढविणारे नाविन्यपूर्ण उपाय प्रदान करण्यासाठी क्रॉस-फंक्शनल टीमचे नेतृत्व करण्याचा 10+ वर्षांचा अनुभव.",
        btn_work: "माझे काम पहा",
        btn_skills: "कौशल्ये पहा",
        btn_download: "रिझ्युमे डाउनलोड करा",
        experience: "अनुभवाची वर्षे",
        profile_text: "जटिल व्यावसायिक आव्हाने सोडवण्यासाठी आणि शाश्वत स्पर्धात्मक फायदे निर्माण करण्यासाठी अत्याधुनिक तंत्रज्ञानाचा वापर करण्याबद्दल उत्कट."
    },
    te: {
        tagline: "డిజిటల్ ఇన్నోవేషన్ లీడర్",
        designation: "సీనియర్ డిజిటల్ ట్రాన్స్‌ఫార్మేషన్ కన్సల్టెంట్",
        summary: "AI, క్లౌడ్ టెక్నాలజీలు మరియు చురుకైన పద్ధతుల ద్వారా ఎంటర్‌ప్రైజ్-వ్యాప్త డిజిటల్ పరివర్తనను నడిపిస్తున్నాను. వ్యాపార వృద్ధి మరియు కార్యాచరణ శ్రేష్ఠతను పెంచే వినూత్న పరిష్కారాలను అందించడానికి క్రాస్-ఫంక్షనల్ టీమ్‌లకు నాయకత్వం వహించడంలో 10+ సంవత్సరాల అనుభవం.",
        btn_work: "నా పనిని చూడండి",
        btn_skills: "నైపుణ్యాలను అన్వేషించండి",
        btn_download: "రెజ్యూమ్ డౌన్‌లోడ్ చేయండి",
        experience: "అనుభవ సంవత్సరాలు",
        profile_text: "సంక్లిష్ట వ్యాపార సవాళ్లను పరిష్కరించడానికి మరియు స్థిరమైన పోటీ ప్రయోజనాలను సృష్టించడానికి అత్యాధునిక సాంకేతికతలను ఉపయోగించడం పట్ల మక్కువ."
    },
    pa: {
        tagline: "ਡਿਜੀਟਲ ਇਨੋਵੇਸ਼ਨ ਲੀਡਰ",
        designation: "ਸੀਨੀਅਰ ਡਿਜੀਟਲ ਟ੍ਰਾਂਸਫਰਮੇਸ਼ਨ ਸਲਾਹਕਾਰ",
        summary: "AI, ਕਲਾਉਡ ਤਕਨਾਲੋਜੀਆਂ ਅਤੇ ਚੁਸਤ ਵਿਧੀਆਂ ਦੁਆਰਾ ਐਂਟਰਪ੍ਰਾਈਜ਼-ਵਿਆਪਕ ਡਿਜੀਟਲ ਤਬਦੀਲੀ ਨੂੰ ਅੱਗੇ ਵਧਾ ਰਿਹਾ ਹਾਂ। ਕਾਰੋਬਾਰੀ ਵਾਦਾ ਅਤੇ ਸੰਚਾਲਨ ਉੱਤਮਤਾ ਨੂੰ ਵਧਾਉਣ ਵਾਲੇ ਨਵੀਨਤਾ ਭਰਪੂਰ ਹੱਲ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਕਰਾਸ-ਫੰਕਸ਼ਨਲ ਟੀਮਾਂ ਦੀ ਅਗਵਾਈ ਕਰਨ ਦਾ 10+ ਸਾਲਾਂ ਦਾ ਅਨੁਭਵ।",
        btn_work: "ਮੇਰਾ ਕੰਮ ਦੇਖੋ",
        btn_skills: "ਹੁਨਰ ਖੋਜੋ",
        btn_download: "ਰਿਜ਼ਿਊਮ ਡਾਊਨਲੋਡ ਕਰੋ",
        experience: "ਅਨੁਭਵ ਦੇ ਸਾਲ",
        profile_text: "ਗੁੰਝਲਦਾਰ ਕਾਰੋਬਾਰੀ ਚੁਣੌਤੀਆਂ ਨੂੰ ਹੱਲ ਕਰਨ ਅਤੇ ਟਿਕਾਊ ਪ੍ਰਤੀਯੋਗੀ ਲਾਭ ਬਣਾਉਣ ਲਈ ਆਧੁਨਿਕ ਤਕਨਾਲੋਜੀਆਂ ਦਾ ਲਾਭ ਉਠਾਉਣ ਬਾਰੇ ਭਾਵੁਕ।"
    },
    gu: {
        tagline: "ડિજિટલ ઇનોવેશન લીડર",
        designation: "સિનિયર ડિજિટલ ટ્રાન્સફોર્મેશન કન્સલ્ટન્ટ",
        summary: "AI, ક્લાઉડ ટેક્નોલોજી અને ચપળ પદ્ધતિઓ દ્વારા એન્ટરપ્રાઇજ-વ્યાપી ડિજિટલ પરિવર્તનને આગળ ધપાવી રહ્યો છું. વ્યવસાય વૃદ્ધિ અને સંચાલન શ્રેષ્ઠતાને વેગ આપતા નવીન ઉકેલો પ્રદાન કરવા માટે ક્રોસ-ફંક્શનલ ટીમોનું નેતૃત્વ કરવાનો 10+ વર્ષનો અનુભવ.",
        btn_work: "મારું કામ જુઓ",
        btn_skills: "કુશળતા શોધો",
        btn_download: "રેઝ્યુમે ડાઉનલોડ કરો",
        experience: "અનુભવના વર્ષો",
        profile_text: "જટિલ વ્યાપારી પડકારોને હલ કરવા અને ટકાઉ સ્પર્ધાત્મક લાભો બનાવવા માટે અદ્યતન તકનીકોનો લાભ લેવા વિશે ઉત્સાહી."
    }
};

// ================= GLOBAL VARIABLES =================
let currentLanguage = 'en';
let isAnimating = false;
let scrollPosition = 0;
let particleArray = [];
let mouseX = 0;
let mouseY = 0;

// ================= DYNAMIC CONTENT DATA =================
const portfolioData = {
    skills: {
        technical: ['AI/ML', 'Cloud Architecture', 'DevOps', 'Microservices', 'Kubernetes', 'Docker', 'AWS', 'Azure', 'Python', 'Java', 'React', 'Node.js'],
        leadership: ['Agile/Scrum', 'Team Management', 'Strategic Planning', 'Stakeholder Management', 'Change Management'],
        domain: ['Digital Transformation', 'Enterprise Architecture', 'Data Analytics', 'Process Automation', 'Innovation Strategy']
    },
    achievements: [
        { year: 2024, title: 'Led digital transformation initiative', impact: '40% efficiency increase' },
        { year: 2023, title: 'Implemented AI-powered analytics', impact: '$2M cost savings' },
        { year: 2022, title: 'Cloud migration project', impact: '99.9% uptime achieved' }
    ],
    certifications: [
        'AWS Certified Solutions Architect',
        'Certified Scrum Master (CSM)',
        'PMP Certification',
        'Azure Solutions Architect Expert'
    ]
};

// ================= PARTICLE SYSTEM =================
class Particle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * CONFIG.particleSpeed - CONFIG.particleSpeed / 2;
        this.speedY = Math.random() * CONFIG.particleSpeed - CONFIG.particleSpeed / 2;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
            this.x -= dx * 0.02;
            this.y -= dy * 0.02;
        }
        
        // Boundary check
        if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;
    }
    
    draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// ================= LANGUAGE SWITCHER =================
function updateLanguage(lang) {
    if (isAnimating) return;
    isAnimating = true;
    
    currentLanguage = lang;
    const translation = translations[lang];
    
    // Fade out animation
    document.querySelectorAll('[data-key]').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(-10px)';
    });
    
    setTimeout(() => {
        // Update content
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translation[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
                    element.value = translation[key];
                } else {
                    element.textContent = translation[key];
                }
            }
        });
        
        // Fade in animation
        document.querySelectorAll('[data-key]').forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 50);
        });
        
        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        isAnimating = false;
    }, 300);
    
    // Show language change notification
    showNotification(`Language changed to ${getLanguageName(lang)}`, 'info');
}

function getLanguageName(code) {
    const names = {
        en: 'English',
        hi: 'हिंदी',
        mr: 'मराठी',
        te: 'తెలుగు',
        pa: 'ਪੰਜਾਬੀ',
        gu: 'ગુજરાતી'
    };
    return names[code] || code;
}

// ================= EVENT LISTENERS =================
document.addEventListener('DOMContentLoaded', function() {
    
    // Language Switcher
    const languageSwitcher = document.getElementById('languageSwitcher');
    
    // Load saved language preference or default to English
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    languageSwitcher.value = savedLanguage;
    updateLanguage(savedLanguage);
    
    // Language change event
    languageSwitcher.addEventListener('change', function(e) {
        updateLanguage(e.target.value);
    });
    
    // ================= NAVBAR SCROLL EFFECT WITH PROGRESS =================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    // Create scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        width: 0%;
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (currentScroll / docHeight) * 100;
        
        // Update progress bar
        progressBar.style.width = scrollPercent + '%';
        
        // Navbar behavior
        if (currentScroll > CONFIG.scrollThreshold) {
            navbar.classList.add('scrolled');
            
            // Hide navbar on scroll down, show on scroll up
            if (currentScroll > lastScroll && currentScroll > 500) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
        scrollPosition = currentScroll;
    });
    
    // ================= SMOOTH SCROLL FOR NAVIGATION =================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ================= ANIMATED SKILLS BACKGROUND =================
    const skillsBg = document.querySelector('.skills-bg');
    if (skillsBg) {
        // Add more dynamic skill keywords
        const skills = [
            'AI', 'ML', 'Cloud', 'DevOps', 'Agile', 'Digital Strategy',
            'Innovation', 'Transformation', 'Leadership', 'Analytics',
            'Automation', 'Microservices', 'Kubernetes', 'Docker',
            'AWS', 'Azure', 'Python', 'Java', 'React', 'Node.js',
            'Data Science', 'GenAI', 'LLM', 'Blockchain', 'IoT'
        ];
        
        // You can dynamically generate more skill elements if needed
    }
    
    // ================= PROFILE CARD ADVANCED 3D EFFECTS =================
    const profileCard = document.querySelector('.profile-card');
    
    if (profileCard) {
        let bounds;
        
        function rotateToMouse(e) {
            bounds = profileCard.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const leftX = mouseX - bounds.x;
            const topY = mouseY - bounds.y;
            const center = {
                x: leftX - bounds.width / 2,
                y: topY - bounds.height / 2
            };
            const distance = Math.sqrt(center.x**2 + center.y**2);
            
            profileCard.style.transform = `
                perspective(1000px)
                rotateX(${center.y / CONFIG.parallaxIntensity}deg)
                rotateY(${-center.x / CONFIG.parallaxIntensity}deg)
                translateY(-10px)
                scale3d(1.05, 1.05, 1.05)
            `;
            
            profileCard.style.boxShadow = `
                ${-center.x / 5}px ${-center.y / 5}px 50px rgba(0, 0, 0, 0.4),
                0 0 30px rgba(99, 102, 241, 0.3)
            `;
        }
        
        profileCard.addEventListener('mouseenter', () => {
            bounds = profileCard.getBoundingClientRect();
            document.addEventListener('mousemove', rotateToMouse);
        });
        
        profileCard.addEventListener('mouseleave', () => {
            document.removeEventListener('mousemove', rotateToMouse);
            profileCard.style.transform = `
                perspective(1000px)
                rotateX(0)
                rotateY(0)
                translateY(0)
                scale3d(1, 1, 1)
            `;
            profileCard.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.3)';
        });
        
        // Click effect
        profileCard.addEventListener('click', () => {
            profileCard.style.animation = 'pulse 0.5s ease';
            setTimeout(() => {
                profileCard.style.animation = '';
            }, 500);
        });
    }
    
    // ================= ANIMATED TYPING EFFECT =================
    function typeWriter(element, text, speed = CONFIG.typingSpeed, callback) {
        let i = 0;
        element.textContent = '';
        element.style.borderRight = '2px solid var(--primary)';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                element.style.borderRight = 'none';
                if (callback) callback();
            }
        }
        
        type();
    }
    
    // ================= TEXT SCRAMBLE EFFECT =================
    class TextScramble {
        constructor(element) {
            this.element = element;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        
        setText(newText) {
            const oldText = this.element.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        
        update() {
            let output = '';
            let complete = 0;
            
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            
            this.element.innerHTML = output;
            
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }
    
    // ================= INTERSECTION OBSERVER FOR ANIMATIONS =================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // ================= DYNAMIC STAR GENERATION =================
    function createStars() {
        const starsContainer = document.querySelector('.stars');
        if (!starsContainer) return;
        
        const numberOfStars = CONFIG.starCount;
        
        // Clear existing stars
        starsContainer.innerHTML = '';
        
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.position = 'absolute';
            star.style.width = Math.random() * 3 + 'px';
            star.style.height = star.style.width;
            star.style.backgroundColor = 'white';
            star.style.borderRadius = '50%';
            star.style.top = Math.random() * 100 + '%';
            star.style.left = Math.random() * 100 + '%';
            star.style.opacity = Math.random() * 0.8 + 0.2;
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.boxShadow = `0 0 ${Math.random() * 5 + 2}px rgba(255, 255, 255, 0.8)`;
            
            starsContainer.appendChild(star);
        }
    }
    
    // ================= CANVAS PARTICLE SYSTEM =================
    function initParticleCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particleCanvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
        canvas.style.opacity = '0.3';
        document.body.insertBefore(canvas, document.body.firstChild);
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Create particles
        for (let i = 0; i < 50; i++) {
            particleArray.push(new Particle());
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particleArray.forEach(particle => {
                particle.update();
                particle.draw(ctx);
            });
            
            // Draw connections
            particleArray.forEach((particle1, i) => {
                particleArray.slice(i + 1).forEach(particle2 => {
                    const dx = particle1.x - particle2.x;
                    const dy = particle1.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particle1.x, particle1.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.stroke();
                    }
                });
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
        
        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // ================= DOWNLOAD PDF FUNCTIONALITY =================
    const downloadBtn = document.getElementById('downloadPDF');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add a loading state
            const originalText = this.textContent;
            this.textContent = 'Downloading...';
            this.style.pointerEvents = 'none';
            
            // Simulate download (replace with actual download logic)
            setTimeout(() => {
                // Create a temporary link to trigger download
                const link = document.createElement('a');
                link.href = 'resume.pdf';
                link.download = 'Abhinandan_Mishra_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Reset button
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
                
                // Show success message (optional)
                showNotification('Resume downloaded successfully!');
            }, 1000);
        });
    }
    
    // ================= ENHANCED NOTIFICATION SYSTEM =================
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        document.querySelectorAll('.custom-notification').forEach(n => n.remove());
        
        const notification = document.createElement('div');
        notification.className = 'custom-notification';
        notification.innerHTML = `
            <div class="notification-icon">
                ${getNotificationIcon(type)}
            </div>
            <div class="notification-content">
                <div class="notification-message">${message}</div>
            </div>
            <button class="notification-close" onclick="this.parentElement.remove()">×</button>
        `;
        
        const styles = {
            success: { bg: '#10b981', icon: '✓' },
            error: { bg: '#ef4444', icon: '✕' },
            warning: { bg: '#f59e0b', icon: '⚠' },
            info: { bg: '#3b82f6', icon: 'ℹ' }
        };
        
        const style = styles[type] || styles.info;
        
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            padding: 1rem 1.5rem;
            background: ${style.bg};
            color: white;
            border-radius: 0.75rem;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 1rem;
            animation: slideInRight 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            max-width: 350px;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Auto dismiss
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }
    
    function getNotificationIcon(type) {
        const icons = {
            success: '<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>',
            error: '<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 20 20" fill="white"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>'
        };
        return icons[type] || icons.info;
    }
    
    // ================= ENHANCED KEYBOARD SHORTCUTS =================
    const shortcuts = {
        'k': () => languageSwitcher.focus(), // Ctrl/Cmd + K
        'h': () => window.scrollTo({ top: 0, behavior: 'smooth' }), // Ctrl/Cmd + H (Home)
        'd': () => document.getElementById('downloadPDF')?.click(), // Ctrl/Cmd + D
        '/': () => showShortcutsModal() // Show shortcuts help
    };
    
    document.addEventListener('keydown', function(e) {
        // Check for Ctrl/Cmd modifier
        if ((e.ctrlKey || e.metaKey) && shortcuts[e.key]) {
            e.preventDefault();
            shortcuts[e.key]();
        }
        
        // ESC to close any modals
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal, .custom-notification').forEach(el => el.remove());
        }
    });
    
    // Show keyboard shortcuts modal
    function showShortcutsModal() {
        const modal = document.createElement('div');
        modal.className = 'shortcuts-modal';
        modal.innerHTML = `
            <div class="modal-backdrop" onclick="this.parentElement.remove()"></div>
            <div class="modal-content">
                <h3>⌨️ Keyboard Shortcuts</h3>
                <ul>
                    <li><kbd>Ctrl/Cmd</kbd> + <kbd>K</kbd> - Focus Language Switcher</li>
                    <li><kbd>Ctrl/Cmd</kbd> + <kbd>H</kbd> - Scroll to Top</li>
                    <li><kbd>Ctrl/Cmd</kbd> + <kbd>D</kbd> - Download Resume</li>
                    <li><kbd>Ctrl/Cmd</kbd> + <kbd>/</kbd> - Show This Help</li>
                    <li><kbd>Esc</kbd> - Close Modals</li>
                </ul>
                <button class="btn primary" onclick="this.closest('.shortcuts-modal').remove()">Got it!</button>
            </div>
        `;
        
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10002;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        document.body.appendChild(modal);
    }
    
    // ================= PERFORMANCE OPTIMIZATION =================
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ================= PERFORMANCE MONITORING =================
    const performanceMetrics = {
        startTime: performance.now(),
        interactions: 0,
        scrolls: 0,
        languageChanges: 0
    };
    
    function logPerformance() {
        const loadTime = performance.now() - performanceMetrics.startTime;
        console.log('%c📊 Performance Metrics', 'color: #10b981; font-size: 14px; font-weight: bold;');
        console.log(`⏱️ Page Load Time: ${loadTime.toFixed(2)}ms`);
        console.log(`🖱️ User Interactions: ${performanceMetrics.interactions}`);
        console.log(`📜 Scroll Events: ${performanceMetrics.scrolls}`);
        console.log(`🌐 Language Changes: ${performanceMetrics.languageChanges}`);
    }
    
    // Log performance after 5 seconds
    setTimeout(logPerformance, 5000);
    
    // ================= ANALYTICS TRACKING =================
    function trackEvent(category, action, label) {
        performanceMetrics.interactions++;
        console.log(`📈 Event: ${category} | ${action} | ${label}`);
        
        // Add your analytics service here (Google Analytics, Mixpanel, etc.)
        // Example: gtag('event', action, { event_category: category, event_label: label });
    }
    
    // Track button clicks with more detail
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const action = this.getAttribute('data-key') || this.textContent;
            const href = this.getAttribute('href');
            trackEvent('Button', 'Click', action);
            
            // Add ripple effect
            createRipple(e, this);
        });
    });
    
    // Ripple effect for buttons
    function createRipple(event, element) {
        const ripple = document.createElement('span');
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            top: ${y}px;
            left: ${x}px;
            pointer-events: none;
        `;
        
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        element.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', debounce(() => {
        performanceMetrics.scrolls++;
        const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercent > maxScroll) {
            maxScroll = Math.floor(scrollPercent / 25) * 25;
            if ([25, 50, 75, 100].includes(maxScroll)) {
                trackEvent('Scroll', 'Depth', `${maxScroll}%`);
            }
        }
    }, 500));
    
    // ================= CONSOLE BRANDING =================
    console.log('%c🚀 Welcome to Abhinandan Mishra\'s Portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
    console.log('%c✨ Digital Transformation Consultant', 'color: #8b5cf6; font-size: 14px; font-weight: 600;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #4b5563;');
    console.log('%c💼 Interested in the code? Let\'s connect!', 'color: #10b981; font-size: 12px;');
    console.log('%c⌨️  Press Ctrl/Cmd + / to see keyboard shortcuts', 'color: #3b82f6; font-size: 11px;');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #4b5563;');
    console.log('%cBuilt with ❤️ using vanilla JavaScript', 'color: #6b7280; font-size: 10px; font-style: italic;');
    
    // Log portfolio data
    console.log('%c📊 Portfolio Data Available:', 'color: #f59e0b; font-weight: bold;');
    console.table(portfolioData.skills);
    
});

// ================= ADDITIONAL CSS ANIMATIONS =================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .dud {
        color: var(--primary);
        opacity: 0.7;
    }
    
    .custom-notification {
        font-family: var(--font-body);
    }
    
    .notification-close {
        background: transparent;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.8;
        transition: opacity 0.2s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    .notification-icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .shortcuts-modal .modal-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    }
    
    .shortcuts-modal .modal-content {
        position: relative;
        background: var(--bg-card);
        border: 1px solid var(--border);
        border-radius: 1rem;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        animation: fadeInUp 0.3s ease;
        z-index: 1;
    }
    
    .shortcuts-modal h3 {
        color: var(--text-light);
        margin-bottom: 1.5rem;
        font-family: var(--font-heading);
    }
    
    .shortcuts-modal ul {
        list-style: none;
        padding: 0;
        margin: 0 0 1.5rem 0;
    }
    
    .shortcuts-modal li {
        color: var(--text-gray);
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border);
    }
    
    .shortcuts-modal li:last-child {
        border-bottom: none;
    }
    
    .shortcuts-modal kbd {
        background: var(--bg-dark);
        color: var(--primary);
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-family: monospace;
        font-size: 0.9em;
        border: 1px solid var(--border);
        margin: 0 0.25rem;
    }
    
    .scroll-progress {
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
    }
`;
document.head.appendChild(style);

// ================= UTILITY FUNCTIONS =================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ================= EASTER EGG =================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    showNotification('🎮 Konami Code Activated! You found the secret!', 'success');
    document.body.style.animation = 'pulse 0.5s ease 3';
    
    // Add rainbow effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
        body { animation: rainbow 3s linear infinite !important; }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => style.remove(), 10000);
}

// ================= EXPORT FOR MODULE USAGE =================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        updateLanguage,
        translations,
        portfolioData,
        CONFIG
    };
}

// ================= SERVICE WORKER REGISTRATION (OPTIONAL) =================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment below to enable service worker for PWA
        // navigator.serviceWorker.register('/service-worker.js')
        //     .then(registration => console.log('SW registered:', registration))
        //     .catch(error => console.log('SW registration failed:', error));
    });
}
