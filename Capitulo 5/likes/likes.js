let votosMinecraft = 0;
let votosRoblox = 0;
let cmpVotosMin;
let cmpVotosRob;

sumarLikeMinecraft = function () {
  cmpVotosMin = document.getElementById("lblMinecraft");
  votosMinecraft = votosMinecraft + 1;
  cmpVotosMin.innerText = votosMinecraft;
};
sumarCorazonMinecraft = function () {
  votosMinecraft = votosMinecraft + 5;
  cmpVotosMin.innerText = votosMinecraft;
};
restarLikeMinecraft = function () {
  votosMinecraft = votosMinecraft - 1;
  cmpVotosMin.innerText = votosMinecraft;
};
sumarLikeRoblox = function () {
  cmpVotosRob = document.getElementById("lblRoblox");
  votosRoblox = votosRoblox + 1;
  cmpVotosRob.innerText = votosRoblox;
};
sumarCorazonRoblox = function () {
  votosRoblox = votosRoblox + 5;
  cmpVotosRob.innerText = votosRoblox;
};
restarLikeRoblox = function () {
  votosRoblox = votosRoblox - 1;
  cmpVotosRob.innerText = votosRoblox;
};
