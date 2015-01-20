var bio = {
    "name" : "Shahbaz Khawaja",
    "role" : "Web Developer",
    "contacts" : {
        "cell" : "416-577-0549",
        "email" : "shahbaz@khwdesign.org",
        "location" : "Toronto",
        "github" : "KHWDesign",
        "twitter" : "@khwdesign"
    },
    "welcomeMessage" : "Infinity, and Beyond!",
    "bioPic" : "images/fry.jpg",
    "skills": ["Code Ninja-in-Training", "Web Entrepreneur", "MYSQL/CSS/PHP/HTML"]
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.cell);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    $("#footerContacts").append(formattedMobile)
        .append(formattedEmail)
        .append(formattedTwitter)
        .append(formattedLocation);

    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBioPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }
};

bio.display();





var work = {
    "jobs": [
        {
            "employer" : "KHWDesign",
            "title" : "Managing Director",
            "location" : "Karachi",
            "dates" : "2013 - Present",
            "description" : "Overseeing day to day operations of the company"
        },
        {
            "employer" : "Compass Creative",
            "title" : "Web Developer",
            "location" : "Toronto",
            "dates" : "2012 - 2014",
            "description" : "Providing web development solutions for the company clients"
        }
    ]
};


work.display = function() {
   work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedEmployerLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        $(".work-entry:last").append(formattedEmployerTitle)
            .append(formattedEmployerLocation)
            .append(formattedDates)
            .append(formattedDescription);
    });
};

work.display();




var projects = {
    "projects" : [
        {
            "title" : "Example",
            "dates" : "2014",
            "description" : "Example summary 1",
            "images" : "images/300.gif"
        },
          {
            "title" : "Example",
            "dates" : "2014",
            "description" : "Example summary 2",
            "images" : "images/300.gif"
        },
        {
            "title" : "Example",
            "dates" : "2015",
            "description" : "Example summary 3",
            "images" : "images/300.gif"
        }]
};


projects.display = function() {
    for(project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        
        $(".project-entry:last").append(formattedProjectTitle)
            .append(formattedProjectDates)
            .append(formattedProjectDescription)
            .append(formattedProjectImage);
        }
};

projects.display();

var education = {
    "schools" : [
      
        {
            "name" : "Limkokwing University of Creative Technology",
            "location" : "Cyberjaya",
            "degree" : "Bacherlor of Arts (Hons)",
            "majors" : "Digital Film & Television",
            "dates" : "2009-2012",
        }],
    "onlineCourses" : [
        {
            "title" : "Front End Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "2014-2015",
        }]
};

education.display = function() {
      education.schools.forEach(function(school) {
          $("#education").append(HTMLschoolStart);

          var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
          var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
          var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
          var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
          var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
          var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);

          $(".education-entry:last").append(formattedSchoolNameDegree)
            .append(formattedSchoolLocation)
            .append(formattedSchoolDates)
            .append(formattedSchoolMajor);
      });

      if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

education.display();





//google maps
$("#mapDiv").append(googleMap);
