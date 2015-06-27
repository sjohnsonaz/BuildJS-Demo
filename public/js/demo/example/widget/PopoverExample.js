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

			var button = build.widget.popover.Popover.create();

			this.addChild(button);
		}
	});
});