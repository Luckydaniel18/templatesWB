import handlebars from 'vite-plugin-handlebars';

//const basicContext = {
    //    title : "Here we are again",
  //      show : false,   
  const users = [{   
    
      FirstName : 'Lindani',
      BookCount : 5,
      DayCount : 3,
      notLate: true
  },
    {
    FirstName : "Kagiso",
    BookCount : 7,
    DayCount : 2,
    notLate: false
    },
    {
    FirstName : 'Maycayle',
    BookCount : 17,
    DayCount :2,
    notLate: true
  }
];


export default {
  plugins: [handlebars({
    context : {
      users
    }
  })]
};