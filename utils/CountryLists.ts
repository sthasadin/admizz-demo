const countryList = [
  // {
  //   label: "India",
  //   value: "india",
  // },
  // {
  //   label: "Nepal",
  //   value: "nepal",
  // },

  
  {
  	label: 'Afghanistan',
  	value: 'Afghanistan'
  },
  {
  	label: 'Albania',
  	value: 'Albania'
  },
  {
  	label: 'Algeria',
  	value: 'Algeria'
  },
  {
  	label: 'AmericanSamoa',
  	value: '+AmericanSamoa'
  },
  {
  	label: 'Andorra',
  	value: '+376'
  },
  {
  	label: 'Angola',
  	value: '+244'
  },
  {
  	label: 'Anguilla',
  	value: '+1 264'
  },
  {
  	label: 'Antigua and Barbuda',
  	value: '+1268'
  },
  {
  	label: 'Argentina',
  	value: '+54'
  },
  {
  	label: 'Armenia',
  	value: '+374'
  },
  {
  	label: 'Aruba',
  	value: '+297'
  },
  {
  	label: 'Australia',
  	value: '+61'
  },
  {
  	label: 'Austria',
  	value: '+43'
  },
  {
  	label: 'Azerbaijan',
  	value: '+994'
  },
  {
  	label: 'Bahamas',
  	value: '+1 242'
  },
  {
  	label: 'Bahrain',
  	value: '+973'
  },
  {
  	label: 'Bangladesh',
  	value: '+880'
  },
  {
  	label: 'Barbados',
  	value: '+1 246'
  },
  {
  	label: 'Belarus',
  	value: '+375'
  },
  {
  	label: 'Belgium',
  	value: '+32'
  },
  {
  	label: 'Belize',
  	value: '+501'
  },
  {
  	label: 'Benin',
  	value: '+229'
  },
  {
  	label: 'Bermuda',
  	value: '+1 441'
  },
  {
  	label: 'Bhutan',
  	value: '+975'
  },
  {
  	label: 'Bosnia and Herzegovina',
  	value: '+387'
  },
  {
  	label: 'Botswana',
  	value: '+267'
  },
  {
  	label: 'Brazil',
  	value: '+55'
  },
  {
  	label: 'British Indian Ocean Territory',
  	value: '+246'
  },
  {
  	label: 'Bulgaria',
  	value: '+359'
  },
  {
  	label: 'Burkina Faso',
  	value: '+226'
  },
  {
  	label: 'Burundi',
  	value: '+257'
  },
  {
  	label: 'Cambodia',
  	value: '+855'
  },
  {
  	label: 'Cameroon',
  	value: '+237'
  },
  {
  	label: 'Canada',
  	value: '+1'
  },
  {
  	label: 'Cape Verde',
  	value: '+238'
  },
  {
  	label: 'Cayman Islands',
  	value: '+ 345'
  },
  {
  	label: 'Central African Republic',
  	value: '+236'
  },
  {
  	label: 'Chad',
  	value: '+235'
  },
  {
  	label: 'Chile',
  	value: '+56'
  },
  {
  	label: 'China',
  	value: '+86'
  },
  {
  	label: 'Christmas Island',
  	value: '+61'
  },
  {
  	label: 'Colombia',
  	value: '+57'
  },
  {
  	label: 'Comoros',
  	value: '+269'
  },
  {
  	label: 'Congo',
  	value: '+242'
  },
  {
  	label: 'Cook Islands',
  	value: '+682'
  },
  {
  	label: 'Costa Rica',
  	value: '+506'
  },
  {
  	label: 'Croatia',
  	value: '+385'
  },
  {
  	label: 'Cuba',
  	value: '+53'
  },
  {
  	label: 'Cyprus',
  	value: '+537'
  },
  {
  	label: 'Czech Republic',
  	value: '+420'
  },
  {
  	label: 'Denmark',
  	value: '+45'
  },
  {
  	label: 'Djibouti',
  	value: '+253'
  },
  {
  	label: 'Dominica',
  	value: '+1 767'
  },
  {
  	label: 'Dominican Republic',
  	value: '+1 849'
  },
  {
  	label: 'Ecuador',
  	value: '+593'
  },
  {
  	label: 'Egypt',
  	value: '+20'
  },
  {
  	label: 'El Salvador',
  	value: '+503'
  },
  {
  	label: 'Equatorial Guinea',
  	value: '+240'
  },
  {
  	label: 'Eritrea',
  	value: '+291'
  },
  {
  	label: 'Estonia',
  	value: '+372'
  },
  {
  	label: 'Ethiopia',
  	value: '+251'
  },
  {
  	label: 'Faroe Islands',
  	value: '+298'
  },
  {
  	label: 'Fiji',
  	value: '+679'
  },
  {
  	label: 'Finland',
  	value: '+358'
  },
  {
  	label: 'France',
  	value: '+33'
  },
  {
  	label: 'French Guiana',
  	value: '+594'
  },
  {
  	label: 'French Polynesia',
  	value: '+689'
  },
  {
  	label: 'Gabon',
  	value: '+241'
  },
  {
  	label: 'Gambia',
  	value: '+220'
  },
  {
  	label: 'Georgia',
  	value: '+995'
  },
  {
  	label: 'Germany',
  	value: '+49'
  },
  {
  	label: 'Ghana',
  	value: '+233'
  },
  {
  	label: 'Gibraltar',
  	value: '+350'
  },
  {
  	label: 'Greece',
  	value: '+30'
  },
  {
  	label: 'Greenland',
  	value: '+299'
  },
  {
  	label: 'Grenada',
  	value: '+1 473'
  },
  {
  	label: 'Guadeloupe',
  	value: '+590'
  },
  {
  	label: 'Guam',
  	value: '+1 671'
  },
  {
  	label: 'Guatemala',
  	value: '+502'
  },
  {
  	label: 'Guinea',
  	value: '+224'
  },
  {
  	label: 'Guinea-Bissau',
  	value: '+245'
  },
  {
  	label: 'Guyana',
  	value: '+595'
  },
  {
  	label: 'Haiti',
  	value: '+509'
  },
  {
  	label: 'Honduras',
  	value: '+504'
  },
  {
  	label: 'Hungary',
  	value: '+36'
  },
  {
  	label: 'Iceland',
  	value: '+354'
  },
  {
  	label: 'India',
  	value: 'india',
    // code:'+91'
  },
  {
  	label: 'Indonesia',
  	value: '+62'
  },
  {
  	label: 'Iraq',
  	value: '+964'
  },
  {
  	label: 'Ireland',
  	value: '+353'
  },
  {
  	label: 'Israel',
  	value: '+972'
  },
  {
  	label: 'Italy',
  	value: '+39'
  },
  {
  	label: 'Jamaica',
  	value: '+1 876'
  },
  {
  	label: 'Japan',
  	value: '+81'
  },
  {
  	label: 'Jordan',
  	value: '+962'
  },
  {
  	label: 'Kazakhstan',
  	value: '+7 7'
  },
  {
  	label: 'Kenya',
  	value: '+254'
  },
  {
  	label: 'Kiribati',
  	value: '+686'
  },
  {
  	label: 'Kuwait',
  	value: '+965'
  },
  {
  	label: 'Kyrgyzstan',
  	value: '+996'
  },
  {
  	label: 'Latvia',
  	value: '+371'
  },
  {
  	label: 'Lebanon',
  	value: '+961'
  },
  {
  	label: 'Lesotho',
  	value: '+266'
  },
  {
  	label: 'Liberia',
  	value: '+231'
  },
  {
  	label: 'Liechtenstein',
  	value: '+423'
  },
  {
  	label: 'Lithuania',
  	value: '+370'
  },
  {
  	label: 'Luxembourg',
  	value: '+352'
  },
  {
  	label: 'Madagascar',
  	value: '+261'
  },
  {
  	label: 'Malawi',
  	value: '+265'
  },
  {
  	label: 'Malaysia',
  	value: '+60'
  },
  {
  	label: 'Maldives',
  	value: '+960'
  },
  {
  	label: 'Mali',
  	value: '+223'
  },
  {
  	label: 'Malta',
  	value: '+356'
  },
  {
  	label: 'Marshall Islands',
  	value: '+692'
  },
  {
  	label: 'Martinique',
  	value: '+596'
  },
  {
  	label: 'Mauritania',
  	value: '+222'
  },
  {
  	label: 'Mauritius',
  	value: '+230'
  },
  {
  	label: 'Mayotte',
  	value: '+262'
  },
  {
  	label: 'Mexico',
  	value: '+52'
  },
  {
  	label: 'Monaco',
  	value: '+377'
  },
  {
  	label: 'Mongolia',
  	value: '+976'
  },
  {
  	label: 'Montenegro',
  	value: '+382'
  },
  {
  	label: 'Montserrat',
  	value: '+1664'
  },
  {
  	label: 'Morocco',
  	value: '+212'
  },
  {
  	label: 'Myanmar',
  	value: '+95'
  },
  {
  	label: 'Namibia',
  	value: '+264'
  },
  {
  	label: 'Nauru',
  	value: '+674'
  },
  {
  	label: 'Nepal',
  	value: 'nepal'
  },
  {
  	label: 'Netherlands',
  	value: '+31'
  },
  {
  	label: 'Netherlands Antilles',
  	value: '+599'
  },
  {
  	label: 'New Caledonia',
  	value: '+687'
  },
  {
  	label: 'New Zealand',
  	value: '+64'
  },
  {
  	label: 'Nicaragua',
  	value: '+505'
  },
  {
  	label: 'Niger',
  	value: '+227'
  },
  {
  	label: 'Nigeria',
  	value: '+234'
  },
  {
  	label: 'Niue',
  	value: '+683'
  },
  {
  	label: 'Norfolk Island',
  	value: '+672'
  },
  {
  	label: 'Northern Mariana Islands',
  	value: '+1 670'
  },
  {
  	label: 'Norway',
  	value: '+47'
  },
  {
  	label: 'Oman',
  	value: '+968'
  },
  {
  	label: 'Pakistan',
  	value: '+92'
  },
  {
  	label: 'Palau',
  	value: '+680'
  },
  {
  	label: 'Panama',
  	value: '+507'
  },
  {
  	label: 'Papua New Guinea',
  	value: '+675'
  },
  {
  	label: 'Paraguay',
  	value: '+595'
  },
  {
  	label: 'Peru',
  	value: '+51'
  },
  {
  	label: 'Philippines',
  	value: '+63'
  },
  {
  	label: 'Poland',
  	value: '+48'
  },
  {
  	label: 'Portugal',
  	value: '+351'
  },
  {
  	label: 'Puerto Rico',
  	value: '+1 939'
  },
  {
  	label: 'Qatar',
  	value: '+974'
  },
  {
  	label: 'Romania',
  	value: '+40'
  },
  {
  	label: 'Rwanda',
  	value: '+250'
  },
  {
  	label: 'Samoa',
  	value: '+685'
  },
  {
  	label: 'San Marino',
  	value: '+378'
  },
  {
  	label: 'Saudi Arabia',
  	value: '+966'
  },
  {
  	label: 'Senegal',
  	value: '+221'
  },
  {
  	label: 'Serbia',
  	value: '+381'
  },
  {
  	label: 'Seychelles',
  	value: '+248'
  },
  {
  	label: 'Sierra Leone',
  	value: '+232'
  },
  {
  	label: 'Singapore',
  	value: '+65'
  },
  {
  	label: 'Slovakia',
  	value: '+421'
  },
  {
  	label: 'Slovenia',
  	value: '+386'
  },
  {
  	label: 'Solomon Islands',
  	value: '+677'
  },
  {
  	label: 'South Africa',
  	value: '+27'
  },
  {
  	label: 'South Georgia and the South Sandwich Islands',
  	value: '+500'
  },
  {
  	label: 'Spain',
  	value: '+34'
  },
  {
  	label: 'Sri Lanka',
  	value: '+94'
  },
  {
  	label: 'Sudan',
  	value: '+249'
  },
  {
  	label: 'Surilabel',
  	value: '+597'
  },
  {
  	label: 'Swaziland',
  	value: '+268'
  },
  {
  	label: 'Sweden',
  	value: '+46'
  },
  {
  	label: 'Switzerland',
  	value: '+41'
  },
  {
  	label: 'Tajikistan',
  	value: '+992'
  },
  {
  	label: 'Thailand',
  	value: '+66'
  },
  {
  	label: 'Togo',
  	value: '+228'
  },
  {
  	label: 'Tokelau',
  	value: '+690'
  },
  {
  	label: 'Tonga',
  	value: '+676'
  },
  {
  	label: 'Trinidad and Tobago',
  	value: '+1 868'
  },
  {
  	label: 'Tunisia',
  	value: '+216'
  },
  {
  	label: 'Turkey',
  	value: '+90'
  },
  {
  	label: 'Turkmenistan',
  	value: '+993'
  },
  {
  	label: 'Turks and Caicos Islands',
  	value: '+1 649'
  },
  {
  	label: 'Tuvalu',
  	value: '+688'
  },
  {
  	label: 'Uganda',
  	value: '+256'
  },
  {
  	label: 'Ukraine',
  	value: '+380'
  },
  {
  	label: 'United Arab Emirates',
  	value: '+971'
  },
  {
  	label: 'United Kingdom',
  	value: '+44'
  },
  {
  	label: 'United States',
  	value: '+1'
  },
  {
  	label: 'Uruguay',
  	value: '+598'
  },
  {
  	label: 'Uzbekistan',
  	value: '+998'
  },
  {
  	label: 'Vanuatu',
  	value: '+678'
  },
  {
  	label: 'Wallis and Futuna',
  	value: '+681'
  },
  {
  	label: 'Yemen',
  	value: '+967'
  },
  {
  	label: 'Zambia',
  	value: '+260'
  },
  {
  	label: 'Zimbabwe',
  	value: '+263'
  },
  {
  	label: 'Ålland Islands',
  	value: '+358'
  },
  {
  	label: 'Antarctica',
  	value: null
  },
  {
  	label: 'Bolivia, Plurinational State of',
  	value: '+591'
  },
  {
  	label: 'Brunei Darussalam',
  	value: '+673'
  },
  {
  	label: 'Cocos (Keeling) Islands',
  	value: '+61'
  },
  {
  	label: 'Congo, The Democratic Republic of the',
  	value: '+243'
  },
  {
  	label: "Côte d'Ivoire",
  	value: '+225'
  },
  {
  	label: 'Falkland Islands (Malvinas)',
  	value: '+500'
  },
  {
  	label: 'Guernsey',
  	value: '+44'
  },
  {
  	label: 'Holy See (Vatican City State)',
  	value: '+379'
  },
  {
  	label: 'Hong Kong',
  	value: '+852'
  },
  {
  	label: 'Iran, Islamic Republic of',
  	value: '+98'
  },
  {
  	label: 'Isle of Man',
  	value: '+44'
  },
  {
  	label: 'Jersey',
  	value: '+44'
  },
  {
  	label: "Korea, Democratic People's Republic of",
  	value: '+850'
  },
  {
  	label: 'Korea, Republic of',
  	value: '+82'
  },
  {
  	label: "Lao People's Democratic Republic",
  	value: '+856'
  },
  {
  	label: 'Libyan Arab Jamahiriya',
  	value: '+218'
  },
  {
  	label: 'Macao',
  	value: '+853'
  },
  {
  	label: 'Macedonia, The Former Yugoslav Republic of',
  	value: '+389'
  },
  {
  	label: 'Micronesia, Federated States of',
  	value: '+691'
  },
  {
  	label: 'Moldova, Republic of',
  	value: '+373'
  },
  {
  	label: 'Mozambique',
  	value: '+258'
  },
  {
  	label: 'Palestinian Territory, Occupied',
  	value: '+970'
  },
  {
  	label: 'Pitcairn',
  	value: '+872'
  },
  {
  	label: 'Réunion',
  	value: '+262'
  },
  {
  	label: 'Russia',
  	value: '+7'
  },
  {
  	label: 'Saint Barthélemy',
  	value: '+590'
  },
  {
  	label: 'Saint Helena, Ascension and Tristan Da Cunha',
  	value: '+290'
  },
  {
  	label: 'Saint Kitts and Nevis',
  	value: '+1 869'
  },
  {
  	label: 'Saint Lucia',
  	value: '+1 758'
  },
  {
  	label: 'Saint Martin',
  	value: '+590'
  },
  {
  	label: 'Saint Pierre and Miquelon',
  	value: '+508'
  },
  {
  	label: 'Saint Vincent and the Grenadines',
  	value: '+1 784'
  },
  {
  	label: 'Sao Tome and Principe',
  	value: '+239'
  },
  {
  	label: 'Somalia',
  	value: '+252'
  },
  {
  	label: 'Svalbard and Jan Mayen',
  	value: '+47'
  },
  {
  	label: 'Syrian Arab Republic',
  	value: '+963'
  },
  {
  	label: 'Taiwan, Province of China',
  	value: '+886'
  },
  {
  	label: 'Tanzania, United Republic of',
  	value: '+255'
  },
  {
  	label: 'Timor-Leste',
  	value: '+670'
  },
  {
  	label: 'Venezuela, Bolivarian Republic of',
  	value: '+58'
  },
  {
  	label: 'Viet Nam',
  	value: '+84'
  },
  {
  	label: 'Virgin Islands, British',
  	value: '+1 284'
  },
  {
  	label: 'Virgin Islands, U.S.',
  	value: '+1 340'
  }
];

export { countryList };
