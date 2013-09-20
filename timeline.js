$.getJSON( "timeline.json", function( data ) {
    var nodes = [],
        projectName = data.projectName;

    $.each( data.timeline, function( i, item ) {
        var stamp = item.stamp,
            content = item.content,
            linkName = item.linkName,
            linkUrl = item.linkUrl,
            link = "";

        if(linkName){
            link = "<a href='"+linkUrl+"' title='"+linkName+"' >"+linkName+"</a>";
        }   

        nodes.push( "<li class='tl-node'><div class='tl-stamp'>"+stamp+"</div><div class='tl-content'>"+content+"</div>"+link+"</li>" );
    });

    if(projectName.length > 0) {
        $("h1").html(projectName);
    }
    $("ol.timeline").html( nodes );
});            