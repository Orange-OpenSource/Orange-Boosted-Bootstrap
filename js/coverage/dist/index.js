var cov_qfx7x8a89 = function () {
  var path = "D:\\workspace\\boost\\github\\Orange-Boosted-Bootstrap-v4-stable\\js\\src\\index.js",
      hash = "26ee106ebbc87527cafb6a5be177772010ffae58",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "D:\\workspace\\boost\\github\\Orange-Boosted-Bootstrap-v4-stable\\js\\src\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 41,
          column: 5
        }
      },
      "1": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 29,
          column: 3
        }
      },
      "2": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 123
        }
      },
      "3": {
        start: {
          line: 31,
          column: 18
        },
        end: {
          line: 31,
          column: 54
        }
      },
      "4": {
        start: {
          line: 32,
          column: 19
        },
        end: {
          line: 32,
          column: 20
        }
      },
      "5": {
        start: {
          line: 33,
          column: 18
        },
        end: {
          line: 33,
          column: 19
        }
      },
      "6": {
        start: {
          line: 34,
          column: 19
        },
        end: {
          line: 34,
          column: 20
        }
      },
      "7": {
        start: {
          line: 35,
          column: 19
        },
        end: {
          line: 35,
          column: 20
        }
      },
      "8": {
        start: {
          line: 36,
          column: 19
        },
        end: {
          line: 36,
          column: 20
        }
      },
      "9": {
        start: {
          line: 38,
          column: 2
        },
        end: {
          line: 40,
          column: 3
        }
      },
      "10": {
        start: {
          line: 39,
          column: 4
        },
        end: {
          line: 39,
          column: 99
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 26,
            column: 1
          },
          end: {
            line: 26,
            column: 2
          }
        },
        loc: {
          start: {
            line: 26,
            column: 8
          },
          end: {
            line: 41,
            column: 1
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        }, {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 29,
            column: 3
          }
        }],
        line: 27
      },
      "1": {
        loc: {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        }, {
          start: {
            line: 38,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        }],
        line: 38
      },
      "2": {
        loc: {
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 156
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 6
          },
          end: {
            line: 38,
            column: 26
          }
        }, {
          start: {
            line: 38,
            column: 30
          },
          end: {
            line: 38,
            column: 51
          }
        }, {
          start: {
            line: 38,
            column: 55
          },
          end: {
            line: 38,
            column: 78
          }
        }, {
          start: {
            line: 38,
            column: 82
          },
          end: {
            line: 38,
            column: 105
          }
        }, {
          start: {
            line: 38,
            column: 109
          },
          end: {
            line: 38,
            column: 130
          }
        }, {
          start: {
            line: 38,
            column: 134
          },
          end: {
            line: 38,
            column: 156
          }
        }],
        line: 38
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

cov_qfx7x8a89.s[0]++;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
(function ($) {
  cov_qfx7x8a89.f[0]++;
  cov_qfx7x8a89.s[1]++;

  if (typeof $ === 'undefined') {
    cov_qfx7x8a89.b[0][0]++;
    cov_qfx7x8a89.s[2]++;
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  } else {
    cov_qfx7x8a89.b[0][1]++;
  }

  var version = (cov_qfx7x8a89.s[3]++, $.fn.jquery.split(' ')[0].split('.'));
  var minMajor = (cov_qfx7x8a89.s[4]++, 1);
  var ltMajor = (cov_qfx7x8a89.s[5]++, 2);
  var minMinor = (cov_qfx7x8a89.s[6]++, 9);
  var minPatch = (cov_qfx7x8a89.s[7]++, 1);
  var maxMajor = (cov_qfx7x8a89.s[8]++, 4);
  cov_qfx7x8a89.s[9]++;

  if ((cov_qfx7x8a89.b[2][0]++, version[0] < ltMajor) && (cov_qfx7x8a89.b[2][1]++, version[1] < minMinor) || (cov_qfx7x8a89.b[2][2]++, version[0] === minMajor) && (cov_qfx7x8a89.b[2][3]++, version[1] === minMinor) && (cov_qfx7x8a89.b[2][4]++, version[2] < minPatch) || (cov_qfx7x8a89.b[2][5]++, version[0] >= maxMajor)) {
    cov_qfx7x8a89.b[1][0]++;
    cov_qfx7x8a89.s[10]++;
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  } else {
    cov_qfx7x8a89.b[1][1]++;
  }
})($);
//# sourceMappingURL=index.js.map