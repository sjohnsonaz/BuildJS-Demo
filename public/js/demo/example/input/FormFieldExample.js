/**
 * @class demo.example.input.FormFieldExample
 * @extends build.ui.Container
 */
Build('demo.example.input.FormFieldExample', [ 'build::build.ui.Container', 'build::build.ui.element.Header2', 'build::build.ui.element.Paragraph', 'build::build.form.option.Select', 'build::build.form.input.CheckBox',
		'build::build.form.input.RadioButton' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		$constructor : function FormFieldExample() {
			$super(this)();
			var header0 = build.ui.element.Header2.create('Form Fields');
			this.addChild(header0);

			var select = build.form.option.Select.create();
			select.size = 4;
			select.multiple = true;
			select.addOption('test', 'test');
			select.addOption('thing', 'thing');
			this.addChild(select);

			var checkbox = build.form.input.CheckBox.create('test', 'test', 'test');
			this.addChild(checkbox);
			var radiobutton = build.form.input.RadioButton.create('test', 'test', 'test');
			this.addChild(radiobutton);
		}
	});
});