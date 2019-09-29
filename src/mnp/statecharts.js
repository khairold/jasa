const mnpMachine = Machine({
  id: "mnp",
  initial: "nombor",
  context: {},
  states: {
    nombor: {
      on: {
        BARU: "newRecommendation",
        LAMA: "provider",
      },
    },
    provider: {
      on: {
        UNIFI: "plan",
        MAXIS: "plan",
        CELCOM: "plan",
        UMOBILE: "plan",
      },
    },
    plan: {
      on: {
        POSTPAID: "lines",
        PREPAID: "lines",
      },
    },
    lines: {
      on: {
        MAIN: "bringOver",
        SUPPLEMNTARY: "bringOver",
      },
    },
    bringOver: {
      on: {
        YES: "split",
        NO: "split",
      },
    },
    split: {
      on: {
        YES: "splitNumberRecommendation",
        NO: "bringAllNumberRecommendation",
      },
    },
    newRecommendation: { type: "final" },
    bringAllNumberRecommendation: { type: "final" },
    splitNumberRecommendation: { type: "final" },
  },
})
