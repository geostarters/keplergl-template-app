export const DEFAULT_MAP_STYLES = [
    {
      id: 'dark',
      accessToken: null,
      label: 'Gris',
      url: 'https://geoserveis.icgc.cat/contextmaps/positron.json',
      icon: 'https://openicgc.github.io/img/positron-min.gif',
      layerGroups: DEFAULT_LAYER_GROUPS
    },
    {
      id: 'gris',
      accessToken: null,
      label: 'ICGC oficial',
      url: 'https://geoserveis.icgc.cat/contextmaps/icgc.json',
      icon: 'https://openicgc.github.io/img/icgc-min.gif',
      layerGroups: DEFAULT_LAYER_GROUPS
    },
    {
      id: 'light',
      accessToken: null,
      label: 'OSM Bright',
      url: 'https://geoserveis.icgc.cat/contextmaps/osm-bright.json',
      icon: 'https://openicgc.github.io/img/osm-bright-min.gif',
      layerGroups: DEFAULT_LAYER_GROUPS
    },
    {
      id: 'muted',
      accessToken: null,
      label: 'Hibrid',
      url: 'https://geoserveis.icgc.cat/contextmaps/hibrid.json',
      icon: 'https://openicgc.github.io/img/orto-min.gif',
      layerGroups: DEFAULT_LAYER_GROUPS
    },
    {
      id: 'muted_night',
      accessToken: null,
      label: 'Full dark',
      url: 'https://geoserveis.icgc.cat/contextmaps/fulldark.json',
      icon: 'https://openicgc.github.io/img/fulldark-min.gif',
      layerGroups: DEFAULT_LAYER_GROUPS
    }
  ];

  export const DEFAULT_LAYER_GROUPS = [
    {
      slug: 'label',
      filter: ({id}) => id.match(/(?=(label|place-|poi-))/),
      defaultVisibility: true
    },
    {
      slug: 'road',
      filter: ({id}) => id.match(/(?=(road|railway|tunnel|street|bridge))(?!.*label)/),
      defaultVisibility: true
    },
    {
      slug: 'border',
      filter: ({id}) => id.match(/border|boundaries/),
      defaultVisibility: false
    },
    {
      slug: 'building',
      filter: ({id}) => id.match(/building/),
      defaultVisibility: true
    },
    {
      slug: 'water',
      filter: ({id}) => id.match(/(?=(water|stream|ferry))/),
      defaultVisibility: true
    },
    {
      slug: 'land',
      filter: ({id}) => id.match(/(?=(parks|landcover|industrial|sand|hillshade))/),
      defaultVisibility: true
    },
    {
      slug: '3d building',
      filter: () => false,
      defaultVisibility: false
    }
  ];