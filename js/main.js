const buildAssignmentsCards = () => {
    mainData.getAssignmentsByUid().then((assignments) => {
      let domstring = '';
      assignments.forEach((assignment) => {
        domstring += '<div class="card" style="width: 18rem">';
        domstring += `<img class="card-img-top" ${assignment.imageUrl} alt="Card image cap">`;
        domstring += '<div class="card-body">';
        domstring += `<h3 class="card-title">Title: ${assignment.title}<h3>`;
        // domstring += `<strong> Due Date:<p>${assignment.dueDate}</strong></p>`;
        // domstring += `<p class="card-text">${assignment.topic}</p>`;
        domstring += `<p class="card-text">Code Used: ${assignment.technologiesUsed}</p>`;
        // domstring += `<p class="card-text">${assignment.assignmentUrl}</p>`;
        domstring += `<a href=${assignment.assignmentUrl} class="btn btn-secondary">website</a>`;
        domstring += `<a href=${assignment.assignmentUrl2} class="btn btn-secondary">Github</a>`;
        domstring += '</div>';
        domstring += '</div>';
      });
      util.printToDom('projectsPage', domstring);
    });
  };
  
  const navBtns = () => {
    document.getElementById('bioPage').addEventListener('click', buildAssignmentsCards);
    document.getElementById('technologiesPage').addEventListener('click', buildAssignmentsCards);
    document.getElementById('font').addEventListener('click', buildAssignmentsCards);
  };
  
  
  const init = () => {
    buildAssignmentsCards();
    navBtns();
    // getProjects();
  };
  
  init();
  