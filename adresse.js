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
        adresse: {
            type: "String",
            title: "adresse",
            description: "recherche d'adresse"

        }
    },

    outputs: {
        result: {
            type: "FeatureCollection",
            title: "Result",
            description: "Filtered map"
        }
    },
    run: function (inputs) {



        var p = catalog.getVectorLayer("business:rva_adresses");


        var filtre = Filter("ADR_CPLETE ='"+inputs.adresse+"'");
        var mapF = p.query(filtre);

        //var json = mapF.json;
        return {result: mapF };
    }
});
