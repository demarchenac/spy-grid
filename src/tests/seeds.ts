import { RandomUser } from "../types/randomUser";

export const seeds = [
  "a3ace2a56a544a4c",
  "118eb105a400952e",
  "7493a086ddf6b622",
  "81297ffe047ad6f5",
  "f9d80b849ce0b52b",
];

interface RandomUserMock {
  [seed: string]: RandomUser;
}

export const mocks: RandomUserMock = {
  a3ace2a56a544a4c: {
    firstName: "Marion",
    lastName: "Walters",
    username: "greengoose570",
    city: "Perth",
    state: "Tasmania",
    country: "Australia",
    gender: "male",
    dob: new Date("1972-07-30T23:22:45.932Z"),
    eyeColor: "bg-indigo-600",
    timezone: {
      offset: "-5:00",
      description: "Eastern Time (US & Canada), Bogota, Lima",
    },
    largePhoto: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  "118eb105a400952e": {
    firstName: "Kerttu",
    lastName: "Marttila",
    username: "greenfish836",
    city: "Lemi",
    state: "Central Ostrobothnia",
    country: "Finland",
    gender: "female",
    dob: new Date("1966-07-06T20:53:57.194Z"),
    eyeColor: "bg-fuchsia-500",
    timezone: {
      offset: "-6:00",
      description: "Central Time (US & Canada), Mexico City",
    },
    largePhoto: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  "7493a086ddf6b622": {
    firstName: "Linda",
    lastName: "Fowler",
    username: "happybird747",
    city: "Chattanooga",
    state: "North Dakota",
    country: "United States",
    gender: "female",
    dob: new Date("1949-01-28T07:01:11.279Z"),
    eyeColor: "bg-red-600",
    timezone: {
      offset: "+11:00",
      description: "Magadan, Solomon Islands, New Caledonia",
    },
    largePhoto: "https://randomuser.me/api/portraits/women/73.jpg",
  },
  "81297ffe047ad6f5": {
    firstName: "Jesús",
    lastName: "Ibáñez",
    username: "crazytiger274",
    city: "Vitoria",
    state: "Cantabria",
    country: "Spain",
    gender: "female",
    dob: new Date("1988-02-03T17:06:41.488Z"),
    eyeColor: "bg-pink-400",
    timezone: {
      offset: "-3:30",
      description: "Newfoundland",
    },
    largePhoto: "https://randomuser.me/api/portraits/women/88.jpg",
  },
  f9d80b849ce0b52b: {
    firstName: "Alfred",
    lastName: "Price",
    username: "whitepanda785",
    city: "Nowra",
    state: "Queensland",
    country: "Australia",
    gender: "male",
    dob: new Date("1968-08-12T16:47:06.327Z"),
    eyeColor: "bg-indigo-600",
    timezone: {
      offset: "+1:00",
      description: "Brussels, Copenhagen, Madrid, Paris",
    },
    largePhoto: "https://randomuser.me/api/portraits/men/53.jpg",
  },
};

interface RawMock {
  [key: string]: object;
}

export const rawMocks: RawMock = {
  a3ace2a56a544a4c: {
    results: [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Marion",
          last: "Walters",
        },
        location: {
          street: {
            number: 3812,
            name: "Fairview St",
          },
          city: "Perth",
          state: "Tasmania",
          country: "Australia",
          postcode: 2065,
          coordinates: {
            latitude: "-84.1615",
            longitude: "-60.5726",
          },
          timezone: {
            offset: "-5:00",
            description: "Eastern Time (US & Canada), Bogota, Lima",
          },
        },
        email: "marion.walters@example.com",
        login: {
          uuid: "ae464abf-5c51-48d8-8155-87f43a4fae7c",
          username: "greengoose570",
          password: "barley",
          salt: "wWtfF1GX",
          md5: "b90e2994c387513bfabfe6f2451af8da",
          sha1: "6a2fc3593a6ad57f967828a44c3d930646115a78",
          sha256:
            "b1584dd62f4186f9f0a4622d241d44f496aee1c06f0503ccd6a0cb043adb9e10",
        },
        dob: {
          date: "1972-07-30T23:22:45.932Z",
          age: 50,
        },
        registered: {
          date: "2022-02-04T13:49:38.176Z",
          age: 1,
        },
        phone: "02-6296-9473",
        cell: "0468-816-644",
        id: {
          name: "TFN",
          value: "285222330",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/28.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
        },
        nat: "AU",
      },
    ],
    info: {
      seed: "a3ace2a56a544a4c",
      results: 1,
      page: 1,
      version: "1.4",
    },
  },
  "118eb105a400952e": {
    results: [
      {
        gender: "female",
        name: {
          title: "Ms",
          first: "Kerttu",
          last: "Marttila",
        },
        location: {
          street: {
            number: 6984,
            name: "Fredrikinkatu",
          },
          city: "Lemi",
          state: "Central Ostrobothnia",
          country: "Finland",
          postcode: 73045,
          coordinates: {
            latitude: "-25.8858",
            longitude: "134.7531",
          },
          timezone: {
            offset: "-6:00",
            description: "Central Time (US & Canada), Mexico City",
          },
        },
        email: "kerttu.marttila@example.com",
        login: {
          uuid: "79c3b260-beaa-4b63-8de5-4d6855485eac",
          username: "greenfish836",
          password: "true",
          salt: "6ONSAnb1",
          md5: "97624a787491b1165fb18ae7fecd60b1",
          sha1: "e7fde9cdbe0b31cd86e71d44bcc489c2e6349757",
          sha256:
            "ded3ac4421fdcee76aae505784cdee22661968d315c8a7c472fe6aa0cad6b3b4",
        },
        dob: {
          date: "1966-07-06T20:53:57.194Z",
          age: 56,
        },
        registered: {
          date: "2013-06-27T11:32:52.139Z",
          age: 9,
        },
        phone: "04-253-967",
        cell: "041-315-05-77",
        id: {
          name: "HETU",
          value: "NaNNA952undefined",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/31.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/31.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
        },
        nat: "FI",
      },
    ],
    info: {
      seed: "118eb105a400952e",
      results: 1,
      page: 1,
      version: "1.4",
    },
  },
  "7493a086ddf6b622": {
    results: [
      {
        gender: "female",
        name: {
          title: "Mrs",
          first: "Linda",
          last: "Fowler",
        },
        location: {
          street: {
            number: 532,
            name: "Pecan Acres Ln",
          },
          city: "Chattanooga",
          state: "North Dakota",
          country: "United States",
          postcode: 48225,
          coordinates: {
            latitude: "81.6971",
            longitude: "70.3806",
          },
          timezone: {
            offset: "+11:00",
            description: "Magadan, Solomon Islands, New Caledonia",
          },
        },
        email: "linda.fowler@example.com",
        login: {
          uuid: "947f092a-62b9-4a77-86e6-0b15cd33a7a1",
          username: "happybird747",
          password: "tsunami",
          salt: "lQMNCBpB",
          md5: "218b44b9eb236fa67e6342e816af635f",
          sha1: "7091d911df5e0d935fa9119c0f81fd559b3e2c20",
          sha256:
            "b8e9ec74a567f5257e9d2bda36689eedb6bb74181cb1e1efeed175e72f89266d",
        },
        dob: {
          date: "1949-01-28T07:01:11.279Z",
          age: 74,
        },
        registered: {
          date: "2009-06-05T11:14:02.376Z",
          age: 13,
        },
        phone: "(821) 746-1232",
        cell: "(270) 387-9825",
        id: {
          name: "SSN",
          value: "442-29-0820",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/73.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/73.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/73.jpg",
        },
        nat: "US",
      },
    ],
    info: {
      seed: "7493a086ddf6b622",
      results: 1,
      page: 1,
      version: "1.4",
    },
  },
  "81297ffe047ad6f5": {
    results: [
      {
        gender: "female",
        name: {
          title: "Mrs",
          first: "Jesús",
          last: "Ibáñez",
        },
        location: {
          street: {
            number: 9359,
            name: "Calle de La Almudena",
          },
          city: "Vitoria",
          state: "Cantabria",
          country: "Spain",
          postcode: 35062,
          coordinates: {
            latitude: "-32.1083",
            longitude: "85.9783",
          },
          timezone: {
            offset: "-3:30",
            description: "Newfoundland",
          },
        },
        email: "jesus.ibanez@example.com",
        login: {
          uuid: "76a4e7f3-4a0c-48e5-be34-e3c7e79dc565",
          username: "crazytiger274",
          password: "chloe1",
          salt: "NaVF5wB6",
          md5: "3abd251395c35efdd6d65e989be5486c",
          sha1: "f19640901acdc73ef3a20bfd26d391dcc8b2a6a4",
          sha256:
            "8b7454fe1eeeb5d58d3b2994029c2690e3be03670f2daef34d124816497f28bd",
        },
        dob: {
          date: "1988-02-03T17:06:41.488Z",
          age: 35,
        },
        registered: {
          date: "2012-03-31T05:16:42.491Z",
          age: 10,
        },
        phone: "945-883-432",
        cell: "692-665-707",
        id: {
          name: "DNI",
          value: "49599827-P",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/women/88.jpg",
          medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
        },
        nat: "ES",
      },
    ],
    info: {
      seed: "81297ffe047ad6f5",
      results: 1,
      page: 1,
      version: "1.4",
    },
  },
  f9d80b849ce0b52b: {
    results: [
      {
        gender: "male",
        name: {
          title: "Mr",
          first: "Alfred",
          last: "Price",
        },
        location: {
          street: {
            number: 3012,
            name: "Cherry St",
          },
          city: "Nowra",
          state: "Queensland",
          country: "Australia",
          postcode: 2296,
          coordinates: {
            latitude: "-89.0663",
            longitude: "-164.5517",
          },
          timezone: {
            offset: "+1:00",
            description: "Brussels, Copenhagen, Madrid, Paris",
          },
        },
        email: "alfred.price@example.com",
        login: {
          uuid: "0b74197e-5f04-4f6c-99fb-c658521060d8",
          username: "whitepanda785",
          password: "mental",
          salt: "u0ar8AVK",
          md5: "ad0ddcc8393869b4d3b4bb882d598164",
          sha1: "8d86199a38cf8affac03378732f7df6f21ac55f2",
          sha256:
            "953395df4c67af62664af5ada4e65786a339c790d61a5a102818b86707bae7a5",
        },
        dob: {
          date: "1968-08-12T16:47:06.327Z",
          age: 54,
        },
        registered: {
          date: "2008-10-25T07:11:14.031Z",
          age: 14,
        },
        phone: "03-1103-0855",
        cell: "0478-486-100",
        id: {
          name: "TFN",
          value: "576210197",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/53.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/53.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/53.jpg",
        },
        nat: "AU",
      },
    ],
    info: {
      seed: "f9d80b849ce0b52b",
      results: 1,
      page: 1,
      version: "1.4",
    },
  },
};
