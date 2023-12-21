import { writable } from "svelte/store";
import { getAllEvents } from "../../data/events";

function events() {
  // destructure the store on creation to have 'direct access' to methods
  const { subscribe, set } = writable([]);

  return {
    subscribe,
    async init() {
      const events = await getAllEvents()
        set(events.resources);
    },
  };
}
export default events();
