$("#add-tabs a").click(function(t){t.preventDefault(),$(this).tab("show")}),$('#add-tabs a[href="#tab-music"]').tab("show"),$(".animated-switch").bootstrapSwitch(),$(".animated-switch").bootstrapSwitch("setAnimated",!0),$(".close").click(function(){$(".modal-backdrop").remove()});