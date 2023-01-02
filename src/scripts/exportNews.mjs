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

  const newsPageData = pages.find((page) => page.slug === "about");
  const news = newsPageData.mount;

  const concertsExportData = news.map((newsItem) => {
    return {
      status: "published",
      title: newsItem.title,
      text: newsItem.text,
    };
  });

  fs.writeFileSync("news.json", JSON.stringify(concertsExportData));
};

index();
