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
          "A responsive web platform for The Harbor Student Center to foster community among Myanmar students, featuring event schedules and community highlights. Built with Next.js and Tailwind CSS.",
      },
      2: {
        title: "SmartFridgeAI",
        description:
          "An AI-powered smart fridge demo app that scans ingredients inside the fridge and turns them into personalized meal ideas.",
      },
      3: {
        title: "Eco-Point Landing Page",
        description:
          "Award-winning landing page developed during the Hylife Hackathon in Chiang Rai. Led the frontend development to create a high-conversion user experience, securing the 2nd Runner Up prize.",
      },
      4: {
        title: "Blood of the Rift: Top 10 Finalist",
        description:
          "Finalist in the 2025 Generative AI Game Jam. Developed a 3D Ronin action-puzzle game using Spline, integrating AI-driven assets with interactive environment design and logic-based puzzles.",
      },
      5: {
        title: "LifePath: AI-Powered Career Advisor",
        descriptionBefore: "An AI-powered career guidance platform that helps users identify their ideal career paths. Co-created with",
        descriptionAfter: "",
      },
      6: {
        title: "MoodTune AI",
        description:
          "A Chrome extension that uses NVIDIA AI to detect your mood while you work, then uses the YouTube API to open a fitting video in a new tab.",
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
        title: "AR/VR and Digital Twin Hackathon",
        subtitle: "1st Runner-Up",
        description:
          "Earned first runner-up at the AR/VR and Digital Twin Hackathon.",
      },
      1: {
        title: "Eco-Point Project",
        subtitle: "2nd Runner-Up",
        description:
          "Secured 2nd runner-up in a competitive hackathon by building a full-stack solution within 48 hours, combining AI, IOT and web technologies.",
      },
      2: {
        title: "Blood of the Rift",
        subtitle: "Top 10 Finalist",
        description:
          "Placed in the top 10 out of hundreds of participants for developing an innovative AI-driven game using generative models and spline design.",
      },
      3: {
        title: "The Global Atomic Quiz 2023",
        subtitle: "Certificate of Victory",
        description:
          "Recognized as a winner for outstanding intellect and performance in the Global Atomic Quiz 2023, issued by the Ministry of Science and Technology and Technological University (Thanlyin).",
      },
      4: {
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
    frontend: "Frontend & UI",
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
      "I'm a Solution Architect based in Thailand with a passion for building scalable, intelligent systems that seamlessly blend beautiful user experiences with robust infrastructure. With 3+ years of hands-on experience in web development and cloud architecture, I specialize in translating complex technical challenges into elegant, performant solutions. I thrive in collaborative environments and am always eager to learn emerging technologies and push the boundaries of my capabilities.",
    summaryLabel: "About",
    summaryTitle: "Professional Profile",
    bioTitle: "Bio",
    bioBody:
      "I'm a Solution Architect passionate about building scalable, intelligent systems that bridge the gap between beautiful user experiences and robust infrastructure. With expertise in modern web frameworks, cloud platform orchestration, and DevOps practices, I approach every project as an opportunity to innovate.",
    approachTitle: "Approach",
    approachBody:
      "I approach a codebase like a chess opening. Whether it is the London System or the King's Gambit, my priority is to maintain control by removing unnecessary elements. I prioritize pattern recognition and try my best to simplify complex user flows into compact solutions, ensuring that the technical architecture is as lean as it is powerful.",
    drivesTitle: "What Drives Me",
    drivesBody:
      "I'm driven by the desire to solve complex problems through technical solutions. Collaborating with talented teams, mentoring junior developers, and exploring emerging technologies like generative AI keep me engaged and growing as an engineer.",
    philosophyTitle: "Technical Philosophy",
    philosophyQuote:
      "Build systems that scale, code that reads like poetry, and solutions that anticipate tomorrow's challenges while solving today's problems.",
    coreValues: "Core Values",
    values: [
      "Scalability & Performance",
      "Clean Architecture",
      "Continuous Learning",
      "Grit & Resilience",
    ],
    careerLabel: "Career",
    careerTitle: "Work Timeline",
    voiceLabel: "Voice",
    voiceTitle: "Testimonials",
    timeline: {
      1: {
        role: "Solution Architect",
        company: "Freelance / Self-Employed",
        period: "2025 - Present",
        description:
          "Architecting scalable cloud solutions and full-stack applications with focus on modern DevOps practices, containerization, and AI integration.",
      },
      2: {
        role: "AI Response Validator (Part-time)",
        company: "GlobalWalkers.co.ltd",
        period: "Apr 2025 - Oct 2025",
        description:
          "Designed and deployed cloud infrastructure, managed Kubernetes clusters, and optimized containerized applications for production environments.",
      },
      3: {
        role: "Web developer",
        company: "February Engineering Group Co., Ltd.",
        period: "Jan 2023 - Feb 2024",
        description:
          "Developed responsive web applications using React, TypeScript for frontend and PHP for backend. Collaborated with designers and backend developers to implement user-friendly interfaces and optimize performance.",
      },
      4: {
        role: "Frontend developer Intern",
        company: "KMD Institute of Technology",
        period: "April 2022 - Nov 2022",
        description:
          "Started career building HTML/CSS/JavaScript projects, learned React fundamentals, and contributed to team development initiatives.",
      },
    },
    testimonials: {
      1: {
        quote:
          "I've shipped two hackathon products with Khant Zayar Tun — EcoPoint (2nd Runner-Up,HYLIFE 2025) and LifePath AI (six routes built in a single day for Hug Mae 2026) —and both times he kept the team locked onto the real problem instead of just the demo. He's one of the few people I'd want on a build with a real deadline behind it",
        role: "Colleague, Senior-Developer",
      },
      2: {
        quote:
          "An innovative approach to sustainability. The reverse vending machine was one of the most technically sound and well-executed projects I've judged at the Hylife Hackathon.",
        role: "Hackathon Judge, Hylife Hackathon 2025",
      },
      3: {
        quote:
          "I was Kent’s teammate, and he was someone I could turn to for system design flows and server optimizations.",
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
          "เว็บไซต์แพลตฟอร์มสำหรับ The Harbor Student Center ที่ออกแบบมาเพื่อเสริมสร้างคอมมูนิตี้และเชื่อมต่อเหล่านักศึกษาเมียนมา พร้อมฟีเจอร์แสดงตารางกิจกรรมและเรื่องราวประทับใจ พัฒนาด้วย Next.js และ Tailwind CSS ให้ดีไซน์ที่ทันสมัยและใช้งานง่ายบนทุกอุปกรณ์",
      },
      2: {
        title: "SmartFridgeAI",
        description:
          "แอปตู้เย็นอัจฉริยะที่ใช้ AI สแกนวัตถุดิบและแนะนำไอเดียมื้ออาหารเฉพาะบุคคล",
      },
      3: {
        title: "หน้าแลนดิง Eco-Point",
        description:
          "หน้าแลนดิงที่ได้รับรางวัลจาก Hylife Hackathon ที่เชียงราย นำการพัฒนาฟรอนต์เอนด์เพื่อสร้างประสบการณ์ผู้ใช้ที่แปลงผลสูง และคว้ารางวัลรองชนะเลิศอันดับ 2",
      },
      4: {
        title: "Blood of the Rift: เข้ารอบ 10 อันดับแรก",
        description:
          "เข้ารอบสุดท้ายใน Generative AI Game Jam 2025 พัฒนาเกมแอ็กชันพัซเซิล 3D แนวโรนินด้วย Spline รวมสินทรัพย์จาก AI เข้ากับการออกแบบสภาพแวดล้อมเชิงโต้ตอบและพัซเซิลเชิงตรรกะ",
      },
      5: {
        title: "LifePath: ที่ปรึกษาอาชีพด้วย AI",
        descriptionBefore: "แพลตฟอร์มแนะแนวอาชีพด้วย AI ที่ช่วยให้ผู้ใช้ค้นหาเส้นทางอาชีพที่เหมาะสม สร้างร่วมกับ",
        descriptionAfter: "",
      },
      6: {
        title: "MoodTune AI",
        description:
          "ส่วนขยาย Chrome ที่ใช้ NVIDIA AI วิเคราะห์อารมณ์ขณะทำงาน แล้วใช้ YouTube API เปิดวิดีโอที่เหมาะกับอารมณ์ในแท็บใหม่",
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
        title: "AR/VR and Digital Twin Hackathon",
        subtitle: "รองชนะเลิศอันดับ 1",
        description:
          "ได้รับรางวัลรองชนะเลิศอันดับ 1 ในการแข่งขัน AR/VR and Digital Twin Hackathon",
      },
      1: {
        title: "โปรเจกต์ Eco-Point",
        subtitle: "รองชนะเลิศอันดับ 2",
        description:
          "คว้ารางวัลรองชนะเลิศอันดับ 2 ในแฮ็กกาธอนแข่งขัน ด้วยการสร้างโซลูชันฟูลสแต็กภายใน 48 ชั่วโมง รวม AI, IoT และเทคโนโลยีเว็บ",
      },
      2: {
        title: "Blood of the Rift",
        subtitle: "เข้ารอบ 10 อันดับแรก",
        description:
          "ติดท็อป 10 จากผู้เข้าร่วมหลายร้อยคน ด้วยการพัฒนาเกมขับเคลื่อนด้วย AI นวัตกรรมใหม่โดยใช้โมเดลเจนเนอเรทีฟและการออกแบบ Spline",
      },
      3: {
        title: "The Global Atomic Quiz 2023",
        subtitle: "ใบรับรองชัยชนะ",
        description:
          "ได้รับการยอมรับในฐานะผู้ชนะจากสติปัญญาและผลงานโดดเด่นใน Global Atomic Quiz 2023 ออกโดยกระทรวงวิทยาศาสตร์และเทคโนโลยี และมหาวิทยาลัยเทคโนโลยี (ทันลยิน)",
      },
      4: {
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
      "ฉันเป็นสถาปนิกโซลูชันที่อาศัยอยู่ในประเทศไทย และหลงใหลในการสร้างระบบอัจฉริยะที่ขยายรองรับการใช้งานได้ ซึ่งผสานประสบการณ์ผู้ใช้ที่สวยงามเข้ากับโครงสร้างพื้นฐานที่แข็งแกร่ง ด้วยประสบการณ์ทำงานจริงกว่า 3 ปีด้านการพัฒนาเว็บและสถาปัตยกรรมคลาวด์ ฉันเชี่ยวชาญในการแปลงโจทย์ทางเทคนิคที่ซับซ้อนให้เป็นโซลูชันที่มีประสิทธิภาพและออกแบบมาอย่างดี ฉันทำงานได้ดีในสภาพแวดล้อมที่ร่วมมือกัน และพร้อมเรียนรู้เทคโนโลยีใหม่ๆ เพื่อพัฒนาขีดความสามารถของตัวเองอยู่เสมอ",
    summaryLabel: "เกี่ยวกับ",
    summaryTitle: "โปรไฟล์วิชาชีพ",
    bioTitle: "ประวัติ",
    bioBody:
      "ฉันเป็นสถาปนิกโซลูชันที่หลงใหลในการสร้างระบบอัจฉริยะที่ขยายรองรับการใช้งานได้ และเชื่อมโยงประสบการณ์ผู้ใช้ที่ยอดเยี่ยมเข้ากับโครงสร้างพื้นฐานที่แข็งแกร่ง ด้วยความเชี่ยวชาญด้านเฟรมเวิร์กเว็บสมัยใหม่ การจัดการแพลตฟอร์มคลาวด์ และแนวปฏิบัติ DevOps ฉันมองทุกโปรเจกต์เป็นโอกาสในการสร้างสรรค์สิ่งใหม่",
    approachTitle: "แนวทาง",
    approachBody:
      "ฉันมองการจัดการโค้ดเบสเหมือนการเปิดเกมหมากรุก ไม่ว่าจะเป็น London System หรือ King's Gambit เป้าหมายคือการควบคุมเกมด้วยการตัดสิ่งที่ไม่จำเป็น ฉันให้ความสำคัญกับการมองหารูปแบบ และพยายามลดความซับซ้อนของขั้นตอนการใช้งานให้เป็นโซลูชันที่กระชับ เพื่อให้สถาปัตยกรรมทางเทคนิคเรียบง่ายแต่ทรงพลัง",
    drivesTitle: "แรงผลักดัน",
    drivesBody:
      "ฉันมีแรงผลักดันจากความต้องการแก้ปัญหาที่ซับซ้อนด้วยโซลูชันทางเทคนิค การได้ร่วมงานกับทีมที่มีความสามารถและสำรวจเทคโนโลยีเกิดใหม่อย่าง Generative AI ช่วยให้ฉันมีส่วนร่วมและเติบโตในฐานะวิศวกรอย่างต่อเนื่อง",
    philosophyTitle: "ปรัชญาทางเทคนิค",
    philosophyQuote:
      "สร้างระบบที่ขยายได้ โค้ดที่อ่านได้ราวบทกวี และโซลูชันที่คาดการณ์ความท้าทายของวันพรุ่งนี้ ในขณะที่แก้ปัญหาของวันนี้",
    coreValues: "ค่านิยมหลัก",
    values: [
      "ความสามารถในการขยายและประสิทธิภาพ",
      "สถาปัตยกรรมที่สะอาด",
      "การเรียนรู้อย่างต่อเนื่อง",
      "ความมุ่งมั่นและความยืดหยุ่น",
    ],
    careerLabel: "อาชีพ",
    careerTitle: "ไทม์ไลน์งาน",
    voiceLabel: "เสียง",
    voiceTitle: "คำรับรอง",
    timeline: {
      1: {
        role: "Solution Architect",
        company: "ฟรีแลนซ์ / ประกอบอาชีพอิสระ",
        period: "2025 - ปัจจุบัน",
        description:
          "ออกแบบสถาปัตยกรรมโซลูชันคลาวด์และแอปพลิเคชันฟูลสแต็กที่รองรับการขยายตัว โดยมุ่งเน้นแนวปฏิบัติ DevOps สมัยใหม่ การใช้คอนเทนเนอร์ และการผสาน AI",
      },
      2: {
        role: "ผู้ตรวจสอบคำตอบจาก AI (พาร์ทไทม์)",
        company: "GlobalWalkers.co.ltd",
        period: "เม.ย. 2025 - ต.ค. 2025",
        description:
          "ออกแบบและดีพลอยโครงสร้างพื้นฐานคลาวด์ จัดการคลัสเตอร์ Kubernetes และปรับแต่งแอปพลิเคชันคอนเทนเนอร์สำหรับสภาพแวดล้อมโปรดักชัน",
      },
      3: {
        role: "นักพัฒนาเว็บ",
        company: "February Engineering Group Co., Ltd.",
        period: "ม.ค. 2023 - ก.พ. 2024",
        description:
          "พัฒนาเว็บแอปพลิเคชันที่รองรับการใช้งานบนอุปกรณ์ต่างๆ ด้วย React และ TypeScript สำหรับฟรอนต์เอนด์ และ PHP สำหรับแบ็กเอนด์ ร่วมงานกับนักออกแบบและนักพัฒนาแบ็กเอนด์เพื่อสร้างอินเทอร์เฟซที่ใช้งานง่ายและเพิ่มประสิทธิภาพ",
      },
      4: {
        role: "นักพัฒนาฟรอนต์เอนด์ฝึกงาน",
        company: "KMD Institute of Technology",
        period: "เม.ย. 2022 - พ.ย. 2022",
        description:
          "เริ่มต้นอาชีพด้วยโปรเจกต์ HTML/CSS/JavaScript เรียนพื้นฐาน React และมีส่วนร่วมในงานพัฒนาของทีม",
      },
    },
    testimonials: {
      1: {
        quote:
          "ผมได้ร่วมทำโปรเจกต์แฮ็กกาธอนกับ Khant Zayar Tun สองโปรเจกต์ ได้แก่ EcoPoint (รองชนะเลิศอันดับ 2 ใน HYLIFE 2025) และ LifePath AI (สร้างเส้นทางอาชีพ 6 เส้นทางภายในวันเดียวสำหรับ Hug Mae 2026) ทั้งสองครั้งเขาช่วยให้ทีมมุ่งเน้นที่ปัญหาที่แท้จริง ไม่ใช่แค่ตัวเดโม เขาเป็นหนึ่งในไม่กี่คนที่ผมอยากร่วมทีมด้วยเมื่อต้องพัฒนาโปรเจกต์ภายใต้กำหนดเวลาจริง",
        role: "เพื่อนร่วมงาน, นักพัฒนาอาวุโส",
      },
      2: {
        quote:
          "แนวทางที่ยั่งยืนอย่างสร้างสรรค์ เครื่องรับคืนอัตโนมัติเป็นหนึ่งในโปรเจกต์ที่สมบูรณ์ทางเทคนิคและดำเนินการได้ดีที่สุดที่ฉันเคยตัดสินใน Hylife Hackathon",
        role: "กรรมการตัดสิน Hylife Hackathon 2025",
      },
      3: {
        quote:
          "ผมเคยเป็นเพื่อนร่วมทีมของ Kent และเขาเป็นคนที่ผมสามารถปรึกษาเรื่องขั้นตอนการออกแบบระบบและการปรับประสิทธิภาพเซิร์ฟเวอร์ได้",
        role: "นักพัฒนาฟูลสแตกอาวุโส",
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
