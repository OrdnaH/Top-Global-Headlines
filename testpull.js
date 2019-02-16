var bigNews = {}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

d3.json('countries.geo.json').then(function(geodat) {
    // Creating a GeoJSON layer with the retrieved data
    console.log(geodat.features[1].properties['name'])
    //L.geoJson(data).addTo(map);
var targetCountries = []
for (x in geodat.features){
    targetCountry = geodat.features[x].properties['name']
    targetCountries.push(targetCountry)
    
}
console.log(targetCountries)

var countries = {}
d3.csv( "countries.csv").then(function(data){
    //console.log(data);
    countries = data;
   // console.log(countries)


//console.log(countries);  //console.log(countries)

var i = 0
var x = 0
console.log(countries.length)
countries.forEach(function(x){
    console.log(x)
//if (i>5){break;}
// d3.json(`https://restcountries.eu/rest/v2/name/${countries[x].Country}`).then(function(code){
//     twoLetter = code.alpha2Code
//     console.log(twoLetter)
// });
//console.log(countries[x].Country)
console.log(x.geom)

if ( targetCountries.includes(x['geom'])){
    console.log(x.geom)
    var countriesGeom = x.geom
  // while(bigNews[countriesGeom] == null){
d3.json(`https://newsapi.org/v2/top-headlines?country=${x.Code}&apiKey=${NEWS_KEY}`).then(function(countryNews){
    console.log(countryNews)
    console.log("countries geom " +countriesGeom)
    bigNews[countriesGeom] = countryNews
    console.log(bigNews[countriesGeom])

    console.log("big news length " + Object.keys(bigNews).length)
    console.log(bigNews)
    document.getElementById('data').innerHTML = JSON.stringify(bigNews)
   // x = x +1
    i = i + 1
    
}).then(console.log(bigNews)).then() //.then(console.log(bigNews)) //countryNews json
//console.log(bigNews.length)
  //  }

  sleep(100)
  
} //if
else{x=x+1}

//console.log(countries)


});
console.log("000000000000000000000000")
//countrylist from newsapi

});// geojson

})//vukc