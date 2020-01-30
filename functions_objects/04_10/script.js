// OBJECT CONSTRUCTORS

// var course = new Object();

// var course = {
//     title: "JavaScript Essential Training",
//     instructor: "Morten Rand-Hendriksen",
//     level: 1,
//     published: true,
//     views: 0,
//     updateViews: function() {
//         return ++course.views;
//     }
// }

// console.log(course);

// var currentDate = new Date(); //New instance of date object

// var course02 = new Course();


function Course(title, views, instructor, level, published) {
    this.title = title;
    this.views = views;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.updateViews = function() {
        return ++this.views;
    };
}

var course01 = new Course("JavaScript Essential Training", 2, "Bill", 1, 1, true)

console.log(course01);