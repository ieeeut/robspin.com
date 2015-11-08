/*
 * script.js
 * Copyright (C) 2015 Sean Kirmani <sean@kirmani.io>
 *
 * Distributed under terms of the MIT license.
 */

var robspin_count = 0;

function doRobspin() {
  robspin_count++;
  $("h3.counter span").text(robspin_count);
}

var tid = setInterval(doRobspin, 2000);

