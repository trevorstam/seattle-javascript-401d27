# Lab 2: Tools and Context

### Student: Trevor Stam
### Course: Javascript 401
### 10-16-18

In this lab we:

- implement a List constructor using a constructor, factory, or class
- implement the length property
- implement the push() and pop(), slice() methods on the List prototype
- implement map(), filter(), and reduce() as pure methods on the List prototype
- Do not use any built-in array methods to do this

We will also test each of the List constructors with jestjs.

**Push**: takes in any datatype or value and appends it to the end of the list.
**Pop**: doesn't take in any parameters and removes the last element from the list.
**Slice**: takes in a start value and end value as params. When the startpoint is not defined it will automatically start at 0. 
Or when the endpoint is not defined it will take on the length of the array as an endpoint. It returns a new list.

**Map**: takes in a callback. It returns a list of the same length.
**Filter**: takes in a callback. It checks whether the callback meets a condition and returns a list with the values that meet requirements.
**Reduce**: takes in a callback and a value.

**Sources**: StackOverflow, MDN, Allie Grampa, JB Tellez, Timothy Li, Sara Bahrini.
