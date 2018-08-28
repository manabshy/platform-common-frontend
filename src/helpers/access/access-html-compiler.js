#!/usr/bin/env node
var Handlebars = require("handlebars")
var path = require("path")
var fs = require("fs")
var program = require("commander")

// Package path
var packagePath = path.join(__dirname, "..", "..", "..", "..", "package.json")

// Check if file exists
function fileExists(packagePath) {
  try {
    return fs.statSync(packagePath).isDirectory()
  } catch (e) {
    return false
  }
}

// Pull in package json
var packageInfo = !fileExists(packagePath) ? require(packagePath) : null

const HTML_HEADER_PARTIAL = path.join(
  __dirname,
  "partials/html-header.handlebars"
)
const HTML_FOOTER_PARTIAL = path.join(
  __dirname,
  "partials/html-footer.handlebars"
)
const SERVICE_HEADER_PARTIAL = path.join(
  __dirname,
  "partials/service-header.handlebars"
)
const SERVICE_CONTENT_PARTIAL = path.join(
  __dirname,
  "partials/service-content.handlebars"
)
const REQUEST_CONTENT_PARTIAL = path.join(
  __dirname,
  "partials/request-content.handlebars"
)
const PENDING_CONTENT_PARTIAL = path.join(
  __dirname,
  "partials/pending-content.handlebars"
)

program
  .usage("-d <data-file> -t <template-file> [-o <output-file>]")
  .option("-d,--data <data-file>", "The JSON file with the data")
  .option(
    "-t,--template <template-file>",
    "The Handlebars file with the template"
  )
  .option(
    "-o,--output <output-file>",
    "An output file; will write to stdout if omitted"
  )
  .parse(process.argv)

if (!program.data || !program.template) {
  program.help()
}

function registerPartials() {
  Handlebars.registerPartial(
    "html-header",
    fs.readFileSync(HTML_HEADER_PARTIAL).toString()
  )
  Handlebars.registerPartial(
    "html-footer",
    fs.readFileSync(HTML_FOOTER_PARTIAL).toString()
  )
  Handlebars.registerPartial(
    "service-header",
    fs.readFileSync(SERVICE_HEADER_PARTIAL).toString()
  )
  Handlebars.registerPartial(
    "service-content",
    fs.readFileSync(SERVICE_CONTENT_PARTIAL).toString()
  )
  Handlebars.registerPartial(
    "request-content",
    fs.readFileSync(REQUEST_CONTENT_PARTIAL).toString()
  )
  Handlebars.registerPartial(
    "pending-content",
    fs.readFileSync(PENDING_CONTENT_PARTIAL).toString()
  )
}

function loadTemplate(filename) {
  return Handlebars.compile(fs.readFileSync(filename).toString())
}

function loadData(filename) {
  return JSON.parse(fs.readFileSync(filename).toString())
}

function compileHtml(template, data) {
  return template(data)
}

registerPartials()
var template = loadTemplate(program.template)
var data = loadData(program.data)
// Append version number to the feedback and contact us email subjects
data.feedbackEmail = packageInfo
  ? data.feedbackEmail + " - v" + packageInfo.version
  : data.feedbackEmail
data.contactUsEmail = packageInfo
  ? data.contactUsEmail + " - v" + packageInfo.version
  : data.contactUsEmail
var output = program.output
  ? fs.createWriteStream(program.output)
  : process.stdout
output.write(compileHtml(template, data))
