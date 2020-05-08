// const baseApiUrl = process.env.REACT_APP_API_URL_NEW2;

// Url can not be static ie. https://dev-api.srtlabs.com/api/v2/organizations/{organization}/{location}/{sublocation}/analytics

//   const analyticsEndpoint = "https://dev-api.srtlabs.com/api/v2/organizations/Hospital/HQ/floor-1/analytics"

// [URL link prefix] + [Organization] + [Location] + [sublocation] /device=asd&from_date=345&to_date=575

//   const hospitalDataForChart = "https://dev-api.srtlabs.com/api/v2/device-analytics/Hospital/HQ/floor-1?device=5e973761162f6817cc5ee7bd&from_date=2020/04/19&to_date=2020/04/23"

// I have to set an env variable for dev-api b/c for some reason dev-api is not set as an environment variable

// useEffect(() => {
//   const fetchData = async () => {
//     const headers = common.buildHeaders();
//     const data = { email: "vishal@srtlabs.com", password: "vishal" };
//     // You can await here
//     const response = await axios(
//       common.buildPacket("post", `${baseApiUrl}/auth/login?email=vishal@srtlabs.com&password=vishal`, headers, data)
//     ).then((res) => {
//       console.log(res);
//       if (res.status === 200) {
//         let token = res.data.token;
//         console.log("token gotten:", token);
//         // we have a  token variable set in localStorage do localStorage.getItem() instead
//         localStorage.setItem("token", token);

//         axios(common.buildPacket("get", analyticsEndpoint, common.buildHeaders(token))
//         ).then((res)=>{
//           console.log("Analytics Data:", res)
//           if (res.status === 200) {
//             axios(common.buildPacket("get", hospitalDataForChart, common.buildHeaders(token)))
//             .then((res)=>{
//               // console.log("hospitalDataForChart", res)
//               const metrics = res.data;
//               console.log("hospitalDataForChart", metrics)
//               // we are getting chartData from this api call

//               setHospitalData(metrics);
//             })
//           }
//         })

//       }
//     })
//     // ...
//   }
//   fetchData();
// }, []); // Or [] if effect doesn't need props or state
