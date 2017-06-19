/**
 * Created by tian on 2016/12/18.
 */
var app = angular.module('myApp',[]);
app.controller('ticketCtrl',function ($scope,$window) {
    updateScrollHandler();
    function winScrollHandler(){
        var offsetY = $('#nav').offset().top;
        console.log("导航距离顶部的距离"+offsetY);
        var $$window = $($window);
        var scrollTop = Math.round($$window.scrollTop());
        console.log("滚动距离"+scrollTop);
        offsetY = Math.round(offsetY);
        $scope.navBarFixed = false;
        if (scrollTop >= offsetY) {
            if (!$scope.navBarFixed) {
                $scope.navBarFixed = true;
                $scope.$apply();
            }
        } else if(scrollTop<=292 && offsetY){
            console.log("xsnic dsic ");

            if ($scope.navBarFixed) {
                console.log("xsnic dsic ");
                $scope.navBarFixed = false;
                $scope.$apply();
            }
        }
    }
    function updateScrollHandler() {
        console.log("你好");
        $($window).bind('scroll', winScrollHandler);
    }
});