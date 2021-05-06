export const GetIcons = async () => {
  let response = await fetch("icons.json");
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};

export const GetHooks = async () => {
  let response = await fetch("hooks.json");
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};

export const GetVideos = async () => {
  let response = await fetch("videos.json");
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};
