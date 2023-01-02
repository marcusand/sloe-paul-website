import fs from "fs";
import fetch from "node-fetch";

const dataUrl = "http://sloepaul.marcusand.de/api/content";

const fetchData = async () => {
  const res = await fetch(dataUrl);
  const data = await res.json();

  return data.data.pages;
};

const index = async () => {
  const pages = await fetchData();
  const livePageData = pages.find((page) => page.slug === "live");
  const concerts = livePageData.mount;
  const concertsExportData = concerts.map((concert) => {
    return {
      status: "published",
      date: concert.concert_date,
      city: concert.city,
      location: concert.location,
      description: concert.description,
      link: concert.tickets_more_infos,
    };
  });

  fs.writeFileSync("concerts.json", JSON.stringify(concertsExportData));
};

index();
