import config from "./config";
import dataService from "./data";

const contentFetchDefaultFields = ["title", "id", "slug"];

async function getContent(
  uri,
  { fields = [], locale = "de", filter = null, sort = null } = {},
) {
  const fieldsString = contentFetchDefaultFields.join(",") + "," + fields.join(",");
  const localeString = locale === "de" ? "default" : "en";

  let url = `${config.cmsHost}${uri}?`;

  url = addParam(url, "fields", fieldsString);
  url = addParam(url, "limit", "9999");
  url = addParam(url, "filter[locale]", localeString);
  if (filter) url = addParam(url, `filter${filter}`);
  if (sort) url = addParam(url, "sort", sort);

  const data = await fetchJson(url);
  return data.data;
}

function addParam(url, key, value = null) {
  const fullUrl = `${url}&${key}`;
  if (value) return `${fullUrl}=${value}`;
  return fullUrl;
}

function fetchJson(url) {
  console.log("[Fetch] ", url);

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(
            `Request failed with status code ${res.status}:${res.statusText}`,
          );
        }
        return res.json();
      })
      .then((json) => resolve(json))
      .catch((error) => reject(error));
  });
}

function getAssetUrl(uri, { preset }) {
  return `${config.cmsHost}/img${uri}?p=${preset}`;
}

/**
 * the default content api endpoints from
 * statamic only return the data that exists for the locale
 * so for fallback we merge the data sets after merge
 *
 * (custom api endpoints do the merging serverside)
 */
async function getDataAndLocalize(uri, options) {
  let data;
  let dataDefaultPromise;

  const dataLocalePromise = getContent(uri, options);

  if (options.locale && options.locale != "de") {
    dataDefaultPromise = getContent(uri, {
      ...options,
      locale: "de",
    });
  }

  const [dataDefault, dataLocale] = await Promise.all([
    dataDefaultPromise,
    dataLocalePromise,
  ]);

  if (options.locale != "de") {
    data = dataService.mergeLocalizedData(dataDefault, dataLocale);
  } else {
    data = dataLocale;
  }

  return data;
}

function getCenters(locale) {
  return getContent("/api/collections/map-locations/entries", {
    fields: ["type", "latitude", "longitude"],
    filter: ["[type:in]=center|sub_center"],
    locale,
  });
}

function getNavigation(locale) {
  return getDataAndLocalize("/api/collections/research-website/entries", {
    fields: ["id", "title", "slug", "parent", "header", "nav_order"],
    locale,
  });
}

function getStops(figureSlug, locale) {
  return getContent(`/api/collections/stops-${figureSlug}/full`, {
    locale,
  });
}

async function injectDefaultData(data, locale) {
  const navigation = await getNavigation(locale);

  data.props.pagesData = navigation;
  return data;
}

export default {
  getContent,
  getDataAndLocalize,
  getAssetUrl,
  getCenters,
  getStops,
  getNavigation,
  injectDefaultData,
};
