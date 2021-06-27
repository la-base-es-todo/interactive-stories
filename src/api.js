import stories from "./db";

export default function getPageStory({page, storyObj}) {
  console.log("este es storyObj:", storyObj);
  const result = storyObj.story.filter((item) => item.page === page);
  return result;
}
