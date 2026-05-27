function HomePage() {

  const today = new Date()

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  })

  const formattedTime = today.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  })

  const currentHour = today.getHours()

  let greeting = ""

  if (currentHour < 12) {
    greeting = "Good morning"
  } else if (currentHour < 18) {
    greeting = "Good afternoon"
  } else {
    greeting = "Good evening"
  }

  const userName = "Lhance"

  // =========================
  // SAMPLE TASKS
  // =========================
  const tasks = [
    {
      title: "Finish React Dashboard",
      dueDate: "2026-05-27"
    },
    {
      title: "Study Networking",
      dueDate: "2026-05-27"
    },
    {
      title: "Complete UI Design",
      dueDate: "2026-05-27"
    },
    {
      title: "Workout",
      dueDate: "2026-05-28"
    }
  ]

  // =========================
  // TODAY DATE FORMAT
  // =========================
  const todayString = today.toISOString().split("T")[0]

  // =========================
  // TASKS DUE TODAY
  // =========================
  const tasksDueToday = tasks.filter(
    (task) => task.dueDate === todayString
  )

  return (

    <section className="p-4">

      <div className="flex flex-col gap-2">

        {/* Date + Time */}
        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">

          <p>
            {formattedDate}
          </p>

          <span>•</span>

          <p>
            {formattedTime}
          </p>

        </div>

        {/* Greeting */}
        <h1 className="text-4xl font-bold text-primary">

          {greeting}, {userName}!

        </h1>

        {/* Task Count */}
        <p className="text-lg text-gray-600">

          You have {tasksDueToday.length} task
          {tasksDueToday.length !== 1 && "s"} due today.
          Let&apos;s make it count.

        </p>

      </div>

    </section>
  )
}

export default HomePage