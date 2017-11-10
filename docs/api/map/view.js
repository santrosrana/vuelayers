export default {
  props: [
    {
      name: 'center',
      description: `<p>The center coordinate of the map view in <strong>EPSG:4326</strong> projection.</p>`,
      type: 'number[]',
      required: false,
      sync: true,
      default: '[0, 0]',
    },
    {
      name: 'constrainRotation',
      description: '',
      type: 'boolean',
      required: false,
      sync: false,
      default: 'true',
    },
    {
      name: 'enableRotation',
      description: '',
      type: 'boolean',
      required: false,
      sync: false,
      default: 'true',
    },
    {
      name: 'extent',
      description: `<p>The extent that constrains the center defined in in <b>EPSG:4326</b> projection,
                    in other words, center cannot be set outside this extent.</p>`,
      type: 'array',
      required: false,
      sync: false,
      default: 'undefined',
    },
    {
      name: 'ident',
      description: `<p>Unique key in <b>identity map</b> for underlying <code>ol.View</code> instance to 
                    share it between multiple <code>vl-view</code> components in multiple <code>vl-map</code> components.</p>
                    <p><i>Experimental</i></p>`,
      type: 'string',
      required: false,
      sync: false,
      default: 'false',
    },
    {
      name: 'maxResolution',
      description: '',
      type: 'number',
      required: false,
      sync: false,
      default: 'calculates from projection',
    },
    {
      name: 'maxZoom',
      description: '',
      type: 'number',
      required: false,
      sync: false,
      default: 28,
    },
    {
      name: 'minResolution',
      description: '',
      type: 'number',
      required: false,
      sync: false,
      default: 'calculates from projection',
    },
    {
      name: 'minZoom',
      description: '',
      type: 'number',
      required: false,
      sync: false,
      default: 0,
    },
    {
      name: 'projection',
      description: '',
      type: 'string',
      required: false,
      sync: false,
      default: 'EPSG:4326',
    },
    {
      name: 'resolution',
      description: '',
      type: 'number',
      required: false,
      sync: true,
      default: 'undefined',
    },
    {
      name: 'resolutions',
      description: '',
      type: 'array',
      required: false,
      sync: false,
      default: 'undefined',
    },
    {
      name: 'rotation',
      description: `<p>The initial rotation for the view in <strong>radians</strong> (positive rotation clockwise).</p>`,
      type: 'number',
      required: false,
      sync: true,
      default: 0,
    },
    {
      name: 'zoom',
      description: `<p>Zoom level used to calculate the resolution for the view as <code>int</code> value. 
                    Only used if <code>resolution</code> is not defined.</p>`,
      type: 'number',
      required: false,
      sync: true,
      default: 0,
    },
    {
      name: 'zoomFactor',
      description: '',
      type: 'number',
      required: false,
      sync: false,
      default: 2,
    },
  ],
  members: [
    {
      name: '$view',
      description: '',
      type: 'ol.View, undefined',
    },
  ],
  methods: [
    {
      name: 'animate',
      description: '',
      arguments: [
        {
          name: 'args',
          description: '',
          optional: false,
          type: '...(olx.AnimationOptions, function(boolean))',
        },
      ],
      returns: [
        {
          type: 'Promise',
          description: `<p>Resolves when animation completes</p>`,
        },
      ],
    },
    {
      name: 'fit',
      description: '',
      arguments: [
        {
          name: 'geometryOrExtent',
          description: '',
          optional: false,
          type: 'GeoJSONFeature, ol.Extent, ol.geom.Geometry, Vue',
        },
        {
          name: 'options',
          description: '',
          optional: true,
          type: 'olx.view.FitOptions',
        },
      ],
      returns: [
        {
          type: 'Promise',
          description: `<p>Resolves when view changes</p>`,
        },
      ],
    },
  ],
  events: [],
  slots: [
    {
      name: 'default',
      description: `<p>Default <b>scoped</b> slot with current state: center, zoom, rotation & etc.</p>`,
      scoped: true,
    },
  ],
}
