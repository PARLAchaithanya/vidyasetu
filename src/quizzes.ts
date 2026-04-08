import { Quiz } from "./types";

export const QUIZZES: Quiz[] = [
  // DATA STRUCTURE QUIZZES
  {
    courseTitle: "Data Structure",
    lessonId: 1,
    topic: "Introduction",
    questions: [
      { id: 1, question: "What are data structures used for in computer science?", options: ["To store and organize information in a way that makes it easy to access and use.", "To create complex algorithms for solving problems.", "To design user interfaces for websites and applications.", "To manage network traffic between devices."], answer: "To store and organize information in a way that makes it easy to access and use." },
      { id: 2, question: "What is the purpose of Big O notation?", options: ["To measure the size of data structures.", "To determine the speed and efficiency of algorithms.", "To calculate the cost of running a program.", "To analyze the stability of a system."], answer: "To determine the speed and efficiency of algorithms." },
      { id: 3, question: "What does time complexity refer to in the context of algorithms?", options: ["The amount of memory required by an algorithm.", "How quickly an algorithm can solve a problem based on input size.", "The number of instructions executed by an algorithm.", "The level of security provided by an algorithm."], answer: "How quickly an algorithm can solve a problem based on input size." },
      { id: 4, question: "Why is efficiency important in computer science?", options: ["To save time and resources.", "To improve user experience.", "To reduce the amount of data required to process.", "All of the above."], answer: "All of the above." },
      { id: 5, question: "What is a benefit of understanding real-world examples of data structures?", options: ["To better understand how data structures are used in different applications.", "To learn about the theoretical foundations of computer science.", "To develop advanced programming skills.", "To write more efficient algorithms."], answer: "To better understand how data structures are used in different applications." }
    ]
  },
  {
    courseTitle: "Data Structure",
    lessonId: 2,
    topic: "Arrays Basics",
    questions: [
      { id: 1, question: "What is an array?", options: ["A collection of elements stored in random locations", "A collection of elements stored in contiguous memory locations", "A type of loop", "A function in programming"], answer: "A collection of elements stored in contiguous memory locations" },
      { id: 2, question: "How are elements accessed in an array?", options: ["Using keys", "Using indexes", "Using pointers only", "Using functions"], answer: "Using indexes" },
      { id: 3, question: "What is the index of the first element in most programming languages?", options: ["1", "-1", "0", "2"], answer: "0" },
      { id: 4, question: "What is the size of an array?", options: ["The number of variables declared", "The number of elements it can hold", "The memory address of the first element", "The number of functions used"], answer: "The number of elements it can hold" },
      { id: 5, question: "Which of the following is a limitation of arrays?", options: ["They are dynamic in size", "They allow fast access", "Fixed size once declared", "Easy to traverse"], answer: "Fixed size once declared" }
    ]
  },
  {
    courseTitle: "Data Structure",
    lessonId: 3,
    topic: "Linked List",
    questions: [
      { id: 1, question: "Which of the following best describes a data structure?", options: ["A set of instructions that tell a computer how to solve a problem.", "A way of organizing and storing data in a computer so it can be accessed efficiently.", "A specific type of algorithm used for sorting data.", "A mathematical equation used to calculate the time complexity of an algorithm."], answer: "A way of organizing and storing data in a computer so it can be accessed efficiently." },
      { id: 2, question: "What is a key characteristic that distinguishes a linked list from an array?", options: ["An array stores elements in contiguous memory locations, while a linked list uses pointers to connect nodes.", "Linked lists are more efficient for storing large datasets than arrays.", "Arrays can be easily modified, while linked lists require complex operations to insert or remove items.", "Linked lists use binary search algorithms for searching data."], answer: "An array stores elements in contiguous memory locations, while a linked list uses pointers to connect nodes." },
      { id: 3, question: "What is the primary function of an algorithm in computer science?", options: ["To define the structure of a data structure.", "To provide instructions to solve a specific problem using available resources.", "To analyze and optimize the efficiency of a program.", "To manage memory allocation for a program."], answer: "To provide instructions to solve a specific problem using available resources." },
      { id: 4, question: "What does the term \"Big O\" represent in the context of algorithms?", options: ["A specific type of data structure used to store data efficiently.", "The time complexity of an algorithm, which describes its efficiency based on input size.", "The number of operations required for a particular task.", "The memory footprint of an algorithm, indicating how much memory it uses."], answer: "The time complexity of an algorithm, which describes its efficiency based on input size." },
      { id: 5, question: "What is the primary purpose of using objects in object-oriented programming?", options: ["To store and manage data efficiently.", "To create complex algorithms for solving problems.", "To implement specific functions and operations within a program.", "To define the overall structure and logic of a software system."], answer: "To store and manage data efficiently." }
    ]
  },
  {
    courseTitle: "Data Structure",
    lessonId: 4,
    topic: "Stack And Queue",
    questions: [
      { id: 1, question: "Which of these is NOT a common data structure?", options: ["Stack", "Queue", "List", "Tree"], answer: "List" },
      { id: 2, question: "What is a key characteristic of a stack?", options: ["Elements are added and removed from both ends.", "Elements are added to the beginning and removed from the end.", "The order of elements is preserved as they are added.", "Elements are processed in reverse chronological order."], answer: "Elements are added to the beginning and removed from the end." },
      { id: 3, question: "What is an algorithm?", options: ["A set of instructions for solving a problem or completing a task.", "A specific data structure used in programming.", "A type of computer hardware component.", "A method of storing and retrieving data."], answer: "A set of instructions for solving a problem or completing a task." },
      { id: 4, question: "What does the notation \"O(n)\" in an algorithm's description signify?", options: ["The time it takes to execute the algorithm.", "The amount of memory used by the algorithm.", "The number of operations performed by the algorithm.", "The complexity of the data structure being used."], answer: "The number of operations performed by the algorithm." },
      { id: 5, question: "Which of these is NOT a characteristic of a priority queue?", options: ["Elements are prioritized based on their value.", "Elements can be added and removed in any order.", "The highest priority elements are always retrieved first.", "Used for tasks like scheduling or resource allocation."], answer: "Elements can be added and removed in any order." }
    ]
  },
  {
    courseTitle: "Data Structure",
    lessonId: 5,
    topic: "Binary Tree",
    questions: [
      { id: 1, question: "What is the primary focus of this lesson?", options: ["The history of computers", "Different types of linear data structures", "Exploring tree-based data structures", "Understanding algorithms and their applications"], answer: "Exploring tree-based data structures" },
      { id: 2, question: "Which of the following is NOT a characteristic of linear data structures?", options: ["Elements have a defined start and end.", "Each element can be directly accessed using its index.", "They allow for efficient insertion and deletion at specific positions.", "They are not suitable for storing hierarchical information."], answer: "They are not suitable for storing hierarchical information." },
      { id: 3, question: "What does Big O notation primarily measure?", options: ["The number of operations required for an algorithm.", "The amount of memory used by an algorithm.", "The speed at which an algorithm executes.", "All of the above."], answer: "The number of operations required for an algorithm." },
      { id: 4, question: "What is a key factor in choosing the most efficient algorithm?", options: ["The type of data being processed.", "The size of the dataset.", "The desired level of accuracy.", "All of the above."], answer: "The type of data being processed." },
      { id: 5, question: "What is a key characteristic of a tree-based data structure?", options: ["Elements are stored sequentially.", "Data is stored in a linear fashion.", "Elements can be organized hierarchically.", "Data is accessed based on random locations."], answer: "Elements can be organized hierarchically." }
    ]
  },
  {
    courseTitle: "Data Structure",
    lessonId: 6,
    topic: "Binary Search Tree",
    questions: [
      { id: 1, question: "What is the main purpose of using a Binary Search Tree (BST)?", options: ["To store data sequentially", "To organize data for quick search and updates", "To reduce memory usage", "To simplify programming syntax"], answer: "To organize data for quick search and updates" },
      { id: 2, question: "What is the time complexity of searching in an unsorted array?", options: ["O(1)", "O(log n)", "O(n)", "O(n\u00B2)"], answer: "O(n)" },
      { id: 3, question: "What condition must be satisfied for a binary tree to be a Binary Search Tree?", options: ["All nodes must have two children", "Left subtree values are smaller and right subtree values are greater", "All values must be unique", "Tree must be complete"], answer: "Left subtree values are smaller and right subtree values are greater" },
      { id: 4, question: "What is the average time complexity of search, insertion, and deletion in a balanced BST?", options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"], answer: "O(log n)" },
      { id: 5, question: "What happens to the performance of a Binary Search Tree if it becomes unbalanced?", options: ["It becomes faster than arrays", "It behaves like a linked list with O(n) operations", "It always maintains O(log n) time", "It stops working correctly"], answer: "It behaves like a linked list with O(n) operations" }
    ]
  },
  {
    courseTitle: "Data Structure",
    lessonId: 7,
    topic: "Heap Data Structure",
    questions: [
      { id: 1, question: "What is a heap data structure?", options: ["A linear data structure", "A complete binary tree that follows heap property", "A graph-based structure", "A sorted array"], answer: "A complete binary tree that follows heap property" },
      { id: 2, question: "What is the defining property of a max heap?", options: ["Parent node is smaller than children", "All nodes are sorted", "Parent node is greater than or equal to its children", "Root node is always smallest"], answer: "Parent node is greater than or equal to its children" },
      { id: 3, question: "Which of the following is true about a min heap?", options: ["Root contains the largest element", "Parent is always greater than children", "Root contains the smallest element", "Elements are stored randomly"], answer: "Root contains the smallest element" },
      { id: 4, question: "Which operation is commonly used to maintain heap property after insertion or deletion?", options: ["Binary Search", "Heapify", "Traversal", "Sorting"], answer: "Heapify" },
      { id: 5, question: "What is a major application of heap data structure?", options: ["Implementing stacks", "Implementing queues", "Implementing priority queues", "Storing strings"], answer: "Implementing priority queues" }
    ]
  },
  {
    courseTitle: "Data Structure",
    lessonId: 8,
    topic: "Graph",
    questions: [
      { id: 1, question: "What is a graph defined as in the context of graph data structure?", options: ["A group of vertices and edges with a parent-child relationship", "A group of vertices and edges used to connect them without a parent-child relationship", "A tree with a cyclic relationship", "A set of vertices without edges"], answer: "A group of vertices and edges used to connect them without a parent-child relationship" },
      { id: 2, question: "What is the main difference between a tree and a graph?", options: ["A tree has a cyclic relationship, while a graph does not", "A tree has a parent-child relationship, while a graph has a complex relationship", "A tree is a type of graph", "A graph is a type of tree"], answer: "A tree has a parent-child relationship, while a graph has a complex relationship" },
      { id: 3, question: "What are the two main types of graphs?", options: ["Directed and weighted graphs", "Undirected and unweighted graphs", "Directed and undirected graphs", "Cyclic and acyclic graphs"], answer: "Directed and undirected graphs" },
      { id: 4, question: "In an undirected graph, what is the characteristic of the edges?", options: ["Edges are associated with directions", "Edges are not associated with directions", "Edges are only associated with vertices", "Edges are only associated with cycles"], answer: "Edges are not associated with directions" },
      { id: 5, question: "In the given graph example, what is the set of vertices (V) represented as?", options: ["V = {1, 2, 3, 4}", "V = {0, 1, 2, 3, 4}", "V = {0, 1, 2, 3}", "V = {1, 2, 3, 4, 5}"], answer: "V = {0, 1, 2, 3, 4}" }
    ]
  },

  // DBMS QUIZZES
  {
    courseTitle: "DBMS",
    lessonId: 1,
    topic: "Introduction to DBMS",
    questions: [
      { id: 1, question: "What is a DBMS?", options: ["A programming language", "A software to manage databases", "A hardware device", "A network protocol"], answer: "A software to manage databases" },
      { id: 2, question: "Which of the following is an example of a DBMS?", options: ["Windows", "MySQL", "Python", "HTML"], answer: "MySQL" },
      { id: 3, question: "What is the primary purpose of a DBMS?", options: ["To write programs", "To store and manage data efficiently", "To design websites", "To run operating systems"], answer: "To store and manage data efficiently" },
      { id: 4, question: "Which of the following is an advantage of DBMS?", options: ["Data redundancy increases", "Data inconsistency increases", "Improved data security", "No data sharing"], answer: "Improved data security" },
      { id: 5, question: "What does data redundancy mean?", options: ["Data is stored only once", "Data is duplicated unnecessarily", "Data is encrypted", "Data is deleted automatically"], answer: "Data is duplicated unnecessarily" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 2,
    topic: "Three Level Architecture",
    questions: [
      { id: 1, question: "How many levels are there in the three-schema architecture?", options: ["2", "3", "4", "5"], answer: "3" },
      { id: 2, question: "Which level describes how data is physically stored in the database?", options: ["External level", "Conceptual level", "Internal level", "Logical level"], answer: "Internal level" },
      { id: 3, question: "What is the role of the conceptual level?", options: ["Stores physical data", "Describes database structure like entities and relationships", "Provides user interface", "Manages network connections"], answer: "Describes database structure like entities and relationships" },
      { id: 4, question: "What does the external level represent?", options: ["Full database structure", "Physical storage", "User-specific views of data", "Backup system"], answer: "User-specific views of data" },
      { id: 5, question: "What is mapping in three-schema architecture?", options: ["Storing data in memory", "Converting data types", "Transforming requests between different schema levels", "Deleting unnecessary data"], answer: "Transforming requests between different schema levels" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 4,
    topic: "Entity Relationship Model",
    questions: [
      { id: 1, question: "What is an entity in DBMS?", options: ["A relationship between tables", "A real-world object with attributes", "A database query", "A programming function"], answer: "A real-world object with attributes" },
      { id: 2, question: "What is an attribute in an ER model?", options: ["A relationship between entities", "A property of an entity", "A database table", "A key constraint"], answer: "A property of an entity" },
      { id: 3, question: "Which symbol represents an entity in an ER diagram?", options: ["Circle", "Rectangle", "Diamond", "Triangle"], answer: "Rectangle" },
      { id: 4, question: "What does a diamond shape represent in an ER diagram?", options: ["Entity", "Attribute", "Relationship", "Key"], answer: "Relationship" },
      { id: 5, question: "What is a primary key?", options: ["A duplicated value", "A value that uniquely identifies an entity", "A relationship type", "A foreign key"], answer: "A value that uniquely identifies an entity" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 5,
    topic: "Relational Model & Keys",
    questions: [
      { id: 1, question: "What is a DBMS key?", options: ["A programming function", "An attribute or set of attributes used to uniquely identify a record", "A type of database", "A query language"], answer: "An attribute or set of attributes used to uniquely identify a record" },
      { id: 2, question: "Which key uniquely identifies each record in a table?", options: ["Foreign key", "Candidate key", "Primary key", "Composite key"], answer: "Primary key" },
      { id: 3, question: "What is a candidate key?", options: ["A key that cannot identify records", "A minimal set of attributes that can uniquely identify a record", "A duplicate key", "A key used only for sorting"], answer: "A minimal set of attributes that can uniquely identify a record" },
      { id: 4, question: "What is a foreign key used for?", options: ["To delete records", "To create relationships between tables", "To sort data", "To store duplicate values"], answer: "To create relationships between tables" },
      { id: 5, question: "What is a composite key?", options: ["A single attribute key", "A key with multiple attributes", "A duplicate key", "A temporary key"], answer: "A key with multiple attributes" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 6,
    topic: "SQL Commands",
    questions: [
      { id: 1, question: "What does SQL stand for?", options: ["Simple Query Language", "Structured Query Language", "Sequential Query Language", "Standard Question Language"], answer: "Structured Query Language" },
      { id: 2, question: "What is the purpose of the SELECT statement?", options: ["To delete data", "To insert data", "To retrieve data from a database", "To update data"], answer: "To retrieve data from a database" },
      { id: 3, question: "Which clause is used to filter rows in SQL?", options: ["GROUP BY", "ORDER BY", "WHERE", "SELECT"], answer: "WHERE" },
      { id: 4, question: "What is the function of the GROUP BY clause?", options: ["To delete duplicate rows", "To group rows and perform aggregation", "To sort data", "To filter columns"], answer: "To group rows and perform aggregation" },
      { id: 5, question: "Which clause is used to sort query results?", options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"], answer: "ORDER BY" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 7,
    topic: "Database Constraints",
    questions: [
      { id: 1, question: "What is the main purpose of constraints in SQL?", options: ["To increase data redundancy", "To enforce rules on data for accuracy and integrity", "To delete data automatically", "To speed up queries"], answer: "To enforce rules on data for accuracy and integrity" },
      { id: 2, question: "Which constraint ensures that a column cannot have NULL values?", options: ["UNIQUE", "PRIMARY KEY", "NOT NULL", "DEFAULT"], answer: "NOT NULL" },
      { id: 3, question: "Which constraint ensures all values in a column are different?", options: ["CHECK", "UNIQUE", "DEFAULT", "FOREIGN KEY"], answer: "UNIQUE" },
      { id: 4, question: "Which constraint is used to uniquely identify each record and cannot be NULL?", options: ["UNIQUE", "PRIMARY KEY", "FOREIGN KEY", "CHECK"], answer: "PRIMARY KEY" },
      { id: 5, question: "What is the role of a FOREIGN KEY constraint?", options: ["To store default values", "To enforce relationships between tables", "To sort data", "To remove duplicates"], answer: "To enforce relationships between tables" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 8,
    topic: "Normalization",
    questions: [
      { id: 1, question: "What is the main goal of normalization in DBMS?", options: ["Increase redundancy", "Reduce data redundancy and improve data integrity", "Increase storage", "Delete data"], answer: "Reduce data redundancy and improve data integrity" },
      { id: 2, question: "What is a key rule of First Normal Form (1NF)?", options: ["Data must be sorted", "Each cell must contain atomic (single) values", "No foreign keys allowed", "Tables must be merged"], answer: "Each cell must contain atomic (single) values" },
      { id: 3, question: "What does Second Normal Form (2NF) eliminate?", options: ["Duplicate rows", "Transitive dependency", "Partial dependency", "NULL values"], answer: "Partial dependency" },
      { id: 4, question: "What is the main requirement of Third Normal Form (3NF)?", options: ["Remove partial dependency", "Remove transitive dependency", "Remove duplicate keys", "Remove foreign keys"], answer: "Remove transitive dependency" },
      { id: 5, question: "What is BCNF (Boyce-Codd Normal Form)?", options: ["A weaker form of 3NF", "A stricter version of 3NF ensuring every determinant is a candidate key", "Same as 1NF", "Only removes duplicates"], answer: "A stricter version of 3NF ensuring every determinant is a candidate key" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 9,
    topic: "ACID Properties",
    questions: [
      { id: 1, question: "What does ACID stand for in DBMS?", options: ["Accuracy, Consistency, Isolation, Durability", "Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Atomicity, Control, Integration, Durability"], answer: "Atomicity, Consistency, Isolation, Durability" },
      { id: 2, question: "What does Atomicity mean in a transaction?", options: ["Transactions run faster", "All operations are executed completely or not at all", "Data is stored permanently", "Data is shared among users"], answer: "All operations are executed completely or not at all" },
      { id: 3, question: "What is the meaning of Consistency in DBMS?", options: ["Data can be duplicated", "Database remains in a valid state before and after transaction", "Transactions run simultaneously", "Data is deleted automatically"], answer: "Database remains in a valid state before and after transaction" },
      { id: 4, question: "What does Isolation ensure?", options: ["Transactions are executed one after another only", "Transactions do not interfere with each other", "Data is permanently stored", "Data is always visible"], answer: "Transactions do not interfere with each other" },
      { id: 5, question: "What is Durability in ACID properties?", options: ["Temporary storage of data", "Data is deleted after execution", "Committed data is permanently stored even after system failure", "Data is hidden from users"], answer: "Committed data is permanently stored even after system failure" }
    ]
  },
  {
    courseTitle: "DBMS",
    lessonId: 10,
    topic: "Indexing & Query Optimization",
    questions: [
      { id: 1, question: "What is the main purpose of indexing in DBMS?", options: ["To store data", "To delete data", "To improve the speed of data retrieval", "To encrypt data"], answer: "To improve the speed of data retrieval" },
      { id: 2, question: "When should indexes be used?", options: ["On all columns", "On rarely used columns", "On frequently queried columns", "Only on small tables"], answer: "On frequently queried columns" },
      { id: 3, question: "What is a sargable query?", options: ["A query that uses functions on columns", "A query that can effectively use indexes", "A query that deletes data", "A query with multiple joins"], answer: "A query that can effectively use indexes" },
      { id: 4, question: "Which of the following is a non-sargable query?", options: ["WHERE age = 25", "WHERE salary > 5000", "WHERE YEAR(date) = 2024", "WHERE id = 10"], answer: "WHERE YEAR(date) = 2024" },
      { id: 5, question: "What is a good query optimization practice?", options: ["Always use SELECT *", "Avoid indexes", "Break complex queries into simpler ones", "Use cross joins frequently"], answer: "Break complex queries into simpler ones" }
    ]
  },

  // PYTHON QUIZZES
  {
    courseTitle: "Python",
    lessonId: 1,
    topic: "Python Fundamentals",
    questions: [
      { id: 1, question: "What is the first step recommended before starting coding in Python?", options: ["Install multiple IDEs", "Start writing code immediately", "Learn Python fundamentals and mindset", "Practice advanced projects"], answer: "Learn Python fundamentals and mindset" },
      { id: 2, question: "In Python, indexing of elements starts from:", options: ["1", "-1", "0", "2"], answer: "0" },
      { id: 3, question: "What does a while loop in Python represent?", options: ["Executes code once", "Runs code until a condition becomes true", "Runs code only for numbers", "Stops execution immediately"], answer: "Runs code until a condition becomes true" },
      { id: 4, question: "According to the lesson, what should be your mindset while learning Python?", options: ["Focus only on syntax", "Think like a problem solver", "Memorize all functions", "Avoid mistakes"], answer: "Think like a problem solver" },
      { id: 5, question: "Why is Google Colab recommended for beginners?", options: ["It requires complex installation", "It only works offline", "It avoids setup issues and provides ready environment", "It is only for experts"], answer: "It avoids setup issues and provides ready environment" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 2,
    topic: "Basics of Python",
    questions: [
      { id: 1, question: "What is the correct way to create a Python file?", options: ["Using .txt extension", "Using .java extension", "Using .py extension", "Using .html extension"], answer: "Using .py extension" },
      { id: 2, question: "How do you assign a value to a variable in Python?", options: ["variable := value", "variable = value", "variable == value", "value = variable"], answer: "variable = value" },
      { id: 3, question: "Which of the following is NOT a basic data type in Python?", options: ["Integer", "Float", "Character", "Boolean"], answer: "Character" },
      { id: 4, question: "What is the key difference between a list and a tuple?", options: ["Lists are faster than tuples", "Tuples are mutable", "Lists are immutable", "Tuples are immutable"], answer: "Tuples are immutable" },
      { id: 5, question: "What is the purpose of functions in Python?", options: ["To store data", "To create variables", "To reuse code", "To delete data"], answer: "To reuse code" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 3,
    topic: "Type Casting",
    questions: [
      { id: 1, question: "What is Python\u2019s typing nature?", options: ["Statically typed", "Dynamically typed", "Strongly fixed typed", "Compile-time typed"], answer: "Dynamically typed" },
      { id: 2, question: "What is the purpose of type hinting in Python?", options: ["To enforce type at runtime", "To improve readability and documentation", "To stop execution on error", "To convert data types"], answer: "To improve readability and documentation" },
      { id: 3, question: "What does type checking do?", options: ["Converts data types automatically", "Checks types during runtime", "Analyzes code before execution to find type errors", "Deletes incorrect variables"], answer: "Analyzes code before execution to find type errors" },
      { id: 4, question: "What is data validation in Python?", options: ["Checking syntax errors", "Verifying data at runtime", "Compiling code faster", "Declaring variables"], answer: "Verifying data at runtime" },
      { id: 5, question: "Which tool is commonly used for static type checking in Python?", options: ["NumPy", "MyPy", "Pandas", "Flask"], answer: "MyPy" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 4,
    topic: "Control Flow",
    questions: [
      { id: 1, question: "What is the purpose of an if statement in Python?", options: ["To define variables", "To execute code based on a condition", "To create loops", "To store data"], answer: "To execute code based on a condition" },
      { id: 2, question: "Which operator is used to check equality in Python?", options: ["=", "==", "!=", ">="], answer: "==" },
      { id: 3, question: "What is the role of the else statement?", options: ["It always runs first", "It checks another condition", "It runs when the if condition is false", "It stops the program"], answer: "It runs when the if condition is false" },
      { id: 4, question: "Which keyword is used to check multiple conditions after if?", options: ["else if", "elif", "elseif", "ifelse"], answer: "elif" },
      { id: 5, question: "Which of the following evaluates to False in Python?", options: ["10", "\"Hello\"", "[]", "[1,2,3]"], answer: "[]" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 5,
    topic: "Python Loops",
    questions: [
      { id: 1, question: "What is the purpose of a for loop in Python?", options: ["To store values", "To repeat a block of code for each item in a sequence", "To define functions", "To compare values"], answer: "To repeat a block of code for each item in a sequence" },
      { id: 2, question: "What does the break statement do in a loop?", options: ["Skips the current iteration", "Restarts the loop", "Exits the loop completely", "Pauses execution"], answer: "Exits the loop completely" },
      { id: 3, question: "What does the continue statement do?", options: ["Stops the loop", "Skips to the next iteration", "Ends the program", "Repeats the same iteration"], answer: "Skips to the next iteration" },
      { id: 4, question: "What is the output range of range(5)?", options: ["1 to 5", "0 to 5", "0 to 4", "1 to 4"], answer: "0 to 4" },
      { id: 5, question: "What is a key characteristic of a while loop?", options: ["It runs only once", "It runs for a fixed number of times", "It runs until a condition becomes false", "It cannot be stopped"], answer: "It runs until a condition becomes false" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 6,
    topic: "Python Functions",
    questions: [
      { id: 1, question: "Which keyword is used to define a function in Python?", options: ["function", "define", "def", "func"], answer: "def" },
      { id: 2, question: "What are the inputs of a function called?", options: ["Arguments", "Parameters", "Variables", "Constants"], answer: "Parameters" },
      { id: 3, question: "When is a function\u2019s code actually executed?", options: ["When it is defined", "When it is imported", "When it is called", "When Python starts"], answer: "When it is called" },
      { id: 4, question: "What is the purpose of the return statement in a function?", options: ["To print output", "To stop the program", "To send a value back to the caller", "To define variables"], answer: "To send a value back to the caller" },
      { id: 5, question: "Why are local namespaces used in Python functions?", options: ["To slow down execution", "To avoid naming conflicts and protect variables", "To store only global variables", "To delete variables permanently"], answer: "To avoid naming conflicts and protect variables" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 7,
    topic: "Python List Methods",
    questions: [
      { id: 1, question: "What does the append() method do in Python lists?", options: ["Removes an element", "Adds an element at the beginning", "Adds an element at the end", "Sorts the list"], answer: "Adds an element at the end" },
      { id: 2, question: "What is the purpose of the insert() method?", options: ["Deletes an element", "Adds an element at a specific position", "Replaces all elements", "Sorts elements"], answer: "Adds an element at a specific position" },
      { id: 3, question: "What does the remove() method do?", options: ["Removes element by index", "Removes the first occurrence of a value", "Removes all elements", "Clears the list"], answer: "Removes the first occurrence of a value" },
      { id: 4, question: "What happens when pop() is used without arguments?", options: ["Removes first element", "Removes last element", "Removes random element", "Clears list"], answer: "Removes last element" },
      { id: 5, question: "What does the sort() method do by default?", options: ["Sorts in descending order", "Sorts randomly", "Sorts in ascending order", "Reverses the list"], answer: "Sorts in ascending order" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 8,
    topic: "Python Lists vs Tuples vs Sets",
    questions: [
      { id: 1, question: "Which data structure automatically removes duplicate values?", options: ["List", "Tuple", "Set", "Dictionary"], answer: "Set" },
      { id: 2, question: "Which of the following collections is unordered?", options: ["List", "Tuple", "Set", "String"], answer: "Set" },
      { id: 3, question: "What is the main difference between lists and tuples?", options: ["Lists are unordered", "Tuples are mutable", "Lists are mutable and tuples are immutable", "Tuples allow duplicates, lists do not"], answer: "Lists are mutable and tuples are immutable" },
      { id: 4, question: "Why are tuples useful in Python?", options: ["They allow faster sorting", "They prevent accidental modification of data", "They remove duplicates", "They are unordered"], answer: "They prevent accidental modification of data" },
      { id: 5, question: "How can you modify an element in a set?", options: ["By index assignment", "Using append()", "Direct reassignment", "By removing and adding a new value"], answer: "By removing and adding a new value" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 9,
    topic: "Python Dictionary Basics",
    questions: [
      { id: 1, question: "What is a Python dictionary?", options: ["A list of values", "A collection of key-value pairs", "A set of unique elements", "A tuple of elements"], answer: "A collection of key-value pairs" },
      { id: 2, question: "Which method is used to safely get a value from a dictionary?", options: ["fetch()", "get()", "value()", "find()"], answer: "get()" },
      { id: 3, question: "What will get() return if the key does not exist?", options: ["Error", "0", "None", "False"], answer: "None" },
      { id: 4, question: "Which method is used to remove a specific key-value pair?", options: ["delete()", "remove()", "pop()", "clear()"], answer: "pop()" },
      { id: 5, question: "Which method returns all key-value pairs in a dictionary?", options: ["keys()", "values()", "items()", "pairs()"], answer: "items()" }
    ]
  },
  {
    courseTitle: "Python",
    lessonId: 10,
    topic: "Python Lambda Functions",
    questions: [
      { id: 1, question: "What is a lambda function in Python?", options: ["A multi-line named function", "A one-line anonymous function", "A loop structure", "A data type"], answer: "A one-line anonymous function" },
      { id: 2, question: "What does \"anonymous\" mean in lambda functions?", options: ["It has no parameters", "It has no return value", "It does not require a name", "It cannot be used again"], answer: "It does not require a name" },
      { id: 3, question: "Where are lambda functions most commonly used?", options: ["Inside loops", "As arguments to functions like map and filter", "For file handling", "For class definitions"], answer: "As arguments to functions like map and filter" },
      { id: 4, question: "What does the map() function do with a lambda function?", options: ["Filters elements", "Applies a function to each element", "Sorts elements", "Deletes elements"], answer: "Applies a function to each element" },
      { id: 5, question: "What is the purpose of the filter() function?", options: ["Sort elements", "Apply function to all elements", "Keep elements that satisfy a condition", "Combine elements"], answer: "Keep elements that satisfy a condition" }
    ]
  }
];
