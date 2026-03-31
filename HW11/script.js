$(document).ready(function () {
    $("button").click(function () {
        
        $.getJSON("ocean.json", function (data) {
            
            const container = $("#ocean-data");
            container.empty();

            data.oceans.forEach(ocean => {
                const oceanInfo = `
                    <div class="ocean">
                        <h2>${ocean.name}</h2>
                        <p><strong>Area:</strong> ${ocean.area_km2.toLocaleString()} km²</p>
                        <p><strong>Average Depth:</strong> ${ocean.avg_depth_m} meters</p>
                        <p><strong>Max Depth:</strong> ${ocean.max_depth_m} meters</p>
                        <p><strong>Max Depth Location:</strong> ${ocean.max_depth_location}</p>
                        <p><strong>Bordering Continents:</strong> ${ocean.bordering_continents.join(", ")}</p>
                    </div>
                `;
                
                container.append(oceanInfo);
            });


        }).fail(function () {
            alert("Failed to load ocean data.");
        });


        $.fn.changeBackgroundColor = function (color) {
            this.css("background-color", color);
            return this; 
        };

        $("body").changeBackgroundColor("rgb(157, 191, 224)");

    });

});


