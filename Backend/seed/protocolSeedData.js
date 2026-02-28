export const protocolSeedData =  [
  {
    key: "cpr",
    title: "Cardiac Arrest (CPR)",
    severity: "critical",
    ageAware: true,
    noKitModeSupported: true,
    adult: {
      steps: [
        { instruction: "Call emergency services immediately (108/112)." },
        { instruction: "Place heel of one hand at center of chest." },
        { instruction: "Place other hand on top and interlock fingers." },
        { instruction: "Give 30 chest compressions (100-120 per minute)." },
        { instruction: "Give 2 rescue breaths." },
        { instruction: "Continue cycle until help arrives." }
      ]
    },
    child: {
      steps: [
        { instruction: "Call emergency services immediately." },
        { instruction: "Use one hand for chest compressions." },
        { instruction: "Give 15 compressions followed by 2 breaths." },
        { instruction: "Continue until medical help arrives." }
      ]
    },
    version: "1.0",
    reviewedBy: "Medical Advisory Draft"
  },

  {
    key: "bleedingControl",
    title: "Severe Bleeding",
    severity: "critical",
    ageAware: false,
    noKitModeSupported: true,
    steps: [
      { instruction: "Apply firm direct pressure to wound." },
      { instruction: "Use clean cloth or bandage if available." },
      { instruction: "Elevate injured area if possible." },
      { instruction: "Do not remove embedded objects." },
      { instruction: "Seek emergency medical help immediately." }
    ]
  },

  {
    key: "choking",
    title: "Choking",
    severity: "critical",
    ageAware: true,
    adult: {
      steps: [
        { instruction: "Ask if the person can cough or speak." },
        { instruction: "If unable to speak, stand behind them." },
        { instruction: "Perform abdominal thrusts (Heimlich maneuver)." },
        { instruction: "Repeat until object is expelled." }
      ]
    },
    child: {
      steps: [
        { instruction: "For small child, use gentle abdominal thrusts." },
        { instruction: "For infants, use back blows and chest thrusts." }
      ]
    }
  },

  {
    key: "burn",
    title: "Burn Injury",
    severity: "moderate",
    ageAware: false,
    noKitModeSupported: true,
    steps: [
      { instruction: "Cool burn under running water for 20 minutes." },
      { instruction: "Remove tight clothing near area." },
      { instruction: "Cover loosely with clean cloth." },
      { instruction: "Do NOT apply oil, toothpaste, or ice." },
      { instruction: "Seek medical care for severe burns." }
    ]
  },

  {
    key: "snakeBite",
    title: "Snake Bite",
    severity: "critical",
    ageAware: false,
    steps: [
      { instruction: "Keep the person calm and still." },
      { instruction: "Immobilize the affected limb." },
      { instruction: "Remove tight clothing or jewelry." },
      { instruction: "Do NOT cut, suck, or apply ice." },
      { instruction: "Transport to hospital immediately." }
    ]
  },

  {
    key: "fracture",
    title: "Fracture / Bone Injury",
    severity: "moderate",
    ageAware: false,
    noKitModeSupported: true,
    steps: [
      { instruction: "Do not move injured limb unnecessarily." },
      { instruction: "Immobilize using splint or firm object." },
      { instruction: "Apply cold compress to reduce swelling." },
      { instruction: "Seek medical evaluation." }
    ]
  },

  {
    key: "drowning",
    title: "Drowning",
    severity: "critical",
    ageAware: true,
    adult: {
      steps: [
        { instruction: "Remove person from water safely." },
        { instruction: "Check breathing." },
        { instruction: "If not breathing, begin CPR." },
        { instruction: "Keep person warm." }
      ]
    },
    child: {
      steps: [
        { instruction: "Remove child from water safely." },
        { instruction: "Check breathing." },
        { instruction: "Begin child CPR if necessary." },
        { instruction: "Keep warm until help arrives." }
      ]
    }
  },

  {
    key: "electricShock",
    title: "Electric Shock",
    severity: "critical",
    ageAware: false,
    steps: [
      { instruction: "Do NOT touch victim directly." },
      { instruction: "Turn off power source first." },
      { instruction: "Check breathing and pulse." },
      { instruction: "Begin CPR if needed." },
      { instruction: "Seek emergency medical help." }
    ]
  },

  {
    key: "heatstroke",
    title: "Heatstroke",
    severity: "moderate",
    ageAware: false,
    steps: [
      { instruction: "Move person to shaded or cool area." },
      { instruction: "Remove excess clothing." },
      { instruction: "Cool with wet cloth or fan." },
      { instruction: "Give small sips of water if conscious." },
      { instruction: "Seek medical help if symptoms persist." }
    ]
  },

  {
    key: "seizure",
    title: "Seizure (Fits)",
    severity: "moderate",
    ageAware: false,
    steps: [
      { instruction: "Do not restrain the person." },
      { instruction: "Clear objects nearby." },
      { instruction: "Place something soft under head." },
      { instruction: "Turn person on side after seizure." },
      { instruction: "Seek medical help if seizure lasts more than 5 minutes." }
    ]
  }
];


export default protocolSeedData;