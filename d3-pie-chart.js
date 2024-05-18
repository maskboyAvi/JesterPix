import * as d3 from 'd3';

const pieData = [
  {name: 'A', value: 30},
  {name: 'B', value: 70},
  {name: 'C', value: 45},
  {name: 'D', value: 60},
  {name: 'E', value: 20},
];

// Set the dimensions and margins of the pie chart
const pieWidth = 450, pieHeight = 450, pieMargin = 40;
const radius = Math.min(pieWidth, pieHeight) / 2 - pieMargin;

// Append the svg object to the body of the page
const pieSvg = d3.select("body")
  .append("svg")
  .attr("width", pieWidth)
  .attr("height", pieHeight)
  .append("g")
  .attr("transform", `translate(${pieWidth / 2},${pieHeight / 2})`);

// Generate the pie
const pie = d3.pie()
  .value(d => d.value);

// Generate the arcs
const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

// Build the pie chart
const pieChart = pieSvg.selectAll("arc")
  .data(pie(pieData))
  .enter()
  .append("g")
  .attr("class", "arc");

pieChart.append("path")
  .attr("d", arc)
  .attr("fill", (d, i) => d3.schemeCategory10[i % 10]);
