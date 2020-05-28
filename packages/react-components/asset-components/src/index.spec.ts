import * as assets from '.';

describe('index', () => {
  it('exports everything', () => {
    expect(assets).toMatchInlineSnapshot(`
      Object {
        "Logos": Object {
          "Datacamp": Object {
            "Icon": [Function],
            "Inverted": [Function],
            "Regular": [Function],
            "SingleColor": [Function],
          },
          "DatacampB2B": Object {
            "Inverted": [Function],
            "Regular": [Function],
            "SingleColor": [Function],
          },
          "Signal": Object {
            "Inverted": [Function],
          },
          "Waffles": Object {
            "Icon": [Function],
            "Inverted": [Function],
            "Regular": [Function],
            "SingleColor": [Function],
          },
        },
        "TechLogo": [Function],
        "Technologies": Object {
          "Git": [Function],
          "PowerBi": [Function],
          "Python": [Function],
          "R": [Function],
          "Scala": [Function],
          "Shell": [Function],
          "Spreadsheet": [Function],
          "Sql": [Function],
          "Tableau": [Function],
          "Theory": [Function],
        },
        "Topics": Object {
          "AppliedFinance": [Function],
          "CaseStudies": [Function],
          "DataEngineering": [Function],
          "DataManipulation": [Function],
          "DataScientist": [Function],
          "DataVisualization": [Function],
          "ImportAndCleaningData": [Function],
          "MachineLearning": [Function],
          "Management": [Function],
          "Other": [Function],
          "ProbabilityAndStatistics": [Function],
          "Programming": [Function],
          "PythonProgramming": [Function],
          "RProgramming": [Function],
          "Reporting": [Function],
          "Spreadsheet": [Function],
          "SqlProgramming": [Function],
          "TimeSeries": [Function],
        },
      }
    `);
  });
});
