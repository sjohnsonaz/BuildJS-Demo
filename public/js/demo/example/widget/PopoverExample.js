/**
 * @class demo.example.widget.PopoverExample
 * @extends build.ui.Container
 */
Build('demo.example.widget.PopoverExample', [ 'build::build.ui.Container', 'build::build.ui.element.Header2', 'build::build.ui.element.Paragraph', 'build::build.form.input.Button', 'build::build.widget.popover.Popover' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Container',
		$constructor : function PopoverExample() {
			$super(this)();
			var header0 = build.ui.element.Header2.create('Popovers');
			this.addChild(header0);

			var button = document.createElement('button');
			button.className = 'popover-trigger';
			button.innerHTML = 'Popover Button';

			var popover = build.widget.popover.Popover.create();
			popover.children.push('Popover Content');
			popover.popoverPosition = 'right';

			button.appendChild(popover.element);

			this.addChild(button);
		}
	});
});