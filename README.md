# grapr
A tool for importing dashboards into [Grafana](http://grafana.org/) so they can easily be stored next to your code.

## Example Usage
`$ node index.js --dashboard examples/new-dashboard.js`

### Options
- dashboard - The path to the dashboard JSON you'd like to create
- esHost - The host for your elasticsearch server. Defaults to `localhost`
- esPost - The port for your elasticsearch server. Defaults to `9200`

## Dashboard format
The dashboards this processes are just a little more than what is exported directly from Grafana. `name` is a unique identifier(no spaces) for the dashboard. The `dashboard` field is the JSON exported from Grafana.

```json
{
  "name": "this-is-a-unique-name-for-the-dashboard",
  "dashboard": {
    "id": null,
    "title": "New Dashboard",
    "originalTitle": "New Dashboard",
    "tags": [],
    "style": "dark",
    "timezone": "browser",
    "editable": true,
    "hideControls": false,
    "rows": [
      {
        "title": "Row1",
        "height": "250px",
        "editable": true,
        "collapse": false,
        "panels": [
          {
            "error": false,
            "span": 12,
            "editable": true,
            "type": "graph",
            "id": 1,
            "datasource": null,
            "renderer": "flot",
            "x-axis": true,
            "y-axis": true,
            "scale": 1,
            "y_formats": [
              "short",
              "short"
            ],
            "grid": {
              "leftMax": null,
              "rightMax": null,
              "leftMin": null,
              "rightMin": null,
              "threshold1": null,
              "threshold2": null,
              "threshold1Color": "rgba(216, 200, 27, 0.27)",
              "threshold2Color": "rgba(234, 112, 112, 0.22)"
            },
            "annotate": {
              "enable": false
            },
            "resolution": 100,
            "lines": true,
            "fill": 0,
            "linewidth": 1,
            "points": false,
            "pointradius": 5,
            "bars": false,
            "stack": false,
            "legend": {
              "show": true,
              "values": false,
              "min": false,
              "max": false,
              "current": false,
              "total": false,
              "avg": false
            },
            "percentage": false,
            "zerofill": true,
            "nullPointMode": "connected",
            "steppedLine": false,
            "tooltip": {
              "value_type": "cumulative",
              "query_as_alias": true
            },
            "targets": [
              {
                "target": "randomWalk('randomWalk')"
              }
            ],
            "aliasColors": {},
            "seriesOverrides": [],
            "title": "No title"
          }
        ]
      }
    ],
    "nav": [
      {
        "type": "timepicker",
        "enable": true,
        "status": "Stable",
        "time_options": [
          "5m",
          "15m",
          "1h",
          "6h",
          "12h",
          "24h",
          "2d",
          "7d",
          "30d"
        ],
        "refresh_intervals": [
          "5s",
          "10s",
          "30s",
          "1m",
          "5m",
          "15m",
          "30m",
          "1h",
          "2h",
          "1d"
        ],
        "now": true,
        "collapse": false,
        "notice": false
      }
    ],
    "time": {
      "from": "now-6h",
      "to": "now"
    },
    "templating": {
      "list": []
    },
    "annotations": {
      "list": [],
      "enable": false
    },
    "refresh": false,
    "version": 6
  }
}
```
