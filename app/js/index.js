/**
 * Created by tian on 2016/12/15.
 */
var app = angular.module('myApp',[]);
 //    .run(['$anchorScroll', function($anchorScroll) {
 //
 //        $anchorScroll.yOffset = 100;
 //    }])
 // .controller('myCtrl', ['$scope', '$location', '$anchorScroll',
 //    function ($scope, $location, $anchorScroll) {
 //        $scope.gotointroduce = function() {
 //
 //            // 将location.hash的值设置为
 //            // 你想要滚动到的元素的id
 //            $location.hash('introduce');
 //
 //            // 调用 $anchorScroll()
 //            $anchorScroll();
 //            console.log("介绍");
 //
 //        };
 //        $scope.gotoguest = function() {
 //
 //            // 将location.hash的值设置为
 //            // 你想要滚动到的元素的id
 //            $location.hash('guest');
 //
 //            // 调用 $anchorScroll()
 //            $anchorScroll();
 //            console.log("嘉宾");

        //
        // };
        // $scope.gotofair = function() {
        //
        //     // 将location.hash的值设置为
        //     // 你想要滚动到的元素的id
        //     $location.hash('fair');
        //
        //     // 调用 $anchorScroll()
        //     $anchorScroll();
        //
        // };
        // $scope.gotoschedule = function() {
        //
        //     // 将location.hash的值设置为
        //     // 你想要滚动到的元素的id
        //     $location.hash('schedule');
        //
        //     // 调用 $anchorScroll()
        //     $anchorScroll();
        //
        // };
        // $scope.gotodynamic = function() {
        //
        //     // 将location.hash的值设置为
        //     // 你想要滚动到的元素的id
        //     $location.hash('dynamic');
        //
        //     // 调用 $anchorScroll()
        //     $anchorScroll();
        //
        // };
        // $scope.gotoinstitutions = function() {
        //
        //     // 将location.hash的值设置为
        //     // 你想要滚动到的元素的id
        //     $location.hash('institutions');
        //
        //     // 调用 $anchorScroll()
        //     $anchorScroll();
        //
        // };
        // $scope.gototraffic = function() {
        //
        //     // 将location.hash的值设置为
        //     // 你想要滚动到的元素的id
        //     $location.hash("traffic");
        //
        //     // 调用 $anchorScroll()
        //     $anchorScroll();
        //
        // };
    //}])
app.controller('myCtrl', function($scope, $http,$window,$interval) {
    $http.get("Data.json")
        .success(function(response) {
            $scope.data = response;
            var lists = response.dynamic;
            $scope.first = lists.slice(0,9);
            $scope.second = lists.slice(9,18);

        });
    $scope.show=true;
    // 点击关注公众号
    $scope.state = true;
    $scope.focus = function () {
        $scope.state = false;
    };
    $scope.close=function () {
        $scope.state = true;
    };
    $scope.switch = false;
    $interval(function(){
        if ($($window).width() <768) {
            console.log($($window).width());
            $scope.switch = true;
        }
        console.log("da"+$($window).width());
    },1000);



    // $scope.$watch('$($window).width()',  function(newValue, oldValue) {
    //     if (newValue === oldValue) {
    //         Switch();
    //         console.log(newValue);
    //     }
    // });

});