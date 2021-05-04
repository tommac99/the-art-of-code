export const GetIcons = async () => {
  let response = await fetch("icons.json");
  try {
    return await response.json();
  } catch (error) {
    return {};
  }
};
