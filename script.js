/**
 * Persiapantubel - Infinitive & Gerund Practice (Level Sulit)
 * 166 Soal - 34 Paket
 * Warna: Merah (#E16B6B)
 */

// ============================================
// DATA: 166 SOAL INFINITIVE & GERUND (SHUFFLED)
// ============================================
const allQuestions = [
  {
    id: 1,
    question: "The struggling but ambitious artist desperately wanted ... by the prestigious national gallery during the highly competitive annual exhibition showcasing emerging contemporary talents from across the country.",
    options: ["featuring", "to feature", "being featured", "to be featured"],
    answer: 3,
    explanation: "Wanted merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 2,
    question: "The outdated maritime regulatory framework could hardly stand ... effectively in the rapidly evolving global shipping landscape dominated by autonomous vessel technology and artificial intelligence navigation systems.",
    options: ["to enforce", "enforcing", "to be enforced", "being enforced"],
    answer: 2,
    explanation: "Stand merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 3,
    question: "The cynical art critic openly ridiculed ... the amateur painter\'s work displayed prominently at the prestigious national gallery last week.",
    options: ["to exhibit", "exhibiting", "being exhibited", "to be exhibited"],
    answer: 1,
    explanation: "Ridicule merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 4,
    question: "The experimental educational curriculum, which had generated considerable controversy among conservative faculty members, was carefully opted ... at only three select institutions during the initial trial phase to minimize potential academic disruption.",
    options: ["to be tested", "testing", "to test", "being tested"],
    answer: 0,
    explanation: "Opted merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 5,
    question: "The dismissed employees struggled to understand ... without prior performance warnings or official disciplinary records last quarter.",
    options: ["to be abruptly terminated", "being abruptly terminated", "abruptly terminating", "to abruptly terminate"],
    answer: 1,
    explanation: "Understand merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 6,
    question: "The urban planners extensively discussed ... affordable residential housing complexes near the newly proposed mass rapid transit station downtown yesterday afternoon.",
    options: ["to construct", "constructing", "being constructed", "to be constructed"],
    answer: 1,
    explanation: "Discuss merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 7,
    question: "The forgetful witness neglected to mention ... by anonymous phone calls the night before the crucial trial testimony.",
    options: ["to be threatened", "being threatened", "to threaten", "threatening"],
    answer: 1,
    explanation: "Mention merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 8,
    question: "The defendant desperately tried to justify ... the classified documents without proper authorization during the top-secret briefing yesterday.",
    options: ["to photocopy", "photocopying", "being photocopied", "to be photocopied"],
    answer: 2,
    explanation: "Justify merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 9,
    question: "The innovative mobile application was specifically designed to facilitate ... complex mathematical calculations for engineering students without expensive advanced scientific calculators.",
    options: ["to complete", "completing", "being completed", "to be completed"],
    answer: 1,
    explanation: "Facilitate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 10,
    question: "The defense attorney will vigorously dispute ... the illegally obtained wiretap recordings as admissible evidence in the upcoming high-profile criminal trial proceedings.",
    options: ["to admit", "admitting", "being admitted", "to be admitted"],
    answer: 1,
    explanation: "Dispute merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 11,
    question: "The anxious job applicants patiently waited ... by the intimidating panel of senior executives for the final round of the highly competitive management trainee recruitment program.",
    options: ["to interview", "interviewing", "to be interviewed", "being interviewed"],
    answer: 2,
    explanation: "Waited merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 12,
    question: "The controversial memoir, which had been banned in several conservative countries for its explicit political content, was never originally intended ... by impressionable young readers without proper parental guidance and supervision.",
    options: ["to read", "reading", "to be read", "being read"],
    answer: 2,
    explanation: "Intended merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 13,
    question: "The faculty senate unanimously resolved ... the outdated student assessment methodology that had been criticized for lacking objective evaluation criteria during the previous academic accreditation review.",
    options: ["to overhaul", "overhauling", "to be overhauled", "being overhauled"],
    answer: 0,
    explanation: "Resolved merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 14,
    question: "The overwhelmed medical intern struggled to keep ... accurate patient records during the chaotic emergency room shift last night.",
    options: ["to update", "updating", "being updated", "to be updated"],
    answer: 1,
    explanation: "Keep merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 15,
    question: "The amateur marathon runner, who had never completed a full 42-kilometer race before, desperately attempted ... by the medical team stationed at the 30-kilometer checkpoint after showing severe signs of dehydration.",
    options: ["to assist", "assisting", "to be assisted", "being assisted"],
    answer: 2,
    explanation: "Attempted merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 16,
    question: "The disgraced politician reluctantly agreed to relinquish ... the controversial offshore accounts following the intense media scrutiny last month.",
    options: ["to control", "controlling", "being controlled", "to be controlled"],
    answer: 1,
    explanation: "Relinquish merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 17,
    question: "The diligent junior law associate quietly aspired ... to senior partnership status before his thirty-fifth birthday despite the notoriously rigid hierarchical structure at the conservative corporate litigation firm.",
    options: ["promoting", "to promote", "being promoted", "to be promoted"],
    answer: 3,
    explanation: "Aspired merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 18,
    question: "The confidential files are carefully locked to prevent ... by curious office visitors during the unattended lunch break.",
    options: ["to access", "accessing", "being accessed", "to be accessed"],
    answer: 2,
    explanation: "Prevent merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 19,
    question: "The former intelligence operative publicly disavowed ... classified military information to unauthorized foreign journalists during the confidential briefing last year.",
    options: ["to disclose", "disclosing", "being disclosed", "to be disclosed"],
    answer: 2,
    explanation: "Disavow merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 20,
    question: "The injured professional athlete, who demanded only the best medical treatment available, barely cared ... by the inexperienced medical intern during the preliminary examination at the emergency trauma center.",
    options: ["examining", "to examine", "being examined", "to be examined"],
    answer: 3,
    explanation: "Cared merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 21,
    question: "The displaced indigenous elders deeply lament ... from their ancestral territories by colonial authorities five decades ago.",
    options: ["to be forcibly removed", "being forcibly removed", "to forcibly remove", "forcibly removing"],
    answer: 1,
    explanation: "Lament merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 22,
    question: "The underfunded public school district constantly strives ... by the state accreditation board during the rigorous biannual evaluation process that determines future federal funding allocations.",
    options: ["to evaluate", "evaluating", "to be evaluated", "being evaluated"],
    answer: 2,
    explanation: "Strives merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 23,
    question: "The conservative board members overwhelmingly favor ... the controversial merger proposal until after the next quarterly financial audit is fully completed.",
    options: ["to postpone", "postponing", "being postponed", "to be postponed"],
    answer: 1,
    explanation: "Favor merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 24,
    question: "The research proposal, which had been revised three times prior to the submission deadline, was carefully arranged ... by the ethics committee before any empirical data could be collected from the participants.",
    options: ["to review", "to be reviewed", "reviewing", "being reviewed"],
    answer: 1,
    explanation: "Arranged merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 25,
    question: "The tenured biochemistry professor, despite numerous polite requests from the department head, flatly refused ... by the new graduate teaching assistants assigned to his advanced laboratory course last semester.",
    options: ["to assist", "assisting", "being assisted", "to be assisted"],
    answer: 3,
    explanation: "Refused merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 26,
    question: "The vintage luxury automobile, which had been stored in a private collection for decades, politely declined ... at the prestigious auction due to unresolved estate ownership disputes among the deceased collector\'s estranged heirs.",
    options: ["to be sold", "to sell", "selling", "being sold"],
    answer: 0,
    explanation: "Declined merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 27,
    question: "The century-old public transportation infrastructure was practically itching ... after decades of deferred maintenance and chronic underfunding finally compromised passenger safety standards.",
    options: ["to modernize", "modernizing", "to be modernized", "being modernized"],
    answer: 2,
    explanation: "Itching merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 28,
    question: "The elderly witness struggled to recollect ... specific details about the suspicious vehicle immediately after the hit-and-run incident occurred.",
    options: ["to notice", "noticing", "being noticed", "to be noticed"],
    answer: 1,
    explanation: "Recollect merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 29,
    question: "Patients suffering from chronic severe insomnia, according to recent comprehensive clinical studies conducted at the university medical hospital, tend ... by conventional sleeping pills only if they simultaneously address the underlying psychological issues.",
    options: ["curing", "to cure", "being cured", "to be cured"],
    answer: 3,
    explanation: "Tend merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 30,
    question: "The controversial settlement terms, which had been negotiated in private for months, were finally agreed ... by the reluctant plaintiff only after the defendant\'s insurance company substantially increased the monetary compensation package.",
    options: ["accepting", "to accept", "being accepted", "to be accepted"],
    answer: 3,
    explanation: "Agreed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 31,
    question: "The experienced supervisor never minds ... additional administrative duties during the understaffed holiday seasons every year.",
    options: ["to be assigned", "being assigned", "to assign", "assigning"],
    answer: 1,
    explanation: "Mind merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 32,
    question: "The isolated island nation gradually grew ... a significant economic powerhouse through strategic export diversification policies implemented over three consecutive decades of sustained development.",
    options: ["to be becoming", "to become", "becoming", "being become"],
    answer: 1,
    explanation: "Grew merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 33,
    question: "The safety inspector arrived yesterday to verify ... by the construction crew at the hazardous industrial work site.",
    options: ["to be strictly enforced", "being strictly enforced", "to strictly enforce", "strictly enforcing"],
    answer: 1,
    explanation: "Verify merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 34,
    question: "The recovering patient tried desperately to resist ... additional pain medication despite the excruciating discomfort following the major surgical procedure.",
    options: ["to take", "taking", "being taken", "to be taken"],
    answer: 1,
    explanation: "Resist merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 35,
    question: "The absent-minded professor could not easily excuse ... the important faculty meeting because he was entirely preoccupied with his groundbreaking laboratory experiments.",
    options: ["to miss", "missing", "being missed", "to be missed"],
    answer: 1,
    explanation: "Excuse merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 36,
    question: "The cornered corporate executive, facing irrefutable evidence of embezzlement, desperately pleaded ... leniency during the emotional sentencing hearing despite the prosecution\'s demand for maximum incarceration.",
    options: ["to grant", "granting", "to be granted", "being granted"],
    answer: 2,
    explanation: "Pleaded merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 37,
    question: "Having lost all his savings in the stock market crash, the desperate investor begged ... by the bank to extend the mortgage payment deadline until his investments could be liquidated.",
    options: ["to consider", "to be considered", "considering", "being considered"],
    answer: 1,
    explanation: "Begged merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 38,
    question: "The renowned chef admitted ... the traditional recipe slightly by substituting imported truffles with locally sourced mushrooms due to import restrictions last season.",
    options: ["to be modified", "modifying", "being modified", "to modify"],
    answer: 2,
    explanation: "Admit merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 39,
    question: "The ambitious research fellow, who had spent three years on the project, desperately proved ... the groundbreaking hypothesis through rigorous empirical data analysis before the grant renewal deadline expired next month.",
    options: ["to verify", "to be verified", "verifying", "being verified"],
    answer: 0,
    explanation: "Proved merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 40,
    question: "The mysterious ancient artifacts, which had been buried beneath the temple ruins for centuries, suddenly appeared ... by the illegal treasure hunters using sophisticated ground-penetrating radar equipment last summer.",
    options: ["to locate", "locating", "to be located", "being located"],
    answer: 2,
    explanation: "Appeared merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 41,
    question: "The international humanitarian relief organization, responding to the catastrophic natural disaster, publicly pledged ... emergency medical supplies and temporary shelter facilities to the coastal communities before the monsoon season complicated logistical access routes.",
    options: ["delivering", "to deliver", "to be delivered", "being delivered"],
    answer: 1,
    explanation: "Pledged merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 42,
    question: "The massive abstract sculpture in the newly constructed city square was originally planned ... by the controversial avant-garde artist himself, but severe budget cuts unfortunately prevented its timely completion.",
    options: ["installing", "to install", "being installed", "to be installed"],
    answer: 3,
    explanation: "Planned merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 43,
    question: "The avant-garde director could scarcely envision ... to compromise his artistic integrity by profit-driven studio executives during contract negotiations.",
    options: ["to be forced", "being forced", "to force", "forcing"],
    answer: 1,
    explanation: "Envision merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 44,
    question: "The notoriously reclusive novelist deliberately chose to shun ... by aggressive literary journalists during her peaceful writing retreat in the countryside.",
    options: ["to be interviewed", "interviewing", "being interviewed", "to interview"],
    answer: 2,
    explanation: "Shun merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 45,
    question: "The minor typographical errors scattered throughout the manuscript certainly do not warrant ... the entire publication rejected by the notoriously demanding senior editor.",
    options: ["to have", "having", "being had", "to be had"],
    answer: 1,
    explanation: "Warrant merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 46,
    question: "The world-renowned maestro finally deigned ... the amateur community orchestra during the charity gala performance despite his previous categorical refusal to conduct non-professional ensembles throughout his illustrious career.",
    options: ["to be conducting", "to conduct", "conducting", "being conducted"],
    answer: 1,
    explanation: "Deigned merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 47,
    question: "The strict supervisor at the downtown corporate office simply could not tolerate ... repeated violations of the established safety protocols despite numerous previous warnings.",
    options: ["to overlook", "overlooking", "being overlooked", "to be overlooked"],
    answer: 1,
    explanation: "Tolerate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 48,
    question: "The rival pharmaceutical executives allegedly conspired ... the controversial generic drug pricing strategy that would ultimately undermine the smaller competitors\' market share during the critical patent expiration period.",
    options: ["to be manipulating", "to manipulate", "manipulating", "being manipulated"],
    answer: 1,
    explanation: "Conspired merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 49,
    question: "The unpopular senior management team, which had implemented controversial cost-cutting measures, was rumored to have secretly plotted ... during the hostile corporate restructuring that threatened the company\'s autonomous operational culture.",
    options: ["to be replaced", "replacing", "to replace", "being replaced"],
    answer: 0,
    explanation: "Plotted merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 50,
    question: "The mysterious coded message, which had remained unsolved for centuries, suddenly came ... through advanced computational linguistics algorithms employed by the graduate research team at the university cryptography laboratory.",
    options: ["to be deciphered", "to decipher", "deciphering", "being deciphered"],
    answer: 0,
    explanation: "Came merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 51,
    question: "The adventurous mountaineer refused to risk ... in the dangerous avalanche by ignoring the severe weather warnings from the local authorities.",
    options: ["to be caught", "being caught", "catching", "to catch"],
    answer: 1,
    explanation: "Risk merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 52,
    question: "The international fugitive desperately attempted to conceal ... by the plainclothes detective at the crowded airport terminal.",
    options: ["being immediately recognized", "to be immediately recognized", "to immediately recognize", "immediately recognizing"],
    answer: 0,
    explanation: "Conceal merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 53,
    question: "The professional athlete formally requested to defer ... into the mandatory military service until after the completion of the upcoming Olympic Games season.",
    options: ["being drafted", "to be drafted", "to draft", "drafting"],
    answer: 0,
    explanation: "Defer merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 54,
    question: "The struggling technology startup, facing imminent bankruptcy proceedings, desperately elected ... rather than accepting the unfavorable acquisition terms proposed by the multinational conglomerate during the hostile takeover negotiations.",
    options: ["to be liquidated", "liquidating", "to liquidate", "being liquidated"],
    answer: 0,
    explanation: "Elected merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 55,
    question: "The construction company, which had previously violated several important federal safety regulations, solemnly promised ... by independent certified inspectors before the commercial building could be officially opened to the general public.",
    options: ["inspecting", "to inspect", "being inspected", "to be inspected"],
    answer: 3,
    explanation: "Promised merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 56,
    question: "The temperamental chef absolutely detests ... harshly about his experimental fusion dishes by unqualified amateur food bloggers on various social media platforms.",
    options: ["to be criticized", "being criticized", "to criticize", "criticizing"],
    answer: 1,
    explanation: "Detest merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 57,
    question: "The ambitious young composer cannot possibly imagine ... to write the symphony for the royal coronation ceremony next year.",
    options: ["to be commissioned", "commissioning", "being commissioned", "to commission"],
    answer: 2,
    explanation: "Imagine merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 58,
    question: "The controversial urban zoning ordinance, which had generated heated debate among residents, was finally condescended ... after the city council reluctantly acknowledged the widespread community opposition during the marathon public hearing session.",
    options: ["to be amended", "to amend", "amending", "being amended"],
    answer: 0,
    explanation: "Condescended merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 59,
    question: "The chronic anxiety disorder severely inhibits ... for the highly competitive national scholarship program this semester.",
    options: ["to be selected", "being selected", "to select", "selecting"],
    answer: 1,
    explanation: "Inhibit merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 60,
    question: "The retiring university president, who had served the academic institution for nearly three decades, publicly wished ... by the board of trustees with a formal ceremonial banquet commensurate with his extensive contributions to scholarly research.",
    options: ["honoring", "to honor", "being honored", "to be honored"],
    answer: 3,
    explanation: "Wished merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 61,
    question: "The local residents publicly commended ... the stranded hikers from the dangerous mountain cliff during the severe blizzard last weekend.",
    options: ["rescuing", "to rescue", "being rescued", "to be rescued"],
    answer: 0,
    explanation: "Commend merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 62,
    question: "The wrongly convicted political prisoner, who had maintained his innocence for twenty years, emotionally rejoiced ... with his exiled family members after the presidential pardon was granted last winter.",
    options: ["reuniting", "to reunite", "to be reunited", "being reunited"],
    answer: 2,
    explanation: "Rejoiced merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 63,
    question: "The abandoned historical building in the city center, which had been vacant for nearly three decades, was suddenly offered ... by the local municipal government to the non-profit organization for their expanding community outreach programs.",
    options: ["to renovate", "renovating", "being renovated", "to be renovated"],
    answer: 3,
    explanation: "Offered merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 64,
    question: "The exhausted marathon runner struggled to complete ... the final grueling ten kilometers of the mountainous course before sunset yesterday.",
    options: ["running", "to run", "being run", "to be run"],
    answer: 0,
    explanation: "Complete merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 65,
    question: "The ambitious young diplomat, who had just completed her master\'s degree in international relations, ardently desired ... by the prestigious foreign ministry for the challenging ambassadorial position in the politically unstable host country.",
    options: ["to select", "selecting", "being selected", "to be selected"],
    answer: 3,
    explanation: "Desired merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 66,
    question: "Many health-conscious consumers have begun to boycott ... artificial preservatives in processed foods following the recent medical research findings published last month.",
    options: ["consuming", "to consume", "being consumed", "to be consumed"],
    answer: 0,
    explanation: "Boycott merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 67,
    question: "The charismatic spiritual leader publicly professed ... supernatural healing abilities over terminal illnesses through ancient meditation techniques passed down through generations of mystic practitioners.",
    options: ["to possess", "possessing", "to be possessed", "being possessed"],
    answer: 0,
    explanation: "Professed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 68,
    question: "The ambitious young attorney, who had sacrificed his personal relationships for career advancement, deeply longed ... the prestigious partnership position despite the grueling eighty-hour workweeks required at the elite corporate litigation firm.",
    options: ["to be offered", "to attain", "attaining", "being offered"],
    answer: 1,
    explanation: "Longed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 69,
    question: "The risk management team failed to adequately foresee ... such catastrophic supply chain disruptions caused by the unexpected global pandemic outbreak last year.",
    options: ["to encounter", "encountering", "being encountered", "to be encountered"],
    answer: 1,
    explanation: "Foresee merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 70,
    question: "After evaluating all candidates extensively, the selection committee unanimously chose ... by an external consultant rather than internal staff to ensure complete objectivity in the final assessment.",
    options: ["to be advised", "advising", "to advise", "being advised"],
    answer: 0,
    explanation: "Chose merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 71,
    question: "After the controversial documentary was released, several prominent environmental activists began to advocate ... stricter international regulations on carbon emissions by major industrial nations.",
    options: ["imposing", "to impose", "being imposed", "to be imposed"],
    answer: 0,
    explanation: "Advocate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 72,
    question: "The ambitious junior associate could hardly picture herself ... by the senior partners during the quarterly performance review next week.",
    options: ["to be harshly criticized", "harshly criticizing", "being harshly criticized", "to be harshly criticized"],
    answer: 2,
    explanation: "Picture merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 73,
    question: "The controversial environmental protection policy, which was proposed by the opposition party, was never originally meant ... by local authorities without substantial federal oversight and rigorous compliance monitoring mechanisms.",
    options: ["implementing", "to implement", "to be implemented", "being implemented"],
    answer: 2,
    explanation: "Meant merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 74,
    question: "The concerned neighbor immediately reported ... suspicious packages delivered to the abandoned house across the street three consecutive nights.",
    options: ["to receive", "receiving", "being received", "to be received"],
    answer: 2,
    explanation: "Report merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 75,
    question: "After working twelve exhausting consecutive hours at the hospital, the pediatric nurse did not exactly fancy ... another double shift early the following freezing morning.",
    options: ["to work", "working", "being worked", "to be worked"],
    answer: 1,
    explanation: "Fancy merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 76,
    question: "The corrupt corporate executive desperately attempted to evade ... detailed questions regarding the fraudulent financial transactions during the sworn deposition yesterday.",
    options: ["to answer", "answering", "being answered", "to be answered"],
    answer: 1,
    explanation: "Evade merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 77,
    question: "The disgruntled former employee was immediately terminated for attempting to sabotage ... the confidential client database by uploading malicious ransomware.",
    options: ["to destroy", "destroying", "being destroyed", "to be destroyed"],
    answer: 1,
    explanation: "Sabotage merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 78,
    question: "The transferred executive genuinely missed ... on important strategic decisions by the senior management board after leaving headquarters.",
    options: ["to be consulted", "being consulted", "to consult", "consulting"],
    answer: 1,
    explanation: "Miss merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 79,
    question: "The marine biologists meticulously documented ... the rare migration patterns of the endangered green sea turtles along the protected coastal reef areas last summer.",
    options: ["to observe", "observing", "being observed", "to be observed"],
    answer: 1,
    explanation: "Document merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 80,
    question: "The elderly patient, despite having been fully informed of the substantial surgical risks involved in the complex cardiac procedure, reluctantly consented ... by the renowned cardiothoracic surgeon at the university teaching hospital.",
    options: ["to operate", "operating", "to be operated", "being operated"],
    answer: 2,
    explanation: "Consented merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 81,
    question: "The frustrated customer complained that the insurance company continued to delay ... for the damages caused by the flood three months ago.",
    options: ["being reimbursed", "to be reimbursed", "to reimburse", "reimbursing"],
    answer: 0,
    explanation: "Delay merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 82,
    question: "The archaeological research team, working under extreme weather conditions in the remote desert excavation site, was determined ... by the international heritage foundation before the upcoming monsoon season destroyed the fragile ancient artifacts.",
    options: ["to rescue", "rescuing", "to be rescued", "being rescued"],
    answer: 2,
    explanation: "Determined merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 83,
    question: "The indigenous community leaders openly deplore ... from their ancestral lands without adequate compensation or prior consultation from authorities.",
    options: ["to be forcibly relocated", "to forcibly relocate", "being forcibly relocated", "forcibly relocating"],
    answer: 2,
    explanation: "Deplore merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 84,
    question: "The telecommunications giant reluctantly decided to discontinue ... unlimited high-speed data plans to heavy internet users starting from the next fiscal year.",
    options: ["to provide", "providing", "being provided", "to be provided"],
    answer: 1,
    explanation: "Discontinue merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 85,
    question: "The premium insurance policy explicitly guarantees ... by specialists at any accredited hospital worldwide without prior authorization from the primary healthcare provider.",
    options: ["to treat", "treating", "to be treated", "being treated"],
    answer: 2,
    explanation: "Guarantees merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 86,
    question: "The retired military surgeon courageously volunteered ... the overwhelmed field hospital during the catastrophic humanitarian crisis despite his advanced age and previous combat-related disabilities.",
    options: ["to assist", "to be assisted", "assisting", "being assisted"],
    answer: 0,
    explanation: "Volunteered merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 87,
    question: "The classified military installation, which was constructed during the Cold War era, happened ... by the commercial satellite imaging company while they were conducting routine geological surveys of the remote desert region.",
    options: ["to photograph", "photographing", "to be photographed", "being photographed"],
    answer: 2,
    explanation: "Happened merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 88,
    question: "The seasoned financial advisor strongly suggested ... conservative investment portfolios rather than volatile cryptocurrency assets during the economic uncertainty.",
    options: ["to choose", "choosing", "being chosen", "to be chosen"],
    answer: 1,
    explanation: "Suggest merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 89,
    question: "The notorious hacker somehow managed to escape ... by the sophisticated cybersecurity systems installed throughout the mainframe network.",
    options: ["to be detected", "being detected", "to detect", "detecting"],
    answer: 1,
    explanation: "Escape merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 90,
    question: "The notoriously confrontational art critic never hesitated ... by hostile readers regarding his controversial negative reviews published in the prestigious metropolitan cultural magazine last Sunday edition.",
    options: ["criticizing", "to criticize", "being criticized", "to be criticized"],
    answer: 3,
    explanation: "Hesitated merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 91,
    question: "The struggling but talented portrait painter could barely afford ... by the prestigious uptown gallery due to the exorbitant twenty percent commission fees charged on every successful artwork transaction.",
    options: ["representing", "to represent", "being represented", "to be represented"],
    answer: 3,
    explanation: "Afford merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 92,
    question: "The independent ethics committee, after reviewing all the contested evidence presented by both opposing legal teams, finally decided ... by the senior federal judge rather than the appointed magistrate for the complex antitrust litigation case.",
    options: ["hearing", "to hear", "being heard", "to be heard"],
    answer: 3,
    explanation: "Decided merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 93,
    question: "The conservative community members thoroughly abhor ... to explicit graphic content in mainstream media without proper warning labels or parental guidance notices.",
    options: ["being subjected", "to be subjected", "to subject", "subjecting"],
    answer: 0,
    explanation: "Abhor merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 94,
    question: "The preliminary archaeological fragments, though statistically insufficient for definitive conclusions, were deemed to suffice ... temporarily before the comprehensive excavation could reveal more complete contextual evidence next field season.",
    options: ["to be analyzed", "to analyze", "analyzing", "being analyzed"],
    answer: 0,
    explanation: "Suffice merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 95,
    question: "The primary suspect persistently continued to deny ... at the crime scene when the alleged robbery actually occurred last Tuesday midnight.",
    options: ["being present", "to be present", "presenting", "to present"],
    answer: 0,
    explanation: "Deny merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 96,
    question: "The trauma survivor could vaguely recall ... inside the malfunctioning elevator for nearly three terrifying hours during the blackout.",
    options: ["to be trapped", "being trapped", "to trap", "trapping"],
    answer: 1,
    explanation: "Recall merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 97,
    question: "The undergraduate student vigorously defended ... the research paper from multiple online databases without proper academic citation or attribution.",
    options: ["copying", "to copy", "being copied", "to be copied"],
    answer: 0,
    explanation: "Defend merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 98,
    question: "The startup founder, despite having minimal financial resources and absolutely zero external funding during the first challenging fiscal year, somehow managed ... the competing multinational tech giants to acquire her small software development company for an astronomical sum.",
    options: ["to convince", "convincing", "to be convinced", "being convinced"],
    answer: 0,
    explanation: "Managed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 99,
    question: "The elderly librarian resented ... by noisy students while she was cataloging the rare manuscript collections in the restricted reading room.",
    options: ["to be constantly interrupted", "to constantly interrupt", "being constantly interrupted", "constantly interrupting"],
    answer: 2,
    explanation: "Resent merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 100,
    question: "After the major corruption scandal, the disgraced politician refused to even contemplate ... public office again during his remaining lifetime.",
    options: ["seeking", "to seek", "being sought", "to be sought"],
    answer: 0,
    explanation: "Contemplate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 101,
    question: "The strict school principal absolutely refuses to condone ... mobile phones during classroom instruction under any circumstances whatsoever.",
    options: ["using", "to use", "being used", "to be used"],
    answer: 0,
    explanation: "Condone merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 102,
    question: "The irresponsible junior associate consistently tried to shirk ... his mandatory documentation responsibilities onto his already overburdened administrative assistants.",
    options: ["to transfer", "transferring", "being transferred", "to be transferred"],
    answer: 1,
    explanation: "Shirk merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 103,
    question: "The key eyewitness to the violent armed robbery nervously swore ... by the intimidating defense attorney during the emotionally charged cross-examination procedure in the crowded courtroom yesterday afternoon.",
    options: ["to intimidate", "intimidating", "to be intimidated", "being intimidated"],
    answer: 2,
    explanation: "Swore merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 104,
    question: "The aerospace engineering students were required to simulate ... emergency evacuation procedures on advanced virtual reality platforms before actual aircraft certification.",
    options: ["to conduct", "conducting", "being conducted", "to be conducted"],
    answer: 1,
    explanation: "Simulate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 105,
    question: "The forensic expert vividly described ... the complex accident sequence using advanced computer simulation software for the jury members yesterday.",
    options: ["to reconstruct", "reconstructing", "being reconstructed", "to be reconstructed"],
    answer: 1,
    explanation: "Describe merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 106,
    question: "The executive board reluctantly decided to postpone ... the controversial merger agreement until after the federal investigation finally concludes.",
    options: ["to sign", "signing", "being signed", "to be signed"],
    answer: 1,
    explanation: "Postpone merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 107,
    question: "The authoritarian committee chairman unexpectedly decided to veto ... the controversial funding proposal without consulting other board members during the emergency session.",
    options: ["to approve", "approving", "being approved", "to be approved"],
    answer: 1,
    explanation: "Veto merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 108,
    question: "The influential international sports federation controversially refused to endorse ... transgender athletes to compete in the women\'s competitive category without prior hormone therapy verification.",
    options: ["to allow", "allowing", "being allowed", "to be allowed"],
    answer: 1,
    explanation: "Endorse merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 109,
    question: "The competing financial technology startups frantically scrambled ... the lucrative government digital payment infrastructure contract before the submission deadline expired at midnight yesterday.",
    options: ["to secure", "securing", "to be secured", "being secured"],
    answer: 0,
    explanation: "Scrambled merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 110,
    question: "The adventurous solo mountaineer boldly dared ... the treacherous north face route without supplemental oxygen despite warnings from the local mountain rescue association about imminent avalanche risks.",
    options: ["to climb", "climbing", "to be climbed", "being climbed"],
    answer: 0,
    explanation: "Dared merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 111,
    question: "The controversial self-help author purported ... traditional productivity paradigms through unconventional sleep deprivation techniques that supposedly enhanced cognitive performance beyond normal human limitations.",
    options: ["to revolutionize", "revolutionizing", "to be revolutionized", "being revolutionized"],
    answer: 0,
    explanation: "Purported merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 112,
    question: "The notoriously reclusive tech billionaire, who had avoided public scrutiny for decades, finally ventured ... the mysterious geological anomaly through his privately funded research expedition to the uncharted Antarctic territory last summer.",
    options: ["to investigate", "to be investigated", "investigating", "being investigated"],
    answer: 0,
    explanation: "Ventured merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 113,
    question: "The city council decided to ban ... in public parks after midnight due to numerous complaints from nearby residents about excessive noise disturbing their sleep.",
    options: ["to gather", "gathering", "being gathered", "to be gathered"],
    answer: 1,
    explanation: "Ban merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 114,
    question: "The endangered sea turtle population, which nests on the protected coastal beaches, continues to struggle ... by illegal poachers despite the increased marine conservation patrols and elevated criminal penalties.",
    options: ["to protect", "protecting", "to be protected", "being protected"],
    answer: 2,
    explanation: "Struggle merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 115,
    question: "The arrogant CEO secretly relished ... by the influential industry analysts during the prestigious award ceremony yesterday.",
    options: ["to be publicly praised", "being publicly praised", "to publicly praise", "publicly praising"],
    answer: 1,
    explanation: "Relish merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 116,
    question: "The confidential documents, which contained sensitive personnel information regarding all senior executives, unfortunately failed ... by the newly implemented security system before the unauthorized cyber breach occurred last Tuesday.",
    options: ["to scan", "scanning", "to be scanned", "being scanned"],
    answer: 2,
    explanation: "Failed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 117,
    question: "The technology startup company specifically aimed ... the stagnant renewable energy sector through innovative battery storage solutions that could potentially reduce carbon emissions by forty percent within the first operational decade.",
    options: ["to revolutionize", "revolutionizing", "to be revolutionized", "being revolutionized"],
    answer: 0,
    explanation: "Aimed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 118,
    question: "The nervous job applicant, who obviously lacked several required professional certifications listed in the job description, foolishly pretended ... the advanced statistical analysis software program during the comprehensive technical assessment conducted by the hiring manager.",
    options: ["to know", "knowing", "to be known", "being known"],
    answer: 0,
    explanation: "Pretended diikuti oleh infinitif aktif to know karena subjek applicant berusaha menunjukkan bahwa dirinya menguasai (mempunyai pengetahuan aktif) software tersebut. Pilihan C pasif mengaburkan makna bahwa applicant adalah pemilik pengetahuan."
  },
  {
    id: 119,
    question: "The professional athlete, who had suffered a career-threatening injury, officially contracted ... to the rival sports franchise for an unprecedented transfer fee that broke all previous league records last season.",
    options: ["to be transferring", "transferring", "to be transferred", "being transferred"],
    answer: 2,
    explanation: "Contracted merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 120,
    question: "The massive infrastructure overhaul, which involved complex underground utility relocation, was officially undertaken ... before the international economic summit convened in the capital city to ensure adequate transportation capacity.",
    options: ["completing", "to complete", "to be completed", "being completed"],
    answer: 2,
    explanation: "Undertaken merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 121,
    question: "The striking factory workers finally agreed to resume ... their regular shifts after reaching a satisfactory wage agreement with the management board.",
    options: ["to work", "working", "being worked", "to be worked"],
    answer: 1,
    explanation: "Resume merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 122,
    question: "The controversial scientist, who had previously been accused of data fabrication, publicly claimed ... by anonymous competitors seeking to undermine his groundbreaking research on renewable energy.",
    options: ["to persecute", "persecuting", "to be persecuted", "being persecuted"],
    answer: 2,
    explanation: "Claimed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 123,
    question: "The anthropological documentary crew arrived early to witness ... the sacred ancient coming-of-age ceremony by the indigenous community elders at dawn.",
    options: ["to conduct", "conducting", "being conducted", "to be conducted"],
    answer: 2,
    explanation: "Witness merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 124,
    question: "The long-forgotten historical manuscript, which had been missing from the national archives for decades, seemed ... by the anonymous donor who unexpectedly returned it to the chief librarian yesterday morning.",
    options: ["to preserve", "preserving", "to be preserved", "being preserved"],
    answer: 2,
    explanation: "Seemed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 125,
    question: "The battle-scarred infantry veteran visibly shuddered ... the horrific trench warfare memories that had haunted his nightmares since the deployment ended fifteen years prior.",
    options: ["to recall", "recalling", "to be recalled", "being recalled"],
    answer: 0,
    explanation: "Shuddered merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 126,
    question: "The stranded mountain tourists, who had lost their communication devices in the sudden blizzard, desperately hoped ... the remote village shelter before temperatures dropped below freezing at nightfall.",
    options: ["reaching", "to be reached", "to reach", "being reached"],
    answer: 2,
    explanation: "Hoped merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 127,
    question: "The renowned architect finally managed to finish ... the intricate blueprints for the environmentally sustainable skyscraper before the strict municipal deadline expired.",
    options: ["to design", "designing", "being designed", "to be designed"],
    answer: 1,
    explanation: "Finish merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 128,
    question: "The insecure rookie architect could barely visualize himself ... for the prestigious international design competition among world-renowned established firms.",
    options: ["to be selected", "being selected", "selecting", "to select"],
    answer: 1,
    explanation: "Visualize merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 129,
    question: "The highly classified military intelligence documents were officially requested ... by the congressional oversight committee before the confidential briefing regarding the controversial overseas operations could proceed as originally scheduled.",
    options: ["to declassify", "declassifying", "being declassified", "to be declassified"],
    answer: 3,
    explanation: "Requested merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 130,
    question: "The international athletic federation categorically refused to sanction ... performance-enhancing substances by professional competitors under any medical pretense whatsoever.",
    options: ["to use", "using", "being used", "to be used"],
    answer: 1,
    explanation: "Sanction merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 131,
    question: "The athlete\'s chronic tendon injury unfortunately precluded him ... for the national Olympic team despite his exceptional previous performances.",
    options: ["to be selected", "being selected", "selecting", "to be selected"],
    answer: 1,
    explanation: "Preclude merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 132,
    question: "The veteran quarterback finally decided to quit ... professional football after suffering three consecutive severe concussions last season.",
    options: ["to play", "playing", "being played", "to be played"],
    answer: 1,
    explanation: "Quit merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 133,
    question: "The neighborhood association unanimously voted to support ... the historic century-old library building from demolition by commercial developers.",
    options: ["to preserve", "preserving", "being preserved", "to be preserved"],
    answer: 1,
    explanation: "Support merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 134,
    question: "The catastrophic earthquake damage unfortunately necessitated immediately ... the entire historic downtown district for urgent public safety reasons.",
    options: ["to evacuate", "evacuating", "being evacuated", "to be evacuated"],
    answer: 1,
    explanation: "Necessitate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 135,
    question: "The struggling independent filmmaker desperately yearned ... by the prestigious international film festival selection committee for his debut feature-length documentary about climate change refugees.",
    options: ["to select", "selecting", "to be selected", "being selected"],
    answer: 2,
    explanation: "Yearned merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 136,
    question: "The recovering alcoholic solemnly forswore ... intoxicating beverages of any kind after the life-threatening health scare last month.",
    options: ["to consume", "consuming", "being consumed", "to be consumed"],
    answer: 1,
    explanation: "Forswear merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 137,
    question: "The strict academy superintendent absolutely refused to tolerate ... unauthorized electronic devices in the examination halls during the prestigious scholarship tests.",
    options: ["to use", "using", "being used", "to be used"],
    answer: 1,
    explanation: "Tolerate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 138,
    question: "The surgical residents must diligently practice ... delicate procedures on virtual reality simulators before operating on actual human patients.",
    options: ["to perform", "performing", "being performed", "to be performed"],
    answer: 1,
    explanation: "Practice merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 139,
    question: "The ambitious doctoral candidates were expected to learn ... the complex architectural blueprints independently before they could qualify for the professional certification examination scheduled for next semester.",
    options: ["to design", "to be designed", "designing", "being designed"],
    answer: 0,
    explanation: "Learn merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 140,
    question: "Despite having submitted his resignation letter last month, the senior architect was explicitly asked ... the new interns until the replacement could be officially recruited by the HR department.",
    options: ["mentoring", "being mentored", "to mentor", "to be mentored"],
    answer: 2,
    explanation: "Asked merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 141,
    question: "The distressed maritime shipping corporation actively sought ... the struggling regional logistics firms during the industry-wide economic downturn to prevent catastrophic bankruptcy proceedings.",
    options: ["to acquire", "acquiring", "to be acquired", "being acquired"],
    answer: 0,
    explanation: "Sought merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 142,
    question: "The senior manager is seriously considering ... to the overseas branch in Singapore to advance his international career prospects significantly.",
    options: ["being transferred", "to be transferred", "transferring", "to transfer"],
    answer: 0,
    explanation: "Consider merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 143,
    question: "The controversial urban development project, which had faced numerous environmental protests, was finally allowed to proceed ... after the municipal zoning board reluctantly approved the amended architectural blueprints submitted last Thursday.",
    options: ["to be constructed", "constructing", "to construct", "being constructed"],
    answer: 0,
    explanation: "Proceed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 144,
    question: "Professional athletes usually anticipate ... rigorous physical examinations before major international competitions to ensure they meet the health standards.",
    options: ["undergoing", "to undergo", "being undergone", "to be undergone"],
    answer: 0,
    explanation: "Anticipate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 145,
    question: "The strict school handbook explicitly prohibits ... electronic devices during final examination periods in all campus buildings.",
    options: ["to use", "using", "being used", "to be used"],
    answer: 1,
    explanation: "Prohibit merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 146,
    question: "The severely damaged historical records, which dated back to the colonial administration era, hastened ... before the extreme humidity completely destroyed the fragile ink on the ancient parchment.",
    options: ["preserving", "to preserve", "to be preserved", "being preserved"],
    answer: 2,
    explanation: "Hastened merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 147,
    question: "The massive infrastructure project will inevitably involve ... from established residential neighborhoods during construction phases.",
    options: ["to be temporarily relocated", "to temporarily relocate", "being temporarily relocated", "temporarily relocating"],
    answer: 2,
    explanation: "Involve merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 148,
    question: "The junior associate deeply resented ... menial administrative tasks while his senior colleagues handled the prestigious corporate negotiations.",
    options: ["to be assigned", "being assigned", "assigning", "to be assigned"],
    answer: 1,
    explanation: "Resent merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 149,
    question: "The notoriously reclusive veteran actor surprisingly enjoys ... enthusiastically recognized by dedicated fans in crowded public places despite his frequent complaints about privacy invasion.",
    options: ["to be recognized", "recognizing", "being recognized", "to recognize"],
    answer: 2,
    explanation: "Enjoy merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 150,
    question: "The nostalgic elderly professor, who had retired fifteen years prior, silently ached ... his beloved alma mater one final time before the progressive neurological condition permanently prevented further long-distance academic travel.",
    options: ["to be visiting", "to visit", "visiting", "to be visited"],
    answer: 1,
    explanation: "Ached merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 151,
    question: "The underdog athletic team, which had suffered three decades of disappointing performances, fervently prayed ... the elusive national championship trophy during the highly anticipated final match at the crowded stadium yesterday evening.",
    options: ["to be awarded", "to capture", "capturing", "being awarded"],
    answer: 1,
    explanation: "Prayed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 152,
    question: "The ambitious doctoral candidates were thoroughly prepared ... by the skeptical dissertation committee regarding the controversial qualitative methodology employed in their groundbreaking sociological research on urban migration patterns.",
    options: ["to question", "questioning", "to be questioned", "being questioned"],
    answer: 2,
    explanation: "Prepared merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 153,
    question: "The ancient manuscripts, which were discovered in a cave last century, undeniably deserve ... by qualified historians before any conclusions about their authenticity can be drawn.",
    options: ["examining", "to examine", "being examined", "to be examined"],
    answer: 3,
    explanation: "Deserve merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 154,
    question: "Despite the tight project timeline, the junior developers were not expected ... the entire software architecture alone without adequate supervision from the senior technical leads.",
    options: ["to design", "designing", "to be designed", "being designed"],
    answer: 0,
    explanation: "Expected merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 155,
    question: "The graduate student genuinely appreciated ... the opportunity to present his groundbreaking research at the prestigious annual symposium last week.",
    options: ["being given", "to be given", "to give", "giving"],
    answer: 0,
    explanation: "Appreciate merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 156,
    question: "The merciful governor eventually agreed to pardon ... the public funds during his first term in office five years ago.",
    options: ["to embezzle", "embezzling", "being embezzled", "to be embezzled"],
    answer: 1,
    explanation: "Pardon merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
  {
    id: 157,
    question: "The century-old Victorian mansion located in the historic preservation district urgently needs ... by certified architectural restoration specialists before the structural decay becomes irreversible and potentially endangers the surrounding residential neighborhood.",
    options: ["repairing", "to repair", "being repaired", "to be repaired"],
    answer: 3,
    explanation: "Needs merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 158,
    question: "The betrayed business partner could eventually forgive ... by the fraudulent investment scheme promoted by the unscrupulous financial advisor.",
    options: ["to be deliberately deceived", "being deliberately deceived", "deliberately deceiving", "to deliberately deceive"],
    answer: 1,
    explanation: "Forgive merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Pasif."
  },
  {
    id: 159,
    question: "The midsize pharmaceutical company was rumored to have threatened ... by aggressive multinational competitors through hostile corporate takeover tactics if it refused to comply with the unfair patent licensing agreements proposed last fiscal quarter.",
    options: ["to acquire", "acquiring", "to be acquired", "being acquired"],
    answer: 2,
    explanation: "Threatened merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 160,
    question: "The ambitious research team tirelessly endeavored ... by the skeptical grant review committee regarding the feasibility of their revolutionary but theoretically unproven renewable energy extraction methodology.",
    options: ["to convince", "convincing", "to be convinced", "being convinced"],
    answer: 0,
    explanation: "Endeavored merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 161,
    question: "The rival technology conglomerates, which controlled competing proprietary platforms, were suspected to have secretly schemed ... their incompatible operating systems to dominate the emerging artificial intelligence market sector.",
    options: ["to integrate", "integrating", "to be integrated", "being integrated"],
    answer: 0,
    explanation: "Schemed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 162,
    question: "The notoriously manipulative political strategist secretly contrived ... the electoral process through sophisticated misinformation campaigns targeting undecided swing voters during the crucial final month before polling day.",
    options: ["to be influencing", "to influence", "influencing", "being influenced"],
    answer: 1,
    explanation: "Contrived merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Aktif."
  },
  {
    id: 163,
    question: "The experimental surgical technique, which had shown remarkable efficacy in primate trials, was finally qualified ... on human subjects after the stringent FDA safety protocols were satisfactorily completed last quarter.",
    options: ["to perform", "performing", "to be performed", "being performed"],
    answer: 2,
    explanation: "Qualified merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 164,
    question: "The factory workers, having endured unsafe conditions for months, boldly demanded ... by the labor union representatives during the emergency negotiation session with the board of directors.",
    options: ["to represent", "representing", "to be represented", "being represented"],
    answer: 2,
    explanation: "Demanded merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 165,
    question: "The corrupt municipal officials, who had allegedly embezzled millions in taxpayer funds, secretly vowed ... by the federal investigators probing the extensive financial irregularities and money laundering schemes.",
    options: ["never to catch", "never to be caught", "never catching", "never being caught"],
    answer: 1,
    explanation: "Vowed merupakan kelompok kata kerja yang selalu diikuti Infinitive (To Verb-Inf). Pada soal terdapat pilihan jawaban berupa Infinitive Aktif (To Verb-inf) dan Infinitive Pasif (To + Be + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Infinitive Pasif."
  },
  {
    id: 166,
    question: "The radical activist formally renounced ... violent protest tactics after witnessing the unnecessary injuries to innocent bystanders during the demonstration.",
    options: ["to advocate", "advocating", "being advocated", "to be advocated"],
    answer: 1,
    explanation: "Renounce merupakan kelompok kata kerja yang selalu diikuti gerund. Pada soal terdapat pilihan jawaban berupa Gerund Aktif (Verb-ing) dan Gerund Pasif (Being + Verb-3). Jika diartikan, jawaban yang dibutuhkan adalah Gerund Aktif."
  },
];

// ============================================
// KONFIGURASI PAKET
// ============================================
const QUESTIONS_PER_PACKET = 5;
const TOTAL_PACKETS = 34;  // 33 paket x 5 soal + 1 paket x 1 soal
const TIME_PER_PACKET = 5 * 60; // 5 menit per paket

// ============================================
// STATE MANAGEMENT
// ============================================
let currentState = {
  currentPacket: null,
  currentQuestionIndex: 0,
  answers: {},
  timeRemaining: 0,
  timerInterval: null,
  packetQuestions: []
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function getPacketQuestions(packetNumber) {
  const startIndex = (packetNumber - 1) * QUESTIONS_PER_PACKET;
  const endIndex = startIndex + QUESTIONS_PER_PACKET;
  return allQuestions.slice(startIndex, endIndex);
}

// ============================================
// VIEW NAVIGATION
// ============================================
function showView(viewId) {
  document.querySelectorAll('.view-section').forEach(view => {
    view.classList.add('hidden');
  });
  document.getElementById(viewId).classList.remove('hidden');
  window.scrollTo(0, 0);
}

// ============================================
// HOMEPAGE FUNCTIONS
// ============================================
function generatePacketCards() {
  const grid = document.getElementById('packets-grid');
  if (!grid) return;

  grid.innerHTML = '';

  for (let i = 1; i <= TOTAL_PACKETS; i++) {
    const card = document.createElement('div');
    card.className = 'packet-card bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100 cursor-pointer';
    card.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <span class="font-mono text-2xl font-bold text-red-primary">${i}</span>
        <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
      <p class="text-sm text-gray-500">Paket Soal</p>
      <p class="text-xs text-gray-400 mt-1">${i === 34 ? '1 soal' : '5 soal'}</p>
    `;
    card.addEventListener('click', () => startPacket(i));
    grid.appendChild(card);
  }
}

// ============================================
// QUIZ FUNCTIONS
// ============================================
function startPacket(packetNumber) {
  currentState.currentPacket = packetNumber;
  currentState.currentQuestionIndex = 0;
  currentState.answers = {};
  currentState.packetQuestions = getPacketQuestions(packetNumber);
  currentState.timeRemaining = TIME_PER_PACKET;

  const packetNameEl = document.getElementById('quiz-packet-name');
  if (packetNameEl) {
    packetNameEl.textContent = `Paket Soal ${packetNumber}`;
  }

  showView('quiz-page');
  loadQuestion();
  startTimer();
}

function startTimer() {
  if (currentState.timerInterval) {
    clearInterval(currentState.timerInterval);
  }

  updateTimerDisplay();

  currentState.timerInterval = setInterval(() => {
    currentState.timeRemaining--;
    updateTimerDisplay();

    if (currentState.timeRemaining <= 0) {
      clearInterval(currentState.timerInterval);
      showResults();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('quiz-timer');
  if (!timerEl) return;

  timerEl.textContent = formatTime(currentState.timeRemaining);

  if (currentState.timeRemaining <= 60) {
    timerEl.classList.add('timer-warning');
  } else {
    timerEl.classList.remove('timer-warning');
  }
}

function loadQuestion() {
  const question = currentState.packetQuestions[currentState.currentQuestionIndex];
  const questionNumber = currentState.currentQuestionIndex + 1;
  const totalQuestions = currentState.packetQuestions.length;

  const progressEl = document.getElementById('quiz-progress');
  const progressBar = document.getElementById('progress-bar');
  const questionNumEl = document.getElementById('question-number');
  const questionTextEl = document.getElementById('question-text');

  if (progressEl) progressEl.textContent = `${questionNumber}/${totalQuestions}`;
  if (progressBar) progressBar.style.width = `${(questionNumber / totalQuestions) * 100}%`;
  if (questionNumEl) questionNumEl.textContent = `Soal ${question.id}`;

  if (questionTextEl) {
    questionTextEl.innerHTML = question.question.replace(/\.\.\./g, '<span class="inline-block border-b-2 border-red-primary px-2 mx-1">...</span>');
  }

  const optionsContainer = document.getElementById('options-container');
  if (!optionsContainer) return;

  optionsContainer.innerHTML = '';

  const labels = ['A', 'B', 'C', 'D'];
  question.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn w-full p-4 rounded-xl flex items-center gap-4';
    btn.setAttribute('data-index', index);
    btn.innerHTML = `
      <span class="option-label">${labels[index]}</span>
      <span class="flex-1">${option}</span>
    `;
    btn.addEventListener('click', function() {
      selectOption(index);
    });
    optionsContainer.appendChild(btn);
  });

  const explanationSection = document.getElementById('explanation-section');
  const submitBtn = document.getElementById('submit-answer-btn');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  if (explanationSection) explanationSection.classList.add('hidden');
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Kirim Jawaban';
  }

  if (prevBtn) prevBtn.disabled = currentState.currentQuestionIndex === 0;
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.innerHTML = `
      <span>Berikutnya</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    `;
  }

  if (currentState.answers[question.id] !== undefined) {
    selectOption(currentState.answers[question.id].selected);
    if (currentState.answers[question.id].submitted) {
      showResult();
    }
  }
}

function selectOption(index) {
  const question = currentState.packetQuestions[currentState.currentQuestionIndex];

  if (currentState.answers[question.id]?.submitted) return;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('selected');
    } else {
      btn.classList.remove('selected');
    }
  });

  currentState.answers[question.id] = {
    selected: index,
    submitted: false
  };
}

function submitAnswer() {
  const question = currentState.packetQuestions[currentState.currentQuestionIndex];

  if (currentState.answers[question.id] === undefined) {
    alert('Silakan pilih jawaban terlebih dahulu!');
    return;
  }

  currentState.answers[question.id].submitted = true;
  showResult();
}

function showResult() {
  const question = currentState.packetQuestions[currentState.currentQuestionIndex];
  const selectedAnswer = currentState.answers[question.id].selected;
  const isCorrect = selectedAnswer === question.answer;

  document.querySelectorAll('.option-btn').forEach((btn, index) => {
    btn.disabled = true;

    if (index === question.answer) {
      btn.classList.add('correct');
    } else if (index === selectedAnswer && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const explanationSection = document.getElementById('explanation-section');
  const explanationContent = document.getElementById('explanation-content');

  if (explanationContent) {
    explanationContent.innerHTML = `
      <p class="mb-2"><strong>Jawaban yang benar:</strong> ${['A', 'B', 'C', 'D'][question.answer]}</p>
      <p>${question.explanation}</p>
    `;
  }
  if (explanationSection) explanationSection.classList.remove('hidden');

  const submitBtn = document.getElementById('submit-answer-btn');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = isCorrect ? 'Jawaban Benar!' : 'Jawaban Salah';
  }

  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.disabled = false;

    if (currentState.currentQuestionIndex === currentState.packetQuestions.length - 1) {
      nextBtn.innerHTML = `
        <span>Lihat Hasil</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      `;
    }
  }
}

function goToNext() {
  if (currentState.currentQuestionIndex < currentState.packetQuestions.length - 1) {
    currentState.currentQuestionIndex++;
    loadQuestion();
  } else {
    showResults();
  }
}

function goToPrevious() {
  if (currentState.currentQuestionIndex > 0) {
    currentState.currentQuestionIndex--;
    loadQuestion();
  }
}

// ============================================
// RESULTS FUNCTIONS
// ============================================
function showResults() {
  if (currentState.timerInterval) {
    clearInterval(currentState.timerInterval);
  }
  showView('result-page');

  const packetQuestions = currentState.packetQuestions;
  let correctCount = 0;
  let wrongCount = 0;

  packetQuestions.forEach(q => {
    const answer = currentState.answers[q.id];
    if (answer && answer.submitted) {
      if (answer.selected === q.answer) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const totalAnswered = correctCount + wrongCount;
  const score = totalAnswered > 0 ? Math.round((correctCount / packetQuestions.length) * 100) : 0;

  const resultPacketName = document.getElementById('result-packet-name');
  const resultTotal = document.getElementById('result-total');
  const resultCorrect = document.getElementById('result-correct');
  const resultWrong = document.getElementById('result-wrong');
  const resultScore = document.getElementById('result-score');

  if (resultPacketName) resultPacketName.textContent = `Paket Soal ${currentState.currentPacket}`;
  if (resultTotal) resultTotal.textContent = packetQuestions.length;
  if (resultCorrect) resultCorrect.textContent = correctCount;
  if (resultWrong) resultWrong.textContent = wrongCount;
  if (resultScore) resultScore.textContent = `${score}%`;

  const messageEl = document.getElementById('motivational-message');
  let message = '';

  if (score === 100) {
    message = '<p class="font-medium">Sempurna! Kamu telah menguasai materi Infinitive & Gerund level sulit. Pertahankan prestasimu!</p>';
  } else if (score >= 80) {
    message = '<p class="font-medium">Sangat bagus! Kamu sudah memahami Infinitive & Gerund dengan baik. Sedikit lagi menuju kesempurnaan!</p>';
  } else if (score >= 60) {
    message = '<p class="font-medium">Bagus! Kamu memiliki pemahaman yang cukup tentang Infinitive & Gerund. Terus berlatih untuk meningkatkan skor!</p>';
  } else if (score >= 40) {
    message = '<p class="font-medium">Jangan menyerah! Pelajari pembahasan soal-soal yang salah dan coba kerjakan ulang paket ini.</p>';
  } else {
    message = '<p class="font-medium">Tetap semangat! Pelajari kembali materi Infinitive & Gerund dan coba kerjakan paket ini lagi. Latihan membuat sempurna!</p>';
  }

  if (messageEl) messageEl.innerHTML = message;

  const detailReview = document.getElementById('detail-review');
  if (detailReview) {
    detailReview.innerHTML = '';

    packetQuestions.forEach((q, index) => {
      const answer = currentState.answers[q.id];
      const isCorrect = answer && answer.selected === q.answer;
      const hasAnswer = answer && answer.submitted;

      const item = document.createElement('div');
      item.className = `review-item ${hasAnswer ? (isCorrect ? 'correct' : 'wrong') : 'bg-gray-100 text-gray-400'}`;
      item.textContent = index + 1;
      item.title = hasAnswer ? (isCorrect ? 'Benar' : 'Salah') : 'Belum dijawab';
      detailReview.appendChild(item);
    });
  }
}

// ============================================
// EVENT LISTENERS
// ============================================
function initEventListeners() {
  const navHome = document.getElementById('nav-home');
  const navPackets = document.getElementById('nav-packets');

  if (navHome) navHome.addEventListener('click', () => showView('homepage'));
  if (navPackets) navPackets.addEventListener('click', () => showView('homepage'));

  const submitBtn = document.getElementById('submit-answer-btn');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');

  if (submitBtn) {
    submitBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      submitAnswer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      goToNext();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      goToPrevious();
    });
  }

  const retryBtn = document.getElementById('retry-btn');
  const backHomeBtn = document.getElementById('back-home-btn');

  if (retryBtn) {
    retryBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      startPacket(currentState.currentPacket);
    });
  }

  if (backHomeBtn) {
    backHomeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      showView('homepage');
    });
  }
}

// ============================================
// INISIALISASI APLIKASI
// ============================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    generatePacketCards();
    initEventListeners();
  });
} else {
  generatePacketCards();
  initEventListeners();
}
