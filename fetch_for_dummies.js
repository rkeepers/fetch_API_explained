/* 
I don't know about you, but I really struggled to understand how javascript fetch() API worked
and what .then() meant and sometimes curly braces were used and terms like "await" came into play.
What the hell did .then mean and what was a promise?? Sending data was straitforward, but retreiving 
was frustrating. I could see other folks posting the same question and the answers didn't seem to work.
What was going on here?? This was all advertised as being easier to deal with than the xhr AJAX of
long ago, in the before time. I just wasn't able to "get it"
I Googled and read lots of tutorials and examples, but they were all 
written by people who were already so fluent that they forgot what salient parts of syntax and
convention need to be impressed upon the new user. Almost all the examples I found used object names
like "result" or "response" for object names, rather than real-world names, that I began to question
if those names were syntacticaly significant and that's why some of my code was failing.  
Not to be disuaded, I found a simple working example and tore it apart syntactically one piece at 
a time while noting the javascript error codes in the browser's js console. 
I have put comments to point out the naming conventions vs the syntax requirements

Using .then() takes care of the wait and await async BS that the fetch API can use.
It may have some specific use cases I'm not aware of, but I can now conceptualize 
what then() does and it seems syntactically more memorable and clean.
*/

let url = 'dumb.php'; // dumb.php just echos out a json object {"firstName":"Adam"}
fetch(url)
.then(foo => foo.json()) // two names have to be the same because they are referring to the same object
.then(bar => alert(bar.firstName));  // these two also must match but could be the same as the prev line
// all four object names above COULD be "foo", "bar" or "myCat" and it would still work fine. 


 /* 
 what we are essentially saying is "after the previous item completes, then x,y,z"
 We will start with the fetch command "fetching the data" and "then" 
 taking that data ( which seems to be referred to as the "promise" object) and giving it a handle (foo)
 so we can pass it => to the method we want ("json()"). To do that, we say the name we called it (foo)
 followed by the method we are choosing (the json() method) and the object is now jason data.

 So, the json data is still floating there... a "promise" out in the ether and we want to do something 
 to it. we need to call a function to do to the data what we want. and we need to tag the data
 again with a handle. The handle name can be anything ("bar"), but it may be helpful to make it relevant
 to the data like "customerInfo" we can then reference the json data using its keys like so:
 customerInfo.firstName. (firstName being one of the keys in this json object objectHandle.keyName)

 We are now ready to append our second then() and perform that task so we say :
 then(customerInfo => alert(customerInfo.firstName))
 We used the alert function because it's easy and built in. Chances are you will need to 
 build your own function to do specifically what you want to do.
 The above statement roughly translated into human:
 "Take the data I was promised and calling customerInfo and pass one of its json values
  to the alert function"

  The object "customerInfo" can now be accessed using std json notation and easily 
  available in template literals 
  `A customer named ${customerInfo.firstName} spent $${customerInfo.dailyTotal}  in the store`

 */ 
