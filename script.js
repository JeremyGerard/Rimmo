var Process = require("geoscript/process").Process;
var catalog = require("geoserver/catalog");
var workspace = require("geoscript/workspace");
var Layer = require("geoscript/layer").Layer;
var Filter = require("geoscript/filter").Filter;
var GEOM = require("geoscript/geom").*;
var parser = require("geoscript/io/json");
var VIEWER = require("geoscript/viewer");


exports.process = new Process({
    title: "test script wps",
    description: "Process that buffers a geometry.",
    inputs: {
        max_supf: {
            type: "Double",
            title: "max_supf",
            description: "Maximal superficy."

    },
        min_supf: {
            type: "Double",
            title: "min_supf",
            description: "Minimal superficy."

        }/*,
        attribute: {
            type: "String",
            title: "attribute",
            description: "The element modifie"

        },
        myLayer: {
            type: "String",
            title: "myLayer",
            description: "The map"
        }*/

    },

    outputs: {
        result: {
            type: "FeatureCollection",
            title: "Result",
            description: "Filtered map"
        }
    },
    run: function (inputs) {



        var p = catalog.getVectorLayer("business:PARCELLE");

        var filtre = Filter("SUPF BETWEEN "+inputs.min_supf+" AND "+inputs.max_supf);
        var mapF = p.query(filtre);

        //var json = mapF.json;
        return {result: mapF };
    }
});
