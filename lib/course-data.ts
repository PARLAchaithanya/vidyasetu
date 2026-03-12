export interface Lesson {
  id: string;
  number: number;
  title: string;
  description?: string;
  videoUrl?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  pdfUrl?: string;
  lessons: Lesson[];
}

export const courses: Record<string, Course> = {
  'data-structure': {
    id: 'data-structure',
    title: 'Data Structure',
    description: 'Master Data Structures & Algorithms',
    lessons: [
      {
        id: 'ds-1',
        number: 1,
        title: 'Introduction',
        description: 'Introduction to Data Structures and Algorithms',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Introduction.mp4',
      },
      {
        id: 'ds-2',
        number: 2,
        title: 'Array',
        description: 'Arrays - The Fundamental Data Structure',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Array.mp4',
      },
      {
        id: 'ds-3',
        number: 3,
        title: 'Linked List',
        description: 'Understanding Linked Lists',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Linked+List.mp4',
      },
      {
        id: 'ds-4',
        number: 4,
        title: 'Stack and Queue',
        description: 'Stack and Queue Data Structures',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/stack+and+queue.mp4',
      },
      {
        id: 'ds-5',
        number: 5,
        title: 'Binary Tree',
        description: 'Binary Trees Explained',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Binary+Tree.mp4',
      },
      {
        id: 'ds-6',
        number: 6,
        title: 'Binary Search Tree',
        description: 'Binary Search Trees and Operations',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Binary+search+Tree.mp4',
      },
      {
        id: 'ds-7',
        number: 7,
        title: 'Heap',
        description: 'Heap Data Structure',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Heap.mp4',
      },
      {
        id: 'ds-8',
        number: 8,
        title: 'Graph',
        description: 'Graphs and Graph Algorithms',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Graph.mp4',
      },
    ],
  },
  'python': {
    id: 'python',
    title: 'Python',
    description: '10 Python video lessons with the attached lesson PDF',
    pdfUrl: '/python.pdf',
    lessons: [
      {
        id: 'py-1',
        number: 1,
        title: 'How I Would Learn Python FAST (If I Could Start Over)',
        description: 'A fast-start roadmap for learning Python efficiently.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/How+I+Would+Learn+Python+FAST+%28if+I+could+start+over%29.mp4',
      },
      {
        id: 'py-2',
        number: 2,
        title: '10 Important Python Concepts In 20 Minutes',
        description: 'A compact overview of core Python concepts.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/10+Important+Python+Concepts+In+20+Minutes.mp4',
      },
      {
        id: 'py-3',
        number: 3,
        title: 'Type Hinting vs Type Checking vs Data Validation',
        description: 'Understand the difference between type hints, checking, and validation in Python.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Tutorial_+Type+Hinting+vs+Type+Checking+vs+Data+Validation+-+What%E2%80%99s+the+Difference_.mp4',
      },
      {
        id: 'py-4',
        number: 4,
        title: 'Conditionals and Booleans',
        description: 'Learn how if, else, and elif statements work in Python.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Tutorial+for+Beginners+6_+Conditionals+and+Booleans+-+If%2C+Else%2C+and+Elif+Statements.mp4',
      },
      {
        id: 'py-5',
        number: 5,
        title: 'While Loops',
        description: 'Control repeated execution with while loops in Python.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/While+Loops.mp4',
      },
      {
        id: 'py-6',
        number: 6,
        title: 'Python Functions - Visually Explained',
        description: 'A visual walkthrough of defining and calling functions.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Functions+-+Visually+Explained.mp4',
      },
      {
        id: 'py-7',
        number: 7,
        title: 'All Python List Methods in 12 Minutes',
        description: 'Work through the most useful list methods in Python.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/All+Python+List+Methods+in+12+Minutes.mp4',
      },
      {
        id: 'py-8',
        number: 8,
        title: 'Python Lists vs Tuples vs Sets',
        description: 'Compare the behavior and use cases of lists, tuples, and sets.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Lists+vs+Tuples+vs+Sets+-+Visually+Explained.mp4',
      },
      {
        id: 'py-9',
        number: 9,
        title: 'Python Dictionaries Are Easy',
        description: 'Learn dictionary basics and common operations in Python.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+dictionaries+are+easy+%F0%9F%93%99.mp4',
      },
      {
        id: 'py-10',
        number: 10,
        title: 'Python Lambda Functions Explained',
        description: 'Understand anonymous functions and lambda expressions.',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Lambda+Functions+Explained.mp4',
      },
    ],
  },
  'dbms': {
    id: 'dbms',
    title: 'DBMS',
    description: 'Database Management Systems Fundamentals',
    lessons: [
      {
        id: 'dbms-1',
        number: 1,
        title: 'Introduction to DBMS and Advantages of Database Management Systems',
        description: 'Overview of Database Management Systems',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Introduction+to+DBMS.mp4',
      },
      {
        id: 'dbms-2',
        number: 2,
        title: 'Three Level Architecture of DBMS (External, Conceptual, Internal)',
        description: 'Understanding DBMS Architecture',
        videoUrl: 'https://pythongg1.s3.ap-south-1.amazonaws.com/OS/Three-Schema+Architecture+%26+Data+Independence.mp4',
      },
      {
        id: 'dbms-3',
        number: 3,
        title: 'Data Models in DBMS (Hierarchical, Network and Relational Model)',
        description: 'Different data models in DBMS',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Data+Models+in+DBMS.mp4',
      },
      {
        id: 'dbms-4',
        number: 4,
        title: 'Entity Relationship Model and ER Diagrams in DBMS',
        description: 'ER Model and ER Diagrams',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Entity+Relationship+Model+and+ER+Diagrams.mp4',
      },
      {
        id: 'dbms-5',
        number: 5,
        title: 'Relational Model in DBMS and Types of Keys (Primary, Foreign, Candidate)',
        description: 'Relational Model and Keys',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Relational+Model.mp4',
      },
      {
        id: 'dbms-6',
        number: 6,
        title: 'Structured Query Language Commands Explained for Beginners',
        description: 'SQL Commands Introduction',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Structured+Query+Language.mp4',
      },
      {
        id: 'dbms-7',
        number: 7,
        title: 'Database Constraints in SQL (NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY)',
        description: 'SQL Constraints',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Database+Constraints+in+SQL.mp4',
      },
      {
        id: 'dbms-8',
        number: 8,
        title: 'Normalization in DBMS (1NF, 2NF, 3NF and BCNF)',
        description: 'Database Normalization',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Normalization+in+DBMS.mp4',
      },
      {
        id: 'dbms-9',
        number: 9,
        title: 'ACID Properties',
        description: 'ACID Properties in Databases',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/ACID+Properties.mp4',
      },
      {
        id: 'dbms-10',
        number: 10,
        title: 'Indexing in DBMS and Query Optimization Techniques',
        description: 'Database Indexing and Optimization',
        videoUrl: 'https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Indexing+and+Query+Optimization.mp4',
      },
    ],
  },
};
