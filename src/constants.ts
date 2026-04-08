import { Course } from "./types";

export const COURSES: Course[] = [
  {
    title: "Python",
    category: "Development",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/224956309/original/4f434c40be4371cf8a3dda8d3a551522d36b1a59/write-medium-difficulty-python-script-for-your-needs.jpg",
    videos: [
      { id: 1, title: "How to learn Python Fast", duration: "12:43", status: "completed", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/How+I+Would+Learn+Python+FAST+(if+I+could+start+over).mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/1_topic.pdf" },
      { id: 2, title: "Basics of python", duration: "20:00", status: "current", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/10+Important+Python+Concepts+In+20+Minutes.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/2_topic.pdf" },
      { id: 3, title: "Type Casting", duration: "11:54", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Tutorial_+Type+Hinting+vs+Type+Checking+vs+Data+Validation+-+What%E2%80%99s+the+Difference_.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/3_topic.pdf"},
      { id: 4, title: "Control Flow & Conditional Statements", duration: "14:41", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Tutorial+for+Beginners+6_+Conditionals+and+Booleans+-+If%2C+Else%2C+and+Elif+Statements.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/4_topic.pdf"},
      { id: 5, title: "Python Loops", duration: "11:30", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/While+Loops.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/5_topic.pdf" },
      { id: 6, title: "Python Functions", duration: "11:42", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Functions+-+Visually+Explained.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/6_topic.pdf" },
      { id: 7, title: "Python List Methods", duration: "12:00", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/All+Python+List+Methods+in+12+Minutes.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/7_topic.pdf" },
      { id: 8, title: "Python List vs Tuples vs Sets", duration: "12:54", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Lists+vs+Tuples+vs+Sets+-+Visually+Explained.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/8_topic.pdf" },
      { id: 9, title: "Python Dictionary Basics", duration: "13:19", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+dictionaries+are+easy+%F0%9F%93%99.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/9_topic.pdf" },
      { id: 10, title: "Python lambda Functions", duration: "07:38", status: "locked", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Python/Python+Lambda+Functions+Explained.mp4", notesUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/PDF/python+/10_topic.pdf" },
    ],
    podcasts: [
      { id: 1, title: "How to learn Python Fast", duration: "51:15", status: "completed", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Master_Python_from_scratch_in_two_months.m4a" },
      { id: 2, title: "Basics of python", duration: "54:54", status: "current", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Python_Architecture_and_Dunder_Secret_Handshakes.m4a" },
      { id: 3, title: "Type Casting", duration: "58:24", status: "locked", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Python_Type_Hinting_Checking_and_Validation.m4a" },
      { id: 4, title: "Control Flow & Conditional Statements", duration: "53:10", status: "locked", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Python_truthiness_and_memory_identity_traps.m4a" },
      { id: 5, title: "Python Loops", duration: "1:02:14", status: "locked", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/The_Mechanics_of_Python_Loop_Iteration.m4a" },
      { id: 6, title: "Python Functions", duration: "56:34", status: "locked", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Why_Python_Functions_Shred_Local_Data.m4a" },
      { id: 7, title: "Python List Methods", duration: "19:40", status: "locked" },
      { id: 8, title: "Python List vs Tuples vs Sets", duration: "54:12", status: "locked", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Choosing_Between_Python_Lists_Tuples_and_Sets.m4a" },
      { id: 9, title: "Python Dictionary Basics", duration: "51:44", status: "locked", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Python_Dictionaries_Eliminate_Search_Bottlenecks.m4a" },
      { id: 10, title: "Python lambda Functions", duration: "47:14", status: "locked", audioUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/Podcast/Python/Python/Python_Lambda_Functions_and_Functional_Programming.m4a" }
    ]
  },
  {
    title: "DBMS",
    category: "Database",
    image: "https://tse4.mm.bing.net/th/id/OIP.0eVnHEkf2CWqfe2oK2fzcwHaFm?rs=1&pid=ImgDetMain&o=7&rm=3",
    videos: [
      { id: 1, title: "Introduction to DBMS", duration: "10:30", status: "completed", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Introduction+to+DBMS.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/1_topic+(1).pdf" },
      { id: 2, title: "Three Level Architecture", duration: "15:45", status: "current", youtubeUrl: "https://pythongg1.s3.ap-south-1.amazonaws.com/OS/Three-Schema+Architecture+%26+Data+Independence.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/2_topic+(1).pdf" },
      { id: 3, title: "Data Models in DBMS", duration: "12:20", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Data+Models+in+DBMS.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/3_topic+(1).pdf" },
      { id: 4, title: "Entity Relationship Model", duration: "18:10", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Entity+Relationship+Model+and+ER+Diagrams.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/4_topic+(1).pdf" },
      { id: 5, title: "Relational Model & Keys", duration: "14:30", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Relational+Model.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/5_topic+(1).pdf" },
      { id: 6, title: "SQL Commands for Beginners", duration: "20:15", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Structured+Query+Language.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/6_topic+(1).pdf" },
      { id: 7, title: "Database Constraints in SQL", duration: "16:40", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Database+Constraints+in+SQL.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/7_topic+(1).pdf" },
      { id: 8, title: "Normalization in DBMS", duration: "22:50", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Normalization+in+DBMS.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/8_topic+(1).pdf" },
      { id: 9, title: "ACID Properties", duration: "11:20", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/9_topic.pdf" },
      { id: 10, title: "Indexing & Query Optimization", duration: "19:35", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS/DBMS/Indexing+and+Query+Optimization.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+NOTES/10_topic.pdf" },
    ],
    podcasts: [
      { id: 1, title: "Introduction to DBMS", duration: "12:45", status: "completed", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/6.mp3" },
      { id: 2, title: "Five techniques for faster SQL queries", duration: "18:30", status: "current", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/Five_techniques_for_faster_SQL_queries.mp3" },
      { id: 3, title: "How ACID properties protect database transactions", duration: "15:20", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/How_ACID_properties_protect_database_transactions.mp3" },
      { id: 4, title: "How Database Management Systems Organize Data", duration: "22:10", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/How_Database_Management_Systems_Organize_Data.mp3" },
      { id: 5, title: "How Eight Database Keys Identify Records", duration: "17:45", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/How_Eight_Database_Keys_Identify_Records.mp3" },
      { id: 6, title: "How SQL Constraints Prevent Bad Data", duration: "25:30", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/How_SQL_Constraints_Prevent_Bad_Data.mp3" },
      { id: 7, title: "How Three Schemas Enable Data Independence", duration: "19:15", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/How_Three_Schemas_Enable_Data_Independence.mp3" },
      { id: 8, title: "The Digital Blueprints Powering Modern Hospitals", duration: "28:40", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/The_Digital_Blueprints_Powering_Modern_Hospitals.mp3" },
      { id: 9, title: "The Three Steps of Database Normalization", duration: "14:20", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/The_Three_Steps_of_Database_Normalization.mp3" },
      { id: 10, title: "Visualizing database architecture with ER diagrams", duration: "24:55", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/DBMS+podcast/Visualizing_database_architecture_with_ER_diagrams.mp3" }
    ]
  },
  {
    title: "Data Structure",
    category: "Computer Science",
    image: "https://institute.careerguide.com/wp-content/uploads/2023/08/DSA-full-forms-600x270.png",
    videos: [
      { id: 1, title: "Introduction to DSA", duration: "14:20", status: "completed", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Introduction.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/1_topic.pdf" },
      { id: 2, title: "Arrays", duration: "20:15", status: "current", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Array.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/2_topic.pdf" },
      { id: 3, title: "Linked List", duration: "18:50", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Linked+List.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/3_Topic.pdf" },
      { id: 4, title: "Stack and Queue", duration: "15:30", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/stack+and+queue.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/4_TOPIC.pdf" },
      { id: 5, title: "Binary Tree", duration: "22:10", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Binary+Tree.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/5_topic.pdf" },
      { id: 6, title: "Binary Search Tree", duration: "19:45", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Binary+search+Tree.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/6_topic.pdf" },
      { id: 7, title: "Heap", duration: "17:20", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Heap.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/7_topic.pdf" },
      { id: 8, title: "Graph", duration: "25:15", status: "locked", youtubeUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+Structures/Data+Structures/Graph.mp4", notesUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+structures+notes/8_topic.pdf" },
    ],
    podcasts: [
      { id: 1, title: "Array memory and bubble sort mechanics", duration: "16:15", status: "completed", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+stucture+podcast/Array_memory_and_bubble_sort_mechanics+(1).mp3" },
      { id: 2, title: "Big O Notation and core Data Structures", duration: "22:40", status: "current", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+stucture+podcast/Big_O_Notation_and_Core_Data_Structures.mp3" },
      { id: 3, title: "Graph Data Structures Nodes Edges and Cycles", duration: "21:30", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+stucture+podcast/Graph_Data_Structures_Nodes_Edges_and_Cycles.mp3" },
      { id: 4, title: "Linked lists versus Arrays in memory", duration: "18:50", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+stucture+podcast/Linked_Lists_versus_Arrays_in_Memory.mp3" },
      { id: 5, title: "How Heap Trees Organize Priority Data", duration: "26:20", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+stucture+podcast/How_Heap_Trees_Organize_Priority_Data.mp3" },
      { id: 6, title: "The Branching Architecture of instant search", duration: "23:15", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+stucture+podcast/The_Branching_Architecture_of_Instant_Search.mp3" },
      { id: 7, title: "Logic of stacks Queues and Deques", duration: "20:40", status: "locked", audioUrl: "https://my-videos-platform.s3.eu-north-1.amazonaws.com/Data+stucture+podcast/Logic_of_Stacks_Queues_and_Deques.mp3" }
    ]
  }
];
