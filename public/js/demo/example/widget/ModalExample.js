/**
 * @class demo.example.widget.ModalExample
 * @extends build.ui.Container
 */
Build('demo.example.widget.ModalExample', [ 'build::build.ui.Container', 'build::build.ui.element.Header2', 'build::build.ui.element.Paragraph', 'build::build.widget.modal.Modal', 'build::build.ui.Text', 'build::build.form.input.Button' ], function(
		$define, $super) {
	$define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		$constructor : function ModalExample() {
			$super(this)();
			var header0 = build.ui.element.Header2.create('Modals');
			this.addChild(header0);

			var modal = build.widget.modal.Modal.create();

			var button0 = build.form.input.Button.create('Open Modal');
			var button1 = build.form.input.Button.create('Close Modal');

			function toggleModal() {
				modal.open = !modal.open;
			}

			button0.addEventListener('click', toggleModal);
			button1.addEventListener('click', toggleModal);
			button1.classList.add('modal-control');
			var modalHeader = document.createElement('div');
			modalHeader.className = 'modal-header';

			this.addChild(button0);
			modalHeader.appendChild(button1.element);
			modal.addChild(modalHeader);
			modal.addChild(build.ui.element.Paragraph.create('\
				<h1>Modal Content</h1>\
				This is a Modal.  It allows us to create content on top of the main page.  It scrolls independently of the other content.\
				<br /><br /><br /><br /><br /><br />\
				We can make the content extra long!\
			'));
			this.addChild(modal);
		}
	});
});