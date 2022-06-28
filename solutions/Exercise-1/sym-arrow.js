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
        Width: 80
      }
    },
    visObjectType: symbolVis
  }

  symbolVis.prototype.init = function (scope, elem) { }

  PV.symbolCatalog.register(definition);
}(window.PIVisualization));