angular.module('componentConfigApp', [])
.service('sampleData', ['$q', function($q) {
    this.getData = function() {
        return $q.resolve([
            {
                from: new Date(2016, 5, 7, 8, 0, 0),
                until: new Date(2016, 5, 7, 16, 30, 0),
                description: "Angular JS Training Tag 1" 
            },
            {
                from: new Date(2016, 5, 7, 8, 30, 0),
                until: new Date(2016, 5, 7, 17, 00, 0),
                description: "Angular JS Training Tag 2" 
            }
        ]);
    }
}])
.component('myGrid', {
    transclude: true,
    controller: ['sampleData', '$parse', function(sampleData, $parse) {
        this.columns = [];
        this.rows = [];
        var that = this;
        sampleData.getData()
            .then(function(data){
                that.rows = data;
            });

        this.addColumn = function(column) {
            column.valueFunc = $parse(column.content);
            this.columns.push(column);
        }
    }],
    templateUrl: 'mygrid.html'
})
.component('myGridColumn',{
  transclude: true,
  require: {
    myGridCtrl: '^^myGrid'
  },
  bindings: {
    content: '@',
    header: '@'
  },
  controller: function() {
    this.$onInit = function() {
      this.myGridCtrl.addColumn(this);
    };
  },
})