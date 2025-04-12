const countriesPlusOneTerritory = [
    { name: "Spain", code: "ES", lat: 40.4168, lng: -3.7038, flag: "🇪🇸", official: true },
    { name: "Mexico", code: "MX", lat: 19.4326, lng: -99.1332, flag: "🇲🇽", official: true },
    { name: "Argentina", code: "AR", lat: -34.6037, lng: -58.3816, flag: "🇦🇷", official: true },
    { name: "Colombia", code: "CO", lat: 4.7110, lng: -74.0721, flag: "🇨🇴", official: true },
    { name: "Chile", code: "CL", lat: -33.4489, lng: -70.6693, flag: "🇨🇱", official: true },
    { name: "Peru", code: "PE", lat: -12.0464, lng: -77.0428, flag: "🇵🇪", official: true },
    { name: "Venezuela", code: "VE", lat: 10.4806, lng: -66.9036, flag: "🇻🇪", official: true },
    { name: "Ecuador", code: "EC", lat: -0.1807, lng: -78.4678, flag: "🇪🇨", official: true },
    { name: "Guatemala", code: "GT", lat: 14.6349, lng: -90.5069, flag: "🇬🇹", official: true },
    { name: "Cuba", code: "CU", lat: 23.1136, lng: -82.3666, flag: "🇨🇺", official: true },
    { name: "Bolivia", code: "BO", lat: -16.5000, lng: -68.1500, flag: "🇧🇴", official: true },
    { name: "Dominican Republic", code: "DO", lat: 18.4861, lng: -69.9312, flag: "🇩🇴", official: true },
    { name: "Honduras", code: "HN", lat: 14.0723, lng: -87.1921, flag: "🇭🇳", official: true },
    { name: "Paraguay", code: "PY", lat: -25.2637, lng: -57.5759, flag: "🇵🇾", official: true },
    { name: "El Salvador", code: "SV", lat: 13.6929, lng: -89.2182, flag: "🇸🇻", official: true },
    { name: "Nicaragua", code: "NI", lat: 12.114993, lng: -86.236174, flag: "🇳🇮", official: true },
    { name: "Costa Rica", code: "CR", lat: 9.9281, lng: -84.0907, flag: "🇨🇷", official: true },
    { name: "Panama", code: "PA", lat: 8.9824, lng: -79.5199, flag: "🇵🇦", official: true },
    { name: "Uruguay", code: "UY", lat: -34.9011, lng: -56.1645, flag: "🇺🇾", official: true },
    { name: "Equatorial Guinea", code: "GQ", lat: 3.75, lng: 8.7833, flag: "🇬🇶", official: true },
    { name: "Puerto Rico", code: "PR", lat: 18.2208, lng: -66.5901, flag: "🇵🇷", official: true, territory: true },

    // 🟡 Spanish-speaking influence (but not official)
    { name: "Philippines", code: "PH", lat: 13.41, lng: 122.56, flag: "🇵🇭", official: false },
    { name: "United States", code: "US", lat: 38.89511, lng: -77.03637, flag: "🇺🇸", official: false },
    { name: "Belize", code: "BZ", lat: 17.1899, lng: -88.4976, flag: "🇧🇿", official: false },
    { name: "Andorra", code: "AD", lat: 42.5078, lng: 1.5211, flag: "🇦🇩", official: false },
    { name: "Gibraltar", code: "GI", lat: 36.1408, lng: -5.3536, flag: "🇬🇮", official: false }
  ];
  


// const countriesPlusOneTerritory = [
//     // ✅ Official Spanish-speaking countries (21)
//     { name: "Spain", lat: 40.4168, lng: -3.7038, flag: "🇪🇸", official: true },
//     { name: "Mexico", lat: 19.4326, lng: -99.1332, flag: "🇲🇽", official: true },
//     { name: "Argentina", lat: -34.6037, lng: -58.3816, flag: "🇦🇷", official: true },
//     { name: "Colombia", lat: 4.7110, lng: -74.0721, flag: "🇨🇴", official: true },
//     { name: "Chile", lat: -33.4489, lng: -70.6693, flag: "🇨🇱", official: true },
//     { name: "Peru", lat: -12.0464, lng: -77.0428, flag: "🇵🇪", official: true },
//     { name: "Venezuela", lat: 10.4806, lng: -66.9036, flag: "🇻🇪", official: true },
//     { name: "Ecuador", lat: -0.1807, lng: -78.4678, flag: "🇪🇨", official: true },
//     { name: "Guatemala", lat: 14.6349, lng: -90.5069, flag: "🇬🇹", official: true },
//     { name: "Cuba", lat: 23.1136, lng: -82.3666, flag: "🇨🇺", official: true },
//     { name: "Bolivia", lat: -16.5000, lng: -68.1500, flag: "🇧🇴", official: true },
//     { name: "Dominican Republic", lat: 18.4861, lng: -69.9312, flag: "🇩🇴", official: true },
//     { name: "Honduras", lat: 14.0723, lng: -87.1921, flag: "🇭🇳", official: true },
//     { name: "Paraguay", lat: -25.2637, lng: -57.5759, flag: "🇵🇾", official: true },
//     { name: "El Salvador", lat: 13.6929, lng: -89.2182, flag: "🇸🇻", official: true },
//     { name: "Nicaragua", lat: 12.114993, lng: -86.236174, flag: "🇳🇮", official: true },
//     { name: "Costa Rica", lat: 9.9281, lng: -84.0907, flag: "🇨🇷", official: true },
//     { name: "Panama", lat: 8.9824, lng: -79.5199, flag: "🇵🇦", official: true },
//     { name: "Uruguay", lat: -34.9011, lng: -56.1645, flag: "🇺🇾", official: true },
//     { name: "Equatorial Guinea", lat: 3.75, lng: 8.7833, flag: "🇬🇶", official: true },
//     { name: "Puerto Rico", lat: 18.2208, lng: -66.5901, flag: "🇵🇷", official: true, territory: true },
  
//     // 🟡 Spanish-speaking influence (but not official)
//     { name: "Philippines", lat: 13.41, lng: 122.56, flag: "🇵🇭", official: false },
//     { name: "United States", lat: 38.89511, lng: -77.03637, flag: "🇺🇸", official: false },
//     { name: "Belize", lat: 17.1899, lng: -88.4976, flag: "🇧🇿", official: false },
//     { name: "Andorra", lat: 42.5078, lng: 1.5211, flag: "🇦🇩", official: false },
//     { name: "Gibraltar", lat: 36.1408, lng: -5.3536, flag: "🇬🇮", official: false },
//   ];
  
  export default countriesPlusOneTerritory;
  