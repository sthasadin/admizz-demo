const countryList = [
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
  	value: 'AmericanSamoa'
  },
  {
  	label: 'Andorra',
  	value: 'Andorra'
  },
  {
  	label: 'Angola',
  	value: 'Angola'
  },
  {
  	label: 'Anguilla',
  	value: 'Anguilla'
  },
  {
  	label: 'Antigua and Barbuda',
  	value: 'Antigua and Barbuda'
  },
  {
  	label: 'Argentina',
  	value: 'Argentina'
  },
  {
  	label: 'Armenia',
  	value: 'Armenia'
  },
  {
  	label: 'Aruba',
  	value: 'Aruba'
  },
  {
  	label: 'Australia',
  	value: 'Australia'
  },
  {
  	label: 'Austria',
  	value: 'Austria'
  },
  {
  	label: 'Azerbaijan',
  	value: 'Azerbaijan'
  },
  {
  	label: 'Bahamas',
  	value: 'Bahamas'
  },
  {
  	label: 'Bahrain',
  	value: 'Bahrain'
  },
  {
  	label: 'Bangladesh',
  	value: 'Bangladesh'
  },
  {
  	label: 'Barbados',
  	value: 'Barbados'
  },
  {
  	label: 'Belarus',
  	value: 'Belarus'
  },
  {
  	label: 'Belgium',
  	value: 'Belgium'
  },
  {
  	label: 'Belize',
  	value: 'Belize'
  },
  {
  	label: 'Benin',
  	value: 'Benin'
  },
  {
  	label: 'Bermuda',
  	value: 'Bermuda'
  },
  {
  	label: 'Bhutan',
  	value: 'Bhutan'
  },
  {
  	label: 'Bosnia and Herzegovina',
  	value: 'Bosnia and Herzegovina'
  },
  {
  	label: 'Botswana',
  	value: 'Botswana'
  },
  {
  	label: 'Brazil',
  	value: 'Brazil'
  },
  {
  	label: 'British Indian Ocean Territory',
  	value: 'British Indian Ocean Territory'
  },
  {
  	label: 'Bulgaria',
  	value: 'Bulgaria'
  },
  {
  	label: 'Burkina Faso',
  	value: 'Burkina Faso'
  },
  {
  	label: 'Burundi',
  	value: 'Burundi'
  },
  {
  	label: 'Cambodia',
  	value: 'Cambodia'
  },
  {
  	label: 'Cameroon',
  	value: 'Cameroon'
  },
  {
  	label: 'Canada',
  	value: 'Canada'
  },
  {
  	label: 'Cape Verde',
  	value: 'Cape Verde'
  },
  {
  	label: 'Cayman Islands',
  	value: 'Cayman Islands'
  },
  {
  	label: 'Central African Republic',
  	value: 'Central African Republic'
  },
  {
  	label: 'Chad',
  	value: 'Chad'
  },
  {
  	label: 'Chile',
  	value: 'Chile'
  },
  {
  	label: 'China',
  	value: 'China'
  },
  {
  	label: 'Christmas Island',
  	value: 'Christmas Island'
  },
  {
  	label: 'Colombia',
  	value: 'Colombia'
  },
  {
  	label: 'Comoros',
  	value: 'Comoros'
  },
  {
  	label: 'Congo',
  	value: 'Congo'
  },
  {
  	label: 'Cook Islands',
  	value: 'Cook Islands'
  },
  {
  	label: 'Costa Rica',
  	value: 'Costa Rica'
  },
  {
  	label: 'Croatia',
  	value: 'Croatia'
  },
  {
  	label: 'Cuba',
  	value: 'Cuba'
  },
  {
  	label: 'Cyprus',
  	value: 'Cyprus'
  },
  {
  	label: 'Czech Republic',
  	value: 'Czech Republic'
  },
  {
  	label: 'Denmark',
  	value: 'Denmark'
  },
  {
  	label: 'Djibouti',
  	value: 'Djibouti'
  },
  {
  	label: 'Dominica',
  	value: 'Dominica'
  },
  {
  	label: 'Dominican Republic',
  	value: 'Dominican Republic'
  },
  {
  	label: 'Ecuador',
  	value: 'Ecuador'
  },
  {
  	label: 'Egypt',
  	value: 'Egypt'
  },
  {
  	label: 'El Salvador',
  	value: 'El Salvador'
  },
  {
  	label: 'Equatorial Guinea',
  	value: 'Equatorial Guinea'
  },
  {
  	label: 'Eritrea',
  	value: 'Eritrea'
  },
  {
  	label: 'Estonia',
  	value: 'Estonia'
  },
  {
  	label: 'Ethiopia',
  	value: 'Ethiopia'
  },
  {
  	label: 'Faroe Islands',
  	value: 'Faroe Islands'
  },
  {
  	label: 'Fiji',
  	value: 'Fiji'
  },
  {
  	label: 'Finland',
  	value: 'Finland'
  },
  {
  	label: 'France',
  	value: 'France'
  },
  {
  	label: 'French Guiana',
  	value: 'French Guiana'
  },
  {
  	label: 'French Polynesia',
  	value: 'French Polynesia'
  },
  {
  	label: 'Gabon',
  	value: 'Gabon'
  },
  {
  	label: 'Gambia',
  	value: 'Gambia'
  },
  {
  	label: 'Georgia',
  	value: 'Georgia'
  },
  {
  	label: 'Germany',
  	value: 'Germany'
  },
  {
  	label: 'Ghana',
  	value: 'Ghana'
  },
  {
  	label: 'Gibraltar',
  	value: 'Gibraltar'
  },
  {
  	label: 'Greece',
  	value: 'Greece'
  },
  {
  	label: 'Greenland',
  	value: 'Greenland'
  },
  {
  	label: 'Grenada',
  	value: 'Grenada'
  },
  {
  	label: 'Guadeloupe',
  	value: 'Guadeloupe'
  },
  {
  	label: 'Guam',
  	value: 'Guam'
  },
  {
  	label: 'Guatemala',
  	value: 'Guatemala'
  },
  {
  	label: 'Guinea',
  	value: 'Guinea'
  },
  {
  	label: 'Guinea-Bissau',
  	value: 'Guinea-Bissau'
  },
  {
  	label: 'Guyana',
  	value: 'Guyana'
  },
  {
  	label: 'Haiti',
  	value: 'Haiti'
  },
  {
  	label: 'Honduras',
  	value: 'Honduras'
  },
  {
  	label: 'Hungary',
  	value: 'Honduras'
  },
  {
  	label: 'Iceland',
  	value: 'Iceland'
  },
  {
  	label: 'India',
  	value: 'india',
    // code:'+91'
  },
  {
  	label: 'Indonesia',
  	value: 'Indonesia'
  },
  {
  	label: 'Iraq',
  	value: 'Iraq'
  },
  {
  	label: 'Ireland',
  	value: 'Iraq'
  },
  {
  	label: 'Israel',
  	value: 'Israel'
  },
  {
  	label: 'Italy',
  	value: 'Italy'
  },
  {
  	label: 'Jamaica',
  	value: 'Italy'
  },
  {
  	label: 'Japan',
  	value: 'Japan'
  },
  {
  	label: 'Jordan',
  	value: 'Jordan'
  },
  {
  	label: 'Kazakhstan',
  	value: 'Kazakhstan'
  },
  {
  	label: 'Kenya',
  	value: 'Kenya'
  },
  {
  	label: 'Kiribati',
  	value: 'Kiribati'
  },
  {
  	label: 'Kuwait',
  	value: 'Kuwait'
  },
  {
  	label: 'Kyrgyzstan',
  	value: 'Kyrgyzstan'
  },
  {
  	label: 'Latvia',
  	value: 'Latvia'
  },
  {
  	label: 'Lebanon',
  	value: 'Lebanon'
  },
  {
  	label: 'Lesotho',
  	value: 'Lesotho'
  },
  {
  	label: 'Liberia',
  	value: 'Liberia'
  },
  {
  	label: 'Liechtenstein',
  	value: 'Liechtenstein'
  },
  {
  	label: 'Lithuania',
  	value: 'Lithuania'
  },
  {
  	label: 'Luxembourg',
  	value: 'Luxembourg'
  },
  {
  	label: 'Madagascar',
  	value: 'Madagascar'
  },
  {
  	label: 'Malawi',
  	value: 'Malawi'
  },
  {
  	label: 'Malaysia',
  	value: 'Malaysia'
  },
  {
  	label: 'Maldives',
  	value: 'Maldives'
  },
  {
  	label: 'Mali',
  	value: 'Mali'
  },
  {
  	label: 'Malta',
  	value: 'Malta'
  },
  {
  	label: 'Marshall Islands',
  	value: 'Marshall Islands'
  },
  {
  	label: 'Martinique',
  	value: 'Martinique'
  },
  {
  	label: 'Mauritania',
  	value: 'Mauritania'
  },
  {
  	label: 'Mauritius',
  	value: 'Mauritius'
  },
  {
  	label: 'Mayotte',
  	value: 'Mayotte'
  },
  {
  	label: 'Mexico',
  	value: 'Mexico'
  },
  {
  	label: 'Monaco',
  	value: 'Monaco'
  },
  {
  	label: 'Mongolia',
  	value: 'Mongolia'
  },
  {
  	label: 'Montenegro',
  	value: 'Montenegro'
  },
  {
  	label: 'Montserrat',
  	value: 'Montserrat'
  },
  {
  	label: 'Morocco',
  	value: 'Morocco'
  },
  {
  	label: 'Myanmar',
  	value: 'Myanmar'
  },
  {
  	label: 'Namibia',
  	value: 'Namibia'
  },
  {
  	label: 'Nauru',
  	value: 'Nauru'
  },
  {
  	label: 'Nepal',
  	value: 'Nepal'
  },
  {
  	label: 'Netherlands',
  	value: 'Netherlands'
  },
  {
  	label: 'Netherlands Antilles',
  	value: 'Netherlands Antilles'
  },
  {
  	label: 'New Caledonia',
  	value: 'New Caledonia'
  },
  {
  	label: 'New Zealand',
  	value: 'New Zealand'
  },
  {
  	label: 'Nicaragua',
  	value: 'Nicaragua'
  },
  {
  	label: 'Niger',
  	value: 'Niger'
  },
  {
  	label: 'Nigeria',
  	value: 'Nigeria'
  },
  {
  	label: 'Niue',
  	value: 'Nigeria'
  },
  {
  	label: 'Norfolk Island',
  	value: 'Norfolk Island'
  },
  {
  	label: 'Northern Mariana Islands',
  	value: 'Northern Mariana Islands'
  },
  {
  	label: 'Norway',
  	value: 'Norway'
  },
  {
  	label: 'Oman',
  	value: 'Oman'
  },
  {
  	label: 'Pakistan',
  	value: 'Pakistan'
  },
  {
  	label: 'Palau',
  	value: 'Palau'
  },
  {
  	label: 'Panama',
  	value: 'Panama'
  },
  {
  	label: 'Papua New Guinea',
  	value: 'Papua New Guinea'
  },
  {
  	label: 'Paraguay',
  	value: 'Paraguay'
  },
  {
  	label: 'Peru',
  	value: 'Peru'
  },
  {
  	label: 'Philippines',
  	value: 'Philippines'
  },
  {
  	label: 'Poland',
  	value: 'Poland'
  },
  {
  	label: 'Portugal',
  	value: 'Portugal'
  },
  {
  	label: 'Puerto Rico',
  	value: 'Puerto Rico'
  },
  {
  	label: 'Qatar',
  	value: 'Qatar'
  },
  {
  	label: 'Romania',
  	value: 'Romania'
  },
  {
  	label: 'Rwanda',
  	value: 'Rwanda'
  },
  {
  	label: 'Samoa',
  	value: 'Samoa'
  },
  {
  	label: 'San Marino',
  	value: 'San Marino'
  },
  {
  	label: 'Saudi Arabia',
  	value: 'Saudi Arabia'
  },
  {
  	label: 'Senegal',
  	value: 'Senegal'
  },
  {
  	label: 'Serbia',
  	value: 'Serbia'
  },
  {
  	label: 'Seychelles',
  	value: 'Seychelles'
  },
  {
  	label: 'Sierra Leone',
  	value: 'Sierra Leone'
  },
  {
  	label: 'Singapore',
  	value: 'Singapore'
  },
  {
  	label: 'Slovakia',
  	value: 'Slovakia'
  },
  {
  	label: 'Slovenia',
  	value: 'Slovenia'
  },
  {
  	label: 'Solomon Islands',
  	value: 'Solomon Islands'
  },
  {
  	label: 'South Africa',
  	value: 'South Africa'
  },
  {
  	label: 'South Georgia and the South Sandwich Islands',
  	value: 'South Georgia and the South Sandwich Islands'
  },
  {
  	label: 'Spain',
  	value: 'Spain'
  },
  {
  	label: 'Sri Lanka',
  	value: 'Sri Lanka'
  },
  {
  	label: 'Sudan',
  	value: 'Sudan'
  },
  {
  	label: 'Surilabel',
  	value: 'Surilabel'
  },
  {
  	label: 'Swaziland',
  	value: 'Swaziland'
  },
  {
  	label: 'Sweden',
  	value: 'Sweden'
  },
  {
  	label: 'Switzerland',
  	value: 'Switzerland'
  },
  {
  	label: 'Tajikistan',
  	value: 'Tajikistan'
  },
  {
  	label: 'Thailand',
  	value: 'Thailand'
  },
  {
  	label: 'Togo',
  	value: 'Togo'
  },
  {
  	label: 'Tokelau',
  	value: 'Tokelau'
  },
  {
  	label: 'Tonga',
  	value: 'Tonga'
  },
  {
  	label: 'Trinidad and Tobago',
  	value: 'Trinidad and Tobago'
  },
  {
  	label: 'Tunisia',
  	value: 'Tunisia'
  },
  {
  	label: 'Turkey',
  	value: 'Turkey'
  },
  {
  	label: 'Turkmenistan',
  	value: 'Turkmenistan'
  },
  {
  	label: 'Turks and Caicos Islands',
  	value: 'Turks and Caicos Islands'
  },
  {
  	label: 'Tuvalu',
  	value: 'Tuvalu'
  },
  {
  	label: 'Uganda',
  	value: 'Uganda'
  },
  {
  	label: 'Ukraine',
  	value: 'Ukraine'
  },
  {
  	label: 'United Arab Emirates',
  	value: 'United Arab Emirates'
  },
  {
  	label: 'United Kingdom',
  	value: 'United Kingdom'
  },
  {
  	label: 'United States',
  	value: 'United States'
  },
  {
  	label: 'Uruguay',
  	value: '+598'
  },
  {
  	label: 'Uzbekistan',
  	value: 'Uzbekistan'
  },
  {
  	label: 'Vanuatu',
  	value: 'Vanuatu'
  },
  {
  	label: 'Wallis and Futuna',
  	value: 'Wallis and Futuna'
  },
  {
  	label: 'Yemen',
  	value: 'Yemen'
  },
  {
  	label: 'Zambia',
  	value: 'Zambia'
  },
  {
  	label: 'Zimbabwe',
  	value: 'Zimbabwe'
  },
  {
  	label: 'Ålland Islands',
  	value: 'Ålland Islands'
  },
  {
  	label: 'Antarctica',
  	value: 'Antarctica'
  },
  {
  	label: 'Bolivia, Plurinational State of',
  	value: 'Bolivia, Plurinational State of'
  },
  {
  	label: 'Brunei Darussalam',
  	value: 'Brunei Darussalam'
  },
  {
  	label: 'Cocos (Keeling) Islands',
  	value: 'Cocos (Keeling) Islands'
  },
  {
  	label: 'Congo, The Democratic Republic of the',
  	value: 'Congo, The Democratic Republic of the'
  },
  {
  	label: "Côte d'Ivoire",
  	value: 'Côte d Ivoire'
  },
  {
  	label: 'Falkland Islands (Malvinas)',
  	value: 'Falkland Islands (Malvinas)'
  },
  {
  	label: 'Guernsey',
  	value: 'Guernsey'
  },
  {
  	label: 'Holy See (Vatican City State)',
  	value: 'Holy See (Vatican City State)'
  },
  {
  	label: 'Hong Kong',
  	value: 'Hong Kong'
  },
  {
  	label: 'Iran, Islamic Republic of',
  	value: 'Iran, Islamic Republic of'
  },
  {
  	label: 'Isle of Man',
  	value: 'Isle of Man'
  },
  {
  	label: 'Jersey',
  	value: 'Jersey'
  },
  {
  	label: "Korea, Democratic People's Republic of",
  	value: 'Korea, Democratic Peoples Republic of'
  },
  {
  	label: 'Korea, Republic of',
  	value: 'Korea, Republic of'
  },
  {
  	label: "Lao People's Democratic Republic",
  	value: '+Lao Peoples Democratic Republic'
  },
  {
  	label: 'Libyan Arab Jamahiriya',
  	value: 'Libyan Arab Jamahiriya'
  },
  {
  	label: 'Macao',
  	value: 'Macao'
  },
  {
  	label: 'Macedonia, The Former Yugoslav Republic of',
  	value: 'Macedonia, The Former Yugoslav Republic of'
  },
  {
  	label: 'Micronesia, Federated States of',
  	value: 'Micronesia, Federated States of'
  },
  {
  	label: 'Moldova, Republic of',
  	value: 'Moldova, Republic of'
  },
  {
  	label: 'Mozambique',
  	value: 'Mozambique'
  },
  {
  	label: 'Palestinian Territory, Occupied',
  	value: 'Palestinian Territory, Occupied'
  },
  {
  	label: 'Pitcairn',
  	value: 'Pitcairn'
  },
  {
  	label: 'Réunion',
  	value: 'Réunion'
  },
  {
  	label: 'Russia',
  	value: 'Russia'
  },
  {
  	label: 'Saint Barthélemy',
  	value: 'Saint Barthélemy'
  },
  {
  	label: 'Saint Helena, Ascension and Tristan Da Cunha',
  	value: 'Saint Helena, Ascension and Tristan Da Cunha'
  },
  {
  	label: 'Saint Kitts and Nevis',
  	value: 'Saint Kitts and Nevis'
  },
  {
  	label: 'Saint Lucia',
  	value: 'Saint Lucia'
  },
  {
  	label: 'Saint Martin',
  	value: 'Saint Martin'
  },
  {
  	label: 'Saint Pierre and Miquelon',
  	value: 'Saint Pierre and Miquelon'
  },
  {
  	label: 'Saint Vincent and the Grenadines',
  	value: 'Saint Vincent and the Grenadines'
  },
  {
  	label: 'Sao Tome and Principe',
  	value: 'Sao Tome and Principe'
  },
  {
  	label: 'Somalia',
  	value: 'Somalia'
  },
  {
  	label: 'Svalbard and Jan Mayen',
  	value: 'Svalbard and Jan Mayen'
  },
  {
  	label: 'Syrian Arab Republic',
  	value: 'Syrian Arab Republic'
  },
  {
  	label: 'Taiwan, Province of China',
  	value: 'Taiwan, Province of China'
  },
  {
  	label: 'Tanzania, United Republic of',
  	value: 'Tanzania, United Republic of'
  },
  {
  	label: 'Timor-Leste',
  	value: 'Timor-Leste'
  },
  {
  	label: 'Venezuela, Bolivarian Republic of',
  	value: 'Venezuela, Bolivarian Republic of'
  },
  {
  	label: 'Viet Nam',
  	value: 'Viet Nam'
  },
  {
  	label: 'Virgin Islands, British',
  	value: 'Virgin Islands, British'
  },
  {
  	label: 'Virgin Islands, U.S.',
  	value: 'Virgin Islands, U.S.'
  }
];

export { countryList };
