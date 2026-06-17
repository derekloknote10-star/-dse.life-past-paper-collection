export const navigationData = {
  "by_topic": {
    "english": {
      "paper1": [
        "topic1", "topic2", "topic3", "topic4", "topic5",
        "topic6", "topic7", "topic8", "topic9", "topic10",
        "topic11", "topic12", "topic13", "topic14", "topic15",
        "topic16", "topic17", "topic18"
      ],
      "paper2": [
        "topic0", "topic1", "topic2", "topic3", "topic4",
        "topic5", "topic6", "topic7", "topic8", "topic9",
        "topic10", "topic11", "topic12", "topic13", "topic14",
        "topic15", "topic16"
      ],
      "answers": true
    },
    "chinese": "coming_soon"
  },
  "dse": {
    "english": {
      "years": {
        "practice": ["p1", "p2mc", "ans", "p2ans"],
        "sample": ["p1", "p2mc", "ans", "p2ans"],
        "2012": ["p1", "p2mc", "ans", "p2ans"],
        "2013": ["p1", "p2mc", "ans", "p2ans"],
        "2014": ["p1", "p2mc", "ans", "p2ans"],
        "2015": ["p1", "p2mc", "ans", "p2ans"],
        "2016": ["p1", "p2mc", "ans", "p2ans"],
        "2017": ["p1", "p2mc", "ans", "p2ans"],
        "2018": ["p1", "p2mc", "ans", "p2ans"],
        "2019": ["p1", "p2mc", "ans", "p2ans"],
        "2020": ["p1", "p2mc", "ans", "p2ans"],
        "2021": ["p1", "p2mc", "ans", "p2ans"],
        "2022": ["p1", "p2mc", "ans", "p2ans"],
        "2023": ["p1", "p2mc", "ans", "p2ans"],
        "2024": ["p1", "p2mc", "ans", "p2ans"],
        "2025": ["p1", "p2mc"]
      }
    },
    "chinese": {
      "years": {
        "practice": ["p1", "p2mc", "ans"],
        "sample": ["p1", "p2mc", "ans"],
        "2012": ["p1", "p2mc", "ans"],
        "2013": ["p1", "p2mc", "ans"],
        "2014": ["p1", "p2mc", "ans"],
        "2015": ["p1", "p2mc", "ans"],
        "2016": ["p1", "p2mc", "ans"],
        "2017": ["p1", "p2mc", "ans"],
        "2018": ["p1", "p2mc", "ans"],
        "2019": ["p1", "p2mc", "ans"],
        "2020": ["p1", "p2mc", "ans"],
        "2021": ["p1", "p2mc", "ans"],
        "2022": ["p1", "p2mc", "ans"],
        "2023": ["p1", "p2mc", "ans"],
        "2024": ["p1", "p2mc", "ans"]
      }
    }
  },
  "ce": {
    "english": {
      "1980-2011": ["p1", "p2mc", "ans"]
    },
    "chinese": {
      "1991-2011": ["卷一", "卷二", "卷一答案", "卷二答案"]
    }
  }
};

export interface NavigationData {
  [category: string]: {
    [subject: string]: any;
  };
}
