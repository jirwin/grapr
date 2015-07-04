# grapr
A tool for importing dashboards into grafana so they can easily be stored next to your code.

## Example
`$ node index.js --dashboard examples/new-dashboard.js`

### Options
- dashboard - The path to the dashboard JSON you'd like to create
- esHost - The host for your elasticsearch server. Defaults to `localhost`
- esPost - The port for your elasticsearch server. Defaults to `9200`
