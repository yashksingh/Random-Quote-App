$(document).ready(function(){
    function getQuote(){
        var quotes = ["Hello World" , "Hello Man " , " Hello Yash","Hello Abhay" , "Hello Rahul"];
        var authors = ["- Author1","- Author2","- Author3","- Author4"];

        var randomNum = Math.floor((Math.random()*quotes.length));
        var randomQuote = quotes[randomNum];
        var randomAuthor = authors[randomNum];

        $(".quote").text(randomQuote);
        $(".author").text(randomAuthor);

       
    }
    $(".btn").on("click",function(){
            getQuote();
        });
});