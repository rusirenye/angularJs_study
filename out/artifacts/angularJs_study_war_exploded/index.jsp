<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script src="common/angular-1.7.3/angular.js"></script>
</head>
<body>

<div ng-app="myApp" ng-controller="myController">
    <input type="text" ng-model="exp1" />
    <input type="button" value="compute" ng-click="compute(exp1)"/>
    <input type="text"  ng-model="exp2"/>
    <span ng-bind="$eval(exp2)"></span>
</div>
<script type="text/javascript">
    angular.module('myApp', []).controller('myController', function ( $scope,$window) {
        $scope.exp1=20;
        $scope.exp2='20+1|number:0';
        $scope.compute=function (expr) {
            $window.alert(parseInt(expr)+1);
            console.log(parseInt(expr)+1);
        }
    });
</script>
</body>
</html>