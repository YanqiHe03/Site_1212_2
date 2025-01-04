export interface Project {
  id: string;
  year: string;
  title: string;
  timelineTitle: string;
  description: string;
  image: string;
  link?: string;
  category: 'personal' | 'school' | 'work';
  formats: ('visual' | 'audio' | 'installation' | 'interactive' | 'film')[];
  video?: string;
  sections: {
    description: {
      content: string;
      images?: string[];
    };
    inspiration?: {
      content: string;
      images?: string[];
    };
    workflow?: {
      content: string;
      images?: string[];
    };
    process?: {
      content: { text: string; images?: string[] }[];
      images?: string[];
    };
    outcomes?: {
      content: string;
      images?: string[];
    };
  };
}

export const projects: Project[] = [
  {
    id: 'db8634',
    year: 'Aug 2024',
    title: 'DB8634',
    timelineTitle:
      '<span style="text-shadow: -5px -5px 0px #1E1E1E" class="font-lot group-hover:text-[#db8634]">DB</span><span style="text-shadow: -5px -5px 0px #1E1E1E" class="font-chillpixels-matrix group-hover:text-[#db8634]">8634</span>',
    description:
      'An Interactive VR Installation Experience Interpreting the Concept of PostHumanism',
    image: '/bd8634_cover.png',
    link: '',
    category: 'personal',
    formats: ['installation', 'interactive'],
    sections: {
      description: {
        content:
          'In my vision, people have truly become post-human, no longer centered on humanity and self. Their way of living and thinking is based on shared consciousness, participating collectively in production and decision-making. These advancements are built on technological progress. Unlike now, where humans exist in Survival Capsules, hibernating and guided by ideology in production and daily life. Through this project, I aim to realize part of my envisioned universe and provide an immersive experience for the audience to actually experience post-human forms, prompting them to reflect on the concept of post-human.',
        images: ['/bd_desp.webp'],
      },
      workflow: {
        content:
          'In order to create an immersive experience of visualizing a philosophical concept, both hardware and software need to be taken into consideration. ',
        images: ['/bd_workflow.png'],
      },
      process: {
        content: [
          {
            text: 'Development focused on creating atmospheric environments with dynamic lighting and particle systems. Custom Blueprint logic was implemented for VR interactions, while the physical space was designed for optimal sensor placement.',
            images: ['/bd_process3.webp'],
          },
        ],
      },
      outcomes: {
        content:
          'The final installation successfully creates an immersive experience that effectively communicates complex philosophical concepts through interactive storytelling, receiving positive feedback for its unique visual style.',
        images: ['/bd_outcome.webp', '/bd_outcome1.webp', '/bd_outcome2.webp'],
      },
    },
  },
  {
    id: 'un-project',
    year: 'Oct 2024',
    title: 'U.N.',
    timelineTitle: '<span class="font-lot">U.N.</span>',
    description: 'An Audio Visual Deep Listening Performance and Installation.',
    image: '/UN_BACKGROUND.webp',
    link: 'https://youtu.be/j_sm5rzXz_k',
    video: 'https://www.youtube.com/embed/j_sm5rzXz_k',
    category: 'personal',
    formats: ['installation', 'interactive', 'audio'],
    sections: {
      description: {
        content:
          'U.N. is an interactive sound art performance introducing a system for collective improvisation centered on deep listening. ',
        images: ['/UN_Cover.png'],
      },
      inspiration: {
        content:
          'The project draws inspiration from deep listening, developed by composer Pauline Oliveros, is an active and intentional practice of engaging with sound. Unlike passive hearing, the physiological process of perceiving sound waves, listening involves focused attention to the nuances, emotions, and meanings behind those sounds. ',
        images: ['/un_insp1.jpg', '/un_insp2.jpg'],
      },
      workflow: {
        content:
          'Max/MSP and TouchDesigner function collaboratively as the central hubs, handling audio control and visual generation respectively.',
        images: ['/un_workflow.png'],
      },
      process: {
        content: [
          {
            text: 'One core M4L device routes signal from Arduino and TouchDesigner and maps them into Ableton Live. It also analyzes audio from selected track and send the analyzed signal into TouchDesigner. Other two M4L devices are made for creating the effect of my vocal. Two devices are located in separate tracks, one for audio input and one for midi. Controlled by the Arduino Controller, The midi signal is used for controlling the envelope of the Amplitude Modulation for the vocal. Through these devices, the sound I make can be turned into instruments.',
            images: ['/un_process1.png'],
          },
          {
            text: 'The visual system in TouchDesigner receives audio analysis data from Max/MSP and transforms it into dynamic visual elements. The system processes multiple audio parameters including frequency, amplitude, and spectral content to generate responsive visuals. These parameters influence various aspects of the visual system, such as particle behavior, color intensity, and geometric transformations. The visual output is then projected onto surfaces, creating an immersive environment that directly responds to the audio performance.',
            images: ['/un_process2.png', '/un_process3.png'],
          },
          {
            text: 'I designed the device using SolidWorks. It serves as both a performing controller and an experiment platform. The controller consists of two layers of Acrylic sheets. The lower layer is used to secure the Arduino and breadboard, while the upper layer is used to mount various modules and sensors. In this project, I secured the Leap Motion and the knob and button module.',
            images: ['/un_controller.png'],
          },
        ],
      },
      outcomes: {
        content:
          'The final installation successfully creates an immersive experience that effectively communicates complex philosophical concepts through interactive storytelling, receiving positive feedback for its unique visual style.',
        images: [
          '/UN_BACKGROUND.webp',
          '/un_outcome1.webp',
          '/un_outcome2.webp',
          '/un_outcome3.webp',
        ],
      },
    },
  },
  {
    id: 'the-dawn',
    year: 'Dec 2024',
    title: 'The Dawn',
    timelineTitle:
      '<div class="font-lot flex flex-col items-center text-center leading-tight"><span class="font-lot">The Dawn</span></div>',
    description:
      'An AI-powered interactive therapy experience exploring emotional connections in the digital age',
    image: '/thedawn_cover.webp',
    link: '',
    category: 'personal',
    formats: ['installation', 'interactive'],
    sections: {
      description: {
        content:
          'The Dawn is an innovative therapy experience that combines artificial intelligence with interactive storytelling to create personalized emotional journeys.',
        images: ['/thedawn_cover.webp'],
      },
      inspiration: {
        content:
          'Inspired by the growing need for mental health support and the potential of AI to create empathetic connections, The Dawn explores the intersection of technology and emotional wellbeing.',
        images: [],
      },
      workflow: {
        content:
          'Developed using advanced natural language processing and real-time interaction systems, the project required careful integration of AI models with responsive environmental design.',
        images: ['/dawn_process.jpeg', '/dawn_process1.jpeg'],
      },
      outcomes: {
        content:
          'The Dawn has successfully demonstrated the potential of AI-enhanced therapy experiences, receiving positive feedback for its innovative approach to emotional support and personal growth.',
        images: [
          '/dawn_1.webp',
          '/dawn_2.webp',
          '/dawn_3.webp',
          '/dawn_4.webp',
        ],
      },
    },
  },
  {
    id: 'newcenturysupermarket',
    year: 'Dec 2024',
    title: 'New Century Supermarket',
    timelineTitle: '<span class="font-lot">New Century Supermarket</span>',
    description: 'An Experimental Short Film',
    image: '/ncs_cover.png',
    link: 'https://youtu.be/sIwwwy4KGIw',
    category: 'personal',
    formats: ['visual'],
    video:
      'https://www.youtube.com/embed/sIwwwy4KGIw',
    sections: {
      description: {
        content:
          'One Art is a montage inspired by an Elizabeth Bishop poem "One Art," exploring themes of loss and acceptance through visual narrative. Combining all kinds of footages from life stock footages to film clips, the short film progresses from acquisition to loss, emphasizing the central theme that "The art of losing is not hard to master."',
      },
    },
  },
  {
    id: 'starlights',
    year: 'May 2024',
    title: 'Starlights',
    timelineTitle: '<span class="font-lot">Starlights</span>',
    description:
      'A music video for my own upcoming single',
    image: '/starlight_cover.webp',
    link: 'https://youtu.be/LUx8VNA-KDI',
    category: 'school',
    formats: ['visual', 'audio'],
    video: 'https://www.youtube.com/embed/LUx8VNA-KDI',
    sections: {
      description: {
        content:
          'Starlights transforms live musical performances into dynamic visual experiences, creating a symbiotic relationship between sound and imagery.',
        images: [
          '/starlight_cover.webp',
          '/starlight_1.webp',
          '/starlight_2.webp',
          '/starlight_3.webp',
        ],
      },
    },
  },
  {
    id: 'gowiththewind',
    year: 'May 2024',
    title: 'Go With The Wind',
    timelineTitle: '<span class="font-lot">Go With The Wind</span>',
    description: 'A Virtual Production Short Film',
    image: '/gowiththewind_cover.webp',
    link: 'https://youtu.be/fG7DXWHMAEQ',
    video: 'https://www.youtube.com/embed/fG7DXWHMAEQ',
    category: 'school',
    formats: ['visual'],
    sections: {
      description: {
        content:
          "Go With the Wind tells the creative funny story of going with the flow and facing life's obstacles with a calm mind. Produced in 48 Hours for the 2024 48 Hour Virtual Production Filming Contest. Awards: Annual Excellence Award (China Film Art Research Center) and Good Work Award(Asian Virtual Human Association).",
        images: ['/48HVP2024.webp', '/goodwork.webp'],
      },
    },
  },
  {
    id: 'ta',
    year: 'Nov 2023',
    title: 'TA',
    timelineTitle: '<span class="font-lot">TA</span>',
    description: 'A Virtual Production Short Film',
    image: '/ta_cover.webp',
    link: 'https://vimeo.com/901030817',
    category: 'school',
    formats: ['visual'],
    video:
      'https://player.vimeo.com/video/901030817?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    sections: {
      description: {
        content:
          'TA humorously explores various interpretations of the acronym "TA," such as Teaching Assistant and Technical Advisor, through the story of a teaching assistant who imagines achieving success. The film conveys the message that anything is possible. Created for the preliminary round of the 2024 48 Hour Virtual Production Filming Contest, and successfully advanced to the final round.',
      },
    },
  },
  {
    id: 'oneart',
    year: 'Nov 2022',
    title: 'ONE ART',
    timelineTitle: '<span class="font-lot">ONE ART</span>',
    description: 'An Experimental Montage Short Film',
    image: '/oneart_cover.webp',
    link: 'https://vimeo.com/835165041',
    category: 'school',
    formats: ['visual'],
    video:
      'https://player.vimeo.com/video/835165041?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479',
    sections: {
      description: {
        content:
          'One Art is a montage inspired by an Elizabeth Bishop poem "One Art," exploring themes of loss and acceptance through visual narrative. Combining all kinds of footages from life stock footages to film clips, the short film progresses from acquisition to loss, emphasizing the central theme that "The art of losing is not hard to master."',
      },
    },
  },
];
