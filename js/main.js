var quoteList = [
    {
        content: '“Be yourself; everyone else is already taken.”',
        auther: 'Oscar Wilde',
    },
    {
        content: '“You only live once, but if you do it right, once is enough.”',
        auther: 'Mae West',
    },
    {
        content: '“So many books, so little time.”',
        auther: 'Frank Zappa',
    },
    {
        content: '“A room without books is like a body without a soul.” ',
        auther: 'Marcus Tullius Cicero ',
    },
    {
        content: '“Be the change that you wish to see in the world.” ',
        auther: 'Mahatma Gandhi ',
    },
    {
        content: '“A friend is someone who knows all about you and still loves you.” ',
        auther: 'Elbert Hubbard ',
    },
    {
        content: '“To live is the rarest thing in the world. Most people exist, that is all.” ',
        auther: 'Oscar Wilde ',
    },
    {
        content: '“Live as if you were to die tomorrow. Learn as if you were to live forever.” ',
        auther: 'Mahatma Gandhi ',
    },
    {
        content: '“I can make all of your wildest dreams” ',
        auther: 'Stephanie Garber ',
    },
    {
        content: '“and those strangely sharp teeth of his.” ',
        auther: 'Jennifer L. Armentrout ',
    },
    {
        content: '“Always forgive your enemies; nothing annoys them so much.” ',
        auther: 'Oscar Wilde ',
    },
    {
        content: '“I’m not sure I can do this.” “You’re already doing it.” ',
        auther: 'Karin Slaughter ',
    },
    {
        content: '“is the the sun dimm d that gnats do fly in it?” ',
        auther: 'William Shakespeare ',
    },
    {
        content: '“We accept the love we think we deserve.” ',
        auther: 'Stephen Chbosky ',
    },
    {
        content: '“and those strangely sharp teeth of his.” ',
        auther: 'Jennifer L. Armentrout ',
    },
    {
        content: '“Remember, when you change yourself, you change the world around you.” ',
        auther: 'Lucinda Berry ',
    },
    {
        content: '“Nothing works when you’re not at home.” ',
        auther: 'Fredrik Backman ',
    },
    {
        content: '“you recount your sorrows to a stone.” ',
        auther: 'William Shakespeare ',
    },
    {
        content: '“Without music, life would be a mistake.” ',
        auther: ' Friedrich Nietzsche ',
    },
]

var count=(quoteList.length+2);
function showQuote(){
    var num = Math.floor(Math.random() * (quoteList.length+1));
    console.log(num);
    if(num!==count){
        document.getElementById("demo1").innerHTML=quoteList[num].content;
        document.getElementById("demo2").innerHTML=quoteList[num].auther;
        count===num;
    }else{
        document.getElementById("demo1").innerHTML=quoteList[num+1].content;
        document.getElementById("demo2").innerHTML=quoteList[num+1].auther;
        count===num+1;
    }
};
console.log(count);

















