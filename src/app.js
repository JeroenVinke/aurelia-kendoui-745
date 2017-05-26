import {InlineViewStrategy} from 'aurelia-templating';

export class BasicUse {
  datasource = new kendo.data.DataSource({
    data: [{
      'foo': 'abcd'
    }]
  })
  
  getViewStrategy() {
    let fields = [{key: 'foo', width: 500}];

    let markup = '<template>' +
      '<require from="aurelia-kendoui-bridge/grid/grid"></require>' +
      '<require from="aurelia-kendoui-bridge/grid/col"></require>' +
      '<require from="aurelia-kendoui-bridge/common/template"></require>' +
      '<ak-grid k-sortable.bind="true" k-reorderable.bind="true" view-model.ref="gridVM" k-pageable.bind="{ refresh: false, pageSizes: true, buttonCount: 10 }" ' +
      'k-data-source.bind="datasource" k-scrollable.bind="true" k-selectable.bind="true" k-groupable.bind="groupable" k-on-change.trigger="selectRow($event.detail)" k-editable.bind="model.isDetail" k-excel.bind="{ allPages: true }" k-on-excel-export.trigger="excelExport($event.detail)">';
    
    fields.forEach(f => {
      markup += '<ak-col k-title="' + f.label + '" k-field="' + f.key + '" k-width="' + f.width + '" >';
      markup += '<ak-template>${' + f.key + '}</ak-template>'
      markup += '</ak-col>'
    });
    markup += '</ak-grid></busy-indicator></template>';
    return new InlineViewStrategy(markup);
  }
}