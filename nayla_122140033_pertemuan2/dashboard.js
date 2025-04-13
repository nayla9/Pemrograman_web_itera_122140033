export class Dashboard {
    constructor() {
      this.schedule = JSON.parse(localStorage.getItem("schedule")) || [];
      this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    }
  
    saveData = () => {
      localStorage.setItem("schedule", JSON.stringify(this.schedule));
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    };
  
    addSchedule = (course, time) => {
      this.schedule.push({ course, time });
      this.saveData();
    };
  
    deleteSchedule = (index) => {
      this.schedule.splice(index, 1);
      this.saveData();
    };
  
    addTask = (task, deadline) => {
      this.tasks.push({ task, deadline });
      this.saveData();
    };
  
    deleteTask = (index) => {
      this.tasks.splice(index, 1);
      this.saveData();
    };
  }
  