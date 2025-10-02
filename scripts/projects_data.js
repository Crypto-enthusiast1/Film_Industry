const ProjectsData = [
   {
      id: 'midnight-heist',
      title: 'The Midnight Heist',
      genre: 'Crime Thriller',
      location: 'Kyiv, Ukraine',
      description: 'A group of skilled thieves plan the perfect heist, but when things go wrong, they must outsmart both the police and a ruthless crime boss to survive the night.',
      image: 'https://via.placeholder.com/300x450/2c3e50/ecf0f1?text=Midnight+Heist',
      video: './video/video1.mp4',
      director: 'John Doe',
      shootingDates: 'March 15 - May 30, 2025',
      roles: [
         { name: 'Lead Actor (Male, 25-35)', status: 'available' },
         { name: 'Lead Actress (Female, 25-35)', status: 'taken' },
         { name: 'Supporting Role (Any, 40-60)', status: 'available' },
         { name: 'Extras (Any age)', status: 'available' }
      ]
   },
   {
      id: 'summer-89',
      title: 'Summer of \'89',
      genre: 'Historical Drama',
      location: 'Lviv, Ukraine',
      description: 'Set in the final summer before Ukraine\'s independence, this coming-of-age story follows a group of friends navigating love, politics, and personal growth during a time of great change.',
      image: 'https://via.placeholder.com/300x450/34495e/ecf0f1?text=Summer+89',
      video: './video/video2.mp4',
      director: 'Maria Kovalenko',
      shootingDates: 'June 1 - August 15, 2025',
      roles: [
         { name: 'Young Male Lead (18-25)', status: 'available' },
         { name: 'Young Female Lead (18-25)', status: 'available' },
         { name: 'Older Mentor (50-65)', status: 'taken' },
         { name: 'Extras (Various ages)', status: 'available' }
      ]
   },
   {
      id: 'neon-dreams',
      title: 'Neon Dreams',
      genre: 'Sci-Fi',
      location: 'Odesa, Ukraine',
      description: 'In a dystopian future where dreams can be recorded and sold, a young woman discovers a dangerous secret hidden in her subconscious that could change the world.',
      image: 'https://via.placeholder.com/300x450/27ae60/ecf0f1?text=Neon+Dreams',
      video: './video/video3.mp4',
      director: 'Alex Petrov',
      shootingDates: 'September 1 - November 30, 2025',
      roles: [
         { name: 'Female Lead (20-30)', status: 'available' },
         { name: 'Male Antagonist (35-45)', status: 'available' },
         { name: 'Tech Specialist (25-40)', status: 'taken' },
         { name: 'Extras (Future citizens)', status: 'available' }
      ]
   },
   {
      id: 'urban-legends',
      title: 'Urban Legends',
      genre: 'Horror',
      location: 'Kharkiv, Ukraine',
      description: 'A paranormal investigation team explores abandoned Soviet-era buildings, uncovering terrifying secrets that should have remained buried.',
      image: 'https://via.placeholder.com/300x450/8e44ad/ecf0f1?text=Urban+Legends',
      video: './video/video4.mp4',
      director: 'Viktor Shevchenko',
      shootingDates: 'October 15 - December 20, 2025',
      roles: [
         { name: 'Investigation Team Leader (30-40)', status: 'available' },
         { name: 'Paranormal Expert (25-35)', status: 'available' },
         { name: 'Camera Operator (20-30)', status: 'taken' },
         { name: 'Extras (Spirits & Locals)', status: 'available' }
      ]
   },
   {
      id: 'love-revolution',
      title: 'Love & Revolution',
      genre: 'Romance Drama',
      location: 'Prague, Czech Republic',
      description: 'During the Velvet Revolution, two young activists from opposite sides find love amidst the chaos of political change.',
      image: 'https://via.placeholder.com/300x450/e74c3c/ecf0f1?text=Love+Revolution',
      director: 'Elena Novakova',
      shootingDates: 'April 10 - June 25, 2025',
      roles: [
         { name: 'Female Revolutionary (22-28)', status: 'available' },
         { name: 'Male Government Agent (25-32)', status: 'available' },
         { name: 'Veteran Activist (45-55)', status: 'available' },
         { name: 'Extras (Protesters & Citizens)', status: 'available' }
      ]
   },
   {
      id: 'arctic-expedition',
      title: 'Arctic Expedition',
      genre: 'Adventure Thriller',
      location: 'Iceland',
      description: 'A team of scientists in the Arctic discovers something that could change humanity forever, but they must survive the harsh conditions and mysterious forces pursuing them.',
      image: 'https://via.placeholder.com/300x450/3498db/ecf0f1?text=Arctic+Expedition',
      director: 'Hans Eriksson',
      shootingDates: 'January 5 - March 20, 2025',
      roles: [
         { name: 'Lead Scientist (35-45)', status: 'taken' },
         { name: 'Survival Expert (30-40)', status: 'available' },
         { name: 'Research Assistant (25-30)', status: 'available' },
         { name: 'Extras (Expedition Team)', status: 'available' }
      ]
   }
];

export default ProjectsData;