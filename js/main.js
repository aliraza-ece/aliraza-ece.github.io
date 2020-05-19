var fields = {
  "web" : "Web",
  "server" : "Server",
  "mobile" : "Mobile",
  "ml": "Machine Learning",
  "graphics" : "3D Graphics",
  "socket" : "Web Sockets",
  "docker": "Docker"
};
var languages = {
  "android" : "Android",
  "javascript" : "Javascript",
  "java" : "Java",
  "rails" : "Ruby on Rails",
  "node" : "Node.js",
  "meteor" : "Meteor.js",
  "unity" : "Unity",
  "csharp": "C Sharp",
  "mongo": "MongoDB",
  "python": "Python",
  "react": "React.js",
  "opencv": "OpenCV"
};

$(document).ready(function (){
  //Defines the projects
  var projects = {
    "webveloper": {
      name: "webveloper",
      div: $("#webveloper"),
      fields: ["web", "server", "docker"],
      languages: ["javascript", "node", "react"]
    },
    "benign": {
      name: "benign",
      div: $("#benign"),
      fields: ["mobile", "ml"],
      languages: ["python", "opencv", "android", "java"]
    },
    "algotrainer": {
      name: "algotrainer",
      div: $("#algotrainer"),
      fields: ["web", "server"],
      languages: ["javascript", "node", "mongo"]
    },
    "vart": {
      name: "vart",
      div: $("#vart"),
      fields: ["graphics", "server"],
      languages: ["csharp"]
    },
    "cliq": {
      name: "cliq",
      div: $("#cliq"),
      fields: ["web", "server"],
      languages: ["rails", "javascript"]
    },
    "calculall": {
      name: "calculall",
      div: $("#calculall"),
      fields: ["mobile"],
      languages: ["java", "android"]
    },
    "learning": {
      name: "learning",
      div: $("#learning"),
      fields: ["ml", "mobile"],
      languages: ["android", "java"]
    },
    "castle": {
      name: "castle",
      div: $("#castle"),
      fields: ["mobile", "graphics"],
      languages: ["unity", "csharp", "android"]
    },
    "quickvid": {
      name: "quickvid",
      div: $("#quickvid"),
      fields: ["mobile", "server"],
      languages: ["android", "java", "javascript", "node", "mongo"]
    },
    "ihear": {
      name: "ihear",
      div: $("#ihear"),
      fields: ["ml", "graphics", "server", "web"],
      languages: ["javascript", "node", "unity", "csharp"]
    },
    "beatmix": {
      name: "beatmix",
      div: $("#beatmix"),
      fields: ["mobile", "server", "socket"],
      languages: ["android", "java", "javascript", "node", "mongo"]
    },
    "space": {
      name: "space",
      div: $("#space"),
      fields: ["mobile", "graphics", "server", "socket"],
      languages: ["unity", "csharp", "android", "node", "javascript"]
    },
    "war": {
      name: "war",
      div: $("#war"),
      fields: ["socket"],
      languages: ["java"]
    },
    "block-survival": {
      name: "block-survival",
      div: $("#block-survival"),
      fields: ["graphics"],
      languages: ["java"]
    },
    "nutritrack": {
      name: "nutritrack",
      div: $("#nutritrack"),
      fields: ["mobile", "server"],
      languages: ["java", "android", "node", "javascript", "mongo"]
    },
    "muriqui" : {
      name: "muriqui",
      div: $("#muriqui"),
      fields: ["web", "server"],
      languages: ["rails", "javascript"]
    },
    "polarfeed" : {
      name: "polarfeed",
      div: $("#polarfeed"),
      fields: ["mobile", "server"],
      languages: ["java", "android", "node", "javascript"]
    },
    "3draw" : {
      name: "3draw",
      div: $("#3draw"),
      fields: ["web", "graphics", "server", "socket"],
      languages: ["javascript", "node", "javascript", "mongo"]
    },
    "fuser": {
      name: "fuser",
      div: $("#fuser"),
      fields: ["mobile"],
      languages: ["java", "android"]
    },
    "organizer": {
      name: "organizer",
      div: $("#organizer"),
      fields: ["web", "server"],
      languages: ["javascript", "meteor"]
    },
    "lost" : {
      name: "lost",
      div: $("#lost"),
      fields: ["mobile"],
      languages: ["java", "android", "cpp"]
    },
    "troll" : {
      name: "troll",
      div: $("#troll"),
      fields: ["mobile", "web", "databases"],
      languages: ["java", "android", "javascript", "node"]
    }
  };

  //All Filter
  $("#all-languages").click(function(e){
    e.preventDefault();
    for (var key in projects){
      var project = projects[key];
      project.div.show("slow");
    }
  });

  $("#all-fields").click(function(e){
    e.preventDefault();
    for (var key in projects){
      var project = projects[key];
      project.div.show("slow");
    }
  });

  //Adds the filters at the top + onclicks
  for (var languageKey in languages){
    var language = languages[languageKey];
    $("#filter-language").append(
      "<button id=\"" + languageKey + "-language\" class=\"filter-language btn\">"
      + "<h3 class=\"filter-title\">" + language + "</h3>"
      + "</button>"
    );

    $("#" + languageKey + "-language").click(function(key){
        return function(e){
          e.preventDefault();
          var shown = {};
          for (var projectKey in projects){
            var project = projects[projectKey];
            if (project.languages.indexOf(key) == -1){ //Does not have the tag
              project.div.hide("slow");
            } else{
              project.div.show("slow");
              shown[projectKey] = project;
            }
          }
        }
      }(languageKey)
    );
  }

  for (var fieldKey in fields){
    var field = fields[fieldKey];
    $("#filter-field").append(
      "<button id=\"" + fieldKey + "-field\" class=\"filter-field btn\">"
      + "<h3 class=\"filter-title\">" + field + "</h3>"
      + "</button>"
    );

    $("#" + fieldKey + "-field").click(function(key){
        return function(e){
          e.preventDefault();
          var shown = {};
          for (var projectKey in projects){
            var project = projects[projectKey];
            if (project.fields.indexOf(key) == -1){ //Does not have the tag
              project.div.hide("slow");
            } else{
              project.div.show("slow");
              shown[projectKey] = project;
            }
          }
        }
      }(fieldKey)
    );
  }

  //Adds the tags to each project
  for (var key in projects){
    var project = projects[key];
    for (var i in project.languages){
       $("#" + project.name + "-tags-languages").append(
       "<div class=\"tag-language\">"
        + languages[project.languages[i]]
        + "</div>"
      );
    }
    for (var i in project.fields){
       $("#" + project.name + "-tags-fields").append(
       "<div class=\"tag-field\">"
        + fields[project.fields[i]]
        + "</div>"
      );
    }
  }

});
