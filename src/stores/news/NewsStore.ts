import { writable } from "svelte/store";
import { getAllNews } from "../../data/news";

function news() {
  // destructure the store on creation to have 'direct access' to methods
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    async init() {
      const news = await getAllNews()
        set(news.resources);
    },
  };
}
export default news();
