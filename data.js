// ============================================
// TOEFL ITP - Gerund Practice Questions
// 83 Soal - Structure & Grammar
// ============================================

const questionsData = [
  {
    id: 1,
    question: "The strict supervisor at the downtown corporate office simply could not tolerate ... repeated violations of the established safety protocols despite numerous previous warnings.",
    options: {
      A: "to overlook",
      B: "overlooking",
      C: "overlooked",
      D: "to be overlooked"
    },
    answer: "B",
    explanation: "Tolerate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 2,
    question: "After the controversial documentary was released, several prominent environmental activists began to advocate ... stricter international regulations on carbon emissions by major industrial nations.",
    options: {
      A: "imposing",
      B: "to impose",
      C: "imposed",
      D: "to be imposed"
    },
    answer: "A",
    explanation: "Advocate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 3,
    question: "The elderly librarian resented ... by noisy students while she was cataloging the rare manuscript collections in the restricted reading room.",
    options: {
      A: "to be constantly interrupted",
      B: "to constantly interrupt",
      C: "being constantly interrupted",
      D: "constantly interrupt"
    },
    answer: "C",
    explanation: "Resent merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 4,
    question: "The anthropological documentary crew arrived early to witness ... the sacred ancient coming-of-age ceremony by the indigenous community elders at dawn.",
    options: {
      A: "to conduct",
      B: "conduct",
      C: "being conducted",
      D: "to be conducted"
    },
    answer: "C",
    explanation: "Witness merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 5,
    question: "The renowned chef admitted ... the traditional recipe slightly by substituting imported truffles with locally sourced mushrooms due to import restrictions last season.",
    options: {
      A: "to be modified",
      B: "modifying",
      C: "being modified",
      D: "to modify"
    },
    answer: "C",
    explanation: "Admit merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 6,
    question: "Many health-conscious consumers have begun to boycott ... artificial preservatives in processed foods following the recent medical research findings published last month.",
    options: {
      A: "consuming",
      B: "to consume",
      C: "consumed",
      D: "to be consumed"
    },
    answer: "A",
    explanation: "Boycott merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 7,
    question: "The city council decided to ban ... in public parks after midnight due to numerous complaints from nearby residents about excessive noise disturbing their sleep.",
    options: {
      A: "to gather",
      B: "gathering",
      C: "gathered",
      D: "to be gathered"
    },
    answer: "B",
    explanation: "Ban merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 8,
    question: "Professional athletes usually anticipate ... rigorous physical examinations before major international competitions to ensure they meet the health standards.",
    options: {
      A: "undergoing",
      B: "to undergo",
      C: "undergone",
      D: "to be undergone"
    },
    answer: "A",
    explanation: "Anticipate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 9,
    question: "The graduate student genuinely appreciated ... the opportunity to present his groundbreaking research at the prestigious annual symposium last week.",
    options: {
      A: "being given",
      B: "to be given",
      C: "to give",
      D: "give"
    },
    answer: "A",
    explanation: "Appreciate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 10,
    question: "The conservative community members thoroughly abhor ... to explicit graphic content in mainstream media without proper warning labels or parental guidance notices.",
    options: {
      A: "being subjected",
      B: "to be subjected",
      C: "to subject",
      D: "subject"
    },
    answer: "A",
    explanation: "Abhor merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 11,
    question: "The local residents publicly commended ... the stranded hikers from the dangerous mountain cliff during the severe blizzard last weekend.",
    options: {
      A: "rescuing",
      B: "to rescue",
      C: "rescued",
      D: "to be rescued"
    },
    answer: "A",
    explanation: "Commend merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 12,
    question: "The exhausted marathon runner struggled to complete ... the final grueling ten kilometers of the mountainous course before sunset yesterday.",
    options: {
      A: "running",
      B: "to run",
      C: "run",
      D: "to be run"
    },
    answer: "A",
    explanation: "Complete merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 13,
    question: "The international fugitive desperately attempted to conceal ... by the plainclothes detective at the crowded airport terminal.",
    options: {
      A: "being immediately recognized",
      B: "to be immediately recognized",
      C: "to immediately recognize",
      D: "immediately recognize"
    },
    answer: "A",
    explanation: "Conceal merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 14,
    question: "The strict school principal absolutely refuses to condone ... mobile phones during classroom instruction under any circumstances whatsoever.",
    options: {
      A: "using",
      B: "to use",
      C: "used",
      D: "to be used"
    },
    answer: "A",
    explanation: "Condone merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 15,
    question: "The senior manager is seriously considering ... to the overseas branch in Singapore to advance his international career prospects significantly.",
    options: {
      A: "being transferred",
      B: "to be transferred",
      C: "transferred",
      D: "to transfer"
    },
    answer: "A",
    explanation: "Consider merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 16,
    question: "After the major corruption scandal, the disgraced politician refused to even contemplate ... public office again during his remaining lifetime.",
    options: {
      A: "seeking",
      B: "to seek",
      C: "sought",
      D: "to be sought"
    },
    answer: "A",
    explanation: "Contemplate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 17,
    question: "The undergraduate student vigorously defended ... the research paper from multiple online databases without proper academic citation or attribution.",
    options: {
      A: "copying",
      B: "to copy",
      C: "copied",
      D: "to be copied"
    },
    answer: "A",
    explanation: "Defend merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 18,
    question: "The professional athlete formally requested to defer ... into the mandatory military service until after the completion of the upcoming Olympic Games season.",
    options: {
      A: "being drafted",
      B: "to be drafted",
      C: "to draft",
      D: "draft"
    },
    answer: "A",
    explanation: "Defer merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 19,
    question: "The frustrated customer complained that the insurance company continued to delay ... for the damages caused by the flood three months ago.",
    options: {
      A: "being reimbursed",
      B: "to be reimbursed",
      C: "to reimburse",
      D: "reimburse"
    },
    answer: "A",
    explanation: "Delay merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 20,
    question: "The primary suspect persistently continued to deny ... at the crime scene when the alleged robbery actually occurred last Tuesday midnight.",
    options: {
      A: "being present",
      B: "to be present",
      C: "present",
      D: "to present"
    },
    answer: "A",
    explanation: "Deny merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 21,
    question: "The indigenous community leaders openly deplore ... from their ancestral lands without adequate compensation or prior consultation from authorities.",
    options: {
      A: "to be forcibly relocated",
      B: "to forcibly relocate",
      C: "being forcibly relocated",
      D: "forcibly relocate"
    },
    answer: "C",
    explanation: "Deplore merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 22,
    question: "The forensic expert vividly described ... the complex accident sequence using advanced computer simulation software for the jury members yesterday.",
    options: {
      A: "to reconstruct",
      B: "reconstructing",
      C: "reconstructed",
      D: "to be reconstructed"
    },
    answer: "B",
    explanation: "Describe merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 23,
    question: "The temperamental chef absolutely detests ... harshly about his experimental fusion dishes by unqualified amateur food bloggers on various social media platforms.",
    options: {
      A: "to be criticized",
      B: "being criticized",
      C: "to criticize",
      D: "criticize"
    },
    answer: "B",
    explanation: "Detest merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 24,
    question: "The former intelligence operative publicly disavowed ... classified military information to unauthorized foreign journalists during the confidential briefing last year.",
    options: {
      A: "to disclose",
      B: "disclose",
      C: "being disclosed",
      D: "to be disclosed"
    },
    answer: "C",
    explanation: "Disavow merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 25,
    question: "The telecommunications giant reluctantly decided to discontinue ... unlimited high-speed data plans to heavy internet users starting from the next fiscal year.",
    options: {
      A: "to provide",
      B: "providing",
      C: "provided",
      D: "to be provided"
    },
    answer: "B",
    explanation: "Discontinue merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 26,
    question: "The urban planners extensively discussed ... affordable residential housing complexes near the newly proposed mass rapid transit station downtown yesterday afternoon.",
    options: {
      A: "to construct",
      B: "constructing",
      C: "constructed",
      D: "to be constructed"
    },
    answer: "B",
    explanation: "Discuss merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 27,
    question: "The defense attorney will vigorously dispute ... the illegally obtained wiretap recordings as admissible evidence in the upcoming high-profile criminal trial proceedings.",
    options: {
      A: "to admit",
      B: "admitting",
      C: "admitted",
      D: "to be admitted"
    },
    answer: "B",
    explanation: "Dispute merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 28,
    question: "The marine biologists meticulously documented ... the rare migration patterns of the endangered green sea turtles along the protected coastal reef areas last summer.",
    options: {
      A: "to observe",
      B: "observing",
      C: "observed",
      D: "to be observed"
    },
    answer: "B",
    explanation: "Document merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 29,
    question: "The influential international sports federation controversially refused to endorse ... transgender athletes to compete in the women's competitive category without prior hormone therapy verification.",
    options: {
      A: "to allow",
      B: "allowing",
      C: "allowed",
      D: "to be allowed"
    },
    answer: "B",
    explanation: "Endorse merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 30,
    question: "The notoriously reclusive veteran actor surprisingly enjoys ... enthusiastically recognized by dedicated fans in crowded public places despite his frequent complaints about privacy invasion.",
    options: {
      A: "to be recognized",
      B: "recognize",
      C: "being recognized",
      D: "to recognize"
    },
    answer: "C",
    explanation: "Enjoy merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 31,
    question: "The avant-garde director could scarcely envision ... to compromise his artistic integrity by profit-driven studio executives during contract negotiations.",
    options: {
      A: "to be forced",
      B: "being forced",
      C: "to force",
      D: "force"
    },
    answer: "B",
    explanation: "Envision merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 32,
    question: "The notorious hacker somehow managed to escape ... by the sophisticated cybersecurity systems installed throughout the mainframe network.",
    options: {
      A: "to be detected",
      B: "being detected",
      C: "to detect",
      D: "detect"
    },
    answer: "B",
    explanation: "Escape merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 33,
    question: "The corrupt corporate executive desperately attempted to evade ... detailed questions regarding the fraudulent financial transactions during the sworn deposition yesterday.",
    options: {
      A: "to answer",
      B: "answering",
      C: "answered",
      D: "to be answered"
    },
    answer: "B",
    explanation: "Evade merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 34,
    question: "The absent-minded professor could not easily excuse ... the important faculty meeting because he was entirely preoccupied with his groundbreaking laboratory experiments.",
    options: {
      A: "to miss",
      B: "missing",
      C: "missed",
      D: "to be missed"
    },
    answer: "B",
    explanation: "Excuse merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 35,
    question: "The innovative mobile application was specifically designed to facilitate ... complex mathematical calculations for engineering students without expensive advanced scientific calculators.",
    options: {
      A: "to complete",
      B: "completing",
      C: "completed",
      D: "to be completed"
    },
    answer: "B",
    explanation: "Facilitate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 36,
    question: "After working twelve exhausting consecutive hours at the hospital, the pediatric nurse did not exactly fancy ... another double shift early the following freezing morning.",
    options: {
      A: "to work",
      B: "working",
      C: "worked",
      D: "to be worked"
    },
    answer: "B",
    explanation: "Fancy merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 37,
    question: "The conservative board members overwhelmingly favor ... the controversial merger proposal until after the next quarterly financial audit is fully completed.",
    options: {
      A: "to postpone",
      B: "postponing",
      C: "postponed",
      D: "to be postponed"
    },
    answer: "B",
    explanation: "Favor merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 38,
    question: "The renowned architect finally managed to finish ... the intricate blueprints for the environmentally sustainable skyscraper before the strict municipal deadline expired.",
    options: {
      A: "to design",
      B: "designing",
      C: "designed",
      D: "to be designed"
    },
    answer: "B",
    explanation: "Finish merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 39,
    question: "The risk management team failed to adequately foresee ... such catastrophic supply chain disruptions caused by the unexpected global pandemic outbreak last year.",
    options: {
      A: "to encounter",
      B: "encountering",
      C: "encountered",
      D: "to be encountered"
    },
    answer: "B",
    explanation: "Foresee merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 40,
    question: "The betrayed business partner could eventually forgive ... by the fraudulent investment scheme promoted by the unscrupulous financial advisor.",
    options: {
      A: "to be deliberately deceived",
      B: "being deliberately deceived",
      C: "deliberately deceive",
      D: "to deliberately deceive"
    },
    answer: "B",
    explanation: "Forgive merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 41,
    question: "The recovering alcoholic solemnly forswore ... intoxicating beverages of any kind after the life-threatening health scare last month.",
    options: {
      A: "to consume",
      B: "consuming",
      C: "consumed",
      D: "to be consumed"
    },
    answer: "B",
    explanation: "Forswear merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 42,
    question: "The ambitious young composer cannot possibly imagine ... to write the symphony for the royal coronation ceremony next year.",
    options: {
      A: "to be commissioned",
      B: "commission",
      C: "being commissioned",
      D: "to commission"
    },
    answer: "C",
    explanation: "Imagine merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 43,
    question: "The chronic anxiety disorder severely inhibits ... for the highly competitive national scholarship program this semester.",
    options: {
      A: "to be selected",
      B: "being selected",
      C: "to select",
      D: "select"
    },
    answer: "B",
    explanation: "Inhibit merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 44,
    question: "The massive infrastructure project will inevitably involve ... from established residential neighborhoods during construction phases.",
    options: {
      A: "to be temporarily relocated",
      B: "to temporarily relocate",
      C: "being temporarily relocated",
      D: "temporarily relocate"
    },
    answer: "C",
    explanation: "Involve merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 45,
    question: "The defendant desperately tried to justify ... the classified documents without proper authorization during the top-secret briefing yesterday.",
    options: {
      A: "to photocopy",
      B: "photocopy",
      C: "being photocopied",
      D: "to be photocopied"
    },
    answer: "C",
    explanation: "Justify merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 46,
    question: "The overwhelmed medical intern struggled to keep ... accurate patient records during the chaotic emergency room shift last night.",
    options: {
      A: "to update",
      B: "updating",
      C: "updated",
      D: "to be updated"
    },
    answer: "B",
    explanation: "Keep merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 47,
    question: "The displaced indigenous elders deeply lament ... from their ancestral territories by colonial authorities five decades ago.",
    options: {
      A: "to be forcibly removed",
      B: "being forcibly removed",
      C: "to forcibly remove",
      D: "forcibly remove"
    },
    answer: "B",
    explanation: "Lament merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 48,
    question: "The forgetful witness neglected to mention ... by anonymous phone calls the night before the crucial trial testimony.",
    options: {
      A: "to be threatened",
      B: "being threatened",
      C: "to threaten",
      D: "threaten"
    },
    answer: "B",
    explanation: "Mention merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 49,
    question: "The experienced supervisor never minds ... additional administrative duties during the understaffed holiday seasons every year.",
    options: {
      A: "to be assigned",
      B: "being assigned",
      C: "to assign",
      D: "assign"
    },
    answer: "B",
    explanation: "Mind merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 50,
    question: "The transferred executive genuinely missed ... on important strategic decisions by the senior management board after leaving headquarters.",
    options: {
      A: "to be consulted",
      B: "being consulted",
      C: "to consult",
      D: "consult"
    },
    answer: "B",
    explanation: "Miss merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 51,
    question: "The catastrophic earthquake damage unfortunately necessitated immediately ... the entire historic downtown district for urgent public safety reasons.",
    options: {
      A: "to evacuate",
      B: "evacuating",
      C: "evacuated",
      D: "to be evacuated"
    },
    answer: "B",
    explanation: "Necessitate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 52,
    question: "The merciful governor eventually agreed to pardon ... the public funds during his first term in office five years ago.",
    options: {
      A: "to embezzle",
      B: "embezzling",
      C: "embezzled",
      D: "to be embezzled"
    },
    answer: "B",
    explanation: "Pardon merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 53,
    question: "The ambitious junior associate could hardly picture herself ... by the senior partners during the quarterly performance review next week.",
    options: {
      A: "to be harshly criticized",
      B: "harshly criticize",
      C: "being harshly criticized",
      D: "to be harshly criticized"
    },
    answer: "C",
    explanation: "Picture merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 54,
    question: "The executive board reluctantly decided to postpone ... the controversial merger agreement until after the federal investigation finally concludes.",
    options: {
      A: "to sign",
      B: "signing",
      C: "signed",
      D: "to be signed"
    },
    answer: "B",
    explanation: "Postpone merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 55,
    question: "The surgical residents must diligently practice ... delicate procedures on virtual reality simulators before operating on actual human patients.",
    options: {
      A: "to perform",
      B: "performing",
      C: "performed",
      D: "to be performed"
    },
    answer: "B",
    explanation: "Practice merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 56,
    question: "The athlete's chronic tendon injury unfortunately precluded him ... for the national Olympic team despite his exceptional previous performances.",
    options: {
      A: "to be selected",
      B: "being selected",
      C: "select",
      D: "to be selected"
    },
    answer: "B",
    explanation: "Preclude merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 57,
    question: "The confidential files are carefully locked to prevent ... by curious office visitors during the unattended lunch break.",
    options: {
      A: "to access",
      B: "access",
      C: "being accessed",
      D: "to be accessed"
    },
    answer: "C",
    explanation: "Prevent merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 58,
    question: "The strict school handbook explicitly prohibits ... electronic devices during final examination periods in all campus buildings.",
    options: {
      A: "to use",
      B: "using",
      C: "used",
      D: "to be used"
    },
    answer: "B",
    explanation: "Prohibit merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 59,
    question: "The veteran quarterback finally decided to quit ... professional football after suffering three consecutive severe concussions last season.",
    options: {
      A: "to play",
      B: "playing",
      C: "played",
      D: "to be played"
    },
    answer: "B",
    explanation: "Quit merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 60,
    question: "The trauma survivor could vaguely recall ... inside the malfunctioning elevator for nearly three terrifying hours during the blackout.",
    options: {
      A: "to be trapped",
      B: "being trapped",
      C: "to trap",
      D: "trap"
    },
    answer: "B",
    explanation: "Recall merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 61,
    question: "The elderly witness struggled to recollect ... specific details about the suspicious vehicle immediately after the hit-and-run incident occurred.",
    options: {
      A: "to notice",
      B: "noticing",
      C: "noticed",
      D: "to be noticed"
    },
    answer: "B",
    explanation: "Recollect merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 62,
    question: "The disgraced politician reluctantly agreed to relinquish ... the controversial offshore accounts following the intense media scrutiny last month.",
    options: {
      A: "to control",
      B: "controlling",
      C: "controlled",
      D: "to be controlled"
    },
    answer: "B",
    explanation: "Relinquish merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 63,
    question: "The arrogant CEO secretly relished ... by the influential industry analysts during the prestigious award ceremony yesterday.",
    options: {
      A: "to be publicly praised",
      B: "being publicly praised",
      C: "to publicly praise",
      D: "publicly praise"
    },
    answer: "B",
    explanation: "Relish merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 64,
    question: "The radical activist formally renounced ... violent protest tactics after witnessing the unnecessary injuries to innocent bystanders during the demonstration.",
    options: {
      A: "to advocate",
      B: "advocating",
      C: "advocated",
      D: "to be advocated"
    },
    answer: "B",
    explanation: "Renounce merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 65,
    question: "The concerned neighbor immediately reported ... suspicious packages delivered to the abandoned house across the street three consecutive nights.",
    options: {
      A: "to receive",
      B: "receive",
      C: "being received",
      D: "to be received"
    },
    answer: "C",
    explanation: "Report merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 66,
    question: "The junior associate deeply resented ... menial administrative tasks while his senior colleagues handled the prestigious corporate negotiations.",
    options: {
      A: "to be assigned",
      B: "being assigned",
      C: "assign",
      D: "to be assigned"
    },
    answer: "B",
    explanation: "Resent merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 67,
    question: "The recovering patient tried desperately to resist ... additional pain medication despite the excruciating discomfort following the major surgical procedure.",
    options: {
      A: "to take",
      B: "taking",
      C: "taken",
      D: "to be taken"
    },
    answer: "B",
    explanation: "Resist merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 68,
    question: "The striking factory workers finally agreed to resume ... their regular shifts after reaching a satisfactory wage agreement with the management board.",
    options: {
      A: "to work",
      B: "working",
      C: "worked",
      D: "to be worked"
    },
    answer: "B",
    explanation: "Resume merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 69,
    question: "The cynical art critic openly ridiculed ... the amateur painter's work displayed prominently at the prestigious national gallery last week.",
    options: {
      A: "to exhibit",
      B: "exhibiting",
      C: "exhibited",
      D: "to be exhibited"
    },
    answer: "B",
    explanation: "Ridicule merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 70,
    question: "The adventurous mountaineer refused to risk ... in the dangerous avalanche by ignoring the severe weather warnings from the local authorities.",
    options: {
      A: "to be caught",
      B: "being caught",
      C: "catch",
      D: "to catch"
    },
    answer: "B",
    explanation: "Risk merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 71,
    question: "The disgruntled former employee was immediately terminated for attempting to sabotage ... the confidential client database by uploading malicious ransomware.",
    options: {
      A: "to destroy",
      B: "destroying",
      C: "destroyed",
      D: "to be destroyed"
    },
    answer: "B",
    explanation: "Sabotage merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 72,
    question: "The international athletic federation categorically refused to sanction ... performance-enhancing substances by professional competitors under any medical pretense whatsoever.",
    options: {
      A: "to use",
      B: "using",
      C: "used",
      D: "to be used"
    },
    answer: "B",
    explanation: "Sanction merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 73,
    question: "The irresponsible junior associate consistently tried to shirk ... his mandatory documentation responsibilities onto his already overburdened administrative assistants.",
    options: {
      A: "to transfer",
      B: "transferring",
      C: "transferred",
      D: "to be transferred"
    },
    answer: "B",
    explanation: "Shirk merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 74,
    question: "The notoriously reclusive novelist deliberately chose to shun ... by aggressive literary journalists during her peaceful writing retreat in the countryside.",
    options: {
      A: "to be interviewed",
      B: "interview",
      C: "being interviewed",
      D: "to interview"
    },
    answer: "C",
    explanation: "Shun merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 75,
    question: "The aerospace engineering students were required to simulate ... emergency evacuation procedures on advanced virtual reality platforms before actual aircraft certification.",
    options: {
      A: "to conduct",
      B: "conducting",
      C: "conducted",
      D: "to be conducted"
    },
    answer: "B",
    explanation: "Simulate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 76,
    question: "The seasoned financial advisor strongly suggested ... conservative investment portfolios rather than volatile cryptocurrency assets during the economic uncertainty.",
    options: {
      A: "to choose",
      B: "choosing",
      C: "chosen",
      D: "to be chosen"
    },
    answer: "B",
    explanation: "Suggest merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 77,
    question: "The neighborhood association unanimously voted to support ... the historic century-old library building from demolition by commercial developers.",
    options: {
      A: "to preserve",
      B: "preserving",
      C: "preserved",
      D: "to be preserved"
    },
    answer: "B",
    explanation: "Support merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 78,
    question: "The strict academy superintendent absolutely refused to tolerate ... unauthorized electronic devices in the examination halls during the prestigious scholarship tests.",
    options: {
      A: "to use",
      B: "using",
      C: "used",
      D: "to be used"
    },
    answer: "B",
    explanation: "Tolerate merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 79,
    question: "The dismissed employees struggled to understand ... without prior performance warnings or official disciplinary records last quarter.",
    options: {
      A: "to be abruptly terminated",
      B: "being abruptly terminated",
      C: "abruptly terminate",
      D: "to abruptly terminate"
    },
    answer: "B",
    explanation: "Understand merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 80,
    question: "The safety inspector arrived yesterday to verify ... by the construction crew at the hazardous industrial work site.",
    options: {
      A: "to be strictly enforced",
      B: "being strictly enforced",
      C: "to strictly enforce",
      D: "strictly enforce"
    },
    answer: "B",
    explanation: "Verify merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 81,
    question: "The authoritarian committee chairman unexpectedly decided to veto ... the controversial funding proposal without consulting other board members during the emergency session.",
    options: {
      A: "to approve",
      B: "approving",
      C: "approved",
      D: "to be approved"
    },
    answer: "B",
    explanation: "Veto merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 82,
    question: "The insecure rookie architect could barely visualize himself ... for the prestigious international design competition among world-renowned established firms.",
    options: {
      A: "to be selected",
      B: "being selected",
      C: "select",
      D: "to select"
    },
    answer: "B",
    explanation: "Visualize merupakan kelompok kata kerja yang selalu diikuti gerund."
  },
  {
    id: 83,
    question: "The minor typographical errors scattered throughout the manuscript certainly do not warrant ... the entire publication rejected by the notoriously demanding senior editor.",
    options: {
      A: "to have",
      B: "having",
      C: "had",
      D: "to be had"
    },
    answer: "B",
    explanation: "Warrant merupakan kelompok kata kerja yang selalu diikuti gerund."
  }
];

// Function to divide questions into 17 packets (16 packets x 5 questions + 1 packet x 3 questions)
function divideIntoPackets(questions) {
  const packets = [];
  const questionsPerPacket = 5;
  const totalPackets = 17;
  
  for (let i = 0; i < totalPackets; i++) {
    const startIndex = i * questionsPerPacket;
    const endIndex = i === totalPackets - 1 ? questions.length : startIndex + questionsPerPacket;
    const packetQuestions = questions.slice(startIndex, endIndex);
    
    packets.push({
      id: i + 1,
      name: `Paket Soal ${i + 1}`,
      questions: packetQuestions,
      totalQuestions: packetQuestions.length
    });
  }
  
  return packets;
}

// Export data
const packets = divideIntoPackets(questionsData);
