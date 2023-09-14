import { TinyBar } from "../../src/index.js";
import { Chart } from "@antv/g2";

export function barStyle() {
  const chart = new Chart();

  chart.options({
    type: TinyBar,
    width: 480,
    height: 80,
    data: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
      546, 983, 340, 539, 243, 226, 192,
    ],
    style: {
      fill: "orange",
      radiusTopLeft: 5,
      radiusTopRight: 5,
    },
    state: { active: { fill: "red" } },
    interaction: { tooltip: false, elementHighlight: true },
  });

  chart.render();

  return chart.getContainer();
}
