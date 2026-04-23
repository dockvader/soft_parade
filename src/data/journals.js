export const journals = [
  {
    id: 'tokyo',
    status: 'completed',
    country: 'Japan',
    title: 'Tokyo After Dark',
    subtitle: 'Neon streets, quiet mornings, and a week of wandering with no hard edges.',
    dates: 'July 11 - July 17, 2023',
    season: 'Summer',
    readTime: '8 min read',
    base: 'Tokyo',
    coverImage: '/images/japan/jp_tokyo2023/20230711_193547.jpg',
    description:
      'A photo-driven city diary stitched together from late-night arrivals, neighborhood walks, train rides, and the small rituals that make Tokyo feel cinematic.',
    intro:
      'This journal leans into texture over checklist travel. It keeps the stations, streets, snacks, and detours that gave the trip its mood.',
    highlights: ['Night arrivals', 'Neighborhood wandering', 'Transit rhythm', 'Street photography'],
    stats: [
      { label: 'Days', value: '8' },
      { label: 'Moments kept', value: '24' },
      { label: 'Pace', value: 'Slow' }
    ],
    gallery: [
      '/images/japan/jp_tokyo2023/20230711_193547.jpg',
      '/images/japan/jp_tokyo2023/20230712_130126.jpg',
      '/images/japan/jp_tokyo2023/20230712_150049.jpg',
      '/images/japan/jp_tokyo2023/20230712_192601.jpg',
      '/images/japan/jp_tokyo2023/20230712_194628.jpg',
      '/images/japan/jp_tokyo2023/20230714_181003.jpg'
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Arrival, Ueno, and the first long walk',
        coverImage: '/images/japan/jp_tokyo2023/20230711_193547.jpg',
        note:
          'The trip begins in transit and settles into the city slowly, with enough room to notice signage, station light, and the feeling of finally being here.',
        stops: [
          {
            title: 'Narita to the city',
            type: 'transport',
            description: [
              'Airport transfer, ticket counters, and the first train rhythm of the trip.',
              'A good first-day reminder that Tokyo reveals itself through movement as much as destinations.'
            ]
          },
          {
            title: 'Ueno arrival',
            type: 'sight',
            description: [
              'Bags down, camera up, and the neighborhood becomes the first chapter.',
              'Street edges, station exits, and convenience store light set the tone for the week.'
            ]
          },
          {
            title: 'Evening walk',
            type: 'sight',
            description: [
              'No agenda beyond staying outside long enough to let the city feel familiar.'
            ]
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Day trip energy and coastal air',
        coverImage: '/images/japan/jp_tokyo2023/20230712_130126.jpg',
        note:
          'A shift away from the dense city grid. The pace opens up and the day reads more like a sequence of scenes than a route.',
        stops: [
          {
            title: 'Train out of Tokyo',
            type: 'transport',
            description: [
              'Early departure, quieter platforms, and the pleasure of watching the city loosen at the edges.'
            ]
          },
          {
            title: 'Temple and town streets',
            type: 'sight',
            description: [
              'A slower architectural rhythm, smaller roads, and places that reward lingering.'
            ]
          },
          {
            title: 'Lunch stop',
            type: 'food',
            description: [
              'A reset in the middle of the day, shaped more by atmosphere than efficiency.'
            ]
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Coffee, culture, and browsing',
        coverImage: '/images/japan/jp_tokyo2023/20230712_150049.jpg',
        note:
          'A day built from interior spaces, favorite corners, and the kind of stops that make a city feel personal.',
        stops: [
          {
            title: 'Morning cafe',
            type: 'food',
            description: ['Coffee first, then a soft start into the day.']
          },
          {
            title: 'Museum or gallery window',
            type: 'sight',
            description: ['A concentrated pause before slipping back into the street.']
          },
          {
            title: 'Anime and bookstore browsing',
            type: 'shopping',
            description: ['The pleasure of shelves, packaging, and discovering what catches the eye.']
          }
        ]
      },
      {
        dayNumber: 4,
        title: 'Weather turns and the city glows',
        coverImage: '/images/japan/jp_tokyo2023/20230712_192601.jpg',
        note:
          'The visual language changes once the light drops. Reflections, signage, and storefront spill become the subject.',
        stops: [
          {
            title: 'Train interchange',
            type: 'transport',
            description: ['A small transit puzzle, solved one sign and one escalator at a time.']
          },
          {
            title: 'Street photography loop',
            type: 'sight',
            description: ['Rain or shine, the city is at its best when it reflects itself back.']
          }
        ]
      },
      {
        dayNumber: 5,
        title: 'Viewpoints and playful detours',
        coverImage: '/images/japan/jp_tokyo2023/20230712_194628.jpg',
        note:
          'The day moves between elevated views and very grounded details, which is part of Tokyo’s charm.',
        stops: [
          {
            title: 'Observation point',
            type: 'sight',
            description: ['Big-picture city scale, then back down into neighborhood texture.']
          },
          {
            title: 'Arcade or shopping floor',
            type: 'shopping',
            description: ['Bright interiors and a little controlled chaos.']
          }
        ]
      },
      {
        dayNumber: 6,
        title: 'A quieter morning, a brighter night',
        coverImage: '/images/japan/jp_tokyo2023/20230714_181003.jpg',
        note:
          'The trip is settled enough now that the day can stay open. Those are often the best travel days.',
        stops: [
          {
            title: 'Neighborhood breakfast',
            type: 'food',
            description: ['Simple, local, and easy to remember later.']
          },
          {
            title: 'Free-form wandering',
            type: 'sight',
            description: ['The route matters less than the mood, so the camera leads.']
          }
        ]
      },
      {
        dayNumber: 7,
        title: 'Shopping streets and final pickups',
        coverImage: '/images/japan/jp_tokyo2023/20230717_105803.jpg',
        note:
          'A practical day that still leaves room for atmosphere, people-watching, and one more favorite stop.',
        stops: [
          {
            title: 'Department store circuit',
            type: 'shopping',
            description: ['Last souvenirs, last impulse buys, last chances to compare floors.']
          },
          {
            title: 'Dinner reservation',
            type: 'food',
            description: ['A more intentional meal to anchor the final evening.']
          }
        ]
      },
      {
        dayNumber: 8,
        title: 'Final walk and departure',
        coverImage: '/images/japan/jp_tokyo2023/20230717_211703.jpg',
        note:
          'The last day keeps things light: one more walk, one more photo, then the long pull back toward the airport.',
        stops: [
          {
            title: 'Morning loop',
            type: 'sight',
            description: ['A farewell lap through a now-familiar patch of city.']
          },
          {
            title: 'Airport return',
            type: 'transport',
            description: ['The trip ends the same way it started: in motion.']
          }
        ]
      }
    ]
  },
  {
    id: 'usa-2025',
    status: 'planning',
    country: 'United States',
    title: 'Desert Loop 2025',
    subtitle: 'Las Vegas, Grand Canyon, Page, Bryce, Zion, and the road between them.',
    dates: 'October 19 - October 25, 2025',
    season: 'Autumn',
    readTime: 'Planning file',
    base: 'Southwest',
    coverImage: '/images/usa/us_great_canyon2025/DSC03737.JPG',
    description:
      'A future road trip designed around long views, sunrise stops, and the contrast between neon nights and red-rock mornings.',
    intro:
      'This one is still open-ended, so the journal frames a route rather than a finished memory. The structure is here; the details will arrive later.',
    highlights: ['Road trip pacing', 'National parks', 'Sunrise viewpoints', 'Photo stops'],
    stats: [
      { label: 'Days', value: '7' },
      { label: 'Drive style', value: 'Scenic' },
      { label: 'Status', value: 'Planning' }
    ],
    gallery: [
      '/images/usa/us_great_canyon2025/DSC03593.JPG',
      '/images/usa/us_great_canyon2025/DSC03737.JPG',
      '/images/usa/us_great_canyon2025/DSC03818.JPG',
      '/images/usa/us_great_canyon2025/DSC03874.JPG',
      '/images/usa/us_great_canyon2025/DSC04040.JPG',
      '/images/usa/us_great_canyon2025/DSC04136.JPG'
    ],
    days: [
      {
        dayNumber: 1,
        title: 'Las Vegas arrival',
        coverImage: '/images/usa/us_great_canyon2025/DSC03593.JPG',
        note:
          'Land, pick up the car, settle in, and let the city set up the contrast for everything that follows.',
        stops: [
          { title: 'Airport arrival', type: 'transport', description: ['Touch down and reset to road-trip mode.'] },
          { title: 'Rental car center', type: 'transport', description: ['Pick up the car and get supplies.'] },
          { title: 'First night in Las Vegas', type: 'sight', description: ['A neon-heavy opening scene before the landscape takes over.'] }
        ]
      },
      {
        dayNumber: 2,
        title: 'Hoover Dam to Grand Canyon',
        coverImage: '/images/usa/us_great_canyon2025/DSC03737.JPG',
        note:
          'A transition day with a strong sense of scale, moving from engineered spectacle to geological vastness.',
        stops: [
          { title: 'Hoover Dam', type: 'sight', description: ['An early major stop before the road opens wider.'] },
          { title: 'Route 66 diner break', type: 'food', description: ['Classic roadside energy and an easy midday reset.'] },
          { title: 'Grand Canyon viewpoints', type: 'sight', description: ['Late light and the first big canyon overlooks.'] }
        ]
      },
      {
        dayNumber: 3,
        title: 'Desert View, Antelope Canyon, Page',
        coverImage: '/images/usa/us_great_canyon2025/DSC03818.JPG',
        note:
          'A tighter day of landmark stops, where timing matters a little more and the photography potential climbs quickly.',
        stops: [
          { title: 'Desert View Watchtower', type: 'sight', description: ['Start with a built frame for the landscape.'] },
          { title: 'Lower Antelope Canyon', type: 'sight', description: ['The most time-sensitive and guided portion of the route.'] },
          { title: 'Horseshoe Bend', type: 'sight', description: ['A high-impact overlook to close the day.'] }
        ]
      },
      {
        dayNumber: 4,
        title: 'Bryce Canyon lookouts',
        coverImage: '/images/usa/us_great_canyon2025/DSC03874.JPG',
        note:
          'A day for layered amphitheaters, short walks, and changing rock color across the afternoon.',
        stops: [
          { title: 'Sunrise Point', type: 'sight', description: ['Start early if the light is the priority.'] },
          { title: 'Bryce Amphitheater', type: 'sight', description: ['The visual centerpiece of the day.'] },
          { title: 'Sunset and Inspiration points', type: 'sight', description: ['Short moves, big payoff.'] }
        ]
      },
      {
        dayNumber: 5,
        title: 'Zion hiking day',
        coverImage: '/images/usa/us_great_canyon2025/DSC04040.JPG',
        note:
          'The most active day in the itinerary, where permits, energy, and weather all matter.',
        stops: [
          { title: 'Scout Lookout', type: 'sight', description: ['A strong goal even without pushing farther.'] },
          { title: 'Angels Landing decision point', type: 'sight', description: ['Keep flexible depending on permits and comfort.'] }
        ]
      },
      {
        dayNumber: 6,
        title: 'Return drive with room for detours',
        coverImage: '/images/usa/us_great_canyon2025/DSC04136.JPG',
        note:
          'A buffer day that works best when it stays a little loose. Scenic pull-offs should be allowed to win.',
        stops: [
          { title: 'Drive back toward Las Vegas', type: 'transport', description: ['A long road segment with potential side stops.'] },
          { title: 'Flexible photo stops', type: 'sight', description: ['Use the strongest light and the strongest feeling, not just the list.'] }
        ]
      },
      {
        dayNumber: 7,
        title: 'Departure day',
        coverImage: '/images/usa/us_great_canyon2025/DSC04268.JPG',
        note:
          'Return the car, leave margin for the airport, and let the trip end cleanly.',
        stops: [
          { title: 'Rental car return', type: 'transport', description: ['Refuel, return, and move light again.'] },
          { title: 'Flight home', type: 'transport', description: ['Trip archive begins here.'] }
        ]
      }
    ]
  }
]
