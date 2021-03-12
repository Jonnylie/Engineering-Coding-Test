const dialingCodeData = [
  {
    id: "US",
    value: "+1",
    dialingCode: "UK (+44)",
  },
  {
    id: "BS",
    value: "+1242",
    dialingCode: "Bahamas (+1242)",
  },
  {
    id: "BB",
    value: "+1246",
    dialingCode: "Barbados (+1246)",
  },
  {
    id: "AI",
    value: "+1264",
    dialingCode: "Anguilla (+1264)",
  },
  {
    id: "AG",
    value: "+1268",
    dialingCode: "Antigua &amp; Barbuda (+1268)",
  },
  {
    id: "KY",
    value: "+1345",
    dialingCode: "Cayman Islands (+1345)",
  },
  {
    id: "BM",
    value: "+1441",
    dialingCode: "Bermuda (+1441)",
  },
  {
    id: "GD",
    value: "+1473",
    dialingCode: "Grenada (+1473)",
  },
  {
    id: "TC",
    value: "+1649",
    dialingCode: "Turks &amp; Caicos Islands (+1649)",
  },
  {
    id: "MS",
    value: "+1664",
    dialingCode: "Montserrat (+1664)",
  },
  {
    id: "SC",
    value: "+1758",
    dialingCode: "St. Lucia (+1758)",
  },
  {
    id: "PR",
    value: "+1787",
    dialingCode: "Puerto Rico (+1787)",
  },
  {
    id: "DM",
    value: "+1809",
    dialingCode: "Dominica (+1809)",
  },
  {
    id: "DO",
    value: "+1809",
    dialingCode: "Dominican Republic (+1809)",
  },
  {
    id: "TT",
    value: "+1868",
    dialingCode: "Trinidad &amp; Tobago (+1868)",
  },
  {
    id: "KN",
    value: "+1869",
    dialingCode: "St. Kitts (+1869)",
  },
  {
    id: "JM",
    value: "+1876",
    dialingCode: "Jamaica (+1876)",
  },
  {
    id: "EG",
    value: "+20",
    dialingCode: "Egypt (+20)",
  },
  {
    id: "MA",
    value: "+212",
    dialingCode: "Morocco (+212)",
  },
  {
    id: "DZ",
    value: "+213",
    dialingCode: "Algeria (+213)",
  },
  {
    id: "TN",
    value: "+216",
    dialingCode: "Tunisia (+216)",
  },
  {
    id: "LY",
    value: "+218",
    dialingCode: "Libya (+218)",
  },
  {
    id: "GM",
    value: "+220",
    dialingCode: "Gambia (+220)",
  },
  {
    id: "SN",
    value: "+221",
    dialingCode: "Senegal (+221)",
  },
  {
    id: "MR",
    value: "+222",
    dialingCode: "Mauritania (+222)",
  },
  {
    id: "ML",
    value: "+223",
    dialingCode: "Mali (+223)",
  },
  {
    id: "GN",
    value: "+224",
    dialingCode: "Guinea (+224)",
  },
  {
    id: "BF",
    value: "+226",
    dialingCode: "Burkina Faso (+226)",
  },
  {
    id: "NE",
    value: "+227",
    dialingCode: "Niger (+227)",
  },
  {
    id: "TG",
    value: "+228",
    dialingCode: "Togo (+228)",
  },
  {
    id: "BJ",
    value: "+229",
    dialingCode: "Benin (+229)",
  },
  {
    id: "LR",
    value: "+231",
    dialingCode: "Liberia (+231)",
  },
  {
    id: "SL",
    value: "+232",
    dialingCode: "Sierra Leone (+232)",
  },
  {
    id: "GH",
    value: "+233",
    dialingCode: "Ghana (+233)",
  },
  {
    id: "NG",
    value: "+234",
    dialingCode: "Nigeria (+234)",
  },
  {
    id: "CF",
    value: "+236",
    dialingCode: "Central African Republic (+236)",
  },
  {
    id: "CM",
    value: "+237",
    dialingCode: "Cameroon (+237)",
  },
  {
    id: "CV",
    value: "+238",
    dialingCode: "Cape Verde Islands (+238)",
  },
  {
    id: "ST",
    value: "+239",
    dialingCode: "Sao Tome &amp; Principe (+239)",
  },
  {
    id: "GQ",
    value: "+240",
    dialingCode: "Equatorial Guinea (+240)",
  },
  {
    id: "GA",
    value: "+241",
    dialingCode: "Gabon (+241)",
  },
  {
    id: "CG",
    value: "+242",
    dialingCode: "Congo (+242)",
  },
  {
    id: "AO",
    value: "+244",
    dialingCode: "Angola (+244)",
  },
  {
    id: "GW",
    value: "+245",
    dialingCode: "Guinea - Bissau (+245)",
  },
  {
    id: "SC",
    value: "+248",
    dialingCode: "Seychelles (+248)",
  },
  {
    id: "SD",
    value: "+249",
    dialingCode: "Sudan (+249)",
  },
  {
    id: "RW",
    value: "+250",
    dialingCode: "Rwanda (+250)",
  },
  {
    id: "ET",
    value: "+251",
    dialingCode: "Ethiopia (+251)",
  },
  {
    id: "SO",
    value: "+252",
    dialingCode: "Somalia (+252)",
  },
  {
    id: "DJ",
    value: "+253",
    dialingCode: "Djibouti (+253)",
  },
  {
    id: "KE",
    value: "+254",
    dialingCode: "Kenya (+254)",
  },
  {
    id: "UG",
    value: "+256",
    dialingCode: "Uganda (+256)",
  },
  {
    id: "BI",
    value: "+257",
    dialingCode: "Burundi (+257)",
  },
  {
    id: "MZ",
    value: "+258",
    dialingCode: "Mozambique (+258)",
  },
  {
    id: "ZM",
    value: "+260",
    dialingCode: "Zambia (+260)",
  },
  {
    id: "MG",
    value: "+261",
    dialingCode: "Madagascar (+261)",
  },
  {
    id: "RE",
    value: "+262",
    dialingCode: "Reunion (+262)",
  },
  {
    id: "ZW",
    value: "+263",
    dialingCode: "Zimbabwe (+263)",
  },
  {
    id: "NA",
    value: "+264",
    dialingCode: "Namibia (+264)",
  },
  {
    id: "MW",
    value: "+265",
    dialingCode: "Malawi (+265)",
  },
  {
    id: "LS",
    value: "+266",
    dialingCode: "Lesotho (+266)",
  },
  {
    id: "BW",
    value: "+267",
    dialingCode: "Botswana (+267)",
  },
  {
    id: "SZ",
    value: "+268",
    dialingCode: "Swaziland (+268)",
  },
  {
    id: "KM",
    value: "+269",
    dialingCode: "Comoros (+269)",
  },
  {
    id: "YT",
    value: "+269",
    dialingCode: "Mayotte (+269)",
  },
  {
    id: "ZA",
    value: "+27",
    dialingCode: "South Africa (+27)",
  },
  {
    id: "SH",
    value: "+290",
    dialingCode: "St. Helena (+290)",
  },
  {
    id: "ER",
    value: "+291",
    dialingCode: "Eritrea (+291)",
  },
  {
    id: "AW",
    value: "+297",
    dialingCode: "Aruba (+297)",
  },
  {
    id: "FO",
    value: "+298",
    dialingCode: "Faroe Islands (+298)",
  },
  {
    id: "GL",
    value: "+299",
    dialingCode: "Greenland (+299)",
  },
  {
    id: "GR",
    value: "+30",
    dialingCode: "Greece (+30)",
  },
  {
    id: "NL",
    value: "+31",
    dialingCode: "Netherlands (+31)",
  },
  {
    id: "BE",
    value: "+32",
    dialingCode: "Belgium (+32)",
  },
  {
    id: "FR",
    value: "+33",
    dialingCode: "France (+33)",
  },
  {
    id: "ES",
    value: "+34",
    dialingCode: "Spain (+34)",
  },
  {
    id: "GI",
    value: "+350",
    dialingCode: "Gibraltar (+350)",
  },
  {
    id: "PT",
    value: "+351",
    dialingCode: "Portugal (+351)",
  },
  {
    id: "LU",
    value: "+352",
    dialingCode: "Luxembourg (+352)",
  },
  {
    id: "IE",
    value: "+353",
    dialingCode: "Ireland (+353)",
  },
  {
    id: "IS",
    value: "+354",
    dialingCode: "Iceland (+354)",
  },
  {
    id: "MT",
    value: "+356",
    dialingCode: "Malta (+356)",
  },
  {
    id: "CY",
    value: "+357",
    dialingCode: "Cyprus South (+357)",
  },
  {
    id: "FI",
    value: "+358",
    dialingCode: "Finland (+358)",
  },
  {
    id: "BG",
    value: "+359",
    dialingCode: "Bulgaria (+359)",
  },
  {
    id: "HU",
    value: "+36",
    dialingCode: "Hungary (+36)",
  },
  {
    id: "LT",
    value: "+370",
    dialingCode: "Lithuania (+370)",
  },
  {
    id: "LV",
    value: "+371",
    dialingCode: "Latvia (+371)",
  },
  {
    id: "EE",
    value: "+372",
    dialingCode: "Estonia (+372)",
  },
  {
    id: "MD",
    value: "+373",
    dialingCode: "Moldova (+373)",
  },
  {
    id: "AM",
    value: "+374",
    dialingCode: "Armenia (+374)",
  },
  {
    id: "BY",
    value: "+375",
    dialingCode: "Belarus (+375)",
  },
  {
    id: "AD",
    value: "+376",
    dialingCode: "Andorra (+376)",
  },
  {
    id: "MC",
    value: "+377",
    dialingCode: "Monaco (+377)",
  },
  {
    id: "SM",
    value: "+378",
    dialingCode: "San Marino (+378)",
  },
  {
    id: "VA",
    value: "+379",
    dialingCode: "Vatican City (+379)",
  },
  {
    id: "UA",
    value: "+380",
    dialingCode: "Ukraine (+380)",
  },
  {
    id: "CS",
    value: "+381",
    dialingCode: "Serbia (+381)",
  },
  {
    id: "HR",
    value: "+385",
    dialingCode: "Croatia (+385)",
  },
  {
    id: "SI",
    value: "+386",
    dialingCode: "Slovenia (+386)",
  },
  {
    id: "BA",
    value: "+387",
    dialingCode: "Bosnia Herzegovina (+387)",
  },
  {
    id: "MK",
    value: "+389",
    dialingCode: "Macedonia (+389)",
  },
  {
    id: "IT",
    value: "+39",
    dialingCode: "Italy (+39)",
  },
  {
    id: "RO",
    value: "+40",
    dialingCode: "Romania (+40)",
  },
  {
    id: "CH",
    value: "+41",
    dialingCode: "Switzerland (+41)",
  },
  {
    id: "LI",
    value: "+417",
    dialingCode: "Liechtenstein (+417)",
  },
  {
    id: "CZ",
    value: "+42",
    dialingCode: "Czech Republic (+42)",
  },
  {
    id: "SK",
    value: "+421",
    dialingCode: "Slovak Republic (+421)",
  },
  {
    id: "AT",
    value: "+43",
    dialingCode: "Austria (+43)",
  },
  {
    id: "GB",
    value: "+44",
    dialingCode: "Norway (+47)",
  },
  {
    id: "GB",
    value: "+44",
    dialingCode: "UK (+44)",
  },
  {
    id: "DK",
    value: "+45",
    dialingCode: "Denmark (+45)",
  },
  {
    id: "SE",
    value: "+46",
    dialingCode: "Sweden (+46)",
  },
  {
    id: "NO",
    value: "+47",
    dialingCode: "Norway (+47)",
  },
  {
    id: "PL",
    value: "+48",
    dialingCode: "Poland (+48)",
  },
  {
    id: "DE",
    value: "+49",
    dialingCode: "Germany (+49)",
  },
  {
    id: "FK",
    value: "+500",
    dialingCode: "Falkland Islands (+500)",
  },
  {
    id: "BZ",
    value: "+501",
    dialingCode: "Belize (+501)",
  },
  {
    id: "GT",
    value: "+502",
    dialingCode: "Guatemala (+502)",
  },
  {
    id: "SV",
    value: "+503",
    dialingCode: "El Salvador (+503)",
  },
  {
    id: "HN",
    value: "+504",
    dialingCode: "Honduras (+504)",
  },
  {
    id: "NI",
    value: "+505",
    dialingCode: "Nicaragua (+505)",
  },
  {
    id: "CR",
    value: "+506",
    dialingCode: "Costa Rica (+506)",
  },
  {
    id: "PA",
    value: "+507",
    dialingCode: "Panama (+507)",
  },
  {
    id: "HT",
    value: "+509",
    dialingCode: "Haiti (+509)",
  },
  {
    id: "PE",
    value: "+51",
    dialingCode: "Peru (+51)",
  },
  {
    id: "MX",
    value: "+52",
    dialingCode: "Mexico (+52)",
  },
  {
    id: "CU",
    value: "+53",
    dialingCode: "Cuba (+53)",
  },
  {
    id: "AR",
    value: "+54",
    dialingCode: "Argentina (+54)",
  },
  {
    id: "BR",
    value: "+55",
    dialingCode: "Brazil (+55)",
  },
  {
    id: "CL",
    value: "+56",
    dialingCode: "Chile (+56)",
  },
  {
    id: "CO",
    value: "+57",
    dialingCode: "Colombia (+57)",
  },
  {
    id: "VE",
    value: "+58",
    dialingCode: "Venezuela (+58)",
  },
  {
    id: "GP",
    value: "+590",
    dialingCode: "Guadeloupe (+590)",
  },
  {
    id: "BO",
    value: "+591",
    dialingCode: "Bolivia (+591)",
  },
  {
    id: "GY",
    value: "+592",
    dialingCode: "Guyana (+592)",
  },
  {
    id: "EC",
    value: "+593",
    dialingCode: "Ecuador (+593)",
  },
  {
    id: "GF",
    value: "+594",
    dialingCode: "French Guiana (+594)",
  },
  {
    id: "PY",
    value: "+595",
    dialingCode: "Paraguay (+595)",
  },
  {
    id: "MQ",
    value: "+596",
    dialingCode: "Martinique (+596)",
  },
  {
    id: "SR",
    value: "+597",
    dialingCode: "Suriname (+597)",
  },
  {
    id: "UY",
    value: "+598",
    dialingCode: "Uruguay (+598)",
  },
  {
    id: "MY",
    value: "+60",
    dialingCode: "Malaysia (+60)",
  },
  {
    id: "AU",
    value: "+61",
    dialingCode: "Australia (+61)",
    selected: true,
  },
  {
    id: "ID",
    value: "+62",
    dialingCode: "Indonesia (+62)",
  },
  {
    id: "PH",
    value: "+63",
    dialingCode: "Philippines (+63)",
  },
  {
    id: "NZ",
    value: "+64",
    dialingCode: "New Zealand (+64)",
  },
  {
    id: "SG",
    value: "+65",
    dialingCode: "Singapore (+65)",
  },
  {
    id: "TH",
    value: "+66",
    dialingCode: "Thailand (+66)",
  },
  {
    id: "NP",
    value: "+670",
    dialingCode: "Northern Marianas (+670)",
  },
  {
    id: "GU",
    value: "+671",
    dialingCode: "Guam (+671)",
  },
  {
    id: "NF",
    value: "+672",
    dialingCode: "Norfolk Islands (+672)",
  },
  {
    id: "BN",
    value: "+673",
    dialingCode: "Brunei (+673)",
  },
  {
    id: "NR",
    value: "+674",
    dialingCode: "Nauru (+674)",
  },
  {
    id: "PG",
    value: "+675",
    dialingCode: "Papua New Guinea (+675)",
  },
  {
    id: "TO",
    value: "+676",
    dialingCode: "Tonga (+676)",
  },
  {
    id: "SB",
    value: "+677",
    dialingCode: "Solomon Islands (+677)",
  },
  {
    id: "VU",
    value: "+678",
    dialingCode: "Vanuatu (+678)",
  },
  {
    id: "FJ",
    value: "+679",
    dialingCode: "Fiji (+679)",
  },
  {
    id: "PW",
    value: "+680",
    dialingCode: "Palau (+680)",
  },
  {
    id: "WF",
    value: "+681",
    dialingCode: "Wallis &amp; Futuna (+681)",
  },
  {
    id: "CK",
    value: "+682",
    dialingCode: "Cook Islands (+682)",
  },
  {
    id: "NU",
    value: "+683",
    dialingCode: "Niue (+683)",
  },
  {
    id: "KI",
    value: "+686",
    dialingCode: "Kiribati (+686)",
  },
  {
    id: "NC",
    value: "+687",
    dialingCode: "New Caledonia (+687)",
  },
  {
    id: "TV",
    value: "+688",
    dialingCode: "Tuvalu (+688)",
  },
  {
    id: "PF",
    value: "+689",
    dialingCode: "French Polynesia (+689)",
  },
  {
    id: "FM",
    value: "+691",
    dialingCode: "Micronesia (+691)",
  },
  {
    id: "MH",
    value: "+692",
    dialingCode: "Marshall Islands (+692)",
  },
  {
    id: "KZ",
    value: "+7",
    dialingCode: "Kazakhstan (+7)",
  },
  {
    id: "RU",
    value: "+7",
    dialingCode: "Russia (+7)",
  },
  {
    id: "TJ",
    value: "+7",
    dialingCode: "Tajikstan (+7)",
  },
  {
    id: "TM",
    value: "+7",
    dialingCode: "Turkmenistan (+7)",
  },
  {
    id: "UZ",
    value: "+7",
    dialingCode: "Uzbekistan (+7)",
  },
  {
    id: "GE",
    value: "+7880",
    dialingCode: "Georgia (+7880)",
  },
  {
    id: "JP",
    value: "+81",
    dialingCode: "Japan (+81)",
  },
  {
    id: "KR",
    value: "+82",
    dialingCode: "Korea South (+82)",
  },
  {
    id: "VN",
    value: "+84",
    dialingCode: "Vietnam (+84)",
  },
  {
    id: "VG",
    value: "+84",
    dialingCode: "Virgin Islands - British (+1284)",
  },
  {
    id: "VI",
    value: "+84",
    dialingCode: "Virgin Islands - US (+1340)",
  },
  {
    id: "KP",
    value: "+850",
    dialingCode: "Korea North (+850)",
  },
  {
    id: "HK",
    value: "+852",
    dialingCode: "Hong Kong (+852)",
  },
  {
    id: "MO",
    value: "+853",
    dialingCode: "Macao (+853)",
  },
  {
    id: "KH",
    value: "+855",
    dialingCode: "Cambodia (+855)",
  },
  {
    id: "LA",
    value: "+856",
    dialingCode: "Laos (+856)",
  },
  {
    id: "CN",
    value: "+86",
    dialingCode: "China (+86)",
  },
  {
    id: "BD",
    value: "+880",
    dialingCode: "Bangladesh (+880)",
  },
  {
    id: "TW",
    value: "+886",
    dialingCode: "Taiwan (+886)",
  },
  {
    id: "TR",
    value: "+90",
    dialingCode: "Turkey (+90)",
  },
  {
    id: "CY",
    value: "+90392",
    dialingCode: "Cyprus North (+90392)",
  },
  {
    id: "IN",
    value: "+91",
    dialingCode: "India (+91)",
  },
  {
    id: "LK",
    value: "+94",
    dialingCode: "Sri Lanka (+94)",
  },
  {
    id: "MN",
    value: "+95",
    dialingCode: "Myanmar (+95)",
  },
  {
    id: "MV",
    value: "+960",
    dialingCode: "Maldives (+960)",
  },
  {
    id: "LB",
    value: "+961",
    dialingCode: "Lebanon (+961)",
  },
  {
    id: "JO",
    value: "+962",
    dialingCode: "Jordan (+962)",
  },
  {
    id: "SI",
    value: "+963",
    dialingCode: "Syria (+963)",
  },
  {
    id: "IQ",
    value: "+964",
    dialingCode: "Iraq (+964)",
  },
  {
    id: "KW",
    value: "+965",
    dialingCode: "Kuwait (+965)",
  },
  {
    id: "SA",
    value: "+966",
    dialingCode: "Saudi Arabia (+966)",
  },
  {
    id: "YE",
    value: "+967",
    dialingCode: "Yemen (South)(+967)",
  },
  {
    id: "OM",
    value: "+968",
    dialingCode: "Oman (+968)",
  },
  {
    id: "YE",
    value: "+969",
    dialingCode: "Yemen (North)(+969)",
  },
  {
    id: "AE",
    value: "+971",
    dialingCode: "United Arab Emirates (+971)",
  },
  {
    id: "IL",
    value: "+972",
    dialingCode: "Israel (+972)",
  },
  {
    id: "BH",
    value: "+973",
    dialingCode: "Bahrain (+973)",
  },
  {
    id: "QA",
    value: "+974",
    dialingCode: "Qatar (+974)",
  },
  {
    id: "BT",
    value: "+975",
    dialingCode: "Bhutan (+975)",
  },
  {
    id: "MN",
    value: "+976",
    dialingCode: "Mongolia (+976)",
  },
  {
    id: "NP",
    value: "+977",
    dialingCode: "Nepal (+977)",
  },
  {
    id: "IR",
    value: "+98",
    dialingCode: "Iran (+98)",
  },
  {
    id: "TM",
    value: "+993",
    dialingCode: "Turkmenistan (+993)",
  },
  {
    id: "AZ",
    value: "+994",
    dialingCode: "Azerbaijan (+994)",
  },
  {
    id: "KG",
    value: "+996",
    dialingCode: "Kyrgyzstan (+996)",
  },
];

export default dialingCodeData;
