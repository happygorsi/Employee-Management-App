const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        taskTitle: "Prepare report",
        taskDescription: "Prepare the monthly sales report",
        taskDate: "2026-03-12",
        taskCategory: "Reports"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        taskTitle: "Client meeting",
        taskDescription: "Attend meeting with client",
        taskDate: "2026-03-08",
        taskCategory: "Meeting"
      },
      {
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        taskTitle: "Update database",
        taskDescription: "Update customer database",
        taskDate: "2026-03-05",
        taskCategory: "Database"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        taskTitle: "Design homepage",
        taskDescription: "Create homepage UI design",
        taskDate: "2026-03-11",
        taskCategory: "Design"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        taskTitle: "Fix CSS bugs",
        taskDescription: "Resolve layout issues",
        taskDate: "2026-03-09",
        taskCategory: "Development"
      },
      {
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        taskTitle: "Optimize images",
        taskDescription: "Reduce image size for performance",
        taskDate: "2026-03-04",
        taskCategory: "Optimization"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        taskTitle: "API integration",
        taskDescription: "Integrate payment API",
        taskDate: "2026-03-13",
        taskCategory: "Backend"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        taskTitle: "Bug fixing",
        taskDescription: "Fix login bug",
        taskDate: "2026-03-07",
        taskCategory: "Development"
      },
      {
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        taskTitle: "Unit testing",
        taskDescription: "Write test cases",
        taskDate: "2026-03-03",
        taskCategory: "Testing"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        taskTitle: "SEO optimization",
        taskDescription: "Improve website SEO",
        taskDate: "2026-03-15",
        taskCategory: "Marketing"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        taskTitle: "Blog writing",
        taskDescription: "Write blog post about product",
        taskDate: "2026-03-06",
        taskCategory: "Content"
      },
      {
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        taskTitle: "Keyword research",
        taskDescription: "Find trending keywords",
        taskDate: "2026-03-02",
        taskCategory: "Marketing"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        taskTitle: "Server setup",
        taskDescription: "Setup staging server",
        taskDate: "2026-03-14",
        taskCategory: "DevOps"
      },
      {
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        taskTitle: "Deploy website",
        taskDescription: "Deploy latest build",
        taskDate: "2026-03-08",
        taskCategory: "Deployment"
      },
      {
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        taskTitle: "Monitor logs",
        taskDescription: "Check server error logs",
        taskDate: "2026-03-01",
        taskCategory: "Monitoring"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}


export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return({admin, employees})
}