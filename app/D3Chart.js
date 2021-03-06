import * as d3 from 'd3';
import react from 'react';

const datarr = [{'name': 'bob', 'points': 9},
{'name': 'tina', 'points':23},
{'name': 'josh', 'points':27},
{'name': 'clint', 'points':11},
{'name': 'peter', 'points':32}]
const data = [10,15,20,25,30]

const MARGINS = { TOP: 12, BOTTOM: 20, LEFT: 10, RIGHT: 5}
const WIDTH = 640 - MARGINS.LEFT - MARGINS.RIGHT
const HEIGHT = 480 - MARGINS.TOP - MARGINS.BOTTOM

export default class D3Chart{
    constructor(element){
        var svg= d3.select(element)
        .append("svg")
        .attr("width",WIDTH + MARGINS.LEFT + MARGINS.RIGHT)
        .attr("height",HEIGHT + MARGINS.TOP + MARGINS.BOTTOM)

        //d3.json(url).then(data => {
        // })

        const y = d3.scaleLinear().domain([d3.min(datarr,d=>d.points),d3.max(datarr,d=>d.points)]).range([HEIGHT,0])
        const x = d3.scaleBand().domain(datarr.map(d=>d.name)).range([0,WIDTH]).padding(0.4)
        const xAxisCall = d3.axisBottom(x)
        const yAxisCall = d3.axisLeft(y)

        svg.append("g")
        .attr("transform",`translate(0, ${HEIGHT})`).call(xAxisCall)
        svg.append("g").call(yAxisCall)

        const rectangles = svg.selectAll("rect").data(datarr)

        rectangles.enter().append("rect")
            .attr("x", d=> x(d.name))
            .attr("y", d => HEIGHT - y(d.points))
            .attr("width",x.bandwidth )
            .attr("height",d=>y(d.points))
            .attr("fill","blue")

        ////////static range
        //const rectangles = svg.selectAll("rect").data(data)

        // rectangles.enter().append("rect")
        //     .attr("x", (d,i)=>i*100 )
        //     .attr("y",0)
        //     .attr("width",25 )
        //     .attr("height",d=>d)
        //     .attr("fill","red")

        ////////static data
        // data.forEach((d,i) => {
        //     svg.append('rect')
        //     .attr("x", i*100 )
        //     .attr("y",0)
        //     .attr("width",25 )
        //     .attr("height",d*10)
        //     .attr("fill","blue")
        // });


    }
}