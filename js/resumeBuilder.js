/*
This is empty on purpose! Your code to build the resume will go here.
 */

var model = {
  bio: {
    name: 'Artur Kazlouski',
    role: 'front-end delevoper',
    contacts: {
      mobile: '+375256053407',
      email: 'artur.minsk.sum@gmail.com',
      github: 'arturmisnksum',
      location: 'Minsk'
    },
    welcomeMessage: 'Hello',
    skills: ['HTML', 'CSS', 'Javascript'],
    biopic: 'https://avatars2.githubusercontent.com/u/9965245?s=460&v=4'
  },
  education: {
    schools: [
      {
        name: '185',
        location: 'Minsk',
        degree: 'High school',
        majors: ['art'],
        dates: '1993-2002'
      }
    ],
    onlineCourses: [
      {
        title: 'Learn Javascript',
        school: 'Ilya Kantor',
        dates: '2016-2018',
        url: 'learn.javascript.ru'
      }
    ]
  },
  work: {
    jobs: [
      {
        employer: 'Epam',
        title: 'software engineer',
        location: 'Minsk',
        dates: '2016-current',
        description: 'front-end developer'
      }
    ]
  },
  projects: {
    projects: [
      {
        title: 'SE',
        dates: '2017-current',
        description: 'website',
        images: ['', '', '']
      }
    ]
  }
};

var controller = {
  init() {
    view.init();
  },
  getBio() {
    return model.bio;
  },
  getEdu() {
    return model.education;
  },
  getWork() {
    return model.work;
  },
  getProjects() {
    return model.projects;
  }
};

var view = {
  init() {
    this.renderHeader();
    this.renderContacts();
  },
  renderHeader() {
    var bio = controller.getBio();

    var $header = $('#header');

    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $header.prepend([formattedName, formattedRole]);
    $header.append([formattedPic, formattedWelcomeMsg, HTMLskillsStart]);

    var $skills = $('#skills');
    bio.skills.forEach(function(skill) {
      $skills.append(HTMLskills.replace('%data%', skill));
    });
  },
  renderContacts() {
    var contacts = controller.getBio().contacts;

    var $topContacts = $('#topContacts');
    var $footerContacts = $('#footerContacts');

    var formattedContacts = '';
    for (var key in contacts) {
      formattedContacts += HTMLcontactGeneric.replace('%contact%', key).replace('%data%', contacts[key]);
    }

    $topContacts.append(formattedContacts);
    $footerContacts.append(formattedContacts);
  }
};

controller.init();
