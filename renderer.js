// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

const jsonSettings = httpGet("https://raw.githubusercontent.com/nacrt/SkyblockClient-REPO/main/files/mods.json");
const jsonParsed = JSON.parse(jsonSettings);

const Div = document.getElementsByClassName('testdiv')[0];

for (var i = 0; i < jsonParsed.length; i++) {
    var val = jsonParsed[i]
    var tag = document.createElement('a');
    tag.innerHTML = val.id;
    tag.setAttribute('href',"'"+val.url+"'");
    Div.appendChild(tag);
    Div.appendChild(document.createElement('br'));
}