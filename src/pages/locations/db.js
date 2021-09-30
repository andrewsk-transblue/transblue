const locations = [
    {
        name: 'Transblue New Orleans',
        urlCity: 'new-orleans',
        address1: '365 Canal St',
        address2: 'Suite 2690',
        city: 'New Orleans',
        state: 'LA',
        zipcode: '70130',
        lat: 29.951230,
        lon: -90.065490,
        location: 'Louisiana',
        region: 'southwest',
        image: 'southwest.jpg',
        phone: '(504) 350-1200',
        email: 'TransblueNewOrleans@transblue.org',
        locations: {
            "Metairie": [
                70001,
                70002,
                70003,
                70005,
                70006,
                70004,
                70009,
                70010,
                70011,
                70033,
                70055,
                70060
            ],
            "Ama": [
                70031
            ],
            "Arabi": [
                70032
            ],
            "Chalmette": [
                70043,
                70044
            ],
            "Gretna": [
                70053,
                70056,
                70054
            ],
            "Harvey": [
                70058,
                70059
            ],
            "Kenner": [
                70062,
                70065,
                70063,
                70064,
                70097
            ],
            "Marrero": [
                70072,
                70073
            ],
            "Meraux": [
                70075
            ],
            "Westwego": [
                70094,
                70096
            ],
            "New Orleans": [
                70112,
                70113,
                70114,
                70115,
                70116,
                70117,
                70118,
                70119,
                70121,
                70122,
                70123,
                70124,
                70125,
                70126,
                70130,
                70131,
                70141,
                70142,
                70145,
                70148,
                70150,
                70151,
                70152,
                70153,
                70154,
                70156,
                70157,
                70158,
                70159,
                70160,
                70161,
                70162,
                70164,
                70165,
                70166,
                70167,
                70170,
                70172,
                70174,
                70175,
                70176,
                70177,
                70178,
                70179,
                70181,
                70182,
                70183,
                70184,
                70185,
                70190,
                70195
            ]
        }
    },
    {
        name: 'Transblue Arlington',
        urlCity: 'arlington',
        address1: '7777 Leesburg Pike',
        address2: 'Suite 414N',
        city: 'Falls Church',
        state: 'VA',
        zipcode: '22043',
        lat: 38.845680,
        lon: -77.139950,
        location: 'Virginia',
        region: 'midwest',
        image: 'midwest.jpeg',
        phone: '(571) 407 3433',
        email: 'TransblueArlington@transblue.org',
        locations: {
            "Dunn Loring": [
                22027
            ],
            "Fairfax": [
                22037
            ],
            "Falls Church": [
                22041,
                22042,
                22043,
                22044,
                22046,
                22040
            ],
            "Mc Lean": [
                22101,
                22102,
                22106,
                22107,
                22108,
                22109
            ],
            "Vienna": [
                22180,
                22181,
                22182,
                22183
            ],
            "Arlington": [
                22201,
                22202,
                22203,
                22204,
                22205,
                22206,
                22207,
                22209,
                22213,
                22214,
                22210,
                22212,
                22215,
                22216,
                22217,
                22219,
                22225,
                22226,
                22227,
                22230,
                22240,
                22241,
                22242,
                22243,
                22244,
                22245,
                22246
            ],
            "Fort Myer": [
                22211
            ],
            "Washington": [
                20301,
                20350
            ],
            "Greenway": [
                22067
            ],
            "West Mclean": [
                22103
            ]
        }
    },
    {
        name: 'Transblue Bellevue',
        urlCity: 'bellevue',
        address1: '2495 152nd Ave NE',
        address2: '',
        city: 'Redmond',
        state: 'WA',
        zipcode: '98052',
        lat: 47.6203375,
        lon: -122.1302692,
        phone: '(425) 504 6565',
        location: 'Washington',
        region: 'northwest',
        image: 'northwest.jpg',
        email: 'TransblueBellevue@transblue.org',
        locations: {
            "Bellevue": [
                98004,
                98005,
                98007,
                98008,
                98009
            ],
            "Bothell": [
                98011,
                98041
            ],
            "Carnation": [
                98014
            ],
            "Duvall": [
                98019
            ],
            "Fall City": [
                98024
            ],
            "Kenmore": [
                98028
            ],
            "Issaquah": [
                98029
            ],
            "Kirkland": [
                98033,
                98034,
                98083
            ],
            "North Bend": [
                98045
            ],
            "Redmond": [
                98052,
                98053,
                98073
            ],
            "Snoqualmie": [
                98065
            ],
            "Woodinville": [
                98072,
                98077
            ],
            "Sammamish": [
                98075
            ]
        }
    },
    {
        name: 'Transblue Carrollton',
        urlCity: 'carrollton',
        address1: '2155 Chenault Dr',
        address2: 'Suite 320',
        city: 'Carrollton',
        state: 'TX',
        zipcode: '75006',
        lat: 32.96477127075195,
        lon: -96.84489440917969,
        location: 'Texas',
        region: 'southwest',
        image: 'southwest.jpg',
        phone: '(940) 290-0011',
        email: 'TransblueCarrollton@transblue.org',
        locations: {
            "Carrollton": [
                75006,
                75007,
                75010,
                75011
            ],
            "The Colony": [
                75056
            ],
            "Lewisville": [
                75057,
                75067,
                75029
            ],
            "Dallas": [
                75234,
                75287,
                75370,
                75381
            ]
        }
    },
    {
        name: 'Transblue Mount Vernon',
        urlCity: 'mount-vernon',
        address1: '4152 Meridian Street',
        address2: 'STE 105 #31',
        city: 'Bellingham',
        state: 'WA',
        zipcode: '98226',
        lat: 48.792102,
        lon: -122.485578,
        location: 'Washington',
        region: 'northwest',
        image: 'northwest.jpg',
        phone: '(360) 854 3111',
        email: 'TransblueMountVernon@transblue.org',
        locations: {
            "Everett": [
                98201,
                98203,
                98204,
                98208,
                98206,
                98207,
                98213,
                98291
            ],
            "Acme": [
                98220
            ],
            "Anacortes": [
                98221
            ],
            "Arlington": [
                98223
            ],
            "Bellingham": [
                98225,
                98226,
                98227,
                98228,
                98229
            ],
            "Blaine": [
                98230,
                98231
            ],
            "Bow": [
                98232
            ],
            "Burlington": [
                98233
            ],
            "Clearlake": [98235],
            "Clinton": [98236],
            "Conway": [98238],
            "Coupeville": [98239],
            "Custer": [98240],
            "Everson": [98247],
            "Ferndale": [98248],
            "Freeland": [98249],
            "Granite Falls": [98252],
            "Green Bank": [98253],
            "Hamilton": [98255],
            "La Conner": [98257],
            "Lake Stevens": [98258],
            "Langley": [98260],
            "Lummi Island": [98262],
            "Lymen": [98263],
            "Lynden": [98264],
            "Maple Falls": [98266],
            "Marysville": [
                98270,
                98271
            ],
            "Monroe": [98272],
            "Mount Vernon": [
                98273,
                98274
            ],
            "Mukilteo": [98275],
            "Nooksack": [98276],
            "North Lakewood": [98259],
            "Oak Harbor": [98277],
            "Camano Island": [98282],
            "Sedro Woolley": [98284],
            "Snohomish": [98290, 98296],
            "Stanwood": [98292],
            "Sultan": [98294],
            "Sumas": [98295],
            "Sylvana": [98287]

        }
    },
    {
        name: 'Transblue Cypress',
        urlCity: 'cypress',
        address1: '8118 Fry Rd',
        address2: 'Ste 1204',
        city: 'Cypress',
        state: 'TX',
        zipcode: '77433',
        lat: 29.9435514,
        lon: -95.7154727,
        location: 'Texas',
        region: 'southwest',
        image: 'southwest.jpg',
        phone: '(346)-818-3830',
        email: 'TransblueCypress@transblue.org',
        locations: {
            "Houston": [
                77040,
                77064,
                77065,
                77066,
                77069,
                77070,
                77086,
                77095,
                77240,
                77241,
                77269
            ],
            "Magnolia": [
                77355,
                77353
            ],
            "Pinehurst": [
                77362
            ],
            "Tomball": [
                77375,
                77377
            ],
            "Spring": [
                77379,
                77391
            ],
            "Cypress": [
                77429,
                77433,
                77410
            ],
            "Hockley": [
                77447
            ],
            "Hufsmith": [
                77337
            ]
        }
    },
    {
        name: 'Transblue Frisco',
        urlCity: 'frisco',
        address1: '2210 Bear Lake Dr',
        address2: '',
        city: 'Euless',
        state: 'TX',
        zipcode: '76039',
        lat: 32.8695975,
        lon: -97.0933109,
        location: 'Texas',
        region: 'southwest',
        image: 'southwest.jpg',
        phone: '(972) 292 8989',
        email: 'TransblueFrisco@transblue.org',
        locations: {
            "Frisco": [
                75033,
                75034,
                75035
            ],
            "Little Elm": [
                75068
            ],
            "Prosper": [
                75078
            ],
            "Aubrey": [
                76227
            ]
        }
    },
    {
        name: 'Transblue Laguna Beach',
        urlCity:'laguna-beach',
        address1: '27071 Cabot Rd',
        address2: '#108',
        city: 'Laguna Hills',
        state: 'CA',
        zipcode: '92653',
        lat: 33.5819956,
        lon: -117.6742463,
        location: 'California',
        region: 'west',
        image: 'west.jpg',
        phone: '(949) 317-5700',
        email: 'TransblueLagunaBeach@transblue.org',
        locations: {
            "Foothill Ranch": [
                92610
            ],
            "Irvine": [
                92618,
                92619
            ],
            "Capistrano Beach": [
                92624
            ],
            "Dana Point": [
                92629
            ],
            "Lake Forest": [
                92630
            ],
            "Laguna Woods": [
                92637
            ],
            "Laguna Beach": [
                92651,
                92652
            ],
            "Laguna Hills": [
                92653,
                92654
            ],
            "Aliso Viejo": [
                92656,
                92698
            ],
            "San Clemente": [
                92672,
                92673,
                92674
            ],
            "San Juan Capistrano": [
                92675,
                92693
            ],
            "Silverado": [
                92676
            ],
            "Laguna Niguel": [
                92677,
                92607
            ],
            "Trabuco Canyon": [
                92679,
                92678
            ],
            "Rancho Santa Margarita": [
                92688
            ],
            "Mission Viejo": [
                92691,
                92692,
                92690
            ],
            "Ladera Ranch": [
                92694
            ],
            "El Toro": [
                92609
            ],
            "East Irvine": [
                92650
            ]
        }
    },
    {
        name: 'Transblue Norfolk',
        urlCity: 'norfolk',
        address1: '18 Central Street',
        address2: 'Unit 5',
        city: 'Foxborough',
        state: 'MA',
        zipcode: '02035',
        lat: 42.0640278,
        lon: -71.2494236,
        location: 'Massachusetts',
        region: 'northeast',
        image: 'northeast.jpeg',
        phone: '(508) 507-6444',
        email: 'TransblueNorfolk@transblue.org'
    },    
    {
        name: 'Transblue Olympia',
        urlCity:'olympia',
        address1: '1110 Golf Club Rd SE',
        address2: 'Suite 101',
        city: 'Lacey',
        state: 'WA',
        zipcode: '98503',
        lat: 47.0373783,
        lon: -122.828375,
        location: 'Washington',
        region: 'northwest',
        image: 'northwest.jpg',
        phone: '(360) 634-8181',
        email: 'TransblueOlympia@transblue.org',
        locations: {
            "Concrete": [
                98237
            ],
            "Eatonville": [
                98328
            ],
            "Tacoma": [
                98433
            ],
            "Olympia": [
                98501,
                98502,
                98506,
                98512,
                98513,
                98516,
                98504,
                98507,
                98508,
                98599
            ],
            "Lacey": [
                98503,
                98509
            ],
            "Centralia": [
                98531
            ],
            "Mccleary": [
                98557
            ],
            "Oakville": [
                98568
            ],
            "Rainier": [
                98576
            ],
            "Rochester": [
                98579
            ],
            "Roy": [
                98580
            ],
            "Tenino": [
                98589
            ],
            "Yelm": [
                98597
            ],
            "La Grande": [
                98348
            ],
            "Tumwater": [
                98511
            ],
            "Bucoda": [
                98530
            ],
            "East Olympia": [
                98540
            ],
            "Galvin": [
                98544
            ],
            "Littlerock": [
                98556
            ]
        }
    },    
    {
        name: 'Transblue Round Rock',
        urlCity: 'round-rock',
        address1: '16238 RR 620 N',
        address2: 'STE F #379',
        city: 'Austin',
        state: 'TX',
        zipcode: '78717',
        lat: 30.49347,
        lon: -97.725854,
        location: 'Texas',
        region: 'southwest',
        image: 'southwest.jpg',
        phone: '(512) 910 8008',
        email: 'TransblueRoundRock@transblue.org',
        locations: {
            "Cedar Park": [
                78613,
                78630
            ],
            "Georgetown": [
                78626,
                78628,
                78627
            ],
            "Leander": [
                78641,
                78645,
                78646
            ],
            "Liberty Hill": [
                78642
            ],
            "Round Rock": [
                78664,
                78665,
                78681,
                78680,
                78682,
                78683
            ],
            "Austin": [
                78717,
                78732,
                78734
            ],
            "Walburg": [
                78673
            ],
            "Weir": [
                78674
            ]
        }
    },   
    // {
    //     name: 'Transblue Seattle',
    //     address1: '16318 43rd St E',
    //     address2: '',
    //     city: 'Sumner',
    //     state: 'WA',
    //     zipcode: '98391',
    //     lat: 47.218106,
    //     lon: -122.209942,
    //     location: 'Washington',
    //     region: 'northwest',
    //     image: 'northwest.jpg',
    //     phone: '(253) 555-9000'
    // },
    {
        name: 'Transblue Sudbury',
        urlCity: 'sudbury',
        address1: '416 Boston Post road',
        address2: 'Suite #5',
        city: 'Sudbury',
        state: 'MA',
        zipcode: '01776',
        lat: 42.3613075,
        lon: -71.4209112,
        location: 'Massachusetts',
        region: 'northeast',
        image: 'northeast.jpeg',
        phone: '(978) 209-9500',
        email: 'TransblueSudbury@transblue.org'
        /////need to add locations
    },
    {
        name: 'Transblue Ballard',
        urlCity: 'ballard',
        address1: '2442 NW Market St',
        address2: 'PMB #119',
        city: 'Seattle',
        state: 'WA',
        zipcode: '98107',
        lat: 47.668890,
        lon: -122.389410,
        location: 'Washington',
        region: 'northwest',
        image: 'northwest.jpg',
        phone: '(425) 528 1133',
        email: 'TransblueBallard@transblue.org'
        ////need to add locations
    },
    {
        name: 'Transblue Seattle',
        urlCity: 'seattle',
        address1: '901 Rainier Ave N',
        address2: 'STE B203',
        city: 'Renton',
        state: 'WA',
        zipcode: '98057',
        lat: 47.49752,
        lon: -122.2204552,
        location: 'Washington',
        region: 'northwest',
        image: 'northwest.jpg',
        phone: '(206) 649-6688',
        email: 'TransblueSeattle@transblue.org',
        locations: {
            "Bellevue": [98006, 98015],
            "Mercer Island": [98040],
            "Preston": [98050],
            "Renton": [98055, 98056, 98057, 98058, 98059],
            "Seahurst": [98062],
            "Seattle": [98199,98101,98106,98108,98109,98116,98118,98119,98121,98122,98126, 98134, 98136, 98144,98146,98148, 98154,98158,98161,98164,98166, 98168, 98174, 98178,98181, 98188, 98199,98111,98114,98124, 98129, 98131, 98138, 98139,98141,98190, 98191,98194]
        }
    },
    {
        name: 'Transblue Tacoma',
        urlCity: 'tacoma',
        address1: '2825 Milton Way',
        address2: '#81',
        city: 'Milton',
        state: 'WA',
        zipcode: '98354',
        lat: 47.2499741,
        lon: -122.2967181,
        location: 'Washington',
        region: 'northwest',
        image: 'northwest.jpg',
        phone: '(253) 449-1099',
        email: 'TransblueTacoma@transblue.org',
        locations: {
            "Auburn": [
                98001,
                98002,
                98092,
                98071
            ],
            "Federal Way": [
                98003,
                98023,
                98063,
                98093
            ],
            "Black Diamond": [
                98010
            ],
            "Enumclaw": [
                98022
            ],
            "Kent": [
                98030,
                98031,
                98032,
                98042,
                98035,
                98064,
                98089
            ],
            "Maple Valley": [
                98038
            ],
            "Pacific": [
                98047
            ],
            "Ravensdale": [
                98051
            ],
            "Seattle": [
                98198
            ],
            "Buckley": [
                98321
            ],
            "Carbonado": [
                98323
            ],
            "Gig Harbor": [
                98332,
                98335
            ],
            "Graham": [
                98338
            ],
            "Milton": [
                98354
            ],
            "Orting": [
                98360
            ],
            "Puyallup": [
                98371,
                98372,
                98373,
                98374,
                98375
            ],
            "South Prairie": [
                98385
            ],
            "Spanaway": [
                98387
            ],
            "Steilacoom": [
                98388
            ],
            "Sumner": [
                98390,
                98352
            ],
            "Bonney Lake": [
                98391
            ],
            "Tacoma": [
                98402,
                98403,
                98404,
                98405,
                98406,
                98407,
                98408,
                98409,
                98413,
                98416,
                98418,
                98421,
                98422,
                98424,
                98443,
                98444,
                98445,
                98446,
                98447,
                98465,
                98466,
                98401,
                98411,
                98412,
                98415,
                98417,
                98419,
                98448,
                98464,
                98471,
                98481,
                98490,
                98493
            ],
            "Mcchord Afb": [
                98438
            ],
            "Lakewood": [
                98439,
                98498,
                98499,
                98496,
                98497
            ],
            "University Place": [
                98467
            ],
            "Hobart": [
                98025
            ],
            "Kapowsin": [
                98344
            ],
            "Wauna": [
                98395
            ],
            "Wilkeson": [
                98396
            ]
        }
    }
]

export default locations;

