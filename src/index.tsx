import { Button } from "../lib";
import { render } from "solid-js/web";
render(
  () => <Button onClick={() => console.log("clicked")} />,
  document.getElementById("app")
);
