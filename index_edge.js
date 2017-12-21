/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_wrapper} > div:nth-child(2) > article:nth-child(1)": [
                ["transform", "translateX", '-280px']
            ],
            "${_top} > h1:nth-child(2)": [
                ["style", "opacity", '0.000000']
            ],
            "${_top} > a:nth-child(1) > img:nth-child(1)": [
                ["transform", "translateX", '-100px'],
                ["style", "opacity", '1']
            ],
            "${_top} > h4:nth-child(3)": [
                ["style", "opacity", '0.000000']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_top} > h1:nth-child(2)", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000 },
                { id: "eid8", tween: [ "transform", "${_top} > a:nth-child(1) > img:nth-child(1)", "translateX", '0px', { fromValue: '-100px'}], position: 0, duration: 1000 },
                { id: "eid18", tween: [ "transform", "${_wrapper} > div:nth-child(2) > article:nth-child(1)", "translateX", '0px', { fromValue: '-280px'}], position: 0, duration: 1000 },
                { id: "eid13", tween: [ "style", "${_top} > h4:nth-child(3)", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 1000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-698754447");
