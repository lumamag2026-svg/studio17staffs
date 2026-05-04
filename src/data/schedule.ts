export interface ClassSlot {
  time: string;
  end: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Bootcamp";
  instructor: "Emma" | "Ruby";
  capacity: number;
  booked: number;
}

const REFORMER_CAP = 3;

// Helper for the seeded weekday schedule
const wkDay = (instructorMap: Record<string, "Emma" | "Ruby">, levelMap: Record<string, ClassSlot["level"]>): ClassSlot[] => [
  { time: "06:30", end: "07:15", name: "Foundations", level: levelMap["06:30"] ?? "Beginner", instructor: instructorMap["06:30"] ?? "Emma", capacity: REFORMER_CAP, booked: 0 },
  { time: "09:30", end: "10:15", name: "Foundations", level: levelMap["09:30"] ?? "Beginner", instructor: instructorMap["09:30"] ?? "Emma", capacity: REFORMER_CAP, booked: 0 },
  { time: "10:30", end: "11:15", name: "Progressions", level: levelMap["10:30"] ?? "Intermediate", instructor: instructorMap["10:30"] ?? "Emma", capacity: REFORMER_CAP, booked: 0 },
  { time: "17:00", end: "17:45", name: "Foundations", level: levelMap["17:00"] ?? "Beginner", instructor: instructorMap["17:00"] ?? "Ruby", capacity: REFORMER_CAP, booked: 0 },
  { time: "18:00", end: "18:45", name: "Progressions", level: levelMap["18:00"] ?? "Intermediate", instructor: instructorMap["18:00"] ?? "Emma", capacity: REFORMER_CAP, booked: 0 },
  { time: "19:00", end: "19:45", name: "Master Class", level: levelMap["19:00"] ?? "Advanced", instructor: instructorMap["19:00"] ?? "Emma", capacity: REFORMER_CAP, booked: 0 },
];

// Apply varied seeded "booked" counts so demo feels live
function seedBookings(slots: ClassSlot[], seedKey: string): ClassSlot[] {
  return slots.map((s, i) => {
    const seed = (seedKey.charCodeAt(0) + i * 7) % 4; // 0..3
    return { ...s, booked: seed };
  });
}

export const weeklySchedule: Record<number, ClassSlot[]> = {
  // Mon
  1: seedBookings(wkDay(
    { "06:30": "Emma", "09:30": "Emma", "10:30": "Ruby", "17:00": "Ruby", "18:00": "Emma", "19:00": "Emma" },
    {}
  ), "M"),
  // Tue
  2: seedBookings(wkDay(
    { "06:30": "Ruby", "09:30": "Emma", "10:30": "Emma", "17:00": "Emma", "18:00": "Ruby", "19:00": "Emma" },
    {}
  ), "T"),
  // Wed
  3: seedBookings(wkDay(
    { "06:30": "Emma", "09:30": "Ruby", "10:30": "Emma", "17:00": "Ruby", "18:00": "Emma", "19:00": "Ruby" },
    {}
  ), "W"),
  // Thu
  4: seedBookings(wkDay(
    { "06:30": "Emma", "09:30": "Emma", "10:30": "Ruby", "17:00": "Emma", "18:00": "Ruby", "19:00": "Emma" },
    {}
  ), "H"),
  // Fri
  5: seedBookings(wkDay(
    { "06:30": "Ruby", "09:30": "Emma", "10:30": "Emma", "17:00": "Emma", "18:00": "Ruby", "19:00": "Emma" },
    {}
  ), "F"),
  // Sat
  6: seedBookings([
    { time: "07:30", end: "08:15", name: "Foundations", level: "Beginner", instructor: "Emma", capacity: REFORMER_CAP, booked: 0 },
    { time: "08:30", end: "09:15", name: "Progressions", level: "Intermediate", instructor: "Ruby", capacity: REFORMER_CAP, booked: 0 },
    { time: "09:30", end: "10:15", name: "Master Class", level: "Advanced", instructor: "Emma", capacity: REFORMER_CAP, booked: 0 },
  ], "S"),
  // Sun — Bootcamp (6-week course only)
  0: seedBookings([
    { time: "08:00", end: "08:45", name: "Bootcamp", level: "Bootcamp", instructor: "Emma", capacity: REFORMER_CAP, booked: 0 },
    { time: "09:00", end: "09:45", name: "Bootcamp", level: "Bootcamp", instructor: "Emma", capacity: REFORMER_CAP, booked: 0 },
    { time: "10:00", end: "10:45", name: "Bootcamp", level: "Bootcamp", instructor: "Ruby", capacity: REFORMER_CAP, booked: 0 },
    { time: "11:00", end: "11:45", name: "Bootcamp", level: "Bootcamp", instructor: "Emma", capacity: REFORMER_CAP, booked: 0 },
    { time: "12:00", end: "12:45", name: "Bootcamp", level: "Bootcamp", instructor: "Ruby", capacity: REFORMER_CAP, booked: 0 },
  ], "U"),
};

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const pricing = {
  single: "£19.50",
  fivePack: "£95",
  tenPack: "£180",
  privateOne: "£30",
  privateTwo: "£50",
  bootcamp: "TBC",
};
