
export default function getPageStory(pageToRender, storyBook) {
  const result = storyBook.story.filter(
    (item) => item.page === pageToRender.page
  );
  return result[0];
}
