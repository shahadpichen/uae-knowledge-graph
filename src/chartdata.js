const chartData = {
  value: 7,
  name: "UAE",
  children: [
    {
      name: "Abu Dhabi",
      children: [
        {
          name: "Government",
          value: 1,
        },
        {
          name: "Tourism",
          children: [
            {
              name: "Sheikh Zayed Grand Mosque",
              value: 1,
            },
            {
              name: "Emirates Palace",
              value: 1,
            },
            {
              name: "Louvre Abu Dhabi",
              value: 1,
            },
            {
              name: "Ferrari World",
              value: 1,
            },
            {
              name: "Yas Island",
              value: 1,
            },
          ],
        },
        {
          name: "Oil & Gas",
          value: 1,
        },
        {
          name: "Real Estate",
          children: [
            {
              name: "Al Reem Island",
              value: 1,
            },
            {
              name: "Saadiyat Island",
              value: 1,
            },
            {
              name: "Al Maryah Island",
              value: 1,
            },
          ],
        },
        {
          name: "Education",
          children: [
            {
              name: "New York University Abu Dhabi",
              value: 1,
            },
            {
              name: "Khalifa University",
              value: 1,
            },
            {
              name: "University of Sharjah (Abu Dhabi Campus)",
              value: 1,
            },
            {
              name: "Abu Dhabi University",
              value: 1,
            },
            {
              name: "Al Hosn University",
              value: 1,
            },
            {
              name: "Paris-Sorbonne University Abu Dhabi",
              value: 1,
            },
          ],
        },
        {
          name: "Healthcare",
          children: [
            {
              name: "Cleveland Clinic Abu Dhabi",
              value: 1,
            },
            {
              name: "Sheikh Shakhbout Medical City",
              value: 1,
            },
            {
              name: "Abu Dhabi Health Services Company (SEHA)",
              value: 1,
            },
            {
              name: "NMC Royal Hospital",
              value: 1,
            },
            {
              name: "Mediclinic City Hospital",
              value: 1,
            },
            {
              name: "Al Zahra Hospital",
              value: 1,
            },
            {
              name: "King’s College Hospital London (Abu Dhabi)",
              value: 1,
            },
            {
              name: "American Hospital Abu Dhabi",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Dubai",
      children: [
        {
          name: "Tourism",
          children: [
            {
              name: "Burj Khalifa",
              value: 1,
            },
            {
              name: "Palm Jumeirah",
              value: 1,
            },
            {
              name: "Dubai Mall",
              value: 1,
            },
            {
              name: "Burj Al Arab",
              value: 1,
            },
            {
              name: "Dubai Fountain",
              value: 1,
            },
            {
              name: "Dubai Marina",
              value: 1,
            },
            {
              name: "Dubai Opera",
              value: 1,
            },
          ],
        },
        {
          name: "Finance",
          children: [
            {
              name: "Dubai International Financial Centre (DIFC)",
              value: 1,
            },
            {
              name: "NASDAQ Dubai",
              value: 1,
            },
          ],
        },
        {
          name: "Real Estate",
          children: [
            {
              name: "Downtown Dubai",
              value: 1,
            },
            {
              name: "Jumeirah Lake Towers",
              value: 1,
            },
            {
              name: "Business Bay",
              value: 1,
            },
            {
              name: "Al Barsha",
              value: 1,
            },
          ],
        },
        {
          name: "Technology",
          children: [
            {
              name: "Dubai Internet City",
              value: 1,
            },
            {
              name: "Dubai Silicon Oasis",
              value: 1,
            },
            {
              name: "Dubai Media City",
              value: 1,
            },
          ],
        },
        {
          name: "Education",
          children: [
            {
              name: "Dubai International Academic City",
              value: 1,
            },
            {
              name: "Zayed University",
              value: 1,
            },
            {
              name: "American University in Dubai",
              value: 1,
            },
          ],
        },
        {
          name: "Healthcare",
          children: [
            {
              name: "Dubai Healthcare City",
              value: 1,
            },
            {
              name: "Rashid Hospital",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Sharjah",
      children: [
        {
          name: "Education",
          children: [
            {
              name: "University City",
              value: 1,
            },
            {
              name: "American University of Sharjah",
              value: 1,
            },
            {
              name: "University of Sharjah",
              value: 1,
            },
          ],
        },
        {
          name: "Culture",
          children: [
            {
              name: "Sharjah Art Museum",
              value: 1,
            },
            {
              name: "Al Noor Mosque",
              value: 1,
            },
            {
              name: "Sharjah Museum of Islamic Civilization",
              value: 1,
            },
            {
              name: "Heart of Sharjah",
              value: 1,
            },
          ],
        },
        {
          name: "Tourism",
          children: [
            {
              name: "Al Majaz Waterfront",
              value: 1,
            },
            {
              name: "Sharjah Aquarium",
              value: 1,
            },
          ],
        },
        {
          name: "Real Estate",
          children: [
            {
              name: "Al Qasba",
              value: 1,
            },
            {
              name: "Al Khan",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Ajman",
      children: [
        {
          name: "Real Estate",
          children: [
            {
              name: "Ajman Free Zone",
              value: 1,
            },
            {
              name: "Ajman Corniche",
              value: 1,
            },
          ],
        },
        {
          name: "Tourism",
          children: [
            {
              name: "Ajman Museum",
              value: 1,
            },
            {
              name: "Ajman Beach",
              value: 1,
            },
            {
              name: "Al Zorah Nature Reserve",
              value: 1,
            },
          ],
        },
        {
          name: "Healthcare",
          children: [
            {
              name: "Sheikh Khalifa Hospital",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Umm Al Quwain",
      children: [
        {
          name: "Tourism",
          children: [
            {
              name: "Dreamland Aqua Park",
              value: 1,
            },
            {
              name: "Umm Al Quwain Fort",
              value: 1,
            },
            {
              name: "Al Sinniyah Island",
              value: 1,
            },
          ],
        },
        {
          name: "Fishing",
          value: 1,
        },
        {
          name: "Real Estate",
          children: [
            {
              name: "Umm Al Quwain Marina",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Ras Al Khaimah",
      children: [
        {
          name: "Tourism",
          children: [
            {
              name: "Jebel Jais",
              value: 1,
            },
            {
              name: "Al Hamra Village",
              value: 1,
            },
            {
              name: "Dhayah Fort",
              value: 1,
            },
            {
              name: "Iceland Water Park",
              value: 1,
            },
          ],
        },
        {
          name: "Industry",
          children: [
            {
              name: "RAK Ceramics",
              value: 1,
            },
            {
              name: "RAK Rock",
              value: 1,
            },
          ],
        },
        {
          name: "Real Estate",
          children: [
            {
              name: "Al Marjan Island",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Fujairah",
      children: [
        {
          name: "Tourism",
          children: [
            {
              name: "Fujairah Fort",
              value: 1,
            },
            {
              name: "Al Aqah Beach",
              value: 1,
            },
            {
              name: "Snoopy Island",
              value: 1,
            },
            {
              name: "Al Badiyah Mosque",
              value: 1,
            },
          ],
        },
        {
          name: "Port",
          children: [
            {
              name: "Port of Fujairah",
              value: 1,
            },
            {
              name: "Fujairah Free Zone",
              value: 1,
            },
          ],
        },
        {
          name: "Oil & Gas",
          value: 1,
        },
      ],
    },
  ],
};

export default chartData;
