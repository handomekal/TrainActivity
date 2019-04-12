var config = {
    apiKey: "AIzaSyDKdTQNnxserPsbhEFn32fRJJzZSrVIC-A",
    authDomain: "trainactivity-16b0a.firebaseapp.com",
    databaseURL: "https://trainactivity-16b0a.firebaseio.com",
    projectId: "trainactivity-16b0a",
    storageBucket: "",
    messagingSenderId: "333873511221"
  };
  firebase.initializeApp(config)




$("#btn btn-primary").on("click", function(event) {
    event.preventDefault();
});  

  var trTime = $("#train-time-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var nextArr = $("#next-arrival-input").val().trim();

  var newTime = {
      time: trTime,
      newDest: destination,
      freq: frequency,
      arrival: nextArr,
  }

  database.ref().push(newTime);

  console.log(newTime.time);
  console.log(newTime.newDest);
  console.log(newTime.freq);
  console.log(newTime.arrival);

  $("#train-time-input").val("");
  $("#destination-input").val("");
  $("#frequency-input").val("");
  $("#next-arrival-input").val("");


  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

  var trTime = childSnapshot.val().time;
  var destination = childSnapshot.val().newDest;
  var frequency = childSnapshot.val().freq;
  var nextArr = childSnapshot.val().arrival;

  console.log(trTime);
  console.log(destination);
  console.log(frequency);
  console.log(nextArr);

  var trainStartPretty = moment(trfreq).format('LTS');  
  var trMins = moment().diff(moment(trfreq, "+"), "minutes");
  console.log(trMins);

  var minsArr = trMins + freq;
  console.log(minsArr);

  var newRow = $("<tr>").append(
    $("<td>").text(trTime),
    $("<td>").text(destination),
    $("<td>").text(trainStartPretty),
    $("<td>").text(frequency),
    $("<td>").text(trMins),
    $("<td>").text(minsArr)
  );

  $("#time-table > tbody").append(newRow);

  });  


 
  
    



