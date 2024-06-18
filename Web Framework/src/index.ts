import { User } from "../models/Users";

const user = new User({ name: "new record", age: 0 });

user.events.on("change", () => {
  console.log("changes!");
});

user.events.trigger("change");
