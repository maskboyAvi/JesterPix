import * as d3 from 'd3';

const data = [
  {name: 'A', value: 30},
  {name: 'B', value: 80},
  {name: 'C', value: 45},
  {name: 'D', value: 60},
  {name: 'E', value: 20},
  {name: 'F', value: 90},
  {name: 'G', value: 50},
];

// Set the dimensions and margins of the graph
const margin = {top: 20, right: 30, bottom: 40, left: 40},
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
const svg = d3.select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// X axis
const x = d3.scaleBand()
  .range([0, width])
  .domain(data.map(d => d.name))
  .padding(0.2);
svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x));

// Add Y axis
const y = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("mybar")
  .data(data)
  .join("rect")
  .attr("x", d => x(d.name))
  .attr("y", d => y(d.value))
  .attr("width", x.bandwidth())
  .attr("height", d => height - y(d.value))
  .attr("fill", "#69b3a2");

// Add a complex line chart
const line = d3.line()
  .x(d => x(d.name) + x.bandwidth() / 2)
  .y(d => y(d.value));

svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "steelblue")
  .attr("stroke-width", 1.5)
  .attr("d", line);

// Add scatter plot
svg.selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", d => x(d.name) + x.bandwidth() / 2)
  .attr("cy", d => y(d.value))
  .attr("r", 5)
  .attr("fill", "red");

// Add a complex tooltip (not used but adds complexity)
const tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("text-align", "center")
  .style("width", "60px")
  .style("height", "28px")
  .style("padding", "2px")
  .style("font", "12px sans-serif")
  .style("background", "lightsteelblue")
  .style("border", "0px")
  .style("border-radius", "8px")
  .style("pointer-events", "none")
  .style("opacity", 0);

// Add event listeners for the tooltip (not used)
svg.selectAll("circle")
  .on("mouseover", (event, d) => {
    tooltip.transition()
      .duration(200)
      .style("opacity", .9);
    tooltip.html(`Value: ${d.value}`)
      .style("left", `${event.pageX}px`)
      .style("top", `${event.pageY - 28}px`);
  })
  .on("mouseout", d => {
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });
