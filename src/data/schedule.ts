export interface ClassSlot {
  time: string;
  name: string;
  instructor: string;
  capacity: number;
  booked: number;
}

export const weeklySchedule: Record<number, ClassSlot[]> = {
  1: [
    { time: "06:30", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 3 },
    { time: "09:15", name: "Reformer Foundations", instructor: "Emma", capacity: 8, booked: 5 },
    { time: "17:30", name: "Reformer Strong", instructor: "Emma", capacity: 8, booked: 7 },
    { time: "18:30", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 8 },
  ],
  2: [
    { time: "07:00", name: "Reformer Strong", instructor: "Emma", capacity: 8, booked: 4 },
    { time: "09:15", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 6 },
    { time: "12:15", name: "Reformer Restore", instructor: "Emma", capacity: 8, booked: 2 },
    { time: "18:30", name: "Reformer Strong", instructor: "Emma", capacity: 8, booked: 7 },
    { time: "19:30", name: "Prenatal Reformer", instructor: "Emma", capacity: 6, booked: 3 },
  ],
  3: [
    { time: "06:30", name: "Reformer Foundations", instructor: "Emma", capacity: 8, booked: 2 },
    { time: "09:15", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 5 },
    { time: "17:30", name: "Reformer Restore", instructor: "Emma", capacity: 8, booked: 1 },
    { time: "18:30", name: "Reformer Strong", instructor: "Emma", capacity: 8, booked: 6 },
  ],
  4: [
    { time: "07:00", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 3 },
    { time: "09:15", name: "Prenatal Reformer", instructor: "Emma", capacity: 6, booked: 4 },
    { time: "18:30", name: "Reformer Foundations", instructor: "Emma", capacity: 8, booked: 5 },
    { time: "19:30", name: "Reformer Strong", instructor: "Emma", capacity: 8, booked: 8 },
  ],
  5: [
    { time: "06:30", name: "Reformer Strong", instructor: "Emma", capacity: 8, booked: 4 },
    { time: "09:15", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 3 },
    { time: "17:30", name: "Reformer Restore", instructor: "Emma", capacity: 8, booked: 2 },
  ],
  6: [
    { time: "08:00", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 6 },
    { time: "09:15", name: "Reformer Strong", instructor: "Emma", capacity: 8, booked: 7 },
    { time: "10:30", name: "Reformer Foundations", instructor: "Emma", capacity: 8, booked: 4 },
  ],
  0: [
    { time: "09:00", name: "Reformer Restore", instructor: "Emma", capacity: 8, booked: 5 },
    { time: "10:15", name: "Reformer Flow", instructor: "Emma", capacity: 8, booked: 2 },
  ],
};

export const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
