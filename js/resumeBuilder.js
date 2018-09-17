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
    biopic: 'https://avatars2.githubusercontent.com/u/9965245?s=460&v=4',
    display: function() {}
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
    ],
    display: function() {}
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
    ],
    display: function() {}
  },
  projects: {
    projects: [
      {
        title: 'SE',
        dates: '2017-current',
        description: 'website',
        images: ['', '', '']
      }
    ],
    display: function() {}
  }
};
