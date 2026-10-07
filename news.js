 async function news (category,country){
 var apikey = "pub_6c528ed743d7439cbcd1513f41f2ad14"
 var news_category=category;
 var news_country=country;
var newsurl = `https://newsdata.io/api/1/latest?apikey=pub_6c528ed743d7439cbcd1513f41f2ad14&country=${country}&language=ar&category=${category}` 
console.log(newsurl);
 var response = await fetch(newsurl);; 
    var data = await response.json();
    console.log(data);
    for(var i=0;i<data.results.length;i++){
        var articalerow=document.createElement("section");
        articalerow.classList.add("col-12","col-md-6","col-lg-4");
    var articales=`<img class="img-fluid" src="${data.results[i].image_url}">
            <article class="row mt-2">
                <p class="col-6">${data.results[i].pubDate}</p>
                <p class="col-6">
                    <span class="badge bg-success float-end">${data.results[i].source_name}</span>
                </p>
            </article>
            <h4>${data.results[i].title}</h4>`
    
   articalerow.innerHTML=articales;
   document.getElementById(`${category}-news`).appendChild(articalerow);
    }
    
 }
 news("sports","eg");
 news("entertainment","eg");
 news("health","eg");
 news("business","eg");