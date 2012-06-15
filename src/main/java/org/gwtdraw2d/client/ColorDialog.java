package org.gwtdraw2d.client;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Wrapper for draw2d.ColorDialog.
 * 
 * @author lautaro.brasseur TODO: Start coding the wrapper!.
 */
public class ColorDialog extends Dialog {
	public ColorDialog(JavaScriptObject aJsObj) {
		super(aJsObj);
		// TODO Auto-generated constructor stub
	}

	/**
	 * {@inheritDoc}
	 */
	protected native JavaScriptObject create() /*-{
		return new $wnd.draw2d.ColorDialog();
	}-*/;
}
