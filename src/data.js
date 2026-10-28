export const profile = {
  name: "Himani Soni",
  role: "Full Stack Engineer",
  email: "sonihimani428@gmail.com",
  phone: "+91-9068161302",
  github: "https://github.com/himani428/",
  linkedin: "https://www.linkedin.com/in/himanisoni-/",
  summary:
    "I turn coffee into React, and sometimes talk machines into talking back. Web apps, desktop apps, and hardware in between.",
};

export const experience = [
  {
    company: "Libratherm Instruments Pvt. Ltd.",
    period: "April 2026 to Present",
    role: "Full Stack Developer",
    projects: [
      {
        name: "PRC-309: Industrial Monitoring and Automation",
        stack: "Electron, React, TypeScript, Redux Toolkit, Mantine, PouchDB, Firebase",
        points: [
          "Built React screens, configuration forms, live monitoring dashboards, and reporting workflows, connected to Electron's main process through IPC.",
          "Built device communication over Modbus RTU/TCP, MQTT, and Telnet with polling, timeouts, retries, and automatic reconnection.",
          "Supported live temperature, setpoint, alarm, and device status updates, plus MQTT master-client data sharing.",
          "Contributed to local storage with PouchDB and Firebase cloud sync.",
        ],
      },
      {
        name: "Cancellations: Appointment Slot Management",
        stack: "React, Node.js, REST APIs, Microsoft Graph API",
        points: [
          "Built cancellation and slot management workflows with validation and error handling.",
          "Contributed to a Microsoft Graph email workflow that notifies eligible users when a slot opens, with first come, first served claim links.",
          "Used Promise.allSettled() so one failed email never stopped the rest of the batch.",
        ],
      },
      {
        name: "THP-V4",
        stack: "Electron, React, TypeScript, Mantine, Redux Toolkit",
        points: [
          "Desktop application for a pharmaceutical client, part of Libratherm's family of industrial products.",
          "Worked on user account and role management: auto unlock for locked accounts, Operator and Manager roles, fixed and variable permission modes, and case insensitive unique usernames.",
          "Built a Device Report screen and worked on audit logging and print and PDF report workflows.",
          "Fixed stability and form state issues, improved backend error messages shown to users, and added null safety across the device communication code.",
        ],
      },
      {
        name: "DTH-948",
        stack: "Electron, React, TypeScript, Mantine, Redux Toolkit, Modbus TCP",
        points: [
          "Industrial desktop application that shares its architecture with THP-V4.",
          "Ported HMI mode: kiosk and fullscreen startup, a touch scaled theme, and a persisted system setting wired through existing Electron IPC channels.",
          "Worked on the Modbus TCP Slave register map so scanner devices can be exposed as a data source.",
          "Investigated report generation and UI rendering issues across the Home, Report, and sidebar screens.",
        ],
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    period: "November 2022 to June 2025",
    role: "Full Stack Developer",
    projects: [
      {
        name: "VIAVI: Network Monitoring and Management",
        stack: "React, Redux, Node.js, Express.js, WebSockets, Three.js",
        points: [
          "Built reusable dashboards, device management panels, and real time visualizations with charts and Three.js.",
          "Designed secure REST APIs with Express.js and added WebSockets for live metrics, alerts, and logs.",
          "Used Redux for global state and cut unnecessary re-renders by 40% with React.memo, useCallback, and useMemo.",
        ],
      },
      {
        name: "Walgreens: Retail Pharmacy Application",
        stack: "React, Redux, REST APIs",
        points: [
          "Built reusable components, forms, dashboards, and workflow screens against REST APIs.",
          "Implemented validation and error handling, and worked with QA and business stakeholders to fix issues.",
        ],
      },
    ],
  },
];

const note = "Live application. Open the demo to explore it.";
export const projects = [
  { name: "Incident Lens", cat: "AI Experiments", url: "https://product-engineer-ps.vercel.app/", desc: "An exploratory AI incident investigation interface built around step by step investigation and tool based evidence gathering.", tags: ["Exploratory prototype"] },
  { name: "Latency Topology Visualizer", cat: "Visualization", url: "https://latency-topology-visualizer-rho.vercel.app/", desc: "Real time and historical network latency across global exchange infrastructure, with a 3D globe, animated latency paths, and provider filtering.", tags: ["React", "Three.js"] },
  { name: "Vima3ya Frontend Assignment", cat: "Full Stack Applications", url: "https://vima3ya-frontend-assignment-i56r.vercel.app/", desc: note, tags: [] },
  { name: "Grow QR", cat: "Full Stack Applications", url: "https://grow-qr.vercel.app/", desc: note, tags: [] },
  { name: "Retail Map", cat: "Visualization", url: "https://retail-map.vercel.app/", desc: note, tags: [] },
  { name: "Health SaaS", cat: "Full Stack Applications", url: "https://healthsaas-ten.vercel.app/dashboard", desc: "Dashboard style product demo. Uses no real patient data.", tags: [] },
  { name: "Manifest", cat: "Full Stack Applications", url: "https://manifest-neon.vercel.app/", desc: note, tags: [] },
  { name: "Art to Hearts", cat: "Full Stack Applications", url: "https://art-to-hearts.vercel.app/", desc: note, tags: [] },
];

export const prcFlow = [
  ["Physical machine", "Controllers and instruments report temperature, setpoints, alarms, and status."],
  ["Communication layer", "Modbus RTU/TCP, MQTT, and Telnet, with polling, timeouts, retries, and automatic reconnection."],
  ["Electron main process", "Owns device connections and storage, and exposes data to the UI through IPC."],
  ["React interface", "Redux Toolkit state feeds configuration forms and reporting workflows."],
  ["Live dashboard", "Operators watch live readings, alarms, and device status."],
];

export const cancelFlow = [
  ["Appointment cancelled", "A user cancels and the slot is released."],
  ["Slot available", "The slot is marked open in the system."],
  ["Eligible users notified", "Emails go out through Microsoft Graph. Promise.allSettled() keeps one failure from blocking the rest."],
  ["Claim link opened", "Each email carries a claim link."],
  ["Slot claimed", "First come, first served: the first valid claim wins."],
];

export const skills = {
  Frontend: ["React", "TypeScript", "JavaScript", "Redux Toolkit", "Mantine UI", "Material UI", "Tailwind CSS", "HTML5", "CSS3"],
  Backend: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Microsoft Graph API"],
  Desktop: ["Electron", "Electron IPC"],
  Realtime: ["MQTT", "Modbus RTU/TCP", "Telnet", "WebSockets"],
  Databases: ["PostgreSQL", "MongoDB", "PouchDB", "CouchDB", "Firebase"],
  Visualization: ["Three.js", "Charts"],
  Tooling: ["Vite", "Webpack", "Vitest", "Jest", "Git", "GitHub", "GitLab", "Postman", "Cursor"],
};

export const hobbies = [
  ["Writing novels", "Long form stories, because three thousand lines of code was not enough plot for me."],
  ["Writing songs", "Verses, hooks, and the occasional bridge. Same craft as clean code: rhythm, structure, and knowing what to cut."],
];
export const marquee = ["React", "Node.js", "Electron", "TypeScript", "Modbus", "MQTT", "WebSockets", "Three.js", "PouchDB", "Firebase", "PostgreSQL", "Redux Toolkit"];
