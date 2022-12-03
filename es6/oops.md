class is blue print or property of object..

The constructor is a special function for initializing objects created with class. They work similar to function constructors.

They also support simple instance methods/functions with short declaration syntax.


Inheritance
Classes also support inheritance which means they can take properties and functions from other classes.



super
Now what if we need to access the parent class's properties or functions in the child class?

Also what if we want to declare a constructor for our child class?

The super keyword is used to access and call functions on an object's parent.

Lets update our above example with the super keyword.




It is important to note that when used in a constructor, the super keyword appears alone and must be used before the this keyword is used.