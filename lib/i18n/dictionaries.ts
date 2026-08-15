import type { Language } from "./types"

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly (infer U)[]
      ? DeepStringify<U>[]
      : T[K] extends object
        ? DeepStringify<T[K]>
        : T[K]
}

const en = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    certifications: "Certifications",
    awards: "Awards",
    contact: "Contact",
    toggleMenu: "Toggle menu",
    language: "Language",
  },
  hero: {
    available: "Available for work",
    role: "Solution Architect",
    tagline: "Building scalable infrastructure and intelligent systems.",
    viewProjects: "View Projects",
    downloadCv: "Download my CV",
    certifications: "Certifications",
    contact: "Contact",
    scrollDown: "Scroll down",
  },
  projects: {
    label: "01",
    title: "Featured Projects",
    prev: "Previous project",
    next: "Next project",
    swipeHint: "← Swipe to view more projects →",
    prizeWinner: "PRIZE WINNER",
    viewDemo: "View Live Demo",
    items: {
      1: {
        title: "Harbor: MFU Student Center",
        description:
          "A personal portfolio website showcasing projects, skills, and achievements. Built with Next.js and Tailwind CSS for a modern, responsive design.",
      },
      2: {
        title: "Eco-Point Landing Page",
        description:
          "Award-winning landing page developed during the Hylife Hackathon in Chiang Rai. Led the frontend development to create a high-conversion user experience, securing the 2nd Runner Up prize.",
      },
      3: {
        title: "Blood of the Rift: Top 10 Finalist",
        description:
          "Finalist in the 2025 Generative AI Game Jam. Developed a 3D Ronin action-puzzle game using Spline, integrating AI-driven assets with interactive environment design and logic-based puzzles.",
      },
      4: {
        title: "LifePath: AI-Powered Career Advisor",
        descriptionBefore: "An AI-powered career guidance platform that helps users identify their ideal career paths. Co-created with",
        descriptionAfter: "",
      },
      5: {
        title: "Interactive Web Experience",
        description:
          "A high-engagement, responsive micro-site featuring custom CSS animations and interactive state management. Built to explore fluid user interactions and optimized for rapid deployment via Vercel.",
      },
    },
  },
  certifications: {
    label: "02",
    title: "Certifications",
    prev: "Previous certification",
    next: "Next certification",
    swipeHint: "← Swipe to browse certifications →",
    viewCert: "View certificate",
  },
  awards: {
    label: "03",
    title: "Awards & Recognition",
    achievement: "Achievement",
    issuedBy: "Issued By",
    date: "Date",
    viewFull: "View Full Certificate",
    items: {
      0: {
        title: "Eco-Point Project",
        subtitle: "2nd Runner-Up",
        description:
          "Secured 2nd runner-up in a competitive hackathon by building a full-stack solution within 48 hours, combining AI, IOT and web technologies.",
      },
      1: {
        title: "Blood of the Rift",
        subtitle: "Top 10 Finalist",
        description:
          "Placed in the top 10 out of hundreds of participants for developing an innovative AI-driven game using generative models and spline design.",
      },
      2: {
        title: "The Global Atomic Quiz 2023",
        subtitle: "Certificate of Victory",
        description:
          "Recognized as a winner for outstanding intellect and performance in the Global Atomic Quiz 2023, issued by the Ministry of Science and Technology and Technological University (Thanlyin).",
      },
      3: {
        title: "Hackatom Myanmar 2023",
        subtitle: "Participation Certificate",
        description:
          "Successfully performed as a member of Team Magenta in Hackatom Myanmar 2023, organized by ROSATOM, MEPhI, and Yangon Technological University.",
      },
    },
  },
  skills: {
    label: "04",
    title: "Skills",
    cloudDevops: "Cloud & DevOps",
    frontend: "Frontend Development",
  },
  contact: {
    label: "05",
    title: "Get in Touch",
    body: "I'm always open to discussing new projects, cloud architecture challenges, or opportunities to collaborate. Feel free to reach out through any of the channels below.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind CSS",
  },
  about: {
    heroTitle: "About Me",
    heroBody:
      "I'm a Frontend Cloud Architect based in Thailand with a passion for building scalable, intelligent systems that seamlessly blend beautiful user experiences with robust infrastructure. With 2+ years of hands-on experience in front-end development and cloud architecture, I specialize in translating complex technical challenges into elegant, performant solutions. I thrive in collaborative environments and am always eager to learn emerging technologies and push the boundaries of my capabilities.",
    summaryLabel: "About",
    summaryTitle: "Professional Profile",
    bioTitle: "Bio",
    bioBody:
      "I'm a Frontend Cloud Architect passionate about building scalable, intelligent systems that bridge the gap between beautiful user experiences and robust infrastructure. With expertise in modern web frameworks, cloud platform orchestration, and DevOps practices, I approach every project as an opportunity to innovate.",
    approachTitle: "Approach",
    approachBody:
      "I approach a codebase like a Chess opening. Whether implementing the London System or the King's Gambit, the goal is the same: maintain control by removing unnecessary elements. I prioritize pattern recognition. I simplify complex user flows into compact solutions ensuring that the technical architecture is as lean as it is powerful.",
    drivesTitle: "What Drives Me",
    drivesBody:
      "I'm driven by the challenge of solving complex problems through elegant technical solutions. Collaborating with talented teams, mentoring junior developers, and exploring emerging technologies like generative AI keep me engaged and growing as an engineer.",
    philosophyTitle: "Technical Philosophy",
    philosophyQuote:
      "Build systems that scale, code that reads like poetry, and solutions that anticipate tomorrow's challenges while solving today's problems.",
    coreValues: "Core Values",
    values: [
      "Scalability & Performance",
      "Clean Architecture",
      "Continuous Learning",
      "Collaborative Spirit",
    ],
    careerLabel: "Career",
    careerTitle: "Work Timeline",
    voiceLabel: "Voice",
    voiceTitle: "Testimonials",
    timeline: {
      1: {
        role: "Frontend Cloud Architect",
        company: "Freelance / Self-Employed",
        period: "2025 - Present",
        description:
          "Architecting scalable cloud solutions and full-stack applications with focus on modern DevOps practices, containerization, and AI integration.",
      },
      2: {
        role: "AI Response Validator (Part-time)",
        company: "Digital Solutions Myanmar",
        period: "Apr 2025 - Oct 2025",
        description:
          "Designed and deployed cloud infrastructure, managed Kubernetes clusters, and optimized containerized applications for production environments.",
      },
      3: {
        role: "Web Developer",
        company: "February Engineering Group Co., Ltd.",
        period: "Jan 2023 - Feb 2024",
        description:
          "Developed responsive web applications using HTML, CSS, and JavaScript. Collaborated with designers and backend developers to implement user-friendly interfaces and optimize performance.",
      },
      4: {
        role: "Electrical Engineer Intern",
        company: "Web Development Studio",
        period: "April 2022 - Nov 2022",
        description:
          "Started career building HTML/CSS/JavaScript projects, learned React fundamentals, and contributed to team development initiatives.",
      },
    },
    testimonials: {
      1: {
        quote:
          "Khant is an exceptional developer who combines technical expertise with a collaborative mindset. His ability to architect scalable solutions is impressive.",
        role: "Co-founder, Tech Startup",
      },
      2: {
        quote:
          "An innovative approach to sustainability. The reverse vending machine was one of the most technically sound and well-executed projects I've judged at the Hylife Hackathon.",
        role: "Event Organizer",
      },
      3: {
        quote:
          "Khant's understanding of game infrastructure and designing interactive experiences was key to our success in the JIWC.",
        role: "Senior Full Stack Developer",
      },
      4: {
        quote:
          "Beyond his technical skills, Khant stands out for his initiative. He was among the first to capitalize on our Huawei certification programs, demonstrating the exact kind of professional drive we aim to cultivate in our faculty.",
        role: "Dean, Faculty of Digital Communication and Engineering",
      },
    },
  },
}

export type Dictionary = DeepStringify<typeof en>

const th: Dictionary = {
  nav: {
    home: "หน้าแรก",
    about: "เกี่ยวกับ",
    projects: "โปรเจกต์",
    certifications: "ใบรับรอง",
    awards: "รางวัล",
    contact: "ติดต่อ",
    toggleMenu: "เปิด/ปิดเมนู",
    language: "ภาษา",
  },
  hero: {
    available: "พร้อมรับงาน",
    role: "สถาปนิกโซลูชัน",
    tagline: "สร้างโครงสร้างพื้นฐานที่ขยายได้และระบบอัจฉริยะ",
    viewProjects: "ดูโปรเจกต์",
    downloadCv: "ดาวน์โหลดเรซูเม่",
    certifications: "ใบรับรอง",
    contact: "ติดต่อ",
    scrollDown: "เลื่อนลง",
  },
  projects: {
    label: "01",
    title: "โปรเจกต์เด่น",
    prev: "โปรเจกต์ก่อนหน้า",
    next: "โปรเจกต์ถัดไป",
    swipeHint: "← ปัดเพื่อดูโปรเจกต์เพิ่มเติม →",
    prizeWinner: "รางวัลชนะเลิศ",
    viewDemo: "ดูเดโมสด",
    items: {
      1: {
        title: "Harbor: ศูนย์นักเรียน MFU",
        description:
          "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่นำเสนอโปรเจกต์ ทักษะ และผลงาน สร้างด้วย Next.js และ Tailwind CSS ในดีไซน์ที่ทันสมัยและรองรับทุกอุปกรณ์",
      },
      2: {
        title: "หน้าแลนดิง Eco-Point",
        description:
          "หน้าแลนดิงที่ได้รับรางวัลจาก Hylife Hackathon ที่เชียงราย นำการพัฒนาฟรอนต์เอนด์เพื่อสร้างประสบการณ์ผู้ใช้ที่แปลงผลสูง และคว้ารางวัลรองชนะเลิศอันดับ 2",
      },
      3: {
        title: "Blood of the Rift: เข้ารอบ 10 อันดับแรก",
        description:
          "เข้ารอบสุดท้ายใน Generative AI Game Jam 2025 พัฒนาเกมแอ็กชันพัซเซิล 3D แนวโรนินด้วย Spline รวมสินทรัพย์จาก AI เข้ากับการออกแบบสภาพแวดล้อมเชิงโต้ตอบและพัซเซิลเชิงตรรกะ",
      },
      4: {
        title: "LifePath: ที่ปรึกษาอาชีพด้วย AI",
        descriptionBefore: "แพลตฟอร์มแนะแนวอาชีพด้วย AI ที่ช่วยให้ผู้ใช้ค้นหาเส้นทางอาชีพที่เหมาะสม สร้างร่วมกับ",
        descriptionAfter: "",
      },
      5: {
        title: "ประสบการณ์เว็บเชิงโต้ตอบ",
        description:
          "ไมโครไซต์ที่ตอบสนองและน่าสนใจ พร้อมแอนิเมชัน CSS แบบกำหนดเองและการจัดการสถานะเชิงโต้ตอบ สร้างขึ้นเพื่อสำรวจการโต้ตอบที่ลื่นไหล และปรับให้พร้อมดีพลอยบน Vercel",
      },
    },
  },
  certifications: {
    label: "02",
    title: "ใบรับรอง",
    prev: "ใบรับรองก่อนหน้า",
    next: "ใบรับรองถัดไป",
    swipeHint: "← ปัดเพื่อดูใบรับรอง →",
    viewCert: "ดูใบรับรอง",
  },
  awards: {
    label: "03",
    title: "รางวัลและการยอมรับ",
    achievement: "ความสำเร็จ",
    issuedBy: "ออกโดย",
    date: "วันที่",
    viewFull: "ดูใบรับรองเต็ม",
    items: {
      0: {
        title: "โปรเจกต์ Eco-Point",
        subtitle: "รองชนะเลิศอันดับ 2",
        description:
          "คว้ารางวัลรองชนะเลิศอันดับ 2 ในแฮ็กกาธอนแข่งขัน ด้วยการสร้างโซลูชันฟูลสแต็กภายใน 48 ชั่วโมง รวม AI, IoT และเทคโนโลยีเว็บ",
      },
      1: {
        title: "Blood of the Rift",
        subtitle: "เข้ารอบ 10 อันดับแรก",
        description:
          "ติดท็อป 10 จากผู้เข้าร่วมหลายร้อยคน ด้วยการพัฒนาเกมขับเคลื่อนด้วย AI นวัตกรรมใหม่โดยใช้โมเดลเจนเนอเรทีฟและการออกแบบ Spline",
      },
      2: {
        title: "The Global Atomic Quiz 2023",
        subtitle: "ใบรับรองชัยชนะ",
        description:
          "ได้รับการยอมรับในฐานะผู้ชนะจากสติปัญญาและผลงานโดดเด่นใน Global Atomic Quiz 2023 ออกโดยกระทรวงวิทยาศาสตร์และเทคโนโลยี และมหาวิทยาลัยเทคโนโลยี (ทันลยิน)",
      },
      3: {
        title: "Hackatom Myanmar 2023",
        subtitle: "ใบรับรองการเข้าร่วม",
        description:
          "เข้าร่วมอย่างสำเร็จในฐานะสมาชิก Team Magenta ใน Hackatom Myanmar 2023 จัดโดย ROSATOM, MEPhI และมหาวิทยาลัยเทคโนโลยีย่างกุ้ง",
      },
    },
  },
  skills: {
    label: "04",
    title: "ทักษะ",
    cloudDevops: "คลาวด์และ DevOps",
    frontend: "การพัฒนาฟรอนต์เอนด์",
  },
  contact: {
    label: "05",
    title: "ติดต่อ",
    body: "ยินดีพูดคุยเกี่ยวกับโปรเจกต์ใหม่ ความท้าทายด้านสถาปัตยกรรมคลาวด์ หรือโอกาสในการร่วมงาน สามารถติดต่อได้ผ่านช่องทางด้านล่าง",
    email: "อีเมล",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    builtWith: "สร้างด้วย Next.js และ Tailwind CSS",
  },
  about: {
    heroTitle: "เกี่ยวกับฉัน",
    heroBody:
      "ฉันเป็น Frontend Cloud Architect ที่อาศัยอยู่ในประเทศไทย มีความหลงใหลในการสร้างระบบที่ขยายได้และอัจฉริยะ ซึ่งผสานประสบการณ์ผู้ใช้ที่สวยงามเข้ากับโครงสร้างพื้นฐานที่แข็งแกร่ง ด้วยประสบการณ์กว่า 2 ปีด้านการพัฒนาฟรอนต์เอนด์และสถาปัตยกรรมคลาวด์ ฉันเชี่ยวชาญในการแปลงความท้าทายทางเทคนิคที่ซับซ้อนให้เป็นโซลูชันที่สง่างามและมีประสิทธิภาพ ฉันเติบโตได้ดีในสภาพแวดล้อมที่ร่วมมือกัน และพร้อมเรียนรู้เทคโนโลยีใหม่ตลอดเวลา",
    summaryLabel: "เกี่ยวกับ",
    summaryTitle: "โปรไฟล์วิชาชีพ",
    bioTitle: "ประวัติ",
    bioBody:
      "ฉันเป็น Frontend Cloud Architect ที่มีความหลงใหลในการสร้างระบบที่ขยายได้และอัจฉริยะ ซึ่งเชื่อมประสบการณ์ผู้ใช้ที่สวยงามกับโครงสร้างพื้นฐานที่แข็งแกร่ง ด้วยความเชี่ยวชาญในเฟรมเวิร์กเว็บสมัยใหม่ การจัดการแพลตฟอร์มคลาวด์ และแนวปฏิบัติ DevOps ฉันมองทุกโปรเจกต์เป็นโอกาสในการสร้างสรรค์",
    approachTitle: "แนวทาง",
    approachBody:
      "ฉันมองโค้ดเบสเหมือนการเปิดหมากรุก ไม่ว่าจะเป็น London System หรือ King's Gambit เป้าหมายเหมือนกัน คือรักษาการควบคุมโดยตัดสิ่งที่ไม่จำเป็น ฉันให้ความสำคัญกับการรู้จำรูปแบบ และย่อโฟลว์ผู้ใช้ที่ซับซ้อนให้เป็นโซลูชันกะทัดรัด เพื่อให้สถาปัตยกรรมเทคนิคทั้งบางเบาและทรงพลัง",
    drivesTitle: "แรงผลักดัน",
    drivesBody:
      "ฉันถูกขับเคลื่อนด้วยความท้าทายในการแก้ปัญหาที่ซับซ้อนด้วยโซลูชันทางเทคนิคที่สง่างาม การร่วมงานกับทีมที่มีความสามารถ การให้คำปรึกษาแก่นักพัฒนาจูเนียร์ และการสำรวจเทคโนโลยีใหม่อย่าง generative AI ทำให้ฉันเติบโตอย่างต่อเนื่องในฐานะวิศวกร",
    philosophyTitle: "ปรัชญาทางเทคนิค",
    philosophyQuote:
      "สร้างระบบที่ขยายได้ โค้ดที่อ่านได้ราวบทกวี และโซลูชันที่คาดการณ์ความท้าทายของวันพรุ่งนี้ ในขณะที่แก้ปัญหาของวันนี้",
    coreValues: "ค่านิยมหลัก",
    values: [
      "ความสามารถในการขยายและประสิทธิภาพ",
      "สถาปัตยกรรมที่สะอาด",
      "การเรียนรู้อย่างต่อเนื่อง",
      "จิตวิญญาณแห่งการร่วมมือ",
    ],
    careerLabel: "อาชีพ",
    careerTitle: "ไทม์ไลน์งาน",
    voiceLabel: "เสียง",
    voiceTitle: "คำรับรอง",
    timeline: {
      1: {
        role: "Frontend Cloud Architect",
        company: "ฟรีแลนซ์ / ประกอบอาชีพอิสระ",
        period: "2025 - ปัจจุบัน",
        description:
          "ออกแบบโซลูชันคลาวด์และแอปพลิเคชันฟูลสแต็กที่ขยายได้ โดยเน้นแนวปฏิบัติ DevOps สมัยใหม่ คอนเทนเนอร์ และการผสาน AI",
      },
      2: {
        role: "AI Response Validator (พาร์ทไทม์)",
        company: "Digital Solutions Myanmar",
        period: "เม.ย. 2025 - ต.ค. 2025",
        description:
          "ออกแบบและดีพลอยโครงสร้างพื้นฐานคลาวด์ จัดการคลัสเตอร์ Kubernetes และปรับแต่งแอปพลิเคชันคอนเทนเนอร์สำหรับสภาพแวดล้อมโปรดักชัน",
      },
      3: {
        role: "นักพัฒนาเว็บ",
        company: "February Engineering Group Co., Ltd.",
        period: "ม.ค. 2023 - ก.พ. 2024",
        description:
          "พัฒนาเว็บแอปพลิเคชันที่ตอบสนองด้วย HTML, CSS และ JavaScript ร่วมงานกับนักออกแบบและนักพัฒนาแบ็กเอนด์ เพื่อสร้างอินเทอร์เฟซที่ใช้งานง่ายและเพิ่มประสิทธิภาพ",
      },
      4: {
        role: "ฝึกงานวิศวกรไฟฟ้า",
        company: "Web Development Studio",
        period: "เม.ย. 2022 - พ.ย. 2022",
        description:
          "เริ่มต้นอาชีพด้วยโปรเจกต์ HTML/CSS/JavaScript เรียนพื้นฐาน React และมีส่วนร่วมในงานพัฒนาของทีม",
      },
    },
    testimonials: {
      1: {
        quote:
          "Khant เป็นนักพัฒนาที่ยอดเยี่ยม ซึ่งผสานความเชี่ยวชาญทางเทคนิคเข้ากับความคิดแบบร่วมมือ ความสามารถในการออกแบบโซลูชันที่ขยายได้นั้นน่าประทับใจ",
        role: "ผู้ร่วมก่อตั้ง สตาร์ทอัพเทคโนโลยี",
      },
      2: {
        quote:
          "แนวทางที่ยั่งยืนอย่างสร้างสรรค์ เครื่องรับคืนอัตโนมัติเป็นหนึ่งในโปรเจกต์ที่สมบูรณ์ทางเทคนิคและดำเนินการได้ดีที่สุดที่ฉันเคยตัดสินใน Hylife Hackathon",
        role: "ผู้จัดงาน",
      },
      3: {
        quote:
          "ความเข้าใจของ Khant เกี่ยวกับโครงสร้างพื้นฐานเกมและการออกแบบประสบการณ์เชิงโต้ตอบเป็นกุญแจสู่ความสำเร็จของเราใน JIWC",
        role: "Senior Full Stack Developer",
      },
      4: {
        quote:
          "นอกเหนือจากทักษะทางเทคนิคแล้ว Khant โดดเด่นด้วยความริเริ่ม เขาเป็นหนึ่งในคนแรกๆ ที่ใช้ประโยชน์จากโปรแกรมใบรับรอง Huawei ของเรา ซึ่งแสดงถึงแรงผลักดันในวิชาชีพที่เราต้องการปลูกฝังในคณะ",
        role: "คณบดี คณะดิจิทัลคอมมิวนิเคชันและวิศวกรรม",
      },
    },
  },
}

export const dictionaries: Record<Language, Dictionary> = { en, th }
