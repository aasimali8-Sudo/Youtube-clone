let videos = [
  {
    id: '5de0c0ff-8bfd-45b2-82a8-cf1e5278b207',
    vid : "n2RNcPRtAiY",
    duration: "14:20",
    thumbnail: "thumbnails/thumbnail-1.webp",
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    author: "Marques Brownlee &#10003",
    views: "3.4M",
    uploadTime: "5 years",
    channelIcon: "channels-profile/channel-1.jpeg",
    channel : "c/mkbhd"
  },
  {
    id: 'b8e9f0a1-c2d3-e4f5-a6b7-c8d9e0f1a2b3',
    vid: "mP0RAo9SKZk",
    duration: "08:22",
    thumbnail: "thumbnails/thumbnail-2.webp",
    title: "Try Not To Laugh Challenge #9",
    author: "Markiplier",
    views: "19M",
    uploadTime: "8 years",
    channelIcon: "channels-profile/channel-2.jpeg",
    channel : "@markiplier"
  },
  {
    id: 'c3f4g5h6-i7j8-k9l0-m1n2-o3p4q5r6s7t8',
    vid: "FgjPQQeTh1w",
    duration: "9:13",
    thumbnail: "thumbnails/thumbnail-3.webp",
    title: "Crazy Tik Toks Taken Moments Before DISASTER",       
    author: "SSSniperWolf",
    views: "12M",
    uploadTime: "5 years",
    channelIcon: "channels-profile/channel-3.jpeg",
    channel : "@SSSniperWolf"   
  },
  {
    id: 'd4g5h6i7-j8k9-l0m1-n2o3-p4q5r6s7t8u9',
    vid: "094y1Z2wpJg",
    duration: "22:09",
    thumbnail: "thumbnails/thumbnail-4.webp",
    title: "Math Problems That'll Make You Think Twice!", 
    author: "Numberphile",
    views: "1.2M",
    uploadTime: "2 years",
    channelIcon: "channels-profile/channel-4.jpeg",
    channel : "@Veritasium"
  },
  {
    id: 'e5h6i7j8-k9l0-m1n2-o3p4-q5r6s7t8u9v0',
    vid: "86CQq3pKSUw",
    duration: "11:17",
    thumbnail: "thumbnails/thumbnail-5.webp",
    title: "Kadane's Algorithm to Maximum Sum Subarray Problem", 
    author: "CS Dojo",
    views: "519K",
    uploadTime: "9 years",
    channelIcon: "channels-profile/channel-5.jpeg",
    channel : "@CSDojo"
  },
  {
    id: 'f6i7j8k9-l0m1-n2o3-p4q5-r6s7t8u9v0w1',
    vid: "yXWw0_UfSFg",
    duration: "19:59",
    thumbnail: "thumbnails/thumbnail-6.webp",
    title: "Anything You Can Fit In The Circle I'll Pay For", 
    author: "MrBeast",
    views: "141M",
    uploadTime: "4 years",
    channelIcon: "channels-profile/channel-6.jpeg",
    channel : "@MrBeast"
  },
  {
    id: 'g7j8k9l0-m1n2-o3p4-q5r6-s7t8u9v0w1x2',
    vid: "fNVa1qMbF9Y",
    duration: "10:13",
    thumbnail: "thumbnails/thumbnail-7.webp",
    title: "Why Planes Don't Fly Over Tibet", 
    author: "RealLifeLore",
    views: "6.6M",
    uploadTime: "8 years",
    channelIcon: "channels-profile/channel-7.jpeg",
    channel : "@RealLifeLore"
  },
  {
    id: 'h8k9l0m1-n2o3-p4q5-r6s7-t8u9v0w1x2y3',
    vid: "lFm4EM1juls",
    duration: "7:12",
    thumbnail: "thumbnails/thumbnail-8.webp",
    title: "Inside The World's Biggest Passenger Plane", 
    author: "Tech Vision",
    views: "3.7M",
    uploadTime: "5 years",
    channelIcon: "channels-profile/channel-8.jpeg",
    channel : "@adin"
  },
  {
    id: 'i9l0m1n2-o3p4-q5r6-s7t8-u9v0w1x2y3z4',
    vid: "ixmxOlcrlUc",
    duration: "13:17",
    thumbnail: "thumbnails/thumbnail-9.webp",
    title: "The Secret to Super Human Strength",
    author: "ThenX",
    views: "20M",
    uploadTime: "7 years",
    channelIcon: "channels-profile/channel-9.jpeg",
    channel : "@OFFICIALTHENXSTUDIOS"
  },
  {
    id: 'j0m1n2o3-p4q5-r6s7-t8u9-v0w1x2y3z4a5',
    vid: "R2vXbFp5C9o",
    duration: "7:53",
    thumbnail: "thumbnails/thumbnail-10.webp",
    title: "How The World's Largest Cruise Ship Makes 30,000 Meals Every Day",
    author: "Business Insider",
    views: "14M",
    uploadTime: "6 years",
    channelIcon: "channels-profile/channel-10.jpeg",
    channel : "user/businessinsider"
  },
  {
    id: 'k1n2o3p4-q5r6-s7t8-u9v0-w1x2y3z4a5b6',
    vid: "0nZuYyXET3s",
    duration: "4:10",
    thumbnail: "thumbnails/thumbnail-11.webp",
    title: "Dibai's Crazy Underwater Train and Other Things #Only in Dubai",
    author: "Destination Tips",
    views: "3M",
    uploadTime: "5 years",
    channelIcon: "channels-profile/channel-11.jpeg",
    channel : "@Destinationtips"
  },
  {
    id: 'l2o3p4q5-r6s7-t8u9-v0w1-x2y3z4a5b6c7',
    vid: "9iMGFqMmUFs",
    duration: "7:53",
    thumbnail: "thumbnails/thumbnail-12.webp",
    title: "What would happen if you didn't drink water? - Mia Nacamulli",
    author: "TED-Ed",
    views: "12M",
    uploadTime: "9 years",
    channelIcon: "channels-profile/channel-12.jpeg",
    channel : "@teded"
  }
];

// // create a new array of videos with unique IDs using crypto.randomUUID()

// videos = videos.map((video) => ({
//   id: crypto.randomUUID(),
//   ...video
// }));

// console.log(videos);
