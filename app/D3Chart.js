import * as d3 from 'd3';
import react from 'react';

const data = [10,15,20,25,30]

export default class D3Chart{
    constructor(element){
        var svg= d3.select(element)
        .append("svg")
        .attr("width",500)
        .attr("height",500)

        const rectangles = svg.selectAll("rect").data(data)

        rectangles.enter().append("rect")
            .attr("x", (d,i)=>i*100 )
            .attr("y",0)
            .attr("width",25 )
            .attr("height",d=>d)
            .attr("fill","red")


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