var body = [];
var links = [];
var linksString = "";
var hrefs = []
var parsedBody = document.getElementById('display-parsed-body');

var url = "https://www.toyotalincolnwood.com/new-vehicles/";

async function getSourceAsDOM() {
  try {
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    parser=new DOMParser();
    var response = parser.parseFromString(xmlhttp.responseText,"text/html"); 
    // body = response.getElementsByTagName('body')

    // links = response.getElementsByTagName('a');
    links = response.getElementsByTagName('a');

    for (var i = 0; i<links.length; i++)
    {   
        hrefs.push(links[i].href);
        linksString += links[i].href + "<br>";
        // linksString += links[i].textContent + "<br>";
    }

    console.log(links);

  } catch (error) {
    console.log(error);
  }
}

getSourceAsDOM()

// parsedBody.innerHTML = body[0].innerHTML;  // This Works
parsedBody.innerHTML = linksString;













// iterator();

