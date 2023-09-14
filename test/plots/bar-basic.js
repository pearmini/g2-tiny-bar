import { Chart } from "@antv/g2";
import { TinyBar } from "../../src/index.js";

export function barBasic() {
  const chart = new Chart();

  chart.options({
    type: TinyBar,
    width: 480,
    height: 80,
    data: [
      264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
      546, 983, 340, 539, 243, 226, 192,
    ],
  });

  chart.render();

  return chart.getContainer();
}
