module.exports = {
  rules: {
    elm: {
      svg: 1,
      'svg > style': 0,
      'g > :only-child': 0,
    },
    attr: [
      {
        'rule::selector': 'svg',
        viewBox: true,
        version: false,
        id: false,
        'data-name': false,
        class: false,
        style: false,
        xmlns: 'http://www.w3.org/2000/svg',
        fill: false,
        'xmlns:dc': false,
        'xmlns:cc': false,
        'xmlns:rdf': false,
        'xmlns:svg': false,
        'xml:space': false,
        'xmlns:sodipodi': false,
        'xmlns:inkscape': false,
        x: false,
        y: false,
      },
      {
        'rule::selector': 'svg g',
        style: false,
        fill: false,
        id: false,
        class: false,
      },
      {
        'rule::selector': 'svg path',
        style: false,
        fill: false,
        'fill-opacity': false,
        class: false,
      },
    ],
  },
};
