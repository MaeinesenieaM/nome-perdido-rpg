var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};

// src/index.ts
var require_index = __commonJS({
  "src/index.ts"() {
    var g = game;
    console.log(g.dnd5e);
    console.log("FUNCIONA!");
    var CALENDARIO_NOME_PERDIDO_CONFIG = {
      name: "Calendario Nome Perdido",
      description: "",
      years: {
        yearZero: 0,
        firstWeekday: 0,
        leapYear: {
          leapInterval: 4,
          leapStart: 8
        }
      },
      months: {
        name: "Eita",
        values: [
          {
            name: "Janeiro",
            abbreviation: "jan",
            ordinal: 1,
            days: 20
          },
          {
            name: "Fevereiro",
            abbreviation: "fev",
            ordinal: 2,
            days: 20
          },
          {
            name: "Mar\xE7o",
            abbreviation: "mar",
            ordinal: 3,
            days: 20
          },
          {
            name: "Abril",
            abbreviation: "abr",
            ordinal: 4,
            days: 20
          },
          {
            name: "Maio",
            abbreviation: "mai",
            ordinal: 5,
            days: 20
          },
          {
            name: "Junho",
            abbreviation: "jun",
            ordinal: 6,
            days: 20
          },
          {
            name: "Julho",
            abbreviation: "jul",
            ordinal: 7,
            days: 20
          },
          {
            name: "Agosto",
            abbreviation: "ago",
            ordinal: 8,
            days: 20
          },
          {
            name: "Setembro",
            abbreviation: "set",
            ordinal: 9,
            days: 20
          },
          {
            name: "Outubro",
            abbreviation: "out",
            ordinal: 10,
            days: 20
          },
          {
            name: "Novembro",
            abbreviation: "nov",
            ordinal: 11,
            days: 20
          },
          {
            name: "Dezembro",
            abbreviation: "dez",
            ordinal: 12,
            days: 20
          }
        ]
      },
      days: {
        daysPerYear: 200,
        hoursPerDay: 24,
        minutesPerHour: 60,
        secondsPerMinute: 60,
        values: [
          { name: "segunda", ordinal: 1 },
          { name: "ter\xE7a", ordinal: 2 },
          { name: "quarta", ordinal: 3 },
          { name: "quinta", ordinal: 4 },
          { name: "sexta", ordinal: 5 }
        ]
      },
      seasons: {
        values: [
          {
            monthStart: 1,
            monthEnd: 3,
            name: "INFERNO"
          },
          {
            monthStart: 4,
            monthEnd: 6,
            name: "RISO"
          },
          {
            monthStart: 7,
            monthEnd: 9,
            name: "SAL"
          },
          {
            monthStart: 10,
            monthEnd: 12,
            name: "DOCE"
          }
        ]
      }
    };
    Hooks.once("dnd5e.setupCalendar", function() {
      CONFIG.DND5E.calendar.calendars.push({
        value: "nome-perdido",
        label: "Nome Perdido",
        config: CALENDARIO_NOME_PERDIDO_CONFIG
      });
    });
  }
});
export default require_index();
//# sourceMappingURL=index.mjs.map
