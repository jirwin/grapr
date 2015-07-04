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
  log: 'trace'
});

var dashboard = minify(fs.readFileSync(argv.dashboard).toString());

console.log(jsesc(dashboard, {'quotes': 'double'}));