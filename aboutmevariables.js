var caps = prompt ( 'how many baseball caps do I have?');
console.log ('number of caps', caps);

var pucks = prompt ( 'how many hockey pucks do I have?');
console.log ('number of pucks:', pucks);

if ( caps  ==='20' || caps === '21') {
    alert ('you are correct, too many baseball caps');
}
if ( parseInt(caps) === 20 && parseInt(pucks)===3){
alert ( 'you are right, I am a sports fan'); }

else {
        alert (' Incorrect, try again!');
    }
