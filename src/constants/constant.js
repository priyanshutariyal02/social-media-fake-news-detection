export const postsData = [
    {
      id: 1,
      user: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      time: "2h ago",
      content: "The Melo Melo Pearl is one of the rarest and most valuable pearls, formed by a sea snail. Worth up to $330,000!",
      image: "/images/fnd1.png", // Real news image
      likes: 124,
      comments: 14,
    },
    {
      id: 2,
      user: "Jane Smith",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      time: "5h ago",
      content: "Scientists discover a tree that grows pure gold leaves deep in the Amazon jungle! 🌳✨",//fake
      image: "/images/fnd2.png",
      likes: 87,
      comments: 10,
    },
    {
      id: 3,
      user: "Alex Johnson",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      time: "8h ago",
      content: "A man claims he survived 12 years in the desert by drinking cactus juice alone. 🌵", //fake
      image: "/images/fnd3.png",
      likes: 76,
      comments: 5,
    },
    {
      id: 4,
      user: "Emily Davis",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
      time: "1d ago",
      content: "NASA confirms the discovery of Earth-like planet Kepler-442b located 1200 light years away! 🪐",
      image: "/images/fnd4.png",
      likes: 152,
      comments: 20,
    },
    {
      id: 5,
      user: "Chris Brown",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      time: "2d ago",
      content: "Shark found walking on land in New Zealand beaches captured on camera! 🦈🚶", //fake
      image: "/images/fnd5.png",
      likes: 93,
      comments: 7,
    },
    {
      id: 6,
      user: "Sophia Wilson",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
      time: "3d ago",
      content: "Scientists grow human mini-brains in lab dishes to study neurological diseases. 🧠🧪",
      image: "/images/fnd6.png",
      likes: 178,
      comments: 22,
    }
  ];
  

export const storiesData = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Chris Brown",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Daniel Lee",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    name: "Michael Scott",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    name: "Rachel Green",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

export const suggestedUsers = [
  {
    id: 1,
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    followedBy: [
      {
        name: "Emily Davis",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        name: "Chris Brown",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    followedBy: [
      {
        name: "Sophia Wilson",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
      {
        name: "Daniel Lee",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
      },
      {
        name: "Olivia Taylor",
        image: "https://randomuser.me/api/portraits/women/8.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Alex Johnson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    followedBy: [
      {
        name: "Rachel Green",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
      },
      {
        name: "Michael Scott",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
      },
    ],
  },
];
