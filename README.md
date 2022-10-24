# fetch_API_explained
A simple easy to understand example fetch() request with .then() promises  with notes for dummies like me

I don't know about you, but I really struggled to understand how javascript fetch() API worked
and what .then() meant and sometimes curly braces were used and terms like "await" came into play.

What the hell did .then() mean and what was a promise?? 
Sending data was straitforward, but retreiving was frustrating. 
I could see other folks posting the same question and the answers didn't seem to work.
What was going on here?? This was all advertised as being easier to deal with than the xhr AJAX of
long ago, in the before time. I just wasn't able to "get it"

I Googled and read lots of tutorials and examples, but they were all 
written by people who were already so fluent that they forgot what salient parts of syntax and
convention need to be impressed upon the new user. Almost all the examples I found used object names
like "result" or "response" for object names, rather than real-world names, that I began to question
if those names were syntacticaly significant and that's why some of my code was failing.
Oddly enough, I learned more about fetch() by Googling "why is fetch() so stupid" than I did by
searching "how to return data from fetch()". 

Not to be disuaded, I found a simple working example and tore it apart syntactically one piece at 
a time while noting the javascript error codes in the browser's js console. 
I have put comments to point out the naming conventions vs the syntax requirements.

Part of the learning hurdle with fetch() is that there are several things going on in a fetch() request
beyond the simple fetch() command. One needs to learn what fetch() does (which is very straightforward).
But you also need to know about asyncronous information exchange and what a "promise" is in this context.
And you also need to know how to work with the data received from the fetch(), which is
another subject to be understood. So there are several components/concepts that need to be understood
beyond the fetch() itself.

Some of you with javascript experience might look at this and say "Duh, all this should be obvious."
(and it kind of is, like everything, once you have learned it.)
But it wasn't obvious to me. 

Some folks might also take issue with the way I explained how this works; my terminolgy my not be perfect. 
However, verbally accurate or not, the way I have conceptualized this process works for me and hopefully will help others. 

