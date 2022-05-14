import type { App } from "vue";
import Kbutton from "@/components/KButton/KButton.vue";
const kinda = {
    install: (app: App<Element>) => {
        app.component("k-button", Kbutton);
    },
};
export default kinda;
