jQuery(document).ready(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
            "x-rapidapi-key": "7e85634869mshc08a3bb68319a8cp190578jsnca9b4f9a179e"
        }
    }
    
    jQuery.ajax(settings).done(function (response) {
        console.log(response);
    });
});