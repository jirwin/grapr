var fs = require('fs');
var minify = require('node-json-minify');
var argv = require('minimist')(process.argv.slice(2));
var jsesc = require('jsesc');
var elasticsearch = require('elasticsearch');

var esHost = argv.esHost || 'localhost';
var esPort = argv.esPort || '9200';

if (!argv.dashboard) {
  console.log('You must specify a file containing the dashboard json with --dashboard.');
  process.exit(1);
}

var es = new elasticsearch.Client({
  host: esHost + ':' + esPort,
});

try {
  var dashboard = JSON.parse(fs.readFileSync(argv.dashboard).toString());
} catch(e) {
  console.log('File specified with --dashboard is not valid JSON');
  process.exit(1);
}

es.index({
  index: 'grafana-dash',
  type: 'dashboard',
  id: dashboard.name,
  body: {
      dashboard: jsesc(minify(JSON.stringify(dashboard.dashboard)), {'quotes': 'double'}),
      group: 'guest',
      tags: [],
      title: dashboard.dashboard.title,
      user: 'guest'
  }
}, function(err, res) {
  if (err) {
    console.error('Error while creating dashboard.', {err: err});
    process.exit(1);
  }

  console.log('Dashboard created successfully');
  process.exit(0);
});