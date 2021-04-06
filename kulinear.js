// window.onload = () => {
//   document.getElementById("#myvar").innerHTML ='';
//   // var myvar =
// };

window.onload = () => {
  myFunction();
  loadScriptAsync();
  
};
/*This function will load script and call the callback once the script has loaded*/
function loadScriptAsync(scriptSrc, callback) {
  if (typeof callback !== "function") {
    throw new Error("Not a valid callback for async script load");
  }
  var script = document.createElement("script");
  script.onload = callback;
  script.src = scriptSrc;
  document.head.appendChild(script);
}

/* This is the part where you call the above defined function and "call back" your code which gets executed after the script has loaded */
loadScriptAsync(
  "https://www.googletagmanager.com/gtag/js?id=G-KVWZZZL2XD",
  function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-KVWZZZL2XD");
    // gtag("config", "G-KVWZZZL2XD", { anonymize_ip: true });
  }
);
function myFunction() {
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );

  ga("create", "G-KVWZZZL2XD", "auto");
  ga("send", "pageview");

  var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var n;
  var r = [];
  for (n = 1; n <= 6; ++n) {
    var i = Math.floor(Math.random() * (10 - n) + 1);
    r.push(a[i]);
    a[i] = a[10 - n];
  }

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      // console.log(this.responseText);
      resultApi = JSON.parse(this.responseText);
      console.log(resultApi);

      var text11 = document.getElementById("text1-1");
      text11.innerHTML =
        '<a target="_blank" class="al-title" href="' +
        resultApi[r[0]].link +
        '"><h3  style="color:#000000;font-family:sans-serif!important;font-size:14px;">' +
        resultApi[r[0]].title.rendered +
        "</h3></a>";

      var img11 = document.getElementById("img1-1");
      img11.innerHTML =
        '<a target="_blank" href="' +
        resultApi[r[0]].link +
        '"><img class="coverimg" src="' +
        resultApi[r[0]].jetpack_featured_media_url +
        '" layout="fill" alt="article"  /></a>';

      var text12 = document.getElementById("text1-2");
      text12.innerHTML =
        '<a target="_blank" class="al-title" href="' +
        resultApi[r[1]].link +
        '"><h3  style="color:#000;font-family:sans-serif!important;font-size:14px;">' +
        resultApi[r[1]].title.rendered +
        "</h3></a>";

      var img12 = document.getElementById("img1-2");
      img12.innerHTML =
        '<a target="_blank" href="' +
        resultApi[r[1]].link +
        '"><img class="coverimg" src="' +
        resultApi[r[1]].jetpack_featured_media_url +
        '" layout="fill" alt="article" style="width: 70px;height: 60px;" /></a>';

      var text13 = document.getElementById("text1-3");
      text13.innerHTML =
        '<a target="_blank" class="al-title" href="' +
        resultApi[r[2]].link +
        '"><h3  style="color:#000;font-family:sans-serif!important;font-size:14px;">' +
        resultApi[r[2]].title.rendered +
        "</h3></a>";

      var img13 = document.getElementById("img1-3");
      img13.innerHTML =
        '<a target="_blank" href="' +
        resultApi[r[2]].link +
        '"><img class="coverimg" src="' +
        resultApi[r[2]].jetpack_featured_media_url +
        '" layout="fill" alt="article" style="width: 70px;height: 60px;" /></a>';

      var text14 = document.getElementById("text1-4");
      text14.innerHTML =
        '<a target="_blank" class="al-title" href="' +
        resultApi[r[3]].link +
        '"><h3  style="color:#000;font-family:sans-serif!important;font-size:14px;">' +
        resultApi[r[3]].title.rendered +
        "</h3></a>";

      var img14 = document.getElementById("img1-4");
      img14.innerHTML =
        '<a target="_blank" href="' +
        resultApi[r[3]].link +
        '"><img class="coverimg" src="' +
        resultApi[r[3]].jetpack_featured_media_url +
        '" layout="fill" alt="article" style="width: 70px;height: 60px;" /></a>';

      var text15 = document.getElementById("text1-5");
      text15.innerHTML =
        '<a target="_blank" class="al-title" href="' +
        resultApi[r[4]].link +
        '"><h3  style="color:#000;font-size:14px;">' +
        resultApi[r[4]].title.rendered +
        "</h3></a>";

      var img15 = document.getElementById("img1-5");
      img15.innerHTML =
        '<a target="_blank" href="' +
        resultApi[r[4]].link +
        '"><img class="coverimg" src="' +
        resultApi[r[4]].jetpack_featured_media_url +
        '" layout="fill" alt="article" style="width: 70px;height: 60px;" /></a>';

      var text16 = document.getElementById("text1-6");
      text16.innerHTML =
        '<a target="_blank" class="al-title" href="' +
        resultApi[r[5]].link +
        '"><h3  style="color:#000;font-size:14px;">' +
        resultApi[r[5]].title.rendered +
        "</h3></a>";

      var img16 = document.getElementById("img1-6");
      img16.innerHTML =
        '<a target="_blank" href="' +
        resultApi[r[5]].link +
        '"><img class="coverimg" src="' +
        resultApi[r[5]].jetpack_featured_media_url +
        '" layout="fill" alt="article" style="width: 70px;height: 60px;" /></a>';
    }
  });

  xhr.open("GET", "https://kulinear.hops.id/wp-json/wp/v2/posts");

  xhr.send();

  document.getElementById("12345").innerHTML =
    '<div class="section-title"><div><span></span><h5>Baca Lainnya</h5>       </div></div> <br><div class="row"> <div class="col-lg-3"> <li style="list-style-type: none;"><div class="al-row"><div id="img1-1" class="al-thumb">   </div><div class="al-info content_center"><span id="text1-1"></span> </div></div></li><li style="list-style-type: none;"><div class="al-row"><div id="img1" class="al-thumb"><a target="_blank" href="https://a.popin.cc/popin_redirect/redirect?lp=https%3A%2F%2Flation-atlywhere.icu%2Ff7f37cd9-0b4f-40b8-a666-f363da560a6e%3Fcreative_id%3D6066fb9d0fc10c1c1f281199%26pub_id%3Dwww.hops.id&data=eyJjdmlkIjoiYS5zdGVwYW5vdiIsImMiOiI2MDAuMCIsInR6IjoiaWQiLCJmIjoiMiIsIm5pZCI6IjYwNjZmYjlkMGZjMTBjMWMxZjI4MTE5OSIsImNhbXBhaWduIjoiNjA0N2NmMGQwZmMxMGMwODJmNTA3OTA0IiwibWVkaWEiOiJ3d3cuaG9wcy5pZCIsImNhdGVnb3J5IjoiY2FyYmlrZSIsIm0iOiIyNjk2MTMzOSIsImRldmljZSI6InBjIn0=&token=618a792c252974472a3485e5852c600c&t=1617680392420&uid=ca78f0da2d770b87b5c1598573864252&api_host=id.popin.cc&logid=7847f1af-55d1-4fbe-a940-3ee394224194&extra=m_ch_53_feed_with_sz_pc%7Cc_lc_JK&mode=20170420&referer_type=site&td_client_id=443e69a4-0886-41cc-8dbe-bbb9b4eabc4c"><img class="coverimg" src="https://imageaws.popin.cc/discovery/4a7bdc02c0675d279315cf26f2502afa.jpeg" layout="fill" alt="article" style="width: 70px;height: 60px;"></a></div> <div class="al-info content_center">   <span id="text1-6"><a target="_blank" class="al-title" href="https://a.popin.cc/popin_redirect/redirect?lp=https%3A%2F%2Flation-atlywhere.icu%2Ff7f37cd9-0b4f-40b8-a666-f363da560a6e%3Fcreative_id%3D6066fb9d0fc10c1c1f281199%26pub_id%3Dwww.hops.id&data=eyJjdmlkIjoiYS5zdGVwYW5vdiIsImMiOiI2MDAuMCIsInR6IjoiaWQiLCJmIjoiMiIsIm5pZCI6IjYwNjZmYjlkMGZjMTBjMWMxZjI4MTE5OSIsImNhbXBhaWduIjoiNjA0N2NmMGQwZmMxMGMwODJmNTA3OTA0IiwibWVkaWEiOiJ3d3cuaG9wcy5pZCIsImNhdGVnb3J5IjoiY2FyYmlrZSIsIm0iOiIyNjk2MTMzOSIsImRldmljZSI6InBjIn0=&token=618a792c252974472a3485e5852c600c&t=1617680392420&uid=ca78f0da2d770b87b5c1598573864252&api_host=id.popin.cc&logid=7847f1af-55d1-4fbe-a940-3ee394224194&extra=m_ch_53_feed_with_sz_pc%7Cc_lc_JK&mode=20170420&referer_type=site&td_client_id=443e69a4-0886-41cc-8dbe-bbb9b4eabc4c"> <h3 style="color:#000000;font-family:sans-serif!important;font-size:14px;">Tak Perlu Laser jika Mata Mulai Kabur! Ternyata Cukup Lakukan Ini (AD) </h3> </a></span> </div></div></li><li style="list-style-type: none;"><div class="al-row"><div id="img1-2" class="al-thumb"></div><div class="al-info content_center"><span id="text1-2"> </span> </div></div></li></div><div class="col-lg-3"><li style="list-style-type: none;"><div class="al-row"><div id="img1-3" class="al-thumb"></div><div class="al-info content_center"><span id="text1-3"> </span>   </div>        </div>   </li>    <li style="list-style-type: none;">   <div class="al-row">   <div id="img1-4" class="al-thumb"> </div>    <div class="al-info content_center">   <span id="text1-4"> </span> </div></div>    </li>   <li style="list-style-type: none;">  <div class="al-row">       <div id="img1" class="al-thumb"><a target="_blank" href="https://a.popin.cc/popin_redirect/redirect?lp=https%3A%2F%2Fasn.today%2Findex.php%3Fkey%3D8dzjkgazxy1xqeirdfx2%26cost%3D600.0%26advertiser_id%3D605dc5069a10523b0213efba%26campaign_id%3Dwww.hops.id%26creative_id%3D604f7315f686b668c831a664&data=eyJjdmlkIjoiS3Jha2VuX3Nhc19pbmRfMSIsImMiOiI2MDAuMCIsInR6IjoiaWQiLCJmIjoiMiIsIm5pZCI6IjYwNWRjNTA2OWExMDUyM2IwMjEzZWZiYSIsImNhbXBhaWduIjoiNjA0ZjczMTVmNjg2YjY2OGM4MzFhNjY0IiwibWVkaWEiOiJ3d3cuaG9wcy5pZCIsImNhdGVnb3J5IjoiY2FyYmlrZSIsIm0iOiIyNjk2MTMzOSIsImRldmljZSI6InBjIn0=&token=faa9f41add767bb2b018e3b2d9581508&t=1617680392420&uid=ca78f0da2d770b87b5c1598573864252&api_host=id.popin.cc&logid=7847f1af-55d1-4fbe-a940-3ee394224194&extra=m_ch_53_feed_with_sz_pc%7Cc_lc_JK&mode=20170420&referer_type=site&td_client_id=443e69a4-0886-41cc-8dbe-bbb9b4eabc4c"><img  class="coverimg"                src="https://imageaws.popin.cc/discovery/479acdc1e0f23772221509799fe0da8c.jpeg" layout="fill" alt="article" style="width: 70px;height: 60px;"></a></div>  <div class="al-info content_center">          <span id="text1-6"><a target="_blank" class="al-title" href="https://a.popin.cc/popin_redirect/redirect?lp=https%3A%2F%2Fasn.today%2Findex.php%3Fkey%3D8dzjkgazxy1xqeirdfx2%26cost%3D600.0%26advertiser_id%3D605dc5069a10523b0213efba%26campaign_id%3Dwww.hops.id%26creative_id%3D604f7315f686b668c831a664&data=eyJjdmlkIjoiS3Jha2VuX3Nhc19pbmRfMSIsImMiOiI2MDAuMCIsInR6IjoiaWQiLCJmIjoiMiIsIm5pZCI6IjYwNWRjNTA2OWExMDUyM2IwMjEzZWZiYSIsImNhbXBhaWduIjoiNjA0ZjczMTVmNjg2YjY2OGM4MzFhNjY0IiwibWVkaWEiOiJ3d3cuaG9wcy5pZCIsImNhdGVnb3J5IjoiY2FyYmlrZSIsIm0iOiIyNjk2MTMzOSIsImRldmljZSI6InBjIn0=&token=faa9f41add767bb2b018e3b2d9581508&t=1617680392420&uid=ca78f0da2d770b87b5c1598573864252&api_host=id.popin.cc&logid=7847f1af-55d1-4fbe-a940-3ee394224194&extra=m_ch_53_feed_with_sz_pc%7Cc_lc_JK&mode=20170420&referer_type=site&td_client_id=443e69a4-0886-41cc-8dbe-bbb9b4eabc4c"> <h3 style="color:#000000;font-family:sans-serif!important;font-size:14px;">Wanita Ini 66 Tahun. Inilah Caranya Remajakan Kerutan (AD)</h3>                        </a></span>                </div>  </div> </li> </div>   </div>';
}
