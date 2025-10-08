const ProjectsData = [
   {
      id: 'Paradise',
      title: 'Paradise',
      genre: 'Fantasy',
      location: 'Bruxelles, Belgium',
      description: 'Their world has turned upside down and promises to kill. The world they called Paradise. A full and carefree life. Where work is a prize in the lottery. Where simple rules are: eat normally, drink normally, play, move, rest, but don\'t read, don\'t write. Only the main character, Alexander, knows that paradise is a spaceship. All his life he carries a heavy burden of knowledge about this day. It is for this reason that his father secretly taught and passed on knowledge. Only he alone will be able to fulfill his mission. If he defeats the elite, who, having learned about the knowledge, will call him a heretic and send him to the fertilizer.',
      video: './video/video5.mp4',
      director: 'Oleksandr Kot',
      shootingDates: '2025-2026 year',
      roles: [
         {
            name: 'Main character: Alexander.<br>', description: 'Age: 35 - 45 years old <br>Gender: male <br>Character: mysterious, intelligent, responsible. <br>Carries the burden of forbidden knowledge.<br>Special skills: the ability to convey internal tension and fear.', status: 'available'
         },
         { name: 'Main character Alexander (childhood)<br>', description: 'Age: 8-12 years<br>Gender: male Character: smart, inquisitive, brave but hildishly naive. Carries the burden of forbidden knowledge.<br>Special skills: must be similar to adult Alexander.<br>Ability to convey internal tension and fear', status: 'taken' },
         { name: 'Secondary character: Alexander\'s father.<br>', description: 'Age: 35-45 years old.<br>Gender: male.<br>Character: mysterious, intelligent, responsible. Carries the burden of forbidden knowledge.<br>Special skills: must be similar to Alexander, the main character, in the ability to convey internal tension and stress.', status: 'available' },
         { name: 'Secondary role: Olena (Olexander\'s wife)<br>', description: 'Age: 30-40 years old.<br>Gender: female Body type: athletic, intelligent.<br>Character: caring, law-abiding, responsible.<br>Special skills: ability to convey fear, worry, expressive emotions in scenes.', status: 'available' },
         { name: 'Secondary role: Agronomist.<br>', description: 'Gender: male.<br>Age: 50-70 years old.<br>Character: smart, cunning, experienced, good leader and specialist.', status: 'available' },
         { name: 'Secondary role: Pastor.<br>', description: 'Gender: Male.<br>Age: 40–70 years old.<br>Role: Ideological center. Controls faith, rituals, morality.<br>Type: A good minister who speaks like a prophet but acts like a dictator.<br>Appearance: Neat, with soft features, may wear white or gray clothes.', status: 'available' },
         { name: 'Secondary role: Doctor.', description: '<br>Gender: male, female.<br>Age: 60–75 years<br>Role: Responsible for the health of the population, but also hides the true causes of deaths and “epidemics”.<br>OldType: Intelligent, attentive, tired.<br>Appearance: Always in a white coat, with a sad look in his eyes.', status: 'available' },
         { name: 'Secondary role: Cook.', description: '<br>Gender: Male, Female.<br>Age: 45–70 years.<br>Role: Responsible for distributing food, resources, and the “happiness” of people.<br>Type: Warm, sociable, a bit chubby.<br>Appearance: Smiling, speaks jokingly — “a man of the people.”', status: 'available' },
         { name: 'Secondary role: Power engineer.<br>', description: 'Gender: male, female.<br>Age: 55–65 years.<br>Role: Controls the ship\'s power systems, knows about its true structure.<br>Type: Engineer, practitioner, thinks logically, not emotionally.<br> Appearance: Strict, wears a uniform or overalls with technical details.', status: 'available' },
      ]
   },
   {
      id: 'Shadows',
      title: 'Time of Locked Shadows',
      genre: 'Post-apocalypse',
      location: 'Bruxelles, Belgium',
      description: '1963 USSR, the Soviets test a 100 megaton nuclear bomb. After successful tests, a UFO flew into the laboratory where the 200 megaton bomb was being developed. After 13 years, the UFO flew away. The Soviets fenced off the entire city and made a prison. Abnormal things are happening in the laboratory, people are dying, becoming crippled for no apparent reason.The CIA recruits a lifer and sends him to a closed city. Where he tries to survive the terrible realities of prison life and becomes the most successful collector of things left by UFOs.',
      video: './video/video2.mp4',
      director: 'Oleksandr Kot',
      shootingDates: '2025-2026 year',
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
      id: 'midnight-heist',
      title: 'The Midnight Heist',
      genre: 'Crime Thriller',
      location: 'Kyiv, Ukraine',
      description: 'A group of skilled thieves plan the perfect heist, but when things go wrong, they must outsmart both the police and a ruthless crime boss to survive the night.',
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
      id: 'love-revolution',
      title: 'Love & Revolution',
      genre: 'Romance Drama',
      location: 'Prague, Czech Republic',
      description: 'During the Velvet Revolution, two young activists from opposite sides find love amidst the chaos of political change.',
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