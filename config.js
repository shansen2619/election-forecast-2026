// ---------------------------------------------------------------------------
// YOUR SITE SETTINGS. This is the only file you need to edit (plus your CSVs).
// Edit it on github.com: open this file, click the pencil icon, change the
// text between the quotation marks, then click "Commit changes".
// ---------------------------------------------------------------------------

window.SITE_CONFIG = {

  // The name shown at the top of your site. A nickname or made-up forecaster
  // name is fine and recommended. Do not put your real name, email, photo,
  // or anything else that identifies you on this site.
  forecaster_name: "Forecaster2619",

  // One short line under the name (optional).
  tagline: "",

  // A plain-language description of YOUR model, in your own words. Each line in
  // quotes is one paragraph, followed by a comma. Two or three short paragraphs:
  // what your forecast is built from, how you set the national environment,
  // and how you handled uncertainty. Until you fill this in, your site shows a
  // reminder in this spot.
  //
  // For example, the class model could be described like this (describe your
  // own model):
  //   "A fundamentals-only model (no polls). Each race's predicted Democratic share combines the district's partisan lean, incumbency, and a forecast of the national House vote from presidential approval, gas prices, income and the midterm penalty.",
  //   "Uncertainty combines one national error shared by every race with a separate error for each race. Seat totals come from 10,000 simulated elections.",
  method: [
    "  method: [
    "A fundamentals model that incorporates polling for the national vote, campaign spending, and House district's Democratic share above the national share in the previous election. Each race's predicted Democratic share combines the national House vote, the district's partisan lean (PVI), incumbency, and the gap in campaign spending (only in races where both candidates spent at least $10,000). In House districts whose lines haven't changed since 2024 and whose elections were contested in 2024, it also uses how far the district ran ahead of or behind the country in 2024 in terms of Democratic share. The models are fit on all relelvant contested House and Senate races from 2018 to 2024.",
    "The national environment averages two estimates: a midterm model of the president's party's vote based on presidential approval (36% in October), and the generic-ballot polling average, corrected for how far those polls have missed in past elections. Each is weighted by how accurate it has been historically, and ultimately the model uses a 53.6% Democratic share of the national House vote. Polls of individual Senate races are not used.",
    "Uncertainty combines one national error shared by every race with a second, separate error for each race. Simulated seat totals come from 10,000 simulated elections, with the same national environment term used for the House and the Senate."
  ],",
    ""
  ],

  // Your data files. Leave these alone unless you renamed your files.
  forecast_file: "forecast_hansen.csv",
  sims_file: "seat_sims_hansen.csv",

  // Course links. Leave these as they are.
  links: {
    class_forecast: "https://kevinmdeluca.com/forecast/class/",
    tracker: "https://kevinmdeluca.com/forecast/",
    gallery: "https://kevin-deluca-polisci.github.io/plsc2219-forecasts/gallery.html"
  }
};
