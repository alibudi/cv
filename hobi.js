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
    }
  });

  xhr.open("GET", "https://www.hops.id/wp-json/wp/v2/posts?categories=298");

  xhr.send();

  document.getElementById("12345").innerHTML = `
    <div class="row">
		<div class="col-lg-3">
			<li style="list-style-type: none;">
				<div class="al-row">
					<div id="img1-1" class="al-thumb"> </div>
					<div class="al-info content_center"> <span id="text1-1"> </span> </div>
				</div>
			</li>
			<li style="list-style-type: none;">
				<div class="al-row">
					<div id="img1-2" class="al-thumb"> </div>
					<div class="al-info content_center"> <span id="text1-2"> </span> </div>
				</div>
			</li>
			<li style="list-style-type: none;">
				<div class="al-row">
					<div id="img1-3" class="al-thumb"> </div>
					<div class="al-info content_center"> <span id="text1-3"> </span> </div>
				</div>
			</li>
		</div>

	</div>
    `;
}
