import Image from 'next/image';
import React from 'react';

const reviews = [
  {
    name: "Lauren M",
    date: "19 January",
    review: "The best way to see Melbourne! Just finished 2 incredible days touring with Simon. We had travelled to Melbourne for the Australian Open and wanted to get a real sense of the city. Simon showed us the best of Melbourne, including Queen Victoria market and his favorite vendors. We visited old shopping arcades and graffiti alleys, explored different neighborhoods, and had coffee and pastries at Brunetti. We also stopped for a beer in Fitzroy at Naked for Satan. A walk through the botanical gardens and a drive through the Grand Prix grounds rounded out our day. The next day we did the Great Ocean Road and Twelve Apostles, with lunch at a lovely restaurant. The views were simply breathtaking. Simon’s knowledge, enthusiasm, and passion made these two days unforgettable. If you're looking to experience Melbourne and its surroundings in a truly unique way, I highly recommend Simon for the perfect tour experience!",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Tom D",
    date: "16 January",
    review: "We had a memorable Great Ocean Road Tour with Simon. He was fantastic! Simon is incredibly knowledgeable about the area and its history. We did the Great Ocean Road day tour, and Simon’s planning ensured we avoided the large bus crowds, which made the whole experience much more enjoyable. The lunch and snacks provided were delicious, and Simon took us on special hidden side trips to see koalas and other fascinating wildlife. Not only did Simon share his knowledge of the region, but he also took the time to show us how to take great photos along the way. The landscapes were breathtaking, and his tips made the pictures even more amazing. Simon’s personalized approach, his passion for the area, and his insightful stories made the tour unforgettable. We highly recommend Simon for anyone looking to tour the Great Ocean Road in a way that feels personal and enriching. It was a wonderful experience from start to finish!",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Kevin D",
    date: "10 June 2024",
    review: "My family and I had the pleasure of spending a full day on the Great Ocean Road with Simon, and it was an absolutely wonderful experience. Simon is a true professional who made the entire day special for us. He is personable, friendly, and very knowledgeable. He took time to include everyone in the conversation, which made the tour even more enjoyable for our entire family. We traveled with our two children, aged 17 and 13, and Simon was excellent at engaging with all of us. He made sure we avoided the large tour groups, which made our day feel much more intimate. The tour was well-organized, and Simon’s vehicle was clean and comfortable. We visited many beautiful spots, including some hidden gems, and Simon’s insights into the area’s history and culture made the experience even richer. We had such a memorable time, and I would recommend Simon to anyone looking for a personalized, professional, and enjoyable tour along the Great Ocean Road.",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Janine G",
    date: "12 May 2024",
    review: "Our Phillip Island private tour with Simon was absolutely outstanding. From the moment we met Simon, we could tell we were in great hands. He is warm, personable, and made the whole experience so much more enjoyable. He was responsive to all our questions when we were planning the tour, and on the day, he was punctual and informative. Simon shared fascinating details about the places we visited, and his recommendations on what to do were spot on. Phillip Island itself was beautiful, and Simon took us to all the best spots, including some that we would not have discovered on our own. He even took the time to explain the best ways to view wildlife and capture great photos. By the end of the day, we all agreed that this was our favorite experience during our entire two-week trip in Australia, and Simon played a big part in making it so memorable. If you want a personalized and engaging tour, Simon is the perfect choice.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "Kelly B",
    date: "22 April 2024",
    review: "My Great Ocean Road experience with Simon was one of the best tours I’ve ever had! Simon is an exceptional guide, and it’s clear he is passionate about the area. He is incredibly knowledgeable and made sure we avoided the large crowds by doing a reverse tour, which made the experience feel much more intimate. The ride was comfortable and clean, and the views along the way were absolutely breathtaking. Simon took us to special spots for great photo opportunities and gave us tips on how to capture the best moments. He also made sure we saw wildlife in the wild, including koalas and kangaroos, which was a real treat. I appreciated the small touches that made the experience feel so personal. Simon’s enthusiasm for Melbourne and the Great Ocean Road really shines through, and I would highly recommend his tours to anyone. It was a fantastic 11-hour adventure, and the memories will last a lifetime.",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Andrew Hurt",
    date: "9 April 2024",
    review: "We recently visited Australia for our honeymoon, and we booked Simon for a tour of the Great Ocean Road. From the start, Simon was easy to communicate with, which made the booking process smooth. His suggestion of doing the reverse Great Ocean Road tour was a great idea, as it allowed us to avoid the busy bus tours and experience the sights in a more peaceful way. The landscape was stunning, even though the weather wasn’t perfect. Simon’s local knowledge and history of the area made the tour even more enjoyable. He also has an excellent eye for photography and gave us some great tips on how to take amazing photos. We were lucky to see koalas and other wildlife, and Simon made sure to capture some of these moments for us as well. Overall, we had an unforgettable day with Simon, and I would highly recommend him to anyone looking to experience the Great Ocean Road in a more personalized and intimate way.",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const AboutCustomersSays = () => {
  return (
    <div className="bg-[#E9E1D8] py-16 px-6">
      <h2 className="text-4xl font-semibold text-center text-black mb-8">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col justify-between"
          >
            <div className="flex items-center mb-4">
              <Image
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
                width={40}
                height={40}
              />
              <div>
                <h3 className="text-xl font-bold text-black">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            {/* Scrollable review content */}
            <div className="flex-1 overflow-y-auto mb-6 max-h-40 custom-scrollbar">
              <p className="text-black">{review.review}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-yellow-500">
                ★★★★☆
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCustomersSays;
