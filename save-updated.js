import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import { addSeason } from "./series-service.js";

const data = loadData();

const season = {
  number: 1,
  episodes: [{ id: 801, title: "First Contact", rating: 8.0, duration: 44 }],
};

const updatedSeries = addSeason(data.series, 5, season);

const newData = { platform: data.platform, series: updatedSeries };

writeFileSync("series-updated.json", JSON.stringify(newData, null, 2));
console.log("Saved", newData.series.length, "series");