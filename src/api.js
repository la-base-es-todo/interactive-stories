import stories from "./db";

export default function getPageStory(pageToRender, storyBook) {
  // console.log({ page }, { storyBook });
  const result = storyBook.story.filter(
    (item) => item.page === pageToRender.page
  );
  return result[0];
}
