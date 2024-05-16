import Constants from "expo-constants";

// console.log(process.env,'process.env.REACT_NATIVE_NODE_CONFIG_ENV');
// console.log(Constants,'ConstantsConstantsConstantsConstants');


const getEnvVars = (
  env = process.env.REACT_NATIVE_NODE_CONFIG_ENV
   ||
    Constants
) => {
  if (env === "weclikd_local" || Constants.experienceUrl =="http://localhost:19006" || Constants.experienceUrl =="http://www.localhost:19006") {
    // console.log(env,'local');
    return {
      EXPOCLIENT_ID:"519921550901-o18f1m5ffo7b6i4j1n9tcqlonq795njc.apps.googleusercontent.com",
      PROJECT_URL: "http://localhost:19006/home",
      // API_URL: "http://localhost:8443/",
      // GRAPHQL_URL: "http://localhost:8443/graphql",
      API_URL: "https://backend-bgsfkvxhwq-uc.a.run.app/v1/",
      GRAPHQL_URL: "https://backend-bgsfkvxhwq-uc.a.run.app/v1/graphql",
      ANDROIDCLIENT_ID:
        //  "104922496642-omeiuocpn65h0tsu3bqtoc9dtc3tkg56.apps.googleusercontent.com",
        "519921550901-mvt1ol8gur0vp5g85g49pqb2n83f1vat.apps.googleusercontent.com",
      IOSCLIENT_ID:
        // "104922496642-22009b7d0nqkfpduft1q7c28ru4c3slc.apps.googleusercontent.com",
        "519921550901-cqcdqrmvhm4qo0g6l3jvic90n80kbkmj.apps.googleusercontent.com",
      APIKEY: "AIzaSyBNvlsGvHp-KPCj1KMTswQjLOsjHiy3_Q8",
      AUTHDOMAIN: "electric-block-241402.firebaseapp.com",
      DATABASEURL: "https://electric-block-241402.firebaseio.com",
      PROJECTID: "electric-block-241402",
      STORAGEBUCKET: "electric-block-241402.appspot.com",
      MESSAGINGSENDERID: "519921550901",
      APPID: "1:519921550901:web:cd515d8bfb9a52c4f2537c",
      APPDYNAMICLINK: "https://weclikddev.page.link/links",
      MEASUREMENTID: "G-QZMNJ3HRLG"
    };
  } else if (env === "weclikd_staging" || Constants.experienceUrl =="https://weclikd-beta.com" || Constants.experienceUrl== "https://www.weclikd-beta.com") {
    console.log('staging');
    return {
      EXPOCLIENT_ID:"1068132403542-9sf28v9n1ji5i5k03ng34j6b63um86sl.apps.googleusercontent.com",
      PROJECT_URL: "https://www.weclikd-beta.com",
      API_URL: "https://api.weclikd-beta.com/v1/",
      GRAPHQL_URL:"https://api.weclikd-beta.com/v1/graphql",

      // ANDROIDCLIENT_ID:
      //   "746359675799-jddt59fklpbeuf0t94d04cdgildrhme0.apps.googleusercontent.com",
      // IOSCLIENT_ID:
      //   "746359675799-t6k1h99i9vtvdk5hdcl1m5hp7qnpl39r.apps.googleusercontent.com",
      // APIKEY: "AIzaSyDw7qUzCmzCWIBGZQmzkiRsX-Aj1130C0M",
      // AUTHDOMAIN: "graphite-tesla-246507.firebaseapp.com",
      // DATABASEURL: "https://graphite-tesla-246507.firebaseio.com",
      // PROJECTID: "graphite-tesla-246507",
      // STORAGEBUCKET: "graphite-tesla-246507.appspot.com",
      // MESSAGINGSENDERID: "746359675799",
      // APPID: "1:746359675799:web:e990d5faefe22a613e02d2",
      // APPDYNAMICLINK: "https://weclikdalpha.page.link/links",
      // MEASUREMENTID: "G-7NVE1NMR1B"

      //----------Prod Firebase Key--------
      ANDROIDCLIENT_ID:
        // "746359675799-jddt59fklpbeuf0t94d04cdgildrhme0.apps.googleusercontent.com",
        "1068132403542-0uqnsvfb5ut1d2nt2ebgknt3la59rave.apps.googleusercontent.com",
      IOSCLIENT_ID:
        // "746359675799-t6k1h99i9vtvdk5hdcl1m5hp7qnpl39r.apps.googleusercontent.com",
        // "1068132403542-7b8f1n6coe4mab9h40ti9mhpk91vdonn.apps.googleusercontent.com",--lastone
        "com.googleusercontent.apps.1068132403542-kf7ifohq5r4d88au454813fo0kp49keb",
      APIKEY: "AIzaSyBPC13eCcUpqblHrQOjnh-T933-jNIP4UM",
      AUTHDOMAIN: "weclikd-prod.firebaseapp.com",
      DATABASEURL: "https://weclikd-prod.firebaseio.com",
      PROJECTID: "weclikd-prod",
      STORAGEBUCKET: "weclikd-prod.appspot.com",
      MESSAGINGSENDERID: "1068132403542",
      APPID: "1:1068132403542:web:de68950c45b7fdd4c06ef7",
      APPDYNAMICLINK: "https://weclikdprod.page.link/links",
      measurementId: "G-6MTSK4CKWL"
    };
  } else if (env === "weclikd_prod" || Constants.experienceUrl =="https://www.weclikd.com" || Constants.experienceUrl =="https://weclikd.com") {
    console.log('prod');
    return {
      EXPOCLIENT_ID:"1068132403542-9sf28v9n1ji5i5k03ng34j6b63um86sl.apps.googleusercontent.com",
      PROJECT_URL: "https://weclikd.com",
      // PROJECT_URL: "https://weclikd-prod.firebaseapp.com",

      API_URL: " https://api.weclikd.com/v1/",
      GRAPHQL_URL: " https://api.weclikd.com/v1/graphql",
      ANDROIDCLIENT_ID:
        // "746359675799-jddt59fklpbeuf0t94d04cdgildrhme0.apps.googleusercontent.com",
        "1068132403542-0uqnsvfb5ut1d2nt2ebgknt3la59rave.apps.googleusercontent.com",
      IOSCLIENT_ID:
        // "746359675799-t6k1h99i9vtvdk5hdcl1m5hp7qnpl39r.apps.googleusercontent.com",
        "1068132403542-7b8f1n6coe4mab9h40ti9mhpk91vdonn.apps.googleusercontent.com",
      APIKEY: "AIzaSyBPC13eCcUpqblHrQOjnh-T933-jNIP4UM",
      AUTHDOMAIN: "weclikd-prod.firebaseapp.com",
      DATABASEURL: "https://weclikd-prod.firebaseio.com",
      PROJECTID: "weclikd-prod",
      STORAGEBUCKET: "weclikd-prod.appspot.com",
      MESSAGINGSENDERID: "1068132403542",
      APPID: "1:1068132403542:web:de68950c45b7fdd4c06ef7",
      APPDYNAMICLINK: "https://weclikdprod.page.link/links",
      measurementId: "G-6MTSK4CKWL"
    };
  } else {
    console.log(env,'else electrcblock');
    return {
      EXPOCLIENT_ID:"519921550901-o18f1m5ffo7b6i4j1n9tcqlonq795njc.apps.googleusercontent.com",
      PROJECT_URL: "https://electric-block-241402.appspot.com",
      // API_URL: "https://janus-bgsfkvxhwq-uc.a.run.app/",
      // GRAPHQL_URL: "https://janus-bgsfkvxhwq-uc.a.run.app/graphql",
      API_URL: "https://backend-bgsfkvxhwq-uc.a.run.app/v1/",
      GRAPHQL_URL: "https://backend-bgsfkvxhwq-uc.a.run.app/v1/graphql",
      ANDROIDCLIENT_ID:
        //  "104922496642-omeiuocpn65h0tsu3bqtoc9dtc3tkg56.apps.googleusercontent.com",
        "519921550901-mvt1ol8gur0vp5g85g49pqb2n83f1vat.apps.googleusercontent.com",
      IOSCLIENT_ID:
        // "104922496642-22009b7d0nqkfpduft1q7c28ru4c3slc.apps.goog leusercontent.com",
        "519921550901-cqcdqrmvhm4qo0g6l3jvic90n80kbkmj.apps.googleusercontent.com",
      APIKEY: "AIzaSyBNvlsGvHp-KPCj1KMTswQjLOsjHiy3_Q8",
      AUTHDOMAIN: "electric-block-241402.firebaseapp.com",
      DATABASEURL: "https://electric-block-241402.firebaseio.com",
      PROJECTID: "electric-block-241402",
      STORAGEBUCKET: "electric-block-241402.appspot.com",
      MESSAGINGSENDERID: "519921550901",
      APPID: "1:519921550901:web:cd515d8bfb9a52c4f2537c",
      APPDYNAMICLINK: "https://weclikddev.page.link/links",
      MEASUREMENTID: "G-QZMNJ3HRLG"
    };
  }
};

export default getEnvVars;