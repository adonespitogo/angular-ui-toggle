'use strict';

/*
* Toggle switch directive.
*
*
*/

var uiToggle = {

	bindings: {
		class: '@?',
		disabled: '<?',
		id: '@?',
		name: '<?',
		ngChange: '&?',
		ngDisabled: '=?',
		ngModel: '='
	},

	controller: function controller($scope, $attrs) {
		var $ctrl = this;

		$ctrl.toggleState = function () {
			if ($ctrl.ngChange) $scope.$eval($ctrl.ngChange);
		};
	},

	template: function template($attrs) {
		return '\n\t\t\t<span class="ui-toggle"\n\t\t\t\tng-class="$ctrl.class"\n\t\t\t\tng-click="$ctrl.toggleState()"\n\t\t\t\t>\n\t\t\t\t<input type="checkbox"\n\t\t\t\t\t' + ('id' in $attrs && 'id="' + $attrs.id + '"') + '\n\t\t\t\t\t' + ('name' in $attrs && 'name="' + $attrs.name + '"') + '\n\t\t\t\t\tng-model="$ctrl.ngModel"\n\t\t\t\t\tng-disabled="$ctrl.ngDisabled || ' + ('disabled' in $attrs) + '"\n\t\t\t\t\t>\n\t\t\t\t<div class="ui-toggle__track"></div>\n\t\t\t\t<div class="ui-toggle__thumb"></div>\n\t\t\t</span>';
	}

};

angular.module('uiToggle', []).component('uiToggle', uiToggle);