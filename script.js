Names_of_people = [];

function submit()
{
    var guest_name = document.getElementById("name1").value;
    Names_of_people.push(guest_name);
    console.log(guest_name);
    console.log(Names_of_people);
    var lenghtofNames_of_people = Names_of_people.length;
    console.log(lenghtofNames_of_people);
    document.getElementById("display_names").innerHTML = Names_of_people.toString();
}

function sorting()
{
    Names_of_people.sort();
    var i = Names_of_people.join("<br>");
    console.log(Names_of_people);
    document.getElementById("sorted").innerHTML = i.toString();
}

function show()
{
    var i = Names_of_people.join("<br>");
    console.log(Names_of_people);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sort_button").style.display ="block";
}
function searching()
{
    var s = document.getElementById("s1").value;
    var found = 0;
    var j;
    for(j=0;j<Names_of_people.length;j++){
    if(s==Names_of_people[j])
    {found=found+1;}
    }
    document.getElementById("p2").innerHTML = "name found"+found+"time/s";
    console.log("name found"+found+"time/s");
}