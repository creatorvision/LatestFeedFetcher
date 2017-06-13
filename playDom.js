var dom = document.body.innerHTML;
console.log(window.location);
var taburl= window.location.href;
refresh();


function refresh(){

    dom = document.body.innerHTML;
    console.log('Refresh Started for '+taburl);

    if(taburl.indexOf('twitter')>0){
        //Refreshing twitter for latest feeds
        var nfe = $(dom).find('.new-tweets-bar-visible'); // New feed element
        if(nfe.length>0){
            console.log("New feeds");
            $('.new-tweets-bar').click();
        }
        else{
            console.log("No new feed");
        }
        setTimeout(refresh, 5000);
    }
    else if(taburl.indexOf('linkedin')>0){
        //Refreshing Linkeding for latest feeds
        //debugger;
        var nfe =$(dom).find('.feed-s-new-update-pill__new-update-button'); // New feed element
        if(nfe.length>0){
            console.log("New feeds");
            nfe.click();
        }
        else{
            console.log("No new feed");
        }
        setTimeout(refresh, 5000);
    }
    else{
        console.log('This tab is not Twitter or Linkedin')
    }
};

