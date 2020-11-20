import * as assets from '.';

describe('index', () => {
  it('exports everything', () => {
    expect(assets).toMatchInlineSnapshot(`
      Object {
        "ALPA": Object {
          "Alpa": [Function],
          "Apply": [Function],
          "Assess": [Function],
          "Learn": [Function],
          "Practice": [Function],
        },
        "ALPALoop": [Function],
        "DatacampLogo": [Function],
        "Logos": Object {
          "Datacamp": Object {
            "CombinedGrey": [Function],
            "CombinedInverted": [Function],
            "CombinedInvertedWithTagline": [Function],
            "CombinedRegular": [Function],
            "CombinedRegularWithTagline": [Function],
            "CombinedWhite": [Function],
            "LogomarkGreen": [Function],
            "LogomarkGrey": [Function],
            "LogomarkWhite": [Function],
            "TaglineGrey": [Function],
            "TaglineWhite": [Function],
            "WordmarkGrey": [Function],
            "WordmarkWhite": [Function],
          },
          "Waffles": Object {
            "Inverted": [Function],
            "Regular": [Function],
          },
        },
        "TechLogo": [Function],
        "Technologies": Object {
          "Excel": [Function],
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
      }
    `);
  });
});
