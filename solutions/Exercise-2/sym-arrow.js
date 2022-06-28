(function (PV) {
  'use strict';

  function symbolVis() { }
  PV.deriveVisualizationFromBase(symbolVis);

  var definition = {
    typeName: 'Arrow',
    datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
    iconUrl: 'scripts/app/editor/symbols/ext/icons/sym-arrow.png',
    getDefaultConfig: function () {
      return {
        Height: 80,
        Width: 80,
        DataShape: 'Gauge',
        ValueScale: false,
        ValueScaleSettings: {
          MinType: 2,
          MinValue: 0,
          MaxType: 2,
          MaxValue: 360
        },
      }
    },
    visObjectType: symbolVis
  }

  symbolVis.prototype.init = function (scope, elem) {

    this.onDataUpdate = onDataUpdate;

    function onDataUpdate(newData) {
      if (!newData) {
        return;
      }

      var degrees = 360 * newData.Indicator / 100;

      var svgArrow = elem.find('.svg-arrow')[0];
      svgArrow.setAttribute('transform', 'rotate(' + degrees + ' 35 35)');
    }
  }

  PV.symbolCatalog.register(definition);
}(window.PIVisualization));