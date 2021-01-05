import config from "./config";

function fetchJson(uri) {
  const url = `${config.cmsHost}${uri}`;

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

export default {
  fetchJson,
  getAssetUrl,
};
