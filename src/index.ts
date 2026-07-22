const g = game as ReadyGame;

console.log(g.dnd5e);
console.log("FUNCIONA!");

const CALENDARIO_NOME_PERDIDO_CONFIG = {
	name: "calendario maine",
	description: "muito foda",
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
				name: "Fodas",
				abbreviation: "foda",
				ordinal: 1,
				days: 100
			},
			{
				name: "Loucos",
				abbreviation: "louco",
				ordinal: 2,
				days: 100
			}
		]
	},
	days: {
		daysPerYear: 200,
		hoursPerDay: 24,
		minutesPerDay: 60,
		secondsPerMinute: 60,
		values: [
			{ name: "um", ordinal: 1 },
      		{ name: "dois", ordinal: 2 },
      		{ name: "quarta", ordinal: 3 },
      		{ name: "tres", ordinal: 4 },
      		{ name: "cinco", ordinal: 5 },
		]
	},
	seasons: {
		values: [
			{
				monthStart: 1,
				monthEnd: 2,
				name: "INFERNO"
			}
		]
	}
}

Hooks.once("init", function () {
	CONFIG.DND5E.calendar.calendars.push({
		value: "teste-maine",
		label: "MAINE TESTE",
		config: CALENDARIO_NOME_PERDIDO_CONFIG
	});
});