import deepmerge from "deepmerge";

export function TinyBar(options) {
  const { data, ...specified } = options;

  const defaults = {
    interaction: {
      tooltip: {
        render: (_, { items }) => items[0].value,
        css: {
          ".g2-tooltip": {
            "min-width": "0px",
            "text-align": "center",
            padding: "5px 10px",
          },
        },
      },
    },
  };

  const overrides = {
    type: "interval",
    data,
    encode: {
      x: (_, idx) => idx,
      y: (d) => d,
    },
    axis: false,
  };

  return deepmerge.all([{}, defaults, specified, overrides]);
}
