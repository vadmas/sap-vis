// add links
    var links = d3.select("#plot").selectAll(".link")
        .data(links)
        .attr("d", linkArc);
    links.enter()
        .append("path")
        .attr("class", function(d){return "link " + d.source.name + " " + d.target.name})
        .attr("id", function(d){return ""})
        .style("opacity",1)
        .style("stroke", function(d) {return color(d.source.group)})
        .attr("d", linkArc)
        .attr("strokewidth",1.75);
    links.exit().remove();


function linkArc(d) {
      var start = x(d.source.id);
      var end   = x(d.target.id);
      var dx = start  end,
          dr = 0.55*dx
      if (dx < 0){
        return "M" + start + "," + yfixed + "A" + dr + "," + dr + " 0 0,1 " + end + "," + yfixed;
      }
      else{
        return "M" + end + "," + yfixed + "A" + dr + "," + dr + " 0 0,1 " + start + "," + yfixed;
      }
    }

    // function drawCanvas() {
    // // clear canvas
    //   canvas.clearRect(0, 0, width, height);

    //   var elements = dataContainer.selectAll("custom");
    //   elements.each(function(d) {

    //     var node = d3.select(this);
    //     var start = +node.attr("x1");
    //     var end   = +node.attr("x2");
    //     var rel_dist = Math.abs(start  end) / width; 
    //     var ycontrol = yfixed * (1  rel_dist);
    //     var center = (start + end)/2;

    //     canvas.beginPath();
    //     canvas.moveTo(start,yfixed)
    //     canvas.quadraticCurveTo(center, ycontrol, end, yfixed);
    //     canvas.strokeStyle = color(d.source.group);
    //     canvas.stroke();
    //   });
    // }
// dataBinding.transition().duration(2000)
            //     .attr("x1",function(d){ return x(d.source.id)})
            //     .attr("x2",function(d){ return x(d.target.id)})
            // d3.timer(drawCanvas);
            // 
            //    // dataBinding
        //     .attr("x1",function(d){ return x(d.source.id)}) 
        //     .attr("x2",function(d){ return x(d.target.id)});
        //     
        //     
        //     

    // Do we want to redraw the nodes so they aren't buried? 

    // var nodes = d3.select("#highlight-node-layer").selectAll(".highlight")
    //     .data(nodedata);
    // nodes.enter()
    //     .append("circle")
    //     .attr("class", "highlight")
    //     .style("fill",   function(d) { return dark_color[d.group]; })
    //     .style("stroke", "grey")
    //     .attr("cx", function(d) { return x(d.id);})
    //     .attr("cy", yfixed )
    //     .attr("r",  function(d){return value(d) + 2;});
    // nodes.exit().remove();

  .on("click",function(d){
            console.log(d);
            // d3.selectAll("circle:not(."+d.id+")")
            //     .transition()
            //     .duration(200)
            //     .style("fill","lightgrey");
            // d3.selectAll(".link:not(."+d.id+")")
            //     .transition()
            //     .duration(200)
            //     .style("stroke-width",1.75)
            //     .style("stroke-opacity",0.75)
            //     .style("stroke","lightgrey");
            // d3.selectAll("circle."+d.id)
            //     .transition()
            //     .duration(200)
            //     .style("fill",function(d) {return color[d.group];});
            // d3.selectAll(".link."+d.id)
            //     .transition()
            //     .duration(200)
            //     .style("stroke-width",3)
            //     .style("stroke-opacity",1)
            //     .style("stroke", function(d) {return color[d.source.group];});
        })



t.selectAll("circle")
        // .delay(function(d,i){return i*0.5;})
        .attr("cx", function(d) { return x(d.id); });
        // .each("end", function(d){
        //     if(options.show_links && d.parents){
        //         d.parents.forEach(function(c){
        //             drawArc(x(d.id),x(c.id),color[c.group]);
        //         });
        //     }
        // }); 
        // 
        // 

<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul class="nav navbar-nav">
                                <li class="active">
                                    <a href="#">Link</a>
                                </li>
                                <li>
                                    <a href="#">Link</a>
                                </li>
                                <li class="dropdown">
                                     <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="#">Action</a>
                                        </li>
                                        <li>
                                            <a href="#">Another action</a>
                                        </li>
                                        <li>
                                            <a href="#">Something else here</a>
                                        </li>
                                        <li class="divider">
                                        </li>
                                        <li>
                                            <a href="#">Separated link</a>
                                        </li>
                                        <li class="divider">
                                        </li>
                                        <li>
                                            <a href="#">One more separated link</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <input type="text" class="span2" value="" data-slider-min="-20" data-slider-max="20" data-slider-step="1" data-slider-value="-14" data-slider-orientation="vertical" data-slider-selection="after"data-slider-tooltip="hide">
                            <form class="navbar-form navbar-left" role="search">
                                <div class="form-group">
                                    <input type="text" class="form-control">
                                </div> 
                                <button type="submit" class="btn btn-default">
                                    Submit
                                </button>
                            </form>
                            <ul class="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#">Link</a>
                                </li>
                                <li class="dropdown">
                                     <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a href="#">Action</a>
                                        </li>
                                        <li>
                                            <a href="#">Another action</a>
                                        </li>
                                        <li>
                                            <a href="#">Something else here</a>
                                        </li>
                                        <li class="divider">
                                        </li>
                                        <li>
                                            <a href="#">Separated link</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>



<!-- <div class="form-group ">
                        <label for="sortSelect" class="col-sm-2 control-label text-center">Sort</label>
                        <div class="col-sm-10">
                         <select class="form-control input-medium" id="sortSelect">
                              <option>Name</option>
                              <option>Degree</option>
                              <option>Value</option>
                         </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="orderSelect" class="col-sm-2 control-label text-center">Order</label>
                        <div class="col-sm-10">
                         <select class="form-control input-medium" id="orderSelect">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                         </select>
                        </div>
                    </div> -->