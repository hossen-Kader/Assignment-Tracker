document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".reveal", {
    distance: "60px",
    origin: "bottom",
    duration: 800,
    easing: "ease-out",
    interval: 100,
    reset: false,
  });

  const subjects = {
    1: {
      name: "Web Development",
      id: "web-dev",
      code: 28544,
      completed: "07",
      pending: "03",
      overdue: "10",
    },
    2: {
      name: "Data Structure",
      id: "dsa",
      code: 28542,
      completed: "03",
      pending: "04",
      overdue: "09",
    },
    3: {
      name: "Java Programming",
      id: "java",
      code: 28541,
      completed: "10",
      pending: "09",
      overdue: "03",
    },
    4: {
      name: "Digital Electronics - II",
      id: "de",
      code: 26841,
      completed: "08",
      pending: "02",
      overdue: "04",
    },
    5: {
      name: "Business Communication",
      id: "bc",
      code: 25831,
      completed: "08",
      pending: "07",
      overdue: "06",
    },
    6: {
      name: "Computer Peripharals",
      id: "cpi",
      code: 28543,
      completed: "08",
      pending: "10",
      overdue: "04",
    },
    7: {
      name: "Environmental Studies",
      id: "envt",
      code: 29041,
      completed: "03",
      pending: "01",
      overdue: "03",
    },
  };

  const assignments = {
    "web-dev": {
      "Interpret Web Technology and industry Requirement": {
        Date: "01/01/2026",
        Status: "Completed",
        Description:
          "Topics:- OSH, UI/UX, Roles Of a Web Developer, Career opportunity, IT Infrastructure, OS, Version Control software, Web Server, IDE, Browser",
      },
      "Different Types of tag in HTML": {
        Date: "01/01/2026",
        Status: "Pending",
        Description:
          "Write down all the topics you learned about tags in class and what they are in HTML and what each tag does.",
      },
    },
    dsa: {
      "Write and execute programs for addition, subtraction, multiplication & division of two numbers":
        {
          Date: "17/09/2025",
          Status: "Completed",
          Description:
            "Writing Rules :- Job Name, Important Equipment and supplies, Program, Output",
        },
      "Write and Execute Programs for traversing in array": {
        Date: "17/09/2025",
        Status: "Overdue",
        Description:
          "Writing Rules :- Job Name, Important Equipment and supplies, Program, Output",
      },
    },
    java: {
      "Write Programs Using Java Operators": {
        Date: "14/10/2025",
        Status: "Completed",
        Description:
          "Rules:- Maximum 2 codes should be written on 1 page, Box should be used while writing Program title should be written with colored pen.(Except red), Formality of the book is very important while submitting it.",
      },
    },
  };

  const container = document.getElementById("subjects");

  Object.values(subjects).forEach((subject) => {
    const div = document.createElement("div");
    div.className = "reveal";

    div.innerHTML = `
    <details id="${subject.id}"
      class="px-8 py-6 rounded-lg border border-2 border-[#1f2937] transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer"
    >
      <summary class="flex flex-col md:flex-row items-start md:items-center justify-between py-2.5">
        <div class="flex flex-col">
          <p class="text-lg md:text-xl text-white font-bold">
            ${subject.name}
          </p>
          <p class="text-sm text-gray-400 pb-4 md:pb-0">
            Subject Code: ${subject.code}
          </p>
        </div>
        <p class="text-xs md:text-sm text-gray-400">
          Completed: <span class="text-green-500 font-bold">${subject.completed}</span> |
          Pending: <span class="text-amber-500 font-bold">${subject.pending}</span> |
          Overdue: <span class="text-red-600 font-bold">${subject.overdue}</span>
        </p>
      </summary>
    </details>
  `;
    container.appendChild(div);
  });
  document.querySelectorAll("details[id]").forEach((subjectDetails) => {
    const subjectId = subjectDetails.id;
    const subjectAssignments = assignments[subjectId];

    if (!subjectAssignments) return;

    const container = document.createElement("div");
    container.className = "flex flex-col gap-2 mt-4";

    Object.entries(subjectAssignments).forEach(([title, data]) => {
      const statusColor =
        data.Status === "Completed"
          ? "text-green-400"
          : data.Status === "Pending"
          ? "text-amber-500"
          : "text-red-500";

      const borderColor =
        data.Status === "Completed"
          ? "border-green-400"
          : data.Status === "Overdue"
          ? "border-red-500"
          : "border-[#1f2937]";

      container.innerHTML += `
      <details class="py-3 px-5 rounded-lg border border-2 ${borderColor} text-sm">
        <summary class="flex flex-row justify-between py-6">
          <div class="w-full flex flex-col gap-1">
            <p class="text-sm md:text-base text-white font-bold">
              ${title}
            </p>
            <div class="flex flex-row justify-between text-xs">
              ${
                data.Status !== "Completed"
                  ? `<p class="text-gray-400">
                Due Date: ${data.Date}
              </p>`
                  : ""
              }
              <p class="${statusColor}">
                ${data.Status}
              </p>
            </div>
          </div>
        </summary>
        ${data.Description}
      </details>
    `;
    });
    subjectDetails.appendChild(container);
  });
});