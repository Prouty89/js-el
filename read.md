# JavaScript Essential Training

## JS loading (handling render blocking)

### Asynchronous
- HTML parsing in tandem with JS download, only stopping while JS executes

### Deferred
- HTML parsing in tandem with JS download, full HTML render THEN JS executes

## How to write

- Case sensitivity (creating variables)
- Constructors
- Agreed upon naming is camelCase (getElementByTagName)
- Start variables with lowercase (var greenDuck)
- Start objects and classes with an uppercase letter ( var Date = Date())
- Constants are typically all caps ( const = ALWAYSUPPERCASE;)
- Utilize white space to man it human readable. 
- Use comments liberally

### Data types (primitive)

- Numeric (numbers)
- String (words, sentences, symbols)
- Boolean (T/F)
- null
- undefined
- Symbol

### Logical Operators: AND/OR/XOR

- AND: both a AND b are true
- If a equals b AND c equals d:
- if ( a == b && c == d ) {}


- OR: Either a or b or both are true
- If a equals b OR c equals d (or both):
- if ( a == b || c == d ) {}

XOR: either a or b, but not both are true (NESTING LOGICAL OPERATORS)
- If a equals b XOR c equals d (not both):
- if ( ( a == b || c == d )  && ( ( aa ==b ) != ( c == d ) ) ) {}

### Ternary Operators (Shorthand Condition operations)
- condition true?           True                   False
- Ex: a == b ? console.log("Match") : console.log("No Match);

## Arrays
- different data types ALLOWED within an array
- Multidimensional or Array within an Array allowed
- Indexing
- Ex: var pens;
- pens = new Array("red", "blue", "green", "orange")
- OR
- pens = ["red", "blue", "green", "orange"];
- console.log(pens)

### Arrays: Properties and Methods

- Property: Meta information about the object, retrieved and used
- Method: Function that belongs to that object


## Functions and Objects

- SIDE NOTE: A script is a sequence of steps to be completed in a particular order. 
- Basic to Large applications. 

### Functions 

- Named functions: executed when called by name
- Anonymous functions: run once they are triggered (usually by an event)
- Immediately invoked function expressions: run the moment a browser encounters them


- Create a result immediately, or provide an answer or output (return) to be used by other pieces of our application.

## On OOP

- JS objects: Data models that allow us to combine methods and properties for a specific data set in a structured way.


## Dot Notation vs Bracket Notation

- course.title      course["title"]
- Bracket notation is good for when you have to access a property, converting it into a string. 

## Closures

- 


