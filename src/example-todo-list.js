import { Project } from "./models/project";
import { Task } from "./models/task";


const work = new Project("Work");
const meeting = new Task("Meeting with Finance", "Explain why your department will need to go over budget this month.", "2024-11-24", "Medium");
const yearEnd = new Task("Year End Review", "Fingers crossed.", "2024-12-15", "High");
work.add(meeting);
work.add(yearEnd);

const fitness = new Project("Fitness");
const gym = new Task("Gym", "Pick things up and put them down.", "2025-01-01", "Low");
const run = new Task("Go for a run", "Aim for 6 miles at an easy pace.", "2024-12-03", "Medium");
fitness.add(gym);
fitness.add(run);



const party = new Task("Dog Birthday Party", "Boutta get wild at the dog park.", "2024-12-10", "Low");

export { work, fitness, party };